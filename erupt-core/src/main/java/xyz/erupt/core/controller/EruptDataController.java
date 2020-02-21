package xyz.erupt.core.controller;import com.google.gson.Gson;import com.google.gson.JsonElement;import com.google.gson.JsonObject;import lombok.extern.java.Log;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.web.bind.annotation.*;import xyz.erupt.annotation.fun.DataProxy;import xyz.erupt.annotation.fun.OperationHandler;import xyz.erupt.annotation.sub_erupt.Drill;import xyz.erupt.annotation.sub_erupt.RowOperation;import xyz.erupt.core.annotation.EruptRouter;import xyz.erupt.core.bean.*;import xyz.erupt.core.constant.RestPath;import xyz.erupt.core.exception.EruptNoLegalPowerException;import xyz.erupt.core.service.CoreService;import xyz.erupt.core.util.*;import java.io.Serializable;import java.util.Collection;import java.util.Map;/** * Erupt 对数据的增删改查 * * @author liyuepeng * @date 9/28/18. */@RestController@RequestMapping(RestPath.ERUPT_DATA)@Logpublic class EruptDataController {    @Autowired    private Gson gson;    @PostMapping("/table/{erupt}")    @EruptRouter(authIndex = 2)    @ResponseBody    public Page getEruptData(@PathVariable("erupt") String eruptName, @RequestBody JsonObject searchCondition) {        return this.getEruptData(CoreService.getErupt(eruptName),                searchCondition.remove(Page.PAGE_INDEX_STR).getAsInt(),                searchCondition.remove(Page.PAGE_SIZE_STR).getAsInt(),                searchCondition.remove(Page.PAGE_SORT_STR).getAsString(),                searchCondition, null);    }    private static final int maxPageSize = 500;    private Page getEruptData(EruptModel eruptModel, int pageIndex, int pageSize, String sort,                              JsonObject searchCondition, String customCondition) {        if (eruptModel.getErupt().power().query()) {            if (pageSize > maxPageSize) {                pageSize = maxPageSize;            }            JsonObject legalJsonObject = EruptUtil.geneEruptSearchCondition(eruptModel, searchCondition);            for (Class<? extends DataProxy> proxy : eruptModel.getErupt().dataProxy()) {                EruptSpringUtil.getBean(proxy).beforeFetch(legalJsonObject);            }            Page page = AnnotationUtil.getEruptDataProcessor(eruptModel.getClazz())                    .queryList(eruptModel, new Page(pageIndex, pageSize, sort),                            EruptUtil.geneEruptSearchCondition(eruptModel, legalJsonObject), customCondition);            for (Map<String, Object> map : page.getList()) {                DataHandlerUtil.convertDataToEruptView(eruptModel, map);            }            for (Class<? extends DataProxy> proxy : eruptModel.getErupt().dataProxy()) {                EruptSpringUtil.getBean(proxy).afterFetch(page.getList());            }            return page;        } else {            throw new EruptNoLegalPowerException();        }    }    @RequestMapping("{erupt}/drill/{code}/{val}")    @EruptRouter(authIndex = 1)    public Page drill(@PathVariable("erupt") String eruptName,                      @PathVariable("code") String code,                      @PathVariable("val") String val,                      @RequestBody JsonObject searchCondition) {        EruptModel eruptModel = CoreService.getErupt(eruptName);        for (Drill drill : eruptModel.getErupt().drills()) {            if (drill.code().equals(code)) {                return getEruptData(                        CoreService.getErupt(drill.eruptClass().getSimpleName()),                        searchCondition.remove(Page.PAGE_INDEX_STR).getAsInt(),                        searchCondition.remove(Page.PAGE_SIZE_STR).getAsInt(),                        searchCondition.remove(Page.PAGE_SORT_STR).getAsString(),                        searchCondition, String.format("%s = '%s' ", drill.joinColumn(), val));            }        }        throw new EruptNoLegalPowerException();    }    @GetMapping("/tree/{erupt}")    @ResponseBody    @EruptRouter(authIndex = 2)    public Collection<TreeModel> getEruptTreeData(@PathVariable("erupt") String eruptName) {        EruptModel eruptModel = CoreService.getErupt(eruptName);        if (eruptModel.getErupt().power().query()) {            Collection<TreeModel> collection = AnnotationUtil.getEruptDataProcessor(eruptModel.getClazz()).queryTree(eruptModel);            for (Class<? extends DataProxy> proxy : eruptModel.getErupt().dataProxy()) {                EruptSpringUtil.getBean(proxy).afterFetch(collection);            }            return collection;        } else {            throw new EruptNoLegalPowerException();        }    }    @GetMapping("/{erupt}/{id}")    @ResponseBody    @EruptRouter(authIndex = 1)    public Map<String, Object> getEruptDataById(@PathVariable("erupt") String eruptName, @PathVariable("id") String id) {        EruptModel eruptModel = CoreService.getErupt(eruptName);        if (eruptModel.getErupt().power().edit() || eruptModel.getErupt().power().viewDetails()) {            Object data = AnnotationUtil.getEruptDataProcessor(eruptModel.getClazz())                    .findDataById(eruptModel, EruptUtil.toEruptId(eruptModel, id));            for (Class<? extends DataProxy> proxy : eruptModel.getErupt().dataProxy()) {                EruptSpringUtil.getBean(proxy).editBehavior(data);            }            return EruptUtil.generateEruptDataMap(eruptModel, data);        } else {            throw new EruptNoLegalPowerException();        }    }    @PostMapping("/{erupt}/operator/{code}")    @ResponseBody    @EruptRouter(authIndex = 1)    public EruptApiModel execEruptOperator(@PathVariable("erupt") String eruptName, @PathVariable("code") String code,                                           @RequestBody JsonObject body) {        EruptModel eruptModel = CoreService.getErupt(eruptName);        for (RowOperation rowOperation : eruptModel.getErupt().rowOperation()) {            if (code.equals(rowOperation.code())) {                if (rowOperation.eruptClass() != void.class) {                    EruptModel erupt = CoreService.getErupt(rowOperation.eruptClass().getSimpleName());                    EruptApiModel eruptApiModel = EruptUtil.validateEruptValue(erupt, body.getAsJsonObject("param"));                    if (eruptApiModel.getStatus() == EruptApiModel.Status.ERROR) return eruptApiModel;                }                OperationHandler operationHandler = EruptSpringUtil.getBean(rowOperation.operationHandler());                JsonObject param = null;                if (!body.get("param").isJsonNull()) {                    param = body.getAsJsonObject("param");                }                if (!body.get("ids").isJsonNull()) {                    for (JsonElement id : body.getAsJsonArray("ids")) {                        Object obj = AnnotationUtil.getEruptDataProcessor(eruptModel.getClazz())                                .findDataById(eruptModel, EruptUtil.toEruptId(eruptModel, id.getAsString()));                        operationHandler.exec(obj, param);                    }                }                return EruptApiModel.successApi("执行成功", null);            }        }        throw new EruptNoLegalPowerException();    }    @GetMapping("/tab/tree/{erupt}/{tabFieldName}")    @ResponseBody    @EruptRouter(authIndex = 3)    public Collection<TreeModel> findTabTree(@PathVariable("erupt") String eruptName, @PathVariable("tabFieldName") String tabFieldName) {        EruptModel eruptModel = CoreService.getErupt(eruptName);        if (eruptModel.getErupt().power().viewDetails() || eruptModel.getErupt().power().edit()) {            return AnnotationUtil.getEruptDataProcessor(eruptModel.getClazz()).findTabTree(eruptModel, tabFieldName);        } else {            throw new EruptNoLegalPowerException();        }    }    // REFERENCE API    @PostMapping("/{erupt}/reference-table/{fieldName}")    @ResponseBody    @EruptRouter(authIndex = 1)    public Page getReferenceTable(@PathVariable("erupt") String eruptName,                                  @PathVariable("fieldName") String fieldName,                                  @RequestBody JsonObject searchCondition) {        EruptModel eruptModel = CoreService.getErupt(eruptName);        EruptFieldModel fieldModel = eruptModel.getEruptFieldMap().get(fieldName);        if (eruptModel.getErupt().power().edit()                || fieldModel.getEruptField().edit().search().value()) {            int pageIndex = searchCondition.remove(Page.PAGE_INDEX_STR).getAsInt();            int pageSize = searchCondition.remove(Page.PAGE_SIZE_STR).getAsInt();            String sort = searchCondition.remove(Page.PAGE_SORT_STR).getAsString();            EruptFieldModel eruptFieldModel = eruptModel.getEruptFieldMap().get(fieldName);            EruptModel eruptReferenceModel = CoreService.getErupt(eruptFieldModel.getFieldReturnName());            return this.getEruptData(eruptReferenceModel, pageIndex, pageSize, sort, searchCondition,                    AnnotationUtil.switchFilterConditionToStr(eruptFieldModel.getEruptField().edit().filter()));        } else {            throw new EruptNoLegalPowerException();        }    }    @GetMapping("/{erupt}/reference-tree/{fieldName}")    @ResponseBody    @EruptRouter(authIndex = 1)    public Collection<TreeModel> getReferenceTree(@PathVariable("erupt") String erupt,                                                  @PathVariable("fieldName") String fieldName,                                                  @RequestParam(value = "dependValue", required = false) Serializable dependValue) {        EruptModel eruptModel = CoreService.getErupt(erupt);        EruptFieldModel eruptFieldModel = eruptModel.getEruptFieldMap().get(fieldName);        if (eruptModel.getErupt().power().edit()                || eruptFieldModel.getEruptField().edit().search().value()) {            String dependField = eruptFieldModel.getEruptField().edit().referenceTreeType().dependField();            if (!"".equals(dependField)) {                if (null == dependValue) {                    throw new RuntimeException("请先选择" + eruptModel.getEruptFieldMap().get(dependField).getEruptField().edit().title());                } else {                    //TODO 代码过长，应该做优化                    dependValue = TypeUtil.typeStrConvertObject(dependValue,                            CoreService.getErupt(eruptFieldModel.getFieldReturnName()).getEruptFieldMap().get(eruptFieldModel.getEruptField()                                    .edit().referenceTreeType().dependColumn()).getField().getType().getSimpleName());                }            }            return AnnotationUtil.getEruptDataProcessor(eruptModel.getClazz()).getReferenceTree(eruptModel, fieldName, dependValue);        } else {            throw new EruptNoLegalPowerException();        }    }    @PostMapping("/validate-erupt/{erupt}")    @ResponseBody    @EruptRouter(authIndex = 2)    public EruptApiModel validateErupt(@PathVariable("erupt") String erupt, @RequestBody JsonObject data) {        EruptModel eruptModel = CoreService.getErupt(erupt);        Object obj = gson.fromJson(gson.toJson(data), eruptModel.getClazz());        for (Class<? extends DataProxy> proxy : eruptModel.getErupt().dataProxy()) {            EruptSpringUtil.getBean(proxy).beforeAdd(obj);        }        EruptApiModel eruptApiModel = EruptUtil.validateEruptValue(eruptModel, data);        eruptApiModel.setErrorIntercept(false);        eruptApiModel.setPromptWay(EruptApiModel.PromptWay.MESSAGE);        return eruptApiModel;    }}
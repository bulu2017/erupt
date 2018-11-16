package com.erupt.controller;

import com.erupt.annotation.fun.OperationHandler;
import com.erupt.annotation.sub_erupt.RowOperation;
import com.erupt.annotation.sub_erupt.Tree;
import com.erupt.constant.RestPath;
import com.erupt.dao.EruptJpaDao;
import com.erupt.dao.JpaDao;
import com.erupt.model.EruptModel;
import com.erupt.model.Page;
import com.erupt.model.TreeModel;
import com.erupt.service.CoreService;
import com.erupt.service.DataService;
import com.erupt.dao.EruptJapUtils;
import com.erupt.util.EruptUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Erupt 对数据的增删改查
 * Created by liyuepeng on 9/28/18.
 */
@RestController
@RequestMapping(RestPath.ERUPT_DATA)
@Transactional
public class EruptDataController {

    @Autowired
    private DataService dataService;

    @Autowired
    private JpaDao jpaDao;

    @Autowired
    private EruptJpaDao eruptJpaDao;

    private Gson gson = new Gson();


    @PostMapping("/table/{erupt}")
    @ResponseBody
    public Page getEruptData(@PathVariable("erupt") String eruptName, @RequestBody JsonObject data) throws JsonProcessingException {
        EruptModel eruptModel = CoreService.ERUPTS.get(eruptName);
        JsonObject conditionParam = data.getAsJsonObject(EruptJpaDao.CONDITION_KEY);
        if (eruptModel.getErupt().power().query()) {
            Page page = eruptJpaDao.queryEruptListByValidate(eruptModel, conditionParam, new Page(1, 3));
            return page;
        } else {
            throw new RuntimeException("没有查询权限");
        }
    }

    @PostMapping("/tree/{erupt}")
    @ResponseBody
    public List<TreeModel> getTreeEruptData(@PathVariable("erupt") String eruptName) {
        EruptModel eruptModel = CoreService.ERUPTS.get(eruptName);
        if (eruptModel.getErupt().power().query()) {
            Tree tree = eruptModel.getErupt().tree();
            List list = eruptJpaDao.getDataMap(eruptModel, tree.id() + " as id", tree.label() + " as label", tree.pid() + " as pid");
            List<TreeModel> treeModels = new ArrayList<>();
            for (Object o : list) {
                Map<String, Object> map = (Map) o;
                TreeModel treeModel = new TreeModel(map.get("id"), map.get("label"), map.get("pid"), null);
                treeModels.add(treeModel);
            }
            List<TreeModel> treeResultModels = new ArrayList<>();
            EruptUtil.TreeModelToTree(treeModels, treeResultModels);
            return treeResultModels;
        } else {
            throw new RuntimeException("没有查询权限");
        }
    }

    @PostMapping("/{erupt}/operator/{code}")
    @ResponseBody
    public boolean execEruptOperator(@PathVariable("erupt") String eruptName, @PathVariable("code") String code,
                                     @RequestBody JsonObject data) throws JsonProcessingException {
        EruptModel eruptModel = CoreService.ERUPTS.get(eruptName);
        try {
            for (RowOperation rowOperation : eruptModel.getErupt().rowOperation()) {
                if (code.equals(rowOperation.code())) {
                    OperationHandler operationHandler = rowOperation.operationHandler().newInstance();
                    return operationHandler.exce(data);
                }
            }
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return false;
    }

    @PostMapping("/{erupt}")
    @ResponseBody
    public void addEruptData(@PathVariable("erupt") String erupt, @RequestBody Object data) {
        EruptModel eruptModel = CoreService.ERUPTS.get(erupt);
        if (eruptModel.getErupt().power().add()) {
            eruptJpaDao.saveEntity(eruptModel, gson.fromJson(gson.toJson(data), eruptModel.getClazz()));
        } else {
            throw new RuntimeException("没有新增权限");
        }
    }

    @PutMapping("/{erupt}/{id}")
    @ResponseBody
    public void editEruptData(@PathVariable("erupt") String erupt, @PathVariable("id") String id) {
        EruptModel eruptModel = CoreService.ERUPTS.get(erupt);
        if (eruptModel.getErupt().power().add()) {
//            eruptJpaDao.findDataById(eruptModel, id);
        } else {
            throw new RuntimeException("没有修改权限");
        }
    }

    @DeleteMapping("/{erupt}/{id}")
    @ResponseBody
    public void deleteEruptData(@PathVariable("erupt") String erupt, @PathVariable("id") Serializable id) {
        EruptModel eruptModel = CoreService.ERUPTS.get(erupt);
        if (eruptModel.getErupt().power().add()) {
            eruptJpaDao.deleteEntity(eruptJpaDao.findDataById(eruptModel, id));
        } else {
            throw new RuntimeException("没有删除权限");
        }
    }

    //为了事务性所以增加了批量删除功能
    @DeleteMapping("/{erupt}")
    @ResponseBody
    public void deleteEruptDatas(@PathVariable("erupt") String erupt, @RequestParam("ids") Serializable[] ids) {
        EruptModel eruptModel = CoreService.ERUPTS.get(erupt);
        if (eruptModel.getErupt().power().add()) {
            for (Serializable id : ids) {
                eruptJpaDao.deleteEntity(eruptJpaDao.findDataById(eruptModel, id));
            }
        } else {
            throw new RuntimeException("没有删除权限");
        }
    }


    @GetMapping("/{erupt}/ref/{name}")
    @ResponseBody
    public List getRefData(@PathVariable("erupt") String erupt, @PathVariable("name") String name) {
        EruptModel eruptModel = CoreService.ERUPTS.get(erupt);
        return eruptJpaDao.getReferenceList(eruptModel, name);
    }


}

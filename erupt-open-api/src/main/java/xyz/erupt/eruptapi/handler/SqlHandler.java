package xyz.erupt.eruptapi.handler;

import org.dom4j.Element;

/**
 * Created by liyuepeng on 2019-08-15.
 */
public interface SqlHandler {

    String handler(Element element, String sql);
}

package com.erupt.test;

import com.erupt.annotation.fun.OperationHandler;

/**
 * Created by liyuepeng on 10/10/18.
 */
public class OperationHandlerImpl implements OperationHandler {
    @Override
    public boolean exce(Object o) {
        System.out.println(o);
        return true;
    }
}

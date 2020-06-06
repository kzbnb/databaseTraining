package com.cn.zqlnb.sql.sqlwork.controller;

import com.cn.zqlnb.sql.sqlwork.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    @Autowired
    UserDao userDao;

    @RequestMapping("/getUserRecord")
    public String index(String openid) {
        System.out.println(("openid为"+openid));
        int count=userDao.getUserByOpenId(openid);
        if(count>0){
     return"exits";
        }
        return "null";
    }

}


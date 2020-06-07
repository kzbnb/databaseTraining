package com.cn.zqlnb.sql.sqlwork.controller;

import com.alibaba.fastjson.JSON;
import com.cn.zqlnb.sql.sqlwork.dao.UserDao;
import com.cn.zqlnb.sql.sqlwork.pojo.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    @Autowired
    UserDao userDao;

    @RequestMapping("/getUserInfo")
    public String getUserInfo(String openid){
    user user=userDao.getUserInfo(openid);
    String userInfo= JSON.toJSONString(user);
    return userInfo;
    };

    @RequestMapping("/getUserRecord")
    public String index(String openid) {
        System.out.println(("openid为"+openid));
        int count=userDao.getUserByOpenId(openid);
        if(count>0){
     return"exits";
        }
        return "null";
    };

    @RequestMapping("/insertUserIntoDatabase")
    public String insertUserIntoDatabase(user user){
        System.out.println(("openid为"+user.getOpenid()));
        System.out.println(("name为"+user.getName()));
        System.out.println(("tel为"+user.getTel()));
        System.out.println(("grade为"+user.getGrade()));
        System.out.println(("classNum为"+user.getClassNum()));
        System.out.println(("stuNum为"+user.getStuNum()));
        int count=userDao.addUserIntoDataBase(user);
        if(count>0){
            return"ok";
        }
        return "no";
    }
}


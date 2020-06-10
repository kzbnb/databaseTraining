package com.cn.zqlnb.sql.sqlwork.controller;

import com.cn.zqlnb.sql.sqlwork.dao.takeDao;
import com.cn.zqlnb.sql.sqlwork.pojo.take;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class takeController {
    @Autowired
    com.cn.zqlnb.sql.sqlwork.dao.takeDao takeDao;

    @RequestMapping("/getTakesByOpenId")
    public  Object getTakesByOpenId(String openid){
        System.out.println("openid is"+openid);
        List<Integer> takes =takeDao.getTakesByOpenId(openid);
        return takes;
    };

    @RequestMapping("/addTakes")
    public  String addTakes(take Take){
        System.out.println("openid is"+Take.getOpen_id()+"turn_id is"+Take.getTurn_id());
        int count =takeDao.addTakes(Take);
        if(count>0)
            return "ok";
        return "no";
    };
}

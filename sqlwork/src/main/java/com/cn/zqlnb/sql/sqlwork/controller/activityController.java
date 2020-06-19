package com.cn.zqlnb.sql.sqlwork.controller;

import com.alibaba.fastjson.JSON;
import com.cn.zqlnb.sql.sqlwork.dao.activityDao;
import com.cn.zqlnb.sql.sqlwork.pojo.activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class activityController {
    @Autowired
    activityDao activityDao;

    @RequestMapping("/showAllactivity")
    public Object showAllactivity()
    {
        List<activity> activities=activityDao.getAllactivity();
        String actvityJson= JSON.toJSONString(activities);
        System.out.println("actvityJson"+actvityJson);
        return actvityJson;
    }

    @RequestMapping("/addActivity")
    public String addActivity(activity activity )
    {
            int count=activityDao.addActivity(activity);
            //
        if(count>0)
        {
            return "ok";
        }


        return "no";
    }

    @RequestMapping("/deleteActivity")
    public String deleteActivity(Integer activity_id )
    {
        int count=activityDao.deleteActivity(activity_id);
        //
        if(count>0)
        {
            return "ok";
        }


        return "no";
    }




}

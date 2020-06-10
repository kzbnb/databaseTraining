package com.cn.zqlnb.sql.sqlwork.controller;

import com.alibaba.fastjson.JSON;
import com.cn.zqlnb.sql.sqlwork.dao.turnDao;

import com.cn.zqlnb.sql.sqlwork.pojo.turn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class turnController {
    @Autowired
    turnDao turnDao;

    @RequestMapping("/showTurnByPlaceName")
    public Object showTurnByPlaceName(String placeName)
    {
        List<turn> turns=turnDao.getTurnByPlaceName(placeName);
        String turnJson= JSON.toJSONString(turns);
        System.out.println("turnJson"+turnJson);
        return turnJson;
    }

    @RequestMapping("/getTurnByTurnId")
    public Object getTurnByTurnId(Integer turn_id)
    {
        turn Turn=turnDao.getTurnByTurnId(turn_id);

        return Turn;
    }

    @RequestMapping("/updateTurn")
    public String updateTurn(turn Turn){
        int count= turnDao.updateTurn(Turn);
        if(count>0){
            return "ok";
        }
        return "no";
    }

}


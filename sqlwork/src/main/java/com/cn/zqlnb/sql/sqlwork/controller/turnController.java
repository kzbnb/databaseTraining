package com.cn.zqlnb.sql.sqlwork.controller;

import com.alibaba.fastjson.JSON;
import com.cn.zqlnb.sql.sqlwork.dao.turnDao;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import com.cn.zqlnb.sql.sqlwork.pojo.turn;
import net.sf.json.JsonConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class turnController {
    @Autowired(required = false)
    turnDao turnDao;

    @RequestMapping("/getTurnByPlaceName")
    public Object showTurnByPlaceName(String placeName,Integer activity_id)
    {
        List<turn> turns=turnDao.getTurnByPlaceName(placeName,activity_id);
        String turnJson= JSON.toJSONString(turns);
        System.out.println("turnJson"+turnJson);
        return turnJson;
    }
    @RequestMapping("/getTurnByDate")
    public Object getTurnByDate(String date,Integer activity_id)
    {
        List<turn> turns=turnDao.getTurnByDate(date,activity_id);
        String turnJson= JSON.toJSONString(turns);
        System.out.println("turnJson"+turnJson);
        return turnJson;
    }
    @RequestMapping("/getTurnByPlaceNameAndDate")
    public Object getTurnByPlaceNameAndDate(String placeName,String date,Integer activity_id)
    {
        List<turn> turns=turnDao.getTurnByPlaceNameAndDate(placeName,date,activity_id);
        String turnJson= JSON.toJSONString(turns);
        System.out.println("turnJson"+turnJson);
        return turnJson;
    }



    @RequestMapping("/getTurnByTurnId")
    public Object getTurnByTurnId(Integer turn_id)
    {
        System.out.println("turn_id is"+turn_id);
        turn Turn=turnDao.getTurnByTurnId(turn_id);

        return Turn;
    }
    @RequestMapping("/getTurnByTurnIdArray")
    public Object getTurnByTurnIdArray( String turn_id)
    {
        System.out.println("turn_id is"+turn_id);
        JSONArray json= JSONArray.fromObject(turn_id);
        List<Integer>turnArray=(List<Integer>)JSONArray.toCollection(json,Integer.class);
        List<turn> Turn=turnDao.getTurnByTurnIdArray(turnArray);
        String turnJson=JSON.toJSONString(Turn);
        return turnJson;
    }

    @RequestMapping("/getTurnByActivityId")
    public Object getTurnByActivityId(Integer activity_id)
    {
        System.out.println("getTurnByActivityId is"+activity_id);
        turn[] Turn=turnDao.getTurnByActivityId(activity_id);

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

    @RequestMapping("/addTurn")
    public String addTurn(turn turn )
    {
        int count=turnDao.addTurn(turn);
        //
        if(count>0)
        {
            return "ok";
        }


        return "no";
    }
    @RequestMapping("/deleteTurn")
    public String deleteTurn(Integer activity_id )
    {
        int count=turnDao.deleteTurn(activity_id);
        //
        if(count>0)
        {
            return "ok";
        }


        return "no";
    }

    }





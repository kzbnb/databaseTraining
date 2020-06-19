package com.cn.zqlnb.sql.sqlwork.dao;

import com.cn.zqlnb.sql.sqlwork.pojo.activity;

import java.util.List;

public interface activityDao {
    //查所有
    public List<activity> getAllactivity();
    public int addActivity(activity activity );
    public int deleteActivity(Integer activity_id );
}

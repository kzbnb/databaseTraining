package com.cn.zqlnb.sql.sqlwork.dao;

import com.cn.zqlnb.sql.sqlwork.pojo.activity;
import com.cn.zqlnb.sql.sqlwork.pojo.turn;

import java.util.List;

public interface turnDao {
    public List<turn> getTurnByPlaceName(String placeName);
}

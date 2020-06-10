package com.cn.zqlnb.sql.sqlwork.dao;

import com.cn.zqlnb.sql.sqlwork.pojo.activity;
import com.cn.zqlnb.sql.sqlwork.pojo.turn;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface turnDao {
    public List<turn> getTurnByPlaceName(String placeName);
    public turn getTurnByTurnId(Integer turn_id);
    public int updateTurn(@Param("Turn")turn Turn);
}

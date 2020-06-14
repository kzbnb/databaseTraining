package com.cn.zqlnb.sql.sqlwork.dao;

import com.cn.zqlnb.sql.sqlwork.pojo.take;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface takeDao {
    public List<Integer> getTakesByOpenId(String openid);
    public int addTakes(@Param("Take") take Take);
    public int deleteTakes(@Param("Take") take Take);
}

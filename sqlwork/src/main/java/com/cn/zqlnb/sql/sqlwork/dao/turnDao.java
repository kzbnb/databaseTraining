package com.cn.zqlnb.sql.sqlwork.dao;

import com.cn.zqlnb.sql.sqlwork.pojo.activity;
import com.cn.zqlnb.sql.sqlwork.pojo.turn;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface turnDao {
    public List<turn> getTurnByPlaceName(String placeName);
    public turn getTurnByTurnId(Integer turn_id);
    public int updateTurn(@Param("Turn")turn Turn);
    public int addTurn(turn turn );

    public turn[] getTurnByActivityId(Integer activity_id);

    public List<turn> getTurnByTurnIdArray(@Param("turn_id") List<Integer> turn_id);

}

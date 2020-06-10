package com.cn.zqlnb.sql.sqlwork.pojo;

import org.springframework.stereotype.Repository;

@Repository
public class take {
    String open_id;
    Integer turn_id;
    public String getOpen_id() {
        return open_id;
    }

    public void setOpen_id(String open_id) {
        this.open_id = open_id;
    }

    public Integer getTurn_id() {
        return turn_id;
    }

    public void setTurn_id(Integer turn_id) {
        this.turn_id = turn_id;
    }


}

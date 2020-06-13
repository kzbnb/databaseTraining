package com.cn.zqlnb.sql.sqlwork.pojo;

import org.springframework.stereotype.Repository;

@Repository
public class turn {
    Integer turn_id;

    public Integer getLimitPeople() {
        return limitPeople;
    }

    public void setLimitPeople(Integer limitPeople) {
        this.limitPeople = limitPeople;
    }

    Integer limitPeople;
    String begin_time;
    String end_time;
    String placeName;
    boolean earlyOrNoon;
    String detailDate;

    public String getDetailDate() {
        return detailDate;
    }

    public void setDetailDate(String detailDate) {
        this.detailDate = detailDate;
    }

    public Integer getAttendNum() {
        return attendNum;
    }

    public void setAttendNum(Integer attendNum) {
        this.attendNum = attendNum;
    }

    Integer attendNum;
    public Integer getTurn_id() {
        return turn_id;
    }

    public void setTurn_id(Integer turn_id) {
        this.turn_id = turn_id;
    }



    public String getBegin_time() {
        return begin_time;
    }

    public void setBegin_time(String begin_time) {
        this.begin_time = begin_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public boolean isEarlyOrNoon() {
        return earlyOrNoon;
    }

    public void setEarlyOrNoon(boolean earlyOrNoon) {
        this.earlyOrNoon = earlyOrNoon;
    }


}

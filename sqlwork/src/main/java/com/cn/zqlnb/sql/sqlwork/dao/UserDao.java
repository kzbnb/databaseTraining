package com.cn.zqlnb.sql.sqlwork.dao;

import com.cn.zqlnb.sql.sqlwork.pojo.user;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao {
    public int getUserByOpenId(@Param("openid") String openid);
    public int addUserIntoDataBase(user user);
    public user getUserInfo(String openid);
    public Integer addAdmin(String openid);
    public Integer deleteAdmin(String openid);
    public Integer updateUser(user user);
}

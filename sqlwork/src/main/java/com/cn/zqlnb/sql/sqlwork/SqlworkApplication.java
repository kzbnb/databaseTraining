package com.cn.zqlnb.sql.sqlwork;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@MapperScan("com.cn.zqlnb.sql.sqlwork.dao")
@SpringBootApplication
public class SqlworkApplication {

    public static void main(String[] args) {
        SpringApplication.run(SqlworkApplication.class, args);
    }

}

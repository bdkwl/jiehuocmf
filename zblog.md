### zblog
1. 后台登录 
2. 后台首页 内容修改 (链接无放)
3. 网站内容数据表
>CREATE TABLE `jiehuocmf`.`cmf_post`(  
   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
   `column` VARCHAR(20) NOT NULL COMMENT '栏目模块:intro企业简介|cases成功案例|info行业资讯|service服务项目|team团队成员|office办公环境|news公司动态',
   `user_id` INT DEFAULT 0 COMMENT '发布者id',
   `hits` INT NOT NULL DEFAULT 0 COMMENT '访问查看数',
   `create_time` INT,
   `update_time` INT,
   `delete_time` INT,
   `title` VARCHAR(100) COMMENT '标题',
   `category_id` INT DEFAULT 0 COMMENT '分类id',
   `category` VARCHAR(200) COMMENT '分类名',
   `thumb` VARCHAR(255) COMMENT '缩略图',
   `videourl` VARCHAR(255) COMMENT '视频地址',
   `content` TEXT COMMENT '文章内容',
   `sort` INT DEFAULT 0 COMMENT '排序,数字越大列表越前',
   `status` INT DEFAULT 1  NULL   COMMENT '状态' 
   PRIMARY KEY (`id`)
 ) ENGINE=INNODB CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
 COMMENT='网站所有栏目内容数据表';
>CREATE TABLE `jiehuocmf`.`cmf_category`(  
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(100) COMMENT '分类名',
    `status` INT DEFAULT 1 COMMENT '状态',
    `create_time` INT,
    `update_time` INT,
    `delete_time` INT,
    `user_id` INT COMMENT '操作人id',
    PRIMARY KEY (`id`)
  ) ENGINE=INNODB CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
  COMMENT='网站内容分类';
  
4.左侧菜内容修改(未完成)
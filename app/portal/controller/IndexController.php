<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2017 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;
use think\Request;

class IndexController extends HomeBaseController {
//    public $theme;
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
//        $ismobile = cmf_is_mobile();
//        $this->theme = cmf_is_mobile() ? 'mobile' : 'pc';
        $request = Request::instance();
        $cururl = $request->baseUrl();
        $actionurl = $request->action();
//        dump( $cururl );
//        dump($actionurl);
        $this->assign('cururl', $cururl);
        $this->assign('curaction', $actionurl);
    }

    // 首页-短片
    public function index()
    {
//        dump($this->theme);
//        return $this->fetch(':index');
        $this->assign('index', 1);
        return $this->fetch();
    }

    // 首页-主要内容页
    public function main() {
        return $this->fetch();
    }

    // 企业简介
    public function introduce() {
        $type = input('param.type', 1);
        $this->assign('type', $type);
        return $this->fetch();
    }

    // 成功案例
    public function cases() {
        return $this->fetch();
    }

    // 联系我们
    public function contact() {
        $type = input('param.type', 1);
        $this->assign('type', $type);
        return $this->fetch();
    }

    // 团队成员
    public function team() {
        $type = input('param.type', 1);
        $this->assign('type', $type);
        return $this->fetch();
    }

    // 服务项目
    public function service() {
        return $this->fetch();
    }

    // 行业资讯
    public function info() {
        return $this->fetch();
    }

    // 公司动态
    public function news() {
        return $this->fetch();
    }

    // 文章内容
    public function article() {

        return $this->fetch();
    }
}

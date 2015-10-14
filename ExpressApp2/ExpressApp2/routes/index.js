var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');
var Post = require('../models/post.js');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: '哈哈2' });
});

router.get('/reg', function (req, res) {
    res.render('reg', {
        title: '用户注册'
    });
});

router.post('/reg', function (req, res) {
    //检验用户两次输入的口令是否一致
    if (req.body['password-repeat'] != req.body['password']) {
        req.flash('error', '两次输入的口令不一致');
        return res.redirect('/reg');
    }
    //生成口令的散列值
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    var newUser = new User({
        name: req.body.username,
        password: password,
    });
    //检查用户名是否已经存在
    User.get(newUser.name, function (err, user) {
        if (user)
            err = 'Username already exists.';
        if (err) {
            //req.flash('error', err);
            return res.redirect('/reg');
        }
        //如果不存在则新增用户
        newUser.save(function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/reg');
            }
            //req.session.user = newUser;
            //req.flash('success', '注册成功');
            //req.session.success = '注册成功';
            res.redirect('/');
        });
    });
});

function checkNotLogin(req, res, next) {
    //if (req.session.user) {
    //    req.flash('error', '已登入');
    //    return res.redirect('/');
    //}
    next();
}

// 登录页路由
router.get("/login", checkNotLogin);
router.get("/login", function (req, res) {
    res.render("login", {
        title: "用户登入",
    });
});

module.exports = router;
const express=require('express')

const router=express.Router()

//引进token
const jwt=require('jsonwebtoken')
//密钥
const config=require('./secret')
//链接数据库
const sqlFn=require('./mysql')
//测试接口
router.get('/',(req,res)=>{
    res.send('hello')
})
//登录接口
/**
 * 语法：
 * 如60，"2 days"，"10h"，"7d"，Expiration time，过期时间
 *  jwt.sign({},'秘钥','过期时间,{expiresIn:20*1,'1day''1h'}')
 */

/**
 * 登录 login
 */
 router.post('/login', (req, res) => {
    let { username, password} = req.body
    //请求数据库
    let sql = "select * from userinfo where username=? and password=?";
    let arr = [username, password]
    sqlFn(sql, arr, result => {
        if (result.length > 0) {
            let token = jwt.sign({
                username: result[0].username,
                id: result[0].id
            }, config.jwtSecret,{expiresIn:20*1})
            res.send({
                status:200,
                data:token
            })
        }else{
            res.send({
                status:404,
                msg:'信息错误'
            })
        }

    })
})

module.exports=router
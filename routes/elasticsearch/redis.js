    /**
     * Created by soumik on 17/11/15.
     */

    var express = require('express');
    var router = express.Router();
    var Redis=require('ioredis');
    var redis=new Redis(6379);



    /*
     @routing to get key value document
     /select?string=@key
     */
    router.get('/select',function(req,res,next){
        var param=req.param('string');
        redis.get(param, function (err, result) {
            res.send(result);
        });
    })

    //to get the count of the particular string or all when given none
    router.get('/count',function(req,res,next) {
        var param=req.param('string')

    });

    //like features
    router.get('/like',function(req,res,next) {
        var param=req.param('string')

    });


    module.exports=router;



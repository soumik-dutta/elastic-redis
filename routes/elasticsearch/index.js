/**
 * Created by soumik on 10/11/15.
 */
var express = require('express');
var request=require('request');
var router = express.Router();
var elasticsearch = require('elasticsearch');
//configuring the elastic-node
var client = new elasticsearch.Client({
        host: 'localhost:9200/blog/post',
    log: 'trace'
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: Infinity,

    // undocumented params are appended to the query string
    hello: "elasticsearch!"
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

/*
  @routing to /search/elastic/select/all with search string
 */
router.get('/select/all',function(req,res,next){
    var param=req.param('string');
    client.search({
        q: param
    }, function (error, response) {
        // ...
        if(error)
            console.trace(error.message)
        else {
            console.log(typeof response)
            res.json(response);
        }
    });

})

//to get the count of the particular string or all when given none
router.get('/count',function(req,res,next) {
    var param=req.param('string')
    client.count({
        q:param
    }, function (error, response) {
        if(error)
            console.trace(error.message);
        else{
            res.json(response.count);
        }

    });
});

//like features
router.get('/like',function(req,res,next) {
    var param=req.param('string')
    client.suggest({
        index: 'blog',
        body: {
            mysuggester: {
                text: param
            }
        }
    }, function (error, response) {
        if(error)
            console.trace(error.message);
        else{
            res.json(response.count);
        }

    });
});


module.exports=router;

/*

{
    "_index" : "blog",
    "_type" : "post",
    "_id" : "_status",
    "found" : false
}*/

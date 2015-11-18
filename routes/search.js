/**
 * Created by soumik on 9/11/15.
 */
var express = require('express');
var request=require('request');
var elasticsearch=require('./elasticsearch/index');
var redissearch=require('./elasticsearch/redis')
var router = express.Router();

/*
Search GET routes
 */
//for elastic search
router.use('/elastic',elasticsearch);
router.use('/redis',redissearch);


module.exports = router;

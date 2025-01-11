const express = require('express');
const router = express.Router();

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public"));
router.use("/css", express.static(__dirname + "public/css"));
router.use("/js", express.static(__dirname + "public/js"));
router.use("/images", express.static(__dirname + "public/images"));



router.get('/custom',(req,rep)=>{rep.render('custom', {title:'Custom'})})
router.get('/sedan',(req,rep)=>{rep.render('sedan',{title:'Sedan'})})
router.get('/suv',(req,rep)=>{rep.render('suv',{title:'SUV'})})
router.get('/truck',(req,rep)=>{rep.render('truck',{title:'Truck'})})

router.get('/account/login',(req,rep)=>{rep.render('login',{title:'Login'})})

module.exports = router;




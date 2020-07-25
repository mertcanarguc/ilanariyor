const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('front/index', { title: 'İlan Arıyor' });
});

router.get("/contact",function(req,res,next){
  res.render('front/main/contact',{
    title:"İletişim ve Destek"
  })
})

router.get("/detay",function(req,res,next){
  res.render("front/main/detay",{
    title:"İlan Detay"
  })
})


module.exports = router;

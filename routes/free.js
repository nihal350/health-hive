const express=require('express')
const router = express.Router()

router
    .route('/about')
    .get((req,res)=>{
        res.render('about')
    })

router
    .route('/contact')
    .get((req,res)=>{
        res.render('contact')
    })

router
    .route('/login')
    .get((req,res)=>{
        res.render('login')
    })

router
    .route('/')
    .get((req,res)=>{
        res.render('home')
    })

router
    .route('/payment')
    .get((req,res)=>{
        res.render('payment')
    })

router
    .route('/profile')
    .get((req,res)=>{
        res.render('profile')
    })

router
    .route('/signup')
    .get((req,res)=>{
        res.render('signup')
    })

router
    .route('/services')
    .get((req,res)=>{
        res.render('services')
    })

module.exports=router
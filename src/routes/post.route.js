const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post("/create", (req, res) => {
    
    const token= req.cookies.token;
    console.log(token);

    if(!token){
        res.status(401).json({
            message:"Unauthorized"
        })
    }
    
    try{
        jwt.verify(token,process.env.JWT_SECRET);
    }catch(err){
        res.status(401).json({
            message:"Invalid token"
        })
    }

    res.send("Post created successfully");
});




module.exports = router;
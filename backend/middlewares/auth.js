const jwt=require('jsonwebtoken')

exports.jwtVerify=async(req,res,next)=>{
    const token=req.headers.token;
     if(!token) res.status(401).json({auth:false,message:"please provide the token"})
    else{
     jwt.verify(token,"harekrishna",(err,user)=>{
        if(err){
            res.status(403).json({auth:false,message:"Invalid token"})
        }
        else{
            req.user=user
          next()
        }
    })
    }
}

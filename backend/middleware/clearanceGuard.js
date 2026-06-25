module.exports = async(req,res,next)=>{
    const clearanceMap = {
        "LEVEL_1":1,
        "LEVEL_2":2,
        "LEVEL_3":3,
        "LEVEL_4":4,
        "LEVEL_5":5,
    }
    if(clearanceMap[req.session.user.clearance] < clearanceMap[req.body.clearanceRequired]){
        return res.status(403).json({success:false,message:"Access Denied"})
    }
    next();
}
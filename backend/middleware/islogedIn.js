module.exports = async(req,res,next)=>{
    if(!req.session.user){
        return res.status(401).json({
            success:false,
            message:"Login first"
        })
    }
    next()
}
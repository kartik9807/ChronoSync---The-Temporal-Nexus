const { getData } = require('../utils/dpHelper');

module.exports.loginUser = async (req,res)=>{
    const {username,password} = req.body;
    let data = await getData();
    const user = data.users.find(
        (item)=> 
        item.username === username.trim() &&
        item.password === password.trim())
    if(!user){
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        });
    }
    req.session.user = { username:user.username, clearance:user.clearance }
    res.status(200).json({"success":true,"data":req.session.user}) 
}

module.exports.logoutUser = async (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:"Logout failed"
            })
        }
        res.clearCookie('connect.sid')
        return res.json({
            success:true,
            message:"Logout success"
        })
    })
}

module.exports.checkSession = (req,res)=>{
    if(!req.session.user){
        return res.status(401).json({"success":false})
    }
    res.json({success:true,data:req.session.user})
}
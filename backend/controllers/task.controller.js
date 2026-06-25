const { getData,saveData } = require('../utils/dpHelper');
const { v4: uuidv4 } = require("uuid");

module.exports.getTask = async(req,res)=>{
    let data = await getData();
    let tasks = data.tasks.filter((task)=>task.expirationTimestamp > Date.now())
    res.json({tasks})
}

module.exports.deleteTask = async(req,res)=>{
    const id = req.params.id;
    let data = await getData();
    const deleteIndex = data.tasks.findIndex(task=>task.id === id);
    if(deleteIndex !== -1){
        data.tasks.splice(deleteIndex,1);
    }
    await saveData(data)
    let tasks = data.tasks.filter((task)=>task.expirationTimestamp > Date.now())
    res.json({success:true,tasks})
}

module.exports.createTask = async(req,res)=>{
    const {description,clearanceRequired,expirationTimestamp} = req.body
    let data = await getData();
    data.tasks.push({
        id: uuidv4(),
        description,
        clearanceRequired,
        expirationTimestamp
    })
    await saveData(data)
    let tasks = data.tasks.filter((task)=>task.expirationTimestamp > Date.now())
    res.json({success:true,tasks})
}
const fs = require('node:fs/promises')
const path = require('path')
const dbPath = path.join('__dirname','../db.json')
const tempPath = path.join('__dirname','../db.temp.json')

module.exports.getData = async (req,res)=>{
    let rawData = await fs.readFile('./db.json','utf8')
    let fileData = JSON.parse(rawData);
    return fileData;
}
module.exports.saveData = async (data)=>{
    try{
        await fs.writeFile(tempPath,JSON.stringify(data,null,2));
        await fs.rename(tempPath,dbPath)
    }catch(err){
        throw err;
    }
}
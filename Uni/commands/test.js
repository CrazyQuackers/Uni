exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    ez.antenna = ez.antenna + 1
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
}
exports.help = {
    name: 'test'
}
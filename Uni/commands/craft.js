exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==7)&&(sm.task==15)&&(sm.qStarted)&&(sm.obj1==0)){message.react("<:BLOX:871140025016930324>")
        sm.obj1=1
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}
    if((sm.quest==8)&&(sm.task==4)&&(sm.qStarted)&&(sm.obj1==0)){message.react("📔")
        sm.obj1=1
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}
    if((sm.quest==9)&&(sm.task==10)&&(sm.qStarted)){if((sm.obj1==1)&&(sm.obj2==1)&&(sm.obj3==1)&&(sm.obj4==1)&&(sm.obj5==1)&&(sm.obj6==0)){message.react("📟")
            sm.obj6=1
            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if(sm.obj1==0){message.react("❌")}
}
exports.help = {
    name: 'craft'
}
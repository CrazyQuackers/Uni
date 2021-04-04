const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs")
bot.commands = new Discord.Collection();
const db = require('./data/db.json')
const q = require('./data/q.json')
const Topgg = require("@top-gg/sdk")
//const topgg = new Topgg.Api()

bot.on('ready', () => 
{
    console.log('Bot online')
    bot.user.setActivity("Ghost Simulator")
    fs.readdir('./Uni/commands', (err, files) => {
        if(err) return console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() == 'js');
        if(jsfile.length == 0) {return console.log("Could not find any commands!")}
        jsfile.forEach(f => {
            let props = require(`./Uni/commands/${f}`)
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) =>
{
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    if(!message.channel) return;
    if(!db[message.guild.id]) {
        db[message.guild.id] = {users: {}}
        fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        q[message.guild.id] = {users: {}}
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
    }
    if(!db[message.guild.id].users[message.member.id]) {
        db[message.guild.id].users[message.member.id] = {
            ectoTokens: 0,
            gems: 0,
            parts: 0,
            acorns: 0,
            newspapers: 0,
            tires: 0,
            socks: 0,
            hammers: 0,
            badges: 0,
            meteorites: 0,
            gold: 0,
            artifacts: 0,
            doubloons: 0,
            pearls: 0,
            diamonds: 0,
            tusks: 0,
            antenna: 1,
            pack: "Starter Pack",
            capacity: "50",
            storage: 0,
            sellTime: 10,
            constructionOpen: false,
            pyramidsOpen: false,
            iceOpen: false,
            lastConstruction: 0,
            lastPyramids: 0,
            lastIce: 0,
            pug: false,
            fox: false,
            cow: false,
            pig: false,
            mouse: false,
            deer: false,
            wolf: false,
            duck: false,
            unicorn: false,
            bat: false,
            jack: false,
            bear: false,
            cat: false,
            cyborg: false,
            horse: false,
            fish: false,
            chicken: false,
            giraffe: false,
            bob: false,
            butterfly: false,
            peacock: false,
            tiger: false,
            flamingo: false,
            koala: false,
            bot: false,
            dino: false,
            clownfish: false,
            panda: false,
            bee: false,
            shark: false,
            steve: false,
            rabbit: false,
            rex: false,
            lastClaim: 0,
            lastBoss: 0
        }
        q[message.guild.id].users[message.member.id] = {
            lastSell: 0,
            sellWait: 10,
            noDM: false
        }
        fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
        const embed = new Discord.MessageEmbed()
            .setColor(16753920)
            .setTitle("Hello there Ghost Hunter!")
            .setDescription("I see you are new here, so let me help you out!\nUse the command **%help** to see a list of all the commands!\nUse the command **%quest** to start your adventure!")
            .setImage("https://imgur.com/wUqVTpm.png")
            .setFooter(`Good luck ${message.author.username}!`)
        message.channel.send({embed});
    }
    let prefix = '%';
    message.content = message.content.toLowerCase();
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    if(cmd=="inv") {cmd="inventory"}
    if(cmd=="bf"){cmd="boss"}
    if(cmd=="c"){cmd="catch"}
    if((cmd=="forest")||(cmd=="city")||(cmd=="junkyard")||(cmd=="sewers")||(cmd=="construction")||(cmd=="wild")||(cmd=="area")||(cmd=="mine")||(cmd=="pyramids")||(cmd=="beach")||(cmd=="underwater")||(cmd=="volcano")||(cmd=="ice")) {cmd="biome"}
    if(MessageArray.length>1){if((cmd=="gem")&&(MessageArray[1]=="chest")){cmd="gc"}if((cmd=="pet")&&(MessageArray[1]=="crate")){cmd="pc"}}
    if((cmd=="catch")&&(((args[0]=="construction")&&(args[1]=="site"))||((args[0]=="wild")&&(args[1]=="west"))||((args[0]=="area")&&(args[1]=="51"))||((args[0]=="ice")&&(args[1]=="cave")))){args[1]=args[2]}
    if(cmd=="maintenance"){return;}
    //cmd="maintenance"
    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}
})

bot.login(process.env.token)
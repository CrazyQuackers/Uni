const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs")
bot.commands = new Discord.Collection();
const db = require('./data/db.json')
const q = require('./data/q.json')
const Topgg = require("@top-gg/sdk")
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMzI1MzA4NjQwNjk2NzM1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4MTQ2ODI5fQ.QgWEMQx9hltJGdZ49-aYjqND7eJCWYXN3CPj2NhxjDw")

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
    if(message.channel.id==871795551354617867){
        let voteUser = message.mentions.members.first()
        let voteUserId = voteUser.id
        const guilder = message.guild
        if((db[guilder.id])&&(db[guilder.id].users[voteUserId])){
            let gemAmmount = (Math.floor(Math.random()*2001))+3000;
            let shortCut = db[guilder.id].users[voteUserId]
            shortCut.gems += gemAmmount
            shortCut.lastVote = new Date().getTime()
            fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
            voteMessage1(voteUser,gemAmmount)
        }else{voteMessage2(voteUser)
            return;}
    }
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    if(!message.channel) return;
    if(!db[message.guild.id]) {
        db[message.guild.id] = {users: {}}
        fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
        q[message.guild.id] = {users: {}}
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
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
            capacity: 50,
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
            lastBoss: 0,
            lastVote: 0,
            defeated: 0,
            caught: 0
        }
        q[message.guild.id].users[message.member.id] = {
            lastSell: 0,
            sellWait: 10,
            quest: 1,
            task: 1,
            obj1: 0,
            obj2: 0,
            obj3: 0,
            obj4: 0,
            qStarted: false,
            hbUnlocked: false,
            sky: false,
            feather: false,
            oblivion: false,
            varus: false,
            chroma: false,
            equipped: "",
            hypno: false,
            champion: false,
            lastDM: 0,
            converter: 0,
            tree: false,
            george: false,
            sludge: false,
            subject: false,
            king: false,
            mag: false,
            blox: false
        }
        fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
        // const embed = new Discord.MessageEmbed()
        //     .setColor(16753920)
        //     .setTitle("Hello there Ghost Hunter!")
        //     .setDescription("I see you are new here, so let me help you out!\nUse the command **%help** to see a list of all the commands!\nUse the command **%quest** to start your adventure!")
        //     .setImage("https://imgur.com/wUqVTpm.png")
        //     .setFooter(`Good luck ${message.author.username}!`)
        // message.author.send({embed});
    }
    let sm = q[message.guild.id].users[message.member.id]
    let prefix = '%';
    message.content = message.content.toLowerCase();
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    if(cmd=="inv") {cmd="inventory"}
    if(cmd=="bf"){cmd="boss"}
    if(cmd=="c"){cmd="catch"}
    if(cmd=="hb"){cmd="hoverboard"}
    if(cmd=="pr"){cmd="profile"}
    if(cmd=="q"){cmd="quest"}
    if(cmd=="quest2"){cmd="null"}
    if((cmd=="quest")&&(sm.quest>=6)){cmd="quest2"}
    if((cmd=="forest")||(cmd=="city")||(cmd=="junkyard")||(cmd=="sewers")||(cmd=="construction")||(cmd=="wild")||(cmd=="area")||(cmd=="mine")||(cmd=="pyramids")||(cmd=="beach")||(cmd=="underwater")||(cmd=="volcano")||(cmd=="ice")) {cmd="biome"}
    if(MessageArray.length>1){if((cmd=="gem")&&(MessageArray[1]=="chest")){cmd="gc"}if((cmd=="pet")&&(MessageArray[1]=="crate")){cmd="pc"}}
    if((cmd=="catch")&&(((args[0]=="construction")&&(args[1]=="site"))||((args[0]=="wild")&&(args[1]=="west"))||((args[0]=="area")&&(args[1]=="51"))||((args[0]=="ice")&&(args[1]=="cave")))){args[1]=args[2]}
    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}
})

function voteMessage1(voteUser,gems)
{
    const embed = {
        color: 6607550,
        title: "🙌 Thanks for Voting! 🙌",
        author: {
            name: voteUser.username,
            icon_url: voteUser.user.avatarURL(),
        },
        description: `You recieved **${gems}** <:gems:825122942413045791> Gems for voting!\n\nCome back in 🕛 **12 hours** to vote again!`,
        thumbnail: {
            url: "https://imgur.com/wwL2qOS.png",
        },
        timestamp: new Date(),
    };
    voteUser.send({embed});
}

function voteMessage2(voteUser)
{
    const embed = {
        color: 6607550,
        title: "🙌 Thanks for Voting! 🙌",
        url: "https://discord.gg/r2RymJrcPw",
        author: {
            name: voteUser.username,
            icon_url: voteUser.user.avatarURL(),
        },
        description: `To recieve <:gems:825122942413045791> Gems after voting, join the <:uni:825122929778884658> Official Uni Discord Server!`,
        thumbnail: {
            url: "https://imgur.com/YcWMQLD.png",
        },
        timestamp: new Date(),
    };
    voteUser.send({embed});
}

bot.login(process.env.token)
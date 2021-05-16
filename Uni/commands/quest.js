exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let o1 = sm.obj1
    let o2 = sm.obj2
    let o3 = sm.obj3
    let o4 = sm.obj4
    if(args[0]=="done"){
        if(!sm.qStarted){
            message.react("❌")
            return;
        }
        switch(sm.quest)
        {
            case 1:
                switch(sm.task)
                {
                    case 1:
                        if(o1>=2){
                            message.react("✅")
                            createDoneMessage("\`Perfect! You're an expert already! Here's your reward! Some shiny Gems!\`\n+**5** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",5,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if(o1>=1){
                            message.react("✅")
                            createDoneMessage("\`You sold it? Great! ..You want a reward for that? Fiiiine... but only because you're new. You can have some Gems.\`\n+**10** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",10,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if(o1>=1){
                            message.react("✅")
                            createDoneMessage("\`Oh boy... that's a pretty cool ghost! I guess you want your reward now, right? Here's some more Gems.\`\n+**15** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",15,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(ez.ectoTokens>=100){
                            message.react("✅")
                            createDoneMessage("\`Alright! Now you're rolling in tokens! ..And, if that wasn't enough, here's some Gems as a reward!\`\n+**20** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",20,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if(ez.capacity>50){
                            message.react("✅")
                            createDoneMessage("\`Now you got the coolest gear in town! ..Until you buy the next upgrade, then you're even cooler! Here's some Gems as a reward. Don't worry, you're almost done with all of my tasks!\`\n+**25** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",25,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if(o1>=1){
                            message.react("✅")
                            createDoneMessage("\`Congrats! You got your first pet! Pets are used to fight bosses, but you'll need much more pets to do that... For now, take these Gems as a reward!\`\n+**30** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",30,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if((ez.acorns>=3)&&(ez.parts>=3)){
                            message.react("✅")
                            createDoneMessage("\`You saved me so much time! Thanks! Oddly enough, these Acorns can be used in some cool technology. Oh right, you want a reward. Um... here! Have some extra Gems.\`\n+**35** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",35,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if(ez.antenna>=2){
                            message.react("✅")
                            createDoneMessage("\`Yeeeeees, you upgraded! Now you can visit the next biome, the City Biome! That's all the tasks I have for you. Your next quest will be with Ghost Hunter Adam in the City. Good luck, Ghost Hunter! Oh, and don't forget your reward before you go!\`\n+**35** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",35,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 2:
                switch(sm.task)
                {
                    case 1:
                        if((o1>=5)&&(o2>=2)&&(ez.newspapers>=3)){
                            message.react("✅")
                            createDoneMessage("\`Achoo! You actually brought the Street Cats here?! ...Fine, you're tough enough! Now take these Gems and take the cats away!\`\n+**30** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",30,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if(o1>=250){
                            message.react("✅")
                            createDoneMessage("\`Hm... Interesting. This will work as a power source... What? Don't complain, I'll give you Gems for it. Buy yourself something cool... like a Pet Crate!\`\n+**60** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",60,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if(o1=1){
                            message.react("✅")
                            createDoneMessage("\`Thanks, take these Gems and get a move on.\`\n+**50** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",50,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(ez.antenna>=3){
                            message.react("✅")
                            createDoneMessage("\`The Junkyard has all kinds of parts I need for my technology. I'll be sending you there soon. You just wanted the rewards anyways... Here's some Gems.\`\n+**75** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",75,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if((o1>=7)&&(o2>=2)&&(ez.tires>=4)){
                            message.react("✅")
                            createDoneMessage("\`...Fine, you're cool. But my next tasks aren't as easy. Take these Gems and scram!\`\n+**100** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",100,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`There it is! You're turning out to be more reliable than I thought. Here are a few Gems for your troubles.\`\n+**25** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",25,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if(ez.antenna>=4){
                            message.react("✅")
                            createDoneMessage("\`I didn't tell you it was a sewer, did I? Look forward to your time visiting it soon. Take these Gems and be ready. You're not going to have a nose after this.\`\n+**100** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",100,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if((o1>=15)&&(o2>=4)&&(ez.socks>=8)){
                            message.react("✅")
                            createDoneMessage("\`Ewwww, that smell is terrible! Why didn't you take a bath BEFORE you came back to me? ...Fine, fine, here's some Gems! Just get that smell away!\`\n+**120** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",120,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 9:
                        if(ez.constructionOpen){
                            message.react("✅")
                            createDoneMessage("\`Well look who actually did it... There's always a chest in bonus biomes like the Construction Site. You have to wait a certain amount of time to open them, but they give you extra Gems. If you also hadn't noticed, ghosts in bonus biomes drop more Gems than others. But for now... here's a reward from me. Yes, you're almost done with all of my tasks.\`\n+**80** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",80,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 10:
                        if((o1>=20)&&(o2>=5)&&(ez.hammers>=15)){
                            message.react("✅")
                            createDoneMessage("\`Well look at you, completing every task I throw at you! Here's some Gems.\`\n+**200** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",200,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 11:
                        if((o1>=5)&&(o2>=5)&&(o3>=5)&&(o4>=5)){
                            message.react("✅")
                            createDoneMessage("\`This is exactly what I need. Maybe you're not so bad after all... Here is a reward. One last task and my genius Hoverboard technology is all yours!\`\n+**250** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 12:
                        if((ez.newspapers>=10)&&(ez.tires>=10)&&(ez.socks>=10)&&(ez.hammers>=15)){
                            message.react("✅")
                            sm.hbUnlocked = true
                            sm.equipped = "basic"
                            createDoneMessage("\`Alright, alright... I'll say it. You're pretty tough. You deserve the Hoverboard... it's yours. You can get a bunch of different Skins for it. Just use the %hoverboard command. That's it for me. You can find Ghost Hunter Liz just around the corner. I believe she has a powerful pet she can give you...\`\n+**Hoverboard** <:hoverboard:842713851585495070>\n+**500** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 3:
                switch(sm.task)
                {
                    case 1:
                        if((o1>=5)&&(o2>=3)){
                            message.react("✅")
                            createDoneMessage("\`Excellent! Only five more tasks and you'll receive the very powerful pet! Here's some gems for your efforts.\`\n+**20** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",20,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if((o1>=2)&&(ez.newspapers>=3)){
                            message.react("✅")
                            createDoneMessage("\`Whoa, thanks! I think the cats will be much happier there. Don't tell anyone... but I actually really love cats! We were just sending them home. Take these gems as a token of thanks.\`\n+**30** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",30,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if((o1>=5)&&(o2>=5)){
                            message.react("✅")
                            createDoneMessage("\`Great job! Now the streets are cleaner and the forest is more peaceful! Here, take these gems as a reward!\`\n+**40** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",40,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if((o1>=3)&&(ez.tires>=5)){
                            message.react("✅")
                            createDoneMessage("\`Niceee... These tires are perfect for my car! Oh.. yeah, also the junkyard is a lot cleaner... I guess that's cool. Take these gems! You've earned them!\`\n+**50** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",50,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if((o1>=5)&&(o2>=3)){
                            message.react("✅")
                            createDoneMessage("\`Thanks so much for doing that! I just really needed these ghosts for my collection... I will bathe them first for sure... Oh right! You're reward, here take these gems.\`\n+**60** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",60,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if((ez.tires>=7)&&(ez.socks>=7)&&(ez.hammers>=7)){
                            message.react("✅")
                            sm.hypno = true
                            createDoneMessage("\`Congradulations!!! I hope you enjoy your new Super Powerful Pet! It will defenitely help you in the future when you'll start defeating bosses! I think you're next Quest is in The Wild West. You should meet Ghost Hunter Jesse there as soon as possible! I hear he gives ghost hunters a really cool Hoverboard for completing all his tasks...\`\n+**Hypnotize** <:hypnotize:843489441724628992>\n+**70** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",70,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
        }
    }else{
        switch(sm.quest)
        {
            case 1:
                switch(sm.task)
                {
                    case 1:
                        if(o1>2){o1=2}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #1/8__** : Ghost Catching 101\n\n\`Well well well... What do we have here? Another Ghost Hunter to join our ranks! Welcome to our ghost infested world! Join hunters like me, Ghost Hunter Gabe, in fighting against the ghosts! We need all the help we can get! Just use the %catch command and start catching ghosts! Let's start you off easy, go catch 2 Forest Ghosts and use the %quest done command when you're done. I might just give you a reward for helping me...\`\n\nHint: Use the command **%catch forest** to catch ghosts in the forest. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **2** 👻 ghosts in the 🏕️ Forest: ${o1}/2`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>1){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #2/8__** : The Ghost Market\n\n\`Okay, so you may have noticed your Pack will start to get full after you collect ghosts. You can sell the Ghosts you've collected for Ecto-Tokens by using the command %sell. After using the sell command, your pack will be empty and you will be able to catch ghosts again after the sell cooldown time is over. Check your sell cooldown time by using the command %pack. Anyways, go sell your ghosts now and come back to me after you finish.\`\n\nHint: After completing any quest, use the command %quest done to continue to new ones. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Sell the 👻 ghosts in your <:pack:825122944204013588> Pack: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>1){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #3/8__** : Prehistoric Mayhem\n\n\`Next up, special ghosts! Each biome has 2 different types of ghosts. The Forest, for example, has Fairies and Owls! The Fairies are regular ghosts and the Owls are special ghosts! The special ghosts are a bit harder to find but they fill up more space in your Pack so you can sell and get Ecto-Tokens much faster! Start by catching 1 Owl Ghost! Find me when you're done for a reward.\`\n\nHint: Use the command %biomes to learn more about each biome. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **1** 🦉 Owl Ghost in the 🏕️ Forest: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 4:
                        o1 = ez.ectoTokens
                        if(o1>100){o1=100}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #4/8__** : Collection Day\n\n\`Your Pack probably fills up pretty fast, right? Time to get some upgrades! First you're going to need something to buy those upgrades with. Go collect 100 Ecto-Tokens and let me know when you're done.\`\n\nHint: Use the command %sell to sell your ghosts and receive Ecto-Tokens. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Obtain **100** <:ectotoken:825122939812315219> Ecto-Tokens: ${o1}/100`,message,sm,fs,q)
                        break;
                    case 5:
                        if(ez.capacity>50){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #5/8__** : The Coolest Gear In Town\n\n\`Now that you got some Ecto-Tokens, you can buy new Packs! This will help you collect more stuff easier and faster. Go upgrade your Pack once. Report back to me when you're done for a reward!\`\n\nHint: To upgrade your pack, use the command %pack up. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Upgrade your <:pack:825122944204013588> pack once: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #6/8__** : Your First Pet\n\n\`You're probably wondering... What are all these Gems I'm getting for?? Well, gems are used to unbox pets! You can use the gems you have to buy pet crates and then you will randomly receive pets! Use the command %pet crate 1 buy to unbox your first pet from Pet Crate #1! Come back to me after you got your first pet!\`\n\nHint: Learn more about pets and pet crates with the commands %pet and %pet crate. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Unbox a 🐶 pet from Pet Crate #1: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 7:
                        o1 = ez.acorns
                        o2 = ez.parts
                        if(o1>3){o1=3}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #7/8__** : Stop, Thief!\n\n\`So... fun fact about ghosts, they love to steal stuff! The Forest ghosts took my Acorns and Parts! I know, it's weird... could you get them back? Find 3 Acorns and 3 Antenna Parts from Forest ghosts.\`\n\nHint: The command %inventory will display all of your collected items. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Obtain **3** <:acorn:825122942660509707> Acorns from the 🏕️ Forest: ${o1}/3\n• Obtain **3** 🔩 Antenna Parts: ${o2}/3`,message,sm,fs,q)
                        break;
                    case 8:
                        o1 = ez.antenna
                        if(o1>2){o1=2}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #8/8__** : Gotta Do the Upgrade\n\n\`Oh, those items you got me? You can use them to upgrade your Antenna, so you can explore new Biomes! To do this, use the command %antenna up. Talk to me after you upgrade, and I'll give you some Gems!\`\n\nHint: You can check your Antenna Level with the command %antenna. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Upgrade your 📡 Antenna to Level **2**: ${o1}/2`,message,sm,fs,q)
                        break;
                }
                break;
            case 2:
                switch(sm.task)
                {
                    case 1:
                        if(o1>5){o1=5}
                        if(o2>2){o2=2}
                        o3 = ez.newspapers
                        if(o3>3){o3=3}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #1/12__** : He's a Bit Catty\n\n\`Hey, buddy... Welcome to my part of the city... They call me Ghost Hunter Adam. Here you'll find Businessman Ghosts and Street Cat Ghosts... and my genius invention of Hoverboards! You want it? Well, you can't have it! ...Unless you complete some tasks for me. First, I gotta see if you're tough enough to handle my technology. Go collect 5 Businessman Ghosts, 2 Street Cats and 3 Newspapers. Come back to me for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **5** 🤵‍♂️ Businessman Ghosts in the 🏙️ City: ${o1}/5\n• Vacuum **2** 🐈‍⬛ Street Cat Ghosts in the 🏙️ City: ${o2}/2\n• Obtain **3** 📰 Newspapers in the 🏙️ City: ${o3}/3`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>250){o1=250}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #2/12__** : Ghost Town Collection\n\n\`I need you to collect 250 pack storage from ghosts in the area. It's to power that Hoverboard you want. Find me for a reward afterward... No, you're not getting my technology yet.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Collect **250** <:pack:825122944204013588> Pack Storage from any 👻 ghost: ${o1}/250`,message,sm,fs,q)
                        break;
                    case 3:
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #3/12__** : Pets Like Crates\n\n\`The pets at the shop can fight bosses in Uni. Open Pet Crate #1 and return to me for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Open Pet Crate #1 once: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 4:
                        o1 = ez.parts
                        o2 = ez.newspapers
                        o3 = ez.antenna
                        if(o1>10){o1=10}
                        if(o2>5){o2=5}
                        if(o3>=3){o3=3
                            o1=10
                            o2=5}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #4/12__** : Road to the Junkyard\n\n\`See that Junkyard over there? You're gonna need to upgrade your antenna to level 3 to get there. Once you do, I'll get you some Gems and another task.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **10** 🔩 Antenna Parts: ${o1}/10\n• Obtain **5** 📰 Newspapers in The 🏙️ City: ${o2}/5\n• Upgrade your 📡 Antenna to level **3**: ${o3}/3`,message,sm,fs,q)
                        break;
                    case 5:
                        if(o1>7){o1=7}
                        if(o2>2){o2=2}
                        o3 = ez.tires
                        if(o3>4){o3=4}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #5/12__** : Junkyard Stakeout\n\n\`Have you been to the Junkyard down the road? I love riding around with Hoverboards there... If you get some Mechanics, Garbage Bin Ghosts and Tires, I might consider you cool enough to use my technology. If you actually finish, find me for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **7** 🧑‍🔧 Mechanic Ghosts in The 💡 Junkyard: ${o1}/7\n• Vacuum **2** 🗑️ Garbage Bin Ghosts in The 💡 Junkyard: ${o2}/2\n• Obtain **4** <:tire:825122944128385054> Tires from The 💡 Junkyard: ${o3}/4`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #6/12__** : Calling Ghost Hunter Adam\n\n\`I must have dropped my Walkie Talkie while hoverboarding in the Junkyard! ...Why don't I look for it? I'm too busy doing important stuff. If you find it, maybe I'll give you a reward. Try using the command %find <item>\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Find Adam's 📞 Walkie Talkie hidden in The 💡 Junkyard: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 7:
                        o1 = ez.parts
                        o2 = ez.tires
                        o3 = ez.antenna
                        if(o1>35){o1=35}
                        if(o2>10){o2=10}
                        if(o3>=4){o3=4
                            o1=35
                            o2=10}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #7/12__** : Underground Shortcut\n\n\`You're well on your way to getting my Hoverboard technology. Next, I need you to unlock the next biome. There's an underground shortcut to The Wild West in the Junkyard. To reach it, upgrade your antenna to level 4. You'll need it unlocked to finish my next task. I'll get you some Gems once you're finished.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **35** 🔩 Antenna Parts: ${o1}/35\n• Obtain **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: ${o2}/10\n• Upgrade your 📡 Antenna to level **4**: ${o3}/4`,message,sm,fs,q)
                        break;
                    case 8:
                        if(o1>15){o1=15}
                        if(o2>4){o2=4}
                        o3 = ez.socks
                        if(o3>8){o3=8}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #8/12__** : What's That Smell?\n\n\`Next, you are gonna collect Paper Bag Ghosts, Rat Ghosts, and 8 Dirty socks from ghosts in the sewers! ...You're so gonna need a bath when you get back, hah! If you make it back, I'll give you a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **15** 🛍️ Paper Bag Ghosts in The <:manhole:825122943133941821> Sewers: ${o1}/15\n• Vacuum **4** 🐀 Rat Ghosts in The <:manhole:825122943133941821> Sewers: ${o2}/4\n• Obtain **8** 🧦 Socks from The <:manhole:825122943133941821> Sewers: ${o3}/8`,message,sm,fs,q)
                        break;
                    case 9:
                        o1 = ez.newspapers
                        o2 = ez.tires
                        o3 = ez.socks
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        if(o3>10){o3=10}
                        if(ez.constructionOpen){o4=1
                            o1=10
                            o2=10
                            o3=10}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #9/12__** : Construction Obstruction\n\n\`Do you know what bonus biomes are? They are special biomes that give less Antenna Parts and lots of Gems! I need you to unlock the Construction Site. You're going to need 10 Newspapers, Tires and Socks. Come find me after you unlock it for a reward. To unlock it, use the %unlock command.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **10** 📰 Newspapers from The 🏙️ City: ${o1}/10\n• Obtain **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: ${o2}/10\n• Obtain **10** 🧦 Socks from The <:manhole:825122943133941821> Sewers: ${o3}/10\n• Unlock access to The 🏗️ Construction Site: ${o4}/1`,message,sm,fs,q)
                        break;
                    case 10:
                        if(o1>20){o1=20}
                        if(o2>5){o2=5}
                        o3 = ez.hammers
                        if(o3>15){o3=15}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #10/12__** : Stop Those Pigeons!\n\n\`You're really close to the Hoverboard, and if you can finish these next three tasks, it's yours. Go collect 20 Worker Ghosts, 5 Pigeon Ghosts, and 15 Hammers in The Construction Site. Come back for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **20** 👷‍♀️ Worker Ghosts in The 🏗️ Construction Site: ${o1}/20\n• Vacuum **5** <:pigeon:825122931721371690> Pigeon Ghosts in The 🏗️ Construction Site: ${o2}/5\n• Obtain **15** 🔨 Hammers from The 🏗️ Construction Site: ${o3}/15`,message,sm,fs,q)
                        break;
                    case 11:
                        if(o1>=5){o1=5}
                        if(o2>=5){o2=5}
                        if(o3>=5){o3=5}
                        if(o4>=5){o4=5}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #11/12__** : Rewind Time\n\n\`We almost have enough storage to power the Hoverboard. I need you to collect ghosts from all biomes in this area. Here's my shopping list! Now get going!\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **5** 🐈‍⬛ Street Cat Ghosts from The 🏙️ City: ${o1}/5\n• Vacuum **5** 🗑️ Garbage Bin Ghosts from The 💡 Junkyard: ${o2}/5\n• Vacuum **5** 🐀 Rat Ghosts from The <:manhole:825122943133941821> Sewers: ${o3}/5\n• Vacuum **5** <:pigeon:825122931721371690> Pigeon Ghosts from The 🏗️ Construction Site: ${o4}/5`,message,sm,fs,q)
                        break;
                    case 12:
                        o1 = ez.newspapers
                        o2 = ez.tires
                        o3 = ez.socks
                        o4 = ez.hammers
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        if(o3>10){o3=10}
                        if(o4>15){o4=15}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #12/12__** : Hail the Hoverboard\n\n\`Now I need your help to finish building your Hoverboard... Don't look so surprised. Collect items from ghosts in each biome here and the Hoverboard is all yours!\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **10** 📰 Newspapers from The 🏙️ City: ${o1}/10\n• Obtain **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: ${o2}/10\n• Obtain **10** 🧦 Socks from The <:manhole:825122943133941821> Sewers: ${o3}/10\n• Obtain **10** Hammers from The 🏗️ Construction Site: ${o4}/15`,message,sm,fs,q)
                        break;
                }
                break;
            case 3:
                switch(sm.task)
                {
                    case 1:
                        if(o1>5){o1=5}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #1/6__** : I'm a Hoot\n\n\`Hey! Hey you... Come here! ....The name is Ghost Hunter Liz. I happen to have a connection with some very important people, and they told me to find you. So, trust me or don't. It's up to you. Either way, I've been entrusted with a very powerful pet, and I like to help new Ghost Hunters. I need you to help me, and in return I'll give you the very powerful pet! So about that pet... First, head back to the Forest and vacuum 3 Owl Ghosts, and 5 Fairy Ghosts. Return to me for a reward!\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **5** 🧚 Fairy Ghosts from The 🏕️ Forest: ${o1}/5\n• Vacuum **3** 🦉 Owl Ghosts from The 🏕️ Forest: ${o2}/3`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>2){o1=2}
                        o2 = ez.newspapers
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #2/6__** : No Cattin' Around\n\n\`Next we are going to send some of these adorable cats to the Ghost World with your help! I'll also need something to read. I need you to Vacuum 2 Cat Ghosts and collect 3 Newspapers from The City. Come back for a reward.\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **2** 🐈‍⬛ Street Cat Ghosts from The 🏙️ City: ${o1}/2\n• Obtain **3** 📰 Newspapers from The 🏙️ City: ${o2}/3`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>5){o1=5}
                        if(o2>5){o2=5}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #3/6__** : Serious Business\n\n\`Mission #3! I need you to vacuum some ghosts in the Forest and the City. Once you're done come back to me for a reward.\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **5** 🧚 Fairy Ghosts from The 🏕️ Forest: ${o1}/5\n• Vacuum **5** 🤵‍♂️ Businessmen Ghosts from The 🏙️ City: ${o2}/5`,message,sm,fs,q)
                        break;
                    case 4:
                        if(o1>3){o1=3}
                        o2 = ez.tires
                        if(o2>5){o2=5}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #4/6__** : Overflowing Trash\n\n\`Next up, I need you to head into the junkyard to vacuum some more ghosts there. There's a lot of garbage bins there that are overflowing with trash! Plus, my car could really use some new tires. Vacuum 3 Garbage Bin Ghosts and collect 5 Tires from The Junkyard.\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **3** 🗑️ Garbage Bin Ghosts from The 💡 Junkyard: ${o1}/3\n• Obtain **5** <:tire:825122944128385054> Tires from The 💡 Junkyard: ${o2}/5`,message,sm,fs,q)
                        break;
                    case 5:
                        if(o1>5){o1=5}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #5/6__** : Sewer Diving\n\n\`You're so close to the powerful pet! Only two more tasks to go!!! So, I know you're going to hate me, but I need you to go to the sewers... It's for a really short period of time! All I need you to do is vacuum some ghosts there...\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **5** 🛍️ Paper Bag Ghosts from The <:manhole:825122943133941821> Sewers: ${o1}/5\n• Vacuum **3** 🐀 Rat Ghosts from The <:manhole:825122943133941821> Sewers: ${o2}/3`,message,sm,fs,q)
                        break;
                    case 6:
                        o1 = ez.tires
                        o2 = ez.socks
                        o3 = ez.hammers
                        if(o1>7){o1=7}
                        if(o2>7){o2=7}
                        if(o3>7){o3=7}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #6/6__** : Mission for Power\n\n\`Finally, your last mission! I need you to collect some items for me from the junkyard, the sewers, and the construction site. Once you're done with this task, the powerful pet is all yours!!!\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Obtain **7** <:tire:825122944128385054> Tires from The 💡 Junkyard: ${o1}/7\n• Obtain **7** 🧦 Socks from The <:manhole:825122943133941821> Sewers: ${o2}/7\n• Obtain **7** 🔨 Hammers from The 🏗️ Construction Site: ${o3}/7`,message,sm,fs,q)
                        break;
                }
                break;
        }
    }
}
exports.help = {
    name: 'quest'
}

function createQuestMessage(t,d,u,n,v,message,sm,fs,q)
{
    const questEmbed = {
        color: 16776960,
        title: t,
        author: {
            name: `${message.author.username}'s Questline`,
            icon_url: message.author.avatarURL(),
        },
        description: d,
        thumbnail: {
            url: u,
        },
        fields: [
            {
                name: n,
                value: v,
            },
        ],
    };
    message.channel.send({ embed: questEmbed });
    sm.qStarted = true
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}

function createDoneMessage(d,u,g,fs,db,q,ez,message,sm)
{
    const doneEmbed = {
        color: 255,
        title: `Quest #${sm.quest} - Task #${sm.task} - Done`,
        author: {
            name: `${message.author.username}'s Questline`,
            icon_url: message.author.avatarURL(),
        },
        description: d,
        thumbnail: {
            url: u,
        },
    };
    message.channel.send({ embed: doneEmbed });
    if(((sm.quest==1)&&(sm.task==8))||((sm.quest==2)&&(sm.task==12))){
        sm.quest = sm.quest + 1
        sm.task = 1
    }else{sm.task = sm.task + 1}
    sm.obj1 = 0
    sm.obj2 = 0
    sm.obj3 = 0
    sm.obj4 = 0
    sm.qStarted = false
    ez.gems = ez.gems + g
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}
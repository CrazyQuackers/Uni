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
    if(args[0]=="done"){if(!sm.qStarted){message.react("❌")
            return;}
        switch(sm.quest)
        {
            case 6:
                switch(sm.task)
                {
                    case 1:
                        if((o1>=35)&&(o2>=10)&&(ez.doubloons>=75)){
                            message.react("✅")
                            ez.doubloons-=75
                            createDoneMessage("\`Lookin' to be a promisin' pirate. I'll be rewarding ye with some treasure. Here's some Gems.\`\n+**850** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",850,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if((o1>=25)&&(o2>=25)&&(o3>=20)&&(o4>=5)){
                            message.react("✅")
                            createDoneMessage("\`Aye! That's it! You've got us a crew now. We'll take the seven seas with this fighting spirit! I'll be rewarding ye with some treasure. Here's some Gems.\`\n+**600** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",600,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if(o1>=2){
                            message.react("✅")
                            createDoneMessage("\`Blimey, ye did it! As promised, here ye are, bunch O' Gems!\`\n+**1800** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1800,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(ez.antenna>=9){
                            message.react("✅")
                            createDoneMessage("\`That be it! You'll be able to reach the deepest depths of the oceans now. Thank ye, lad! Here's some Gems for ye troubles.\`\n+**1000** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`She's a bit rusty, but she's still a fine sword! Thank ye for the help. Here are some Gems.\`\n+**1000** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if((o1>=50)&&(o2>=15)&&(ez.pearls>=100)){
                            message.react("✅")
                            ez.pearls-=100
                            createDoneMessage("\`Perfect! These ghosties are exactly what we needed to power me technology. You're in me crew now! Welcome aboard, matey! And... here's ye Gems.\`\n+**1500** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if((o1>=35)&&(o2>=30)&&(o3>=30)&&(o4>=10)){
                            message.react("✅")
                            createDoneMessage("\`Aye! Ye do care about the sea. Ye are truly a pirate in me eye, the reward though, here ye are.\`\n+**900** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",900,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if(o2==1){
                            message.react("✅")
                            createDoneMessage("\`Blimey!! Ye actually did it! Here ye Gems for that stunt!\`\n+**750** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 9:
                        if(ez.antenna==10){
                            message.react("✅")
                            createDoneMessage("\`Aye... You've reached the last zone... Unless you haven't unlocked the Ice Cave biome yet. For ye services, take these glittering Gems. The next task will not be so quick.\`\n+**1750** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 10:
                        if((o1>=50)&&(o2>=12)&&(ez.diamonds>=150)){
                            message.react("✅")
                            ez.diamonds-=150
                            createDoneMessage("\`Aye me hearties! You're alive! Ye truly are the bravest crewmate me have! Here's ye Gems. I'd expect nothing less from me finest crew member!\`\n+**2000** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",2000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 11:
                        if((o1>=35)&&(o2>=35)&&(o3>=35)&&(ez.diamonds>=75)){
                            message.react("✅")
                            ez.diamonds-=75
                            createDoneMessage("\`Aye! First mate, ye are the head of me crew now! Finest crew of the seven seas! ...not good enough? Thinking like a pirate I see! Here's ye reward... Gems!\`\n+**1300** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1300,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 12:
                        if((ez.gems-o1)>=3000){
                            message.react("✅")
                            ez.gems-=3000
                            createDoneMessage("\`I see ye found some treasure! Here's ye share of the loot... Gems!\`\n+**1500** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 13:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`That'll do it, here's ye some Gems as promised.\`\n+**2250** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",2250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 14:
                        if(ez.iceOpen){
                            message.react("✅")
                            createDoneMessage("\`Treasure! There be a chest in that bonus biome ye just unlocked! Visit it after time has passed for Gems. Ye still be wanting that reward, eh? Here be some Gems. Use them well.\`\n+**3000** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",3000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 15:
                        if((o1>=75)&&(o2>=20)&&(ez.tusks>=175)){
                            message.react("✅")
                            ez.tusks-=175
                            createDoneMessage("\`Aye, aye! You've found them! As a Captain's promise, here's ye reward... Gems.\`\n+**3000** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",3000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 16:
                        if((o1>=50)&&(o2>=50)&&(o3>=50)&&(ez.tusks>=100)){
                            message.react("✅")
                            createDoneMessage("\`Truly work only of me best crew member. Here's ye reward... Gems. Keep the tusks, you'll need them.\`\n+**2500** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",2500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 17:
                        if(((ez.gems-o1)>=1500)&&(o3>=10000000)){
                            message.react("✅")
                            ez.gems-=1500
                            createDoneMessage("\`Here's some Gems as a thank ya. Go buy yourself something fancy!\`\n+**750** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 18:
                        if((o1>=15)&&(o2>=15)&&(o3>=15)&&(o4>=15)){
                            message.react("✅")
                            createDoneMessage("\`Well that be something indeed! Ye have definitely earned yourself some Gems.\`\n+**2000** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",2000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 19:
                        if((ez.doubloons>=200)&&(ez.pearls>=200)&&(ez.diamonds>=200)&&(ez.tusks>=200)){
                            message.react("✅")
                            ez.doubloons-=200
                            ez.pearls-=200
                            ez.diamonds-=200
                            ez.tusks-=200
                            createDoneMessage("\`The bravest Ghost Hunter around, me first mate! I give you this Lucky Charm Technology and Gems! Your chances of unboxing rare, legendary, and goldy pets, have increased drastically! You can see their exact drop rates by using the command %pet. That's all the tasks, matey. It's time you visit Ghost Hunter Shelly... She sits on the reefs Underwater.\`\n+**Lucky Charm Technology** 🍀\n+**4500** <:gems:825122942413045791>","https://imgur.com/wxt9Iew.png",4500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 7:
                switch(sm.task)
                {
                    case 1:
                        if((o1>=10)&&(ez.acorns>=20)){
                            message.react("✅")
                            ez.acorns-=20
                            createDoneMessage("\`Wow. That was quick. Good job. As promised, here is your first Blox Piece... I'll also add some Gems.\`\n+**Blox Piece** 🧩\n+**700** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",700,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if((ez.gems-o1)>=5000){
                            message.react("✅")
                            ez.gems-=5000
                            createDoneMessage("\`Jackpot! Gem pot! Pot lid! Here's your second piece, and some of the gems you've just collected for me!\`\n+**Blox Piece** 🧩\n+**1300** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",1300,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if((o1>=10)&&(o2>=10)&&(ez.newspapers>=20)&&(ez.tires>=20)){
                            message.react("✅")
                            ez.newspapers-=20
                            ez.tires-=20
                            createDoneMessage("\`These will perform nicely! Well done Ghost Hunter!\`\n+**Blox Piece** 🧩\n+**2000** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",2000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Nice! You've found it! Where was it? Oh, just behind that seaweed? Maybe my number is too low... Better save up some Gems for a new pair of glasses.\`\n+**Blox Piece** 🧩\n+**2600** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",2600,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if((o1>=10)&&(o2>=10)&&(ez.badges>=20)&&(ez.meteorites>=20)){
                            message.react("✅")
                            ez.badges-=20
                            ez.meteorites-=20
                            createDoneMessage("\`Well I'll be damned! I guess I was wrong... Maybe I'm wrong about dolphins being fake too?\`\n+**Blox Piece** 🧩\n+**3300** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",3300,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if((o1>=5)&&(o2>=4)&&(o3>=3)){
                            message.react("✅")
                            createDoneMessage("\`That's much better! Your pet team is so good! Here, have another Blox Piece and some Gems to help close that pet crate tab you got going on!\`\n+**Blox Piece** 🧩\n+**3900** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",3900,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if((o1>=10)&&(o2>=10)&&(ez.doubloons>=20)&&(ez.pearls>=20)){
                            message.react("✅")
                            ez.doubloons-=20
                            ez.pearls-=20
                            createDoneMessage("\`Back so soon? See, I told you it was going to be a quick one!\`\n+**Blox Piece** 🧩\n+**4600** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",4600,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if(ez.sellTime>=100){
                            message.react("✅")
                            createDoneMessage("\`Very cool looking Pack you got there! Here, have another Blox Piece to put in there!\`\n+**Blox Piece** 🧩\n+**5200** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",5200,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 9:
                        if((o1>=6)&&(o2>=2)&&(o3>=1)){
                            message.react("✅")
                            createDoneMessage("\`I haven't seen you for... idk... at least 12 hours! Why is that?\`\n+**Blox Piece** 🧩\n+**5900** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",5900,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 10:
                        if(o1>=50000000){
                            message.react("✅")
                            createDoneMessage("\`Jokes aside, I really do believe Riley is close... Closer than we think.\`\n+**Blox Piece** 🧩\n+**6500** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",6500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 11:
                        if(ez.parts>=500){
                            message.react("✅")
                            ez.parts-=500
                            createDoneMessage("\`Thanks for that Ghost Hunter. You're really proving yourself to be useful! Here's yet another Blox Piece!\`\n+**Blox Piece** 🧩\n+**7200** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",7200,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 12:
                        if(o2==1){
                            message.react("✅")
                            createDoneMessage("\`Excellent form... I guess.\`\n+**Blox Piece** 🧩\n+**7800** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",7800,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 13:
                        if(o1>=3){
                            message.react("✅")
                            createDoneMessage("\`I don't usually tell people this, because it is pretty personal but... I once had a girlfriend. She was cross eyed. We'd never see eye to eye. Also quite sure she was seeing someone... one the side.\`\n+**Blox Piece** 🧩\n+**8500** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",8500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 14:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Aha! You finally got all the Blox Pieces! Good job!\`\n+**Blox Piece** 🧩\n+**9100** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",9100,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 15:
                        if(o1==1){
                            message.react("✅")
                            sm.blox = true
                            createDoneMessage("\`You're a natural! You crafted yourself a fine B-L-O-X Hoverboard! I am very proud of you, Ghost Hunter! Sadly, this is where our story ends... But that's okay! You can now continue your journey and explore every nook and cranny in Uni with your nifty new Hoverboard! And who knows... maybe you'll find Riley...\`\n+**B-L-O-X** <:BLOX:871140025016930324>\n+**10000** <:gems:825122942413045791>","https://imgur.com/xAhzj6u.png",10000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
        }
    }else{
        switch(sm.quest)
        {
            case 6:
                switch(sm.task)
                {
                    case 1:
                        if(o1>35){o1=35}
                        if(o2>10){o2=10}
                        o3 = ez.doubloons
                        if(o3>75){o3=75}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #1/19__** : Gimme the Loot\n\n\`Aye! If it ain't another landlubber come to join me crew! My name is Ghost Hunter Captain Finsley! Charmed to meet ya, matey! ... What's that? You're more interested in my Lucky Charm Technology? Well, that there I'll only give ye if you finish some tasks to join me crew! I hear ye wanna prove you're the pirate I need to join me crew? I need you to steal some treasure. Come back when you're done and I might just give ye a reward.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **35** 🏴‍☠️ Pirate Ghosts on The 🏖️ Beach: **${o1}/35**\n• Vacuum **10** 🦜 Parrot Ghosts on The 🏖️ Beach: **${o2}/10**\n• Obtain **75** <:doubloon:825122941746151434> Doubloons from The 🏖️ Beach: **${o3}/75**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>25){o1=25}
                        if(o2>25){o2=25}
                        if(o3>20){o3=20}
                        if(o4>5){o4=5}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #2/19__** : All Hands On Deck\n\n\`First step to joining me crew and getting me Lucky Charm Technology is rounding up some crewmates! Come see me when ye is finished and I'll give ye a reward.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **25** 🤵‍♂️ Businessmen Ghosts in The 🏙️ City: **${o1}/25**\n• Vacuum **25** 👷‍♀️ Worker Ghosts at The 🏗️ Construction Site: **${o2}/25**\n• Vacuum **20** 🏴‍☠️ Pirate Ghosts on The 🏖️ Beach: **${o3}/20**\n• Vacuum **5** 🦜 Parrot Ghosts on The 🏖️ Beach: **${o4}/5**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>2){o1=2}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #3/19__** : Like a Boss\n\n\`There be evil upon the seas! Bosses are terrorizing this here world. You're going to need guts for this task! Prove ye got the guts by beating any 2 Boss Ghosts. I'll be sure to give you a reward, aye?\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Defeat any 💀 Boss **2** times: **${o1}/2**`,message,sm,fs,q)
                        break;
                    case 4:
                        o1 = ez.antenna
                        if(o1>9){o1=9}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #4/19__** : Under the Sea\n\n\`Ye next mission be under the sea! To get to this biome, ye will need to upgrade your antenna to level 9. I'll be sharing my Gems when you're done.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Upgrade your 📡 Antenna to Level **9**: **${o1}/9**`,message,sm,fs,q)
                        break;
                    case 5:
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #5/19__** : Rusty Trusty Sword\n\n\`The Lucky Charm Technology! It be worth it, I swear! But, first... Me first ship went down in the ocean. It now sits underwater with me Trusty Sword. Find me Trusty Sword underwater, and I might reward you for it.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Find ⚔️ Captain Finsley's Sword: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 6:
                        if(o1>50){o1=50}
                        if(o2>15){o2=15}
                        o3 = ez.pearls
                        if(o3>100){o3=100}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #6/19__** : Underwater Wonderland\n\n\`Ye ever seen a mermaid? How about a mermaid ghost? They be real... and under the sea. They be in the underwater biome. Catch some mermaids and divers, and collect some pearls. I'll be waiting here with ye reward.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **50** 🤿 Diver Ghosts at 💦 Underwater: **${o1}/50**\n• Vacuum **15** 🧜‍♀️ Mermaid Ghosts at 💦 Underwater: **${o2}/15**\n• Obtain **100** <:pearl:825122938457686057> Pearls from 💦 Underwater: **${o3}/100**`,message,sm,fs,q)
                        break;
                    case 7:
                        if(o1>35){o1=35}
                        if(o2>30){o2=30}
                        if(o3>30){o3=30}
                        if(o4>10){o4=10}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #7/19__** : Save Our Oceans\n\n\`These here ghosts are polluting me ocean! Paper bags, toxic ooze, the works! You'll be collecting a bunch of ghosts from different biomes to help me clean up this savvy sea home. Return to me for some Gems as a reward.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **35** 🛍️ Paper Bag Ghosts in The <:manhole:825122943133941821> Sewers: **${o1}/35**\n• Vacuum **30** 👨‍🔬 Scientist Ghosts in ☄️ Area 51: **${o2}/30**\n• Vacuum **30** 🤿 Diver Ghosts at 💦 Underwater: **${o3}/30**\n• Vacuum **10** 🧜‍♀️ Mermaid Ghosts at 💦 Underwater: **${o4}/10**`,message,sm,fs,q)
                        break;
                    case 8:
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #8/19__** : Put a Ring On It\n\n\`Twelve more tasks 'til ye get my amazing Lucky Charm Technology! Increasing your chances of getting rare, legendary, and godly pets from pet crates! By quite a lot if I do say so myself... For this next task, you're gonna need a Hoverboard. I wanna see if ye can jump off the top of the cliff into the ring. If ye can do it, I'll reward ye.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Jump through The 🔵 Blue Ring: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 9:
                        o1 = ez.antenna
                        if(o1>10){o1=10}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #9/19__** : Ascending Fire\n\n\`Take caution... Ye be unlocking the volcano biome now. Ye will need to upgrade your antenna to it's max level. Finish and return to me for a big stack of shiny Gems.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Upgrade your 📡 Antenna to Level **10**: **${o1}/10**`,message,sm,fs,q)
                        break;
                    case 10:
                        if(o1>50){o1=50}
                        if(o2>12){o2=12}
                        o3 = ez.diamonds
                        if(o3>150){o3=150}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #10/19__** : Volcano Venture\n\n\`It's time ye venture into the volcano. Ye can enter through the underwater biome, across the coral bridge. A warning for ye... the lava burns. I need ye to collect me several ghosts and diamonds from the volcano. If ye live to tell the tale, report back to me for a reward. May the northen winds guide ye back.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **50** <:islander:825122941963993099> Islander Ghosts in The 🌋 Volcano: **${o1}/50**\n• Vacuum **12** <:magmamonster:825122940290859009> Magma Monster Ghosts in The 🌋 Volcano: **${o2}/12**\n• Obtain **150** 💎 Diamonds from The 🌋 Volcano: **${o3}/150**`,message,sm,fs,q)
                        break;
                    case 11:
                        if(o1>35){o1=35}
                        if(o2>35){o2=35}
                        if(o3>35){o3=35}
                        o4 = ez.diamonds
                        if(o4>75){o4=75}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #11/19__** : Glitters More Than Gold\n\n\`Nine more tasks, and you'll be getting your hands on me Lucky Charm Technology! Ye have proved ye are the bravest. I'll need ye to do some travvelin' to collect some ghosts and diamonds. Collect a variety of ghosts and bring back diamonds from the Volcano. If ye do, I'll consider making ye me first mate... and of course a reward.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **35** <:bandit:825122917930500147> Bandit Ghosts in The 🏜️ Wild West: **${o1}/35**\n• Vacuum **35** <:pharaoh:825122944514523226> Pharaoh Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o2}/35**\n• Vacuum **35** <:islander:825122941963993099> Islander Ghosts in The 🌋 Volcano: **${o3}/35**\n• Obtain **75** 💎 Diamonds from The 🌋 Volcano: **${o4}/75**`,message,sm,fs,q)
                        break;
                    case 12:
                        if(sm.obj4==0){sm.obj1 = ez.gems
                            o2=0}else{o2 = ez.gems - o1}
                        sm.obj4++;
                        if(o2>3000){o2=3000}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #12/19__** : It's Raining Gems\n\n\`Avast ye! I'm going to need ye to fetch me some treasure. Collect a total of 3,000 Gems. I'll be willing to split me treasure with ya!\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Collect **3,000** <:gems:825122942413045791> Gems from anywhere: **${coinToStr(o2)}/3,000**`,message,sm,fs,q)
                        break;
                    case 13:
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #13/19__** : Crew Mascot\n\n\`I hear ye can get me an extra deck hand. We don't want any old scallywag. We want the best of the best! Open Pet Crate #3 and return to me for some loot.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Unbox a 🐶 pet from Pet Crate #3 once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 14:
                        if(ez.iceOpen){o1=1}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #14/19__** : Winter Ghostland\n\n\`A ghost barrier be blocking the Ice Cave entrance. Legend says there be a bonus chest locked inside. You'll be unlocking the Ice Cave. Ye be needing 50 Doubloons, Pearls, and Diamonds. Come find me after you've unlocked it for a reward.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Unlock access to The 🧊 Ice Cave: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 15:
                        if(o1>75){o1=75}
                        if(o2>20){o2=20}
                        o3 = ez.tusks
                        if(o3>175){o3=175}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #15/19__** : Shiver Me Timbers\n\n\`Ye be back for more, aye? This task is more difficult. Ye will need access to the Ice Cave over there. Inside, ye will be collecting me several ghosts and items from the area. Return to me for ye reward. I hear there's an icy chest in that there bonus biome.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **75** <:explorer:825123592290172939> Explorer Ghosts in The 🧊 Ice Cave: **${o1}/75**\n• Vacuum **20** 🐧 Penguin Ghosts in The 🧊 Ice Cave: **${o2}/20**\n• Obtain **175** <:tusk:825122936927027289> Ancient Tusks from The 🧊 Ice Cave: **${o3}/175**`,message,sm,fs,q)
                        break;
                    case 16:
                        if(o1>50){o1=50}
                        if(o2>50){o2=50}
                        if(o3>50){o3=50}
                        o4 = ez.tusks
                        if(o4>100){o4=100}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #16/19__** : Frozen Phantoms\n\n\`Ye be very close to me Lucky Charm Technology. Remember, ye can unbox the best pets much more commonly with it. Ye will be returning to the Ice Cave to collecting me many ghosts and items from the area. Return to me, and I'll be rewarding you with some Gems.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **50** 👷‍♀️ Worker Ghosts in The 🏗️ Construction Site: **${o1}/50**\n• Vacuum **50** 🧑‍🏭 Miner Ghosts in The ⛏️ Mine: **${o2}/50**\n• Vacuum **50** <:explorer:825123592290172939> Explorer Ghosts in The 🧊 Ice Cave: **${o3}/50**\n• Obtain **100** <:tusk:825122936927027289> Tusks from The 🧊 Ice Cave: **${o4}/100**`,message,sm,fs,q)
                        break;
                    case 17:
                        if(o3>10000000){o3=10000000}
                        if(sm.obj4==0){sm.obj1 = ez.gems
                            o2=0}else{o2 = ez.gems - o1}
                        sm.obj4++;
                        if(o2>1500){o2=1500}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #17/19__** : Ecto-version\n\n\`How about you use that Converter Machine again? You know, that machine you helped Ghost Hunter Hans build. If you use it, I can have more loot for me ship! Convert 10 Million Ecto-Tokens into Gems at the Ecto-Token Converter. While you're out and about I need you to collect me 1,500 Gems and you'll get some of the loot.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Convert **10,000,000** <:ectotoken:825122939812315219> Ecto-Tokens to <:gems:825122942413045791> Gems: **${coinToStr(o3)}/10,000,000**\n• Collect **1,500** <:gems:825122942413045791> Gems from anywhere: **${coinToStr(o2)}/1,500**`,message,sm,fs,q)
                        break;
                    case 18:
                        if(o1>15){o1=15}
                        if(o2>15){o2=15}
                        if(o3>15){o3=15}
                        if(o4>15){o4=15}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #18/19__** : Area Hunt\n\n\`Ye have only two more tasks before ye be achieving me Lucky Charm Technology. Return to me after collecting ghosts from several biomes in this area. I'll give ye a list to be sure. I'll be rewarding ye some Gems once you've returned.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Vacuum **15** 🦜 Parrot Ghosts at The 🏖️ Beach: **${o1}/15**\n• Vacuum **15** 🧜‍♀️ Mermaid Ghosts at 💦 Underwater: **${o2}/15**\n• Vacuum **15** <:magmamonster:825122940290859009> Magma Monster Ghosts in The 🌋 Volcano: **${o3}/15**\n• Vacuum **15** 🐧 Penguin Ghosts in The 🧊 Ice Cave: **${o4}/15**`,message,sm,fs,q)
                        break;
                    case 19:
                        o1 = ez.doubloons
                        o2 = ez.pearls
                        o3 = ez.diamonds
                        o4 = ez.tusks
                        if(o1>200){o1=200}
                        if(o2>200){o2=200}
                        if(o3>200){o3=200}
                        if(o4>200){o4=200}
                        createQuestMessage("🗺️ Quest #6 - Ghost Hunter Captain Finsley","📖 **__Task #19/19__** : Lucky Charm Technology\n\n\`A final task for ye, matey! After this, your chances to unbox godly pets will be dramatically increased! I'll be sending ye out to collect items from several biomes in this area, I've written ye me shopping list. Once you've finished, I'll reward ye with me Lucky Charm Technology... and some Gems.\`","https://imgur.com/wxt9Iew.png","📜 __Goals:__",`• Obtain **200** <:doubloon:825122941746151434> Doubloons from The 🏖️ Beach: **${o1}/200**\n• Obtain **200** <:pearl:825122938457686057> Pearls from The 💦 Underwater: **${o2}/200**\n• Obtain **200** 💎 Diamonds from The 🌋 Volcano: **${o3}/200**\n• Obtain **200** <:tusk:825122936927027289> Tusks from The 🧊 Ice Cave: **${o4}/200**`,message,sm,fs,q)
                        break;
                }
                break;
            case 7:
                switch(sm.task)
                {
                    case 1:
                        if(o1>10){o1=10}
                        o2 = ez.acorns
                        if(o2>20){o2=20}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #1/15__** : Blox... Assemble!\n\n\`Another Ghost Hunter!? Ugh, sorry... I am just really cranky in the morning. Anyways, every day new Ghost Hunters arrive at my corals and ask me for guidance. It's tiring! I'm gonna cut this long story short, to continue your journey in Uni, you will need to craft yourself a B-L-O-X Hoverboard. It is a very powerful Hoverboard that without it, you wouldn't be able to reach the following Ghost Hunters. To craft it, you will need to get 14 Blox Pieces. And I have them all! I will give you one Blox Piece for every task you complete for me. Are you down?\`","www.imgur.com/xAhzj6u.png","📜 __Goals:__",`• Vacuum **10** 🦉 Owl Ghosts in The 🏕️ Forest: **${o1}/10**\n• Obtain **20** <:acorn:825122942660509707> Acorns from The 🏕️ Forest: **${o2}/20**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(sm.obj4==0){sm.obj1 = ez.gems
                            o2=0}else{o2 = ez.gems - o1}
                        sm.obj4++;
                        if(o2>5000){o2=5000}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #2/15__** : Gem to the Slaughter\n\n\`One piece down! ... Thirteen more to go... oof. Well, you gotta start somewhere. For your next piece, collect some Gems for me.\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Collect **5,000** <:gems:825122942413045791> Gems from anywhere: **${coinToStr(o2)}/5,000**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        o3 = ez.newspapers
                        o4 = ez.tires
                        if(o3>20){o3=20}
                        if(o4>20){o4=20}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #3/15__** : Free Will Catching\n\n\`So... this is basically blackmailing right? Like, I'm just telling you to do stuff and you do it just because you want something from me... Idk. Anyways, go catch some ghosts would ya!?\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Vacuum **10** 🐈‍⬛ Street Cat Ghosts in The 🏙️ City: **${o1}/10**\n• Vacuum **10** 🗑️ Garbage Bin Ghosts in The 💡 Junkyard: **${o2}/10**\n• Obtain **20** 📰 Newspapers from The 🏙️ City: **${o3}/20**\n• Obtain **20** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o4}/20**`,message,sm,fs,q)
                        break;
                    case 4:
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #4/15__** : Easter Disaster\n\n\`You now that here in Uni, we celebrate all the holidays with special events? Yeah, I am in charge with organizing Easter. Now that I think of it, I can't find my egg basket anywhere... Can you find it for me?\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Find 🧺 Shelly's Egg Basket: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        o3 = ez.badges
                        o4 = ez.meteorites
                        if(o3>20){o3=20}
                        if(o4>20){o4=20}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #5/15__** : Myth Busters\n\n\`You know, I think all that aliens and area 51 stuff is all fake. I would love to be proved wrong tho. Go catch some Zorg ghosts... if they really exist. Ha!\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Vacuum **10** 🤠 Cowboy Ghosts in The 🏜️ Wild West: **${o1}/10**\n• Vacuum **10** 👽 Zorg Ghosts in ☄️ Area 51: **${o2}/10**\n• Obtain **20** <:sherrifbadge:825122941637230613> Sherriff Badges from The 🏜️ Wild West: **${o3}/20**\n• Obtain **20** <:meteorite:825122930047320115> Meteorites from ☄️ Area 51: **${o4}/20**`,message,sm,fs,q)
                        break;
                    case 6:
                        if(o1>5){o1=5}
                        if(o2>4){o2=4}
                        if(o3>3){o3=3}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #6/15__** : Cute Companions\n\n\`I LOVE PETS! I think they are the cutest thing in the world! You seem to have quite a few pets... But you should have much more! Go on a shopping spree!\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Unbox **5** 🐶 pets from Pet Crate #1: **${o1}/5**\n• Unbox **4** 🐶 pets from Pet Crate #2: **${o2}/4**\n• Unbox **3** 🐶 pets from Pet Crate #3: **${o3}/3**`,message,sm,fs,q)
                        break;
                    case 7:
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        o3 = ez.doubloons
                        o4 = ez.pearls
                        if(o3>20){o3=20}
                        if(o4>20){o4=20}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #7/15__** : Quick Expedition\n\n\`Okay, I'll send you out for a last ghost catching task. You don't even have to go far, I just need some parrots and mermaids, and they are really close!\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Vacuum **10** 🦜 Parrot Ghosts on The 🏖️ Beach: **${o1}/10**\n• Vacuum **10** 🧜‍♀️ Mermaid Ghosts at 💦 Underwater: **${o2}/10**\n• Obtain **20** <:doubloon:825122941746151434> Doubloons from The 🏖️ Beach: **${o3}/20**\n• Obtain **20** <:pearl:825122938457686057> Pearls from The 💦 Underwater: **${o4}/20**`,message,sm,fs,q)
                        break;
                    case 8:
                        if(ez.sellTime>=100){o1=1}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #8/15__** : Upgrade X\n\n\`How's your pack doing? Does it fit all these ghosts well? I would upgrade it if I were you... Let's say, to a 'JETPAC'?\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Upgrade your <:pack:825122944204013588> pack to a 'JETPAC': **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 9:
                        if(o1>6){o1=6}
                        if(o2>2){o2=2}
                        if(o3>1){o3=1}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #9/15__** : Dead Ghost's Chest\n\n\`Now that you've unlocked all the bonus biomes, you can open the bonus chests that each one of 'em stores every now and then. Here's a fun little task! Open Gem Chests!\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Open the <:small:825134200482431007> Small Gem Chest **6** times: **${o1}/6**\n• Open the <:medium:825134203821228032> Medium Gem Chest **2** times: **${o2}/2**\n• Open the <:large:825134202127253514> Large Gem Chest **1** time: **${o3}/1**`,message,sm,fs,q)
                        break;
                    case 10:
                        if(o1>50000000){o1=50000000}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #10/15__** : Riley's Disappearance\n\n\`Remember that converter machine that Hans, Riley and Gabe were working on? Well, maybe you already know this, but since the ghosts have arrived, Riley has been missing. Why am I telling you this? Because I believe Riley never left... but... got transformed into a ghost! It's a working theory.\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Convert **50,000,000** <:ectotoken:825122939812315219> Ecto-Tokens to <:gems:825122942413045791> Gems: **${coinToStr(o1)}/50,000,000**`,message,sm,fs,q)
                        break;
                    case 11:
                        o1 = ez.parts
                        if(o1>500){o1=500}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #11/15__** : Sharing is Caring\n\n\`I have a question for you. You've upgraded your antenna to it's max level right? So, why are you still collecting Antenna Parts? Share a little!\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Obtain **500** 🔩 Antenna Parts from anywhere: **${o1}/500**`,message,sm,fs,q)
                        break;
                    case 12:
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #12/15__** : If You Can't Beat Them, Join Them\n\n\`There's been a tradition recently amongst us Ghost Hunter Trainers, to instruct the new Ghost Hunters to jump through colorful rings. I don't really get it, but I guess I'll just join them. Find and Jump through the Yellow Ring.\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Find The 🟡 Yellow Ring: **${o1}/1**\n• Jump through The 🟡 Yellow Ring: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 13:
                        if(o1>3){o1=3}
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #13/15__** : Test of Strength\n\n\`Two Blox Pieces left, Ghost Hunter! After you get them, you'll have yourself a B-L-O-X Hoverboard! I'm excited for you! This next task should be easy for you since you have such a good pet team!\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Defeat any 💀 Boss **3** times: **${o1}/3**`,message,sm,fs,q)
                        break;
                    case 14:
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #14/15__** : Every Last Drop\n\n\`Ghost Hunter! You're about to get your final Blox Piece! And I would like to make it easy for you... I'll just give it to you! Here you... go... where did I put it? Why do I keep misplacing things!? You have a good eye, Ghost Hunter... Could you just find it?\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Find a 🧩 Blox Piece: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 15:
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #15/15__** : Crafty Crafts\n\n\`Have you ever played Minecraft, Ghost Hunter? Then you should be familiar with your final task! Craft the B-L-O-X Hoverboard with all the Blox Pieces you have collected! You should probably use the command %craft.\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Craft the <:BLOX:871140025016930324> B-L-O-X Hoverboard: **${o1}/1**`,message,sm,fs,q)
                        break;
                }
                break;
        }
    }
}
exports.help = {
    name: 'quest2'
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
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
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
    if(((sm.quest==6)&&(sm.task==19))||((sm.quest==7)&&(sm.task==15))||((sm.quest==8)&&(sm.task==19))||((sm.quest==9)&&(sm.task==19))||((sm.quest==10)&&(sm.task==19))){
        sm.quest = sm.quest + 1
        sm.task = 1
    }else{sm.task = sm.task + 1}
    sm.obj1 = 0
    sm.obj2 = 0
    sm.obj3 = 0
    sm.obj4 = 0
    sm.qStarted = false
    ez.gems = ez.gems + g
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
}

function coinToStr(n)
{
    let strC = n.toString()
    let digits = strC.length
    let i = 0;
    let newStrC = "";
    let num = 0;
    for(i ; i<digits ; i++)
    {
        newStrC = newStrC + strC[i];
        num = digits-i-1;
        if((num!=0)&&(num%3==0))
        {
            newStrC = newStrC + ",";
        }
    }
    return newStrC
}
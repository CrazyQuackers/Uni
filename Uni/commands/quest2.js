const Discord = require('discord.js')

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
    let o5 = sm.obj5
    let o6 = sm.obj6
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
                            sm.petLuck = true
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
                break;
            case 8:
                switch(sm.task)
                {
                    case 1:
                        if(o2==1){
                            message.react("✅")
                            createDoneMessage("\`Good job, Ghost Hunter! It's actually a good thing you found me, with all this work I have to do in here, I have got no time to collect data from the outside! You're gonna be sticking around for a while!\`\n+**2000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",2000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if((o1>=50)&&(o2>=20)&&(o3>=50)&&(o4>=20)){
                            message.react("✅")
                            createDoneMessage("\`Yes! This is exactly what I needed. Here, have some Gems.\`\n+**2500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",2500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if(ez.newspapers>=300){
                            message.react("✅")
                            ez.newspapers-=300
                            createDoneMessage("\`Great! Some of theses are so old, they're from last year! Good job, Ghost Hunter!\`\n+**3000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",3000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`1 down, 1 more to go! Thanks for your help, Ghost Hunter!\`\n+**3500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",3500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Thank you so much, Ghost Hunter! You're a life saver! Can I have your phone number? For research purposes... of course...\`\n+**4000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",4000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if(o1>=12000000){
                            message.react("✅")
                            ez.ectoTokens-=12000000
                            createDoneMessage("\`Yes! These Ecto-Tokens will help a lot! Now I can buy the remaining items I need from the local shop! Nice going, Ghost Hunter!\`\n+**4500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",4500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if((o1==1)&&(o2==1)){
                            message.react("✅")
                            createDoneMessage("\`I miss them so much! They're like family to me... And NOTHING is more important than family! Dom taught me that...\`\n+**5000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",5000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if((o1==1)&&(o2==1)&&(o3==1)&&(o4==1)&&(o5==1)&&(o6==1)){
                            message.react("✅")
                            sm.bossLuck = true
                            createDoneMessage("\`We did it! I can't believe it! I can come out of hiding and reunite with my friends again! Thank you so much Ghost Hunter, I couldn't have done it without you! And as an added bonus, the chances of boss pets dropping after defeating bosses are increased for you now! Congrats! You're very close to finishing all the Questlines in Uni... only 2 to go! Good luck!\`\n+**Boss Pet Luck** 💀🍀\n+**6000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227",6000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 9:
                switch(sm.task)
                {
                    case 1:
                        if(o2==1){
                            message.react("✅")
                            createDoneMessage("\`That's it! You solved the first puzzle! My agency left 5 puzzles in different biomes, and I need your help to find them all. With all of them, it will show us how to stop Ghost Hunter Blaze. He's the one that started all of this. But it seems you're more interested in your reward right now, here it is.\`\n+**1500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Looks like the rift is getting bigger... We don't have much more time... maybe a few weeks at most? I was in there for so long... It feels like ages, but I can finally breathe fresh air again. Nevermind though... that's one thing off my To-Do list. Here's your reward.\`\n+**1700** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",1700,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if((ez.acorns>=30)&&(ez.hammers>=30)&&(ez.badges>=30)&&(ez.doubloons>=30)){
                            message.react("✅")
                            ez.acorns-=30
                            ez.hammers-=30
                            ez.badges-=30
                            ez.doubloons-=30
                            createDoneMessage("\`Ew... these items are dripping with ectoplasm... You wouldn't happen to have a napkin, would you? No napkin? Oi... Okay, I'll wipe them off later. You want that reward now, right? Take it.\`\n+**2250** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",2250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(o2==1){
                            message.react("✅")
                            createDoneMessage("\`That's it, another puzzle solved. I need all five of them to decode this message though. I'll send you after the other puzzles soon, but first... Your reward. Take it!\`\n+**1500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if((ez.tires>=50)&&(ez.meteorites>=50)&&(ez.artifacts>=50)&&(ez.pearls>=50)){
                            message.react("✅")
                            ez.tires-=50
                            ez.meteorites-=50
                            ez.artifacts-=50
                            ez.pearls-=50
                            createDoneMessage("\`These will work. I almost have enough items to build the decoder. I just can't believe he did all this... We were friends once, you know? But nevermind that... You want that reward now right?\`\n+**2750** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",2750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if(o2==1){
                            message.react("✅")
                            sm.atom = true
                            createDoneMessage("\`Yep, this is one of the puzzles, only 2 more to go. Then, I can finally figure out how to stop this madness. But, I'm worried. More things are coming out of that rift. The dragon boss, me... who knows what else... Anyway... You've been helping me this long. I think it's time I show some good faith in you. Here's that Atom Pet you've been waiting for!\`\n+**Atom** <:atomPet:874094373938286652>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",0,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if(ez.sellTime==140){
                            message.react("✅")
                            createDoneMessage("\`I wish I had this gear when I was stuck in that rift... What was it like in there? It's... really strange. Things don't make sense there. Up is down and down is up. There's way too many ghosts. Anyways... I'm getting carried away. Here's that reward I promised you.\`\n+**1500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if((ez.socks>=70)&&(ez.gold>=70)&&(ez.diamonds>=70)&&(ez.tusks>=70)){
                            message.react("✅")
                            ez.socks-=70
                            ez.gold-=70
                            ez.diamonds-=70
                            ez.tusks-=70
                            createDoneMessage("\`This is exactly what I needed. Only a few more things before I can translate these clues. Of course, I haven't forgotten about your reward. Cheeky, aren't you?\`\n+**3250** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",3250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 9:
                        if(o2==1){
                            message.react("✅")
                            createDoneMessage("\`That's almost all of the puzzles solved! We only need one more now. I can't thank you enough for all of your help. While you were out, I took some time to spy on Ghost Hunter Blaze... I learned something new. I think there's someone else on the other side of the rift... Something strange is going on here... You've listened to me pout enough. Take your reward... Only three more tasks to go.\`\n+**1750** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",1750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 10:
                        if(o6==1){
                            message.react("✅")
                            createDoneMessage("\`That's everything I need to finish the decoder now! Soon, I'll be able to read the instructions... And, I'll finally be able to put a stop to his madness... He was my friend, but it's too late now. Anyway, Here's that reward. We're so close to figuring this out.\`\n+**1000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",1000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 11:
                        if(o1>=30){
                            message.react("✅")
                            createDoneMessage("\`Got any luck? You got a lot of research so this will work. I'll pass this onto my agency. Got a nice chunk of Gems for you as a reward.\`\n+**6000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",6000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 12:
                        if(o2==1){
                            message.react("✅")
                            sm.badge = true
                            createDoneMessage("\`This is it! That's the last piece of this puzzle. I can't believe you did it! Now to read... Wait... this can't be right. That doesn't make any sense... why would they-? It says here that... Ghost Hunter Blaze is with the Agency! He's working with them to help close the rift!? This is actually great news! Well, Ghost Hunter... You've earned The Ghost Hunter Badge, thank you for all of your help! Wait, now that I'm thinking about it... You should defenitely head to the Volcano and help Blaze! You've finished your training, there's no reason not too.. and I'm sure Blaze could really use a good hand like yours! Good luck Ghost Hunter, with your final Quest!\`\n+**Ghost Hunter Badge** <:ghosthunterbadge:874405583959228477>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952",0,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 10:
                switch(sm.task)
                {
                    case 1:
                        if((o1>=15)&&(o2>=15)&&(o3>=15)&&(o4>=15)){
                            message.react("✅")
                            createDoneMessage("\`They don't know you're working with me, right? Good... Very good. I can't let them know what I know. They'll find me for sure. Here's some Gems, but keep quiet...\`\n+**1500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if((o1>=15)&&(o2>=15)&&(o3>=15)&&(o4>=15)){
                            message.react("✅")
                            createDoneMessage("\`That was the true test. You went there, and they didn't think you were working for me! We have to be careful, you and I. We're in this together. Here's some Gems, but keep quiet...\`\n+**1750** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if((o1>=15)&&(o2>=15)&&(o3>=15)&&(o4>=15)){
                            message.react("✅")
                            createDoneMessage("\`You found nothing? Of course... She's clean and safe to talk to, but others may not be... Just be cautious... who knows which Ghost Hunters are working with the enemy... Take your Gems.\`\n+**2000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",2000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if((o1==1)&&(o2>=10000000)){
                            message.react("✅")
                            createDoneMessage("\`Yes... this is what we need... it's enough, I think. He's always so stingy, but he's the smartest man I know. Here's those Gems. It'll be getting there, his payment. Don't worry... this tech is important.\`\n+**2250** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",2250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if(sm.sky){
                            message.react("✅")
                            createDoneMessage("\`This board is exactly what we needed... Did you make sure no one saw you? We don't want any unwanted attention. Yes, your reward, have some Gems.\`\n+**2500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",2500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if((o1>=8)&&(o2>=8)&&(o3>=8)&&(o4>=8)){
                            message.react("✅")
                            createDoneMessage("\`I'm not crazy! They say it's classified. Take these Gems and no more questions!\`\n+**1250** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if((o1>=8)&&(o2>=8)&&(o3>=8)&&(o4>=8)){
                            message.react("✅")
                            createDoneMessage("\`You gotta make sure you aren't followed! Take these Gems... I said no more questions!\`\n+**1500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if((o1>=8)&&(o2>=8)&&(o3>=8)&&(o4>=8)){
                            message.react("✅")
                            createDoneMessage("\`Shh! I heard something! Hm... it was just a magma monster ghost. Take these Gems and be careful!\`\n+**1750** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1750,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 9:
                        if((ez.newspapers>=25)&&(ez.tires>=25)&&(ez.socks>=25)&&(ez.hammers>=50)){
                            message.react("✅")
                            ez.newspapers-=25
                            ez.tires-=25
                            ez.socks-=25
                            ez.hammers-=50
                            createDoneMessage("\`You still want to know? No, you could still be working for them. Take these Gems and leave it be.\`\n+**1000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 10:
                        if((ez.badges>=50)&&(ez.meteorites>=50)&&(ez.gold>=50)&&(ez.artifacts>=50)){
                            message.react("✅")
                            ez.badges-=50
                            ez.meteorites-=50
                            ez.gold-=50
                            ez.artifacts-=50
                            createDoneMessage("\`As long as we can build this machine, we can survive, and I'll tell you about it. Take. These. Gems. Now.\`\n+**1500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",1500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 11:
                        if((ez.doubloons>=100)&&(ez.pearls>=100)&&(ez.diamonds>=100)&&(ez.tusks>=200)){
                            message.react("✅")
                            ez.doubloons-=100
                            ez.pearls-=100
                            ez.diamonds-=100
                            ez.tusks-=200
                            createDoneMessage("\`Yes... YES!!! My machine is nearly complete! MWAHAHAHAHAHA... I mean, come on... it felt like and evil laugh would just fit so well in there. Here, your reward, take these Gems. Almost done.\`\n+**3000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",3000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 12:
                        if((o1>=15)&&(o2>=10)&&(o3>=5)){
                            message.react("✅")
                            createDoneMessage("\`Hm... None of these will work, but thanks for the data. I'll have to think of something else to take the place of my power source... For now, take these Gems.\`\n+**7500** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",7500,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 13:
                        if((o1==1)&&(o2==1)&&(o3==1)&&(o4==1)){
                            message.react("✅")
                            sm.surfer = true
                            createDoneMessage("\`Ghost Hunter, It's time... I'm gonna send these bosses you've defeated through the rift, and activate the stabilizer. When I tell you to kill the power, kill the power. Ready? KILL THE POWER! Bosses Sent. Stabilizer Initiated. Process Complete! We did it, Ghost Hunter! The rift has stopped growing! WE SAVED UNI! Let's gooooooo!!! This reward is for you, Hunter! My Atom Surfer Hoverboard! Take good care of it! Wow... I can't believe we actually did it... I can't wait to tell Luna... and Riley... and Gabe, Adam, Liz, Jesse, Hans, Captain Finsley and Shelly! This is the end of your quests in Uni, Ghost Hunter. What to do now? Well... Idk... Hey, what's that? Next to the rift? It says... '%rebirth'... I wonder what that means.\`\n+**Atom Surfer** <:atomsurfer:875150132277039114>\n+**Rebirth Unlocked** ♻️\n+**9000** <:gems:825122942413045791>","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526",9000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
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
                        createQuestMessage("🗺️ Quest #7 - Ghost Hunter Shelly","📖 **__Task #1/15__** : Blox... Assemble!\n\n\`Another Ghost Hunter!? Ugh, sorry... I am just really cranky in the morning. Anyways, every day new Ghost Hunters arrive at my corals and ask me for guidance. It's tiring! I'm gonna cut this long story short, to continue your journey in Uni, you will need to craft yourself a B-L-O-X Hoverboard. It is a very powerful Hoverboard that without it, you wouldn't be able to reach the following Ghost Hunters. To craft it, you will need to get 14 Blox Pieces. And I have them all! I will give you one Blox Piece for every task you complete for me. Are you down?\`","https://imgur.com/xAhzj6u.png","📜 __Goals:__",`• Vacuum **10** 🦉 Owl Ghosts in The 🏕️ Forest: **${o1}/10**\n• Obtain **20** <:acorn:825122942660509707> Acorns from The 🏕️ Forest: **${o2}/20**`,message,sm,fs,q)
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
            case 8:
                switch(sm.task)
                {
                    case 1:
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #1/8__** : Found in the Dark\n\n\`What... are... you... doing... here? What...? How did you find me? You weren't supposed to find me! I designed this place so no Ghost Hunter will be able to find it... Oh of course! You've got a B-L-O-X Hoverboard! How did I not think of that?! Augh, Ghost Hunter Shelly ruining everything once again! Listen, I can explain what happened to me, why I disappeared and what I'm doing but there's no time right now! Just trust me, Ghost Hunter! You need to go jump through the purple ring!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Jump through The 🟣 Purple Ring: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>50){o1=50}
                        if(o2>20){o2=20}
                        if(o3>50){o3=50}
                        if(o4>20){o4=20}
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #2/8__** : Explanation Time\n\n\`So you probably know that I left the lab in Area 51 after the ghosts started to appear. I knew there was some way of making all the ghosts go away so I could work in peace! So I ran away, far away, so no ghost would find me... I just didn't realize at the time that it would mean that also no Ghost Hunter would find me. Anyways, I figured out that ghosts are actually friendly creatures and mean no harm, but are influenced by the Boss Ghosts! I'll explain what happened next if you go out and catch some ghosts for my research!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Vacuum **50** 🤵‍♂️ Businessmen Ghosts in The 🏙️ City: **${o1}/50**\n• Vacuum **20** 🐈‍⬛ Street Cat Ghosts from The 🏙️ City: **${o2}/20**\n• Vacuum **50** 🏴‍☠️ Pirate Ghosts on The 🏖️ Beach: **${o3}/50**\n• Vacuum **20** 🦜 Parrot Ghosts from The 🏖️ Beach: **${o4}/20**`,message,sm,fs,q)
                        break;
                    case 3:
                        o1 = ez.newspapers
                        if(o1>300){o1=300}
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #3/8__** : New News Newspaper\n\n\`Back to the story. It took a lot of time but recently I came to the conclusion that if we are able to defeat all the boss ghosts, Uni will be free of ghosts again! How great does that sound? What I'm working on will increase our chances of getting boss pets after defeating a boss! These boss pets are really powerful and can defenitely help us defeat bosses much faster! Alright, what I need next is a lot of newspapers! You can get them from catching ghosts in the City.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Obtain **300** 📰 Newspapers from The 🏙️ City: **${o1}/300**`,message,sm,fs,q)
                        break;
                    case 4:
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #4/8__** : 3 Papers & 1 Leather\n\n\`Alright, Ghost Hunter! There are 2 books that specialize in boss pets, and I need to read them both in order to understand what I'm missing in my formula. The newspapers you've collected from the previous task can help us craft the first book! Go ahead, do it!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Craft the 📔 Boss Pet Book: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 5:
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #5/8__** : Need a Hand?\n\n\`Alright, the other book is somewhere here. I am too busy working and I want to read the book you've just crafted. Could you find it for me?\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Find 📕 Ghost Hunter Riley's Boss Book: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 6:
                        if(o1>12000000){o1=12000000}
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #6/8__** : Confusing Currencies\n\n\`These 2 books change everything I thought I knew about boss pets! I think we have to take a different approach. Could you please give me Ecto-Tokens? It looks like we need a lot of 'em, and they need to be fresh! So only new ones you get from selling ghosts.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Collect **12 Million** <:ectotoken:825122939812315219> Ecto-Tokens from selling 👻 Ghosts: **${coinToStr(o1)}/12,000,000**`,message,sm,fs,q)
                        break;
                    case 7:
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #7/8__** : Catching Up\n\n\`Hey, how's Ghost Hunter Hans and Gabe doing? I was working with them on a converter machine in the lab before I left. The converter machine has been upgraded? Huh, I wouldn't have thought Hans would have continued working on it after I left... I think he had a crush on me. Anyways, I would like you to go tell them that I'm safe and will be returning soon. I can't come with you, too much work to do. HINT 💡 - \`||\`use the command %talk\`||","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Talk to ☄️ Ghost Hunter Hans: **${o1}/1**\n• Talk to 🏕️ Ghost Hunter Gabe: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 8:
                        createQuestMessage("🗺️ Quest #8 - Ghost Hunter Riley","📖 **__Task #8/8__** : Global Domination\n\n\`Ghost Hunter... I think we are ready! Let's go out there, and fight the boss ghosts! If we manage to do this dangerous task, my formula will be complete and our chances of receiving boss pets will be increased!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227","📜 __Goals:__",`• Defeat <:ghastlytree:825122934221307955> Ghastly Tree: **${o1}/1**\n• Defeat <:georgethegorilla:825122935081664632> George the Gorilla: **${o2}/1**\n• Defeat <:sludge:825122930471075880> Sludge: **${o3}/1**\n• Defeat <:subjectone:825122932815691847> Subject One: **${o4}/1**\n• Defeat <:kingkrab:825122934183559239> King Krab: **${o5}/1**\n• Defeat <:magmoraug:825122942768644136> Magmoraug: **${o6}/1**`,message,sm,fs,q)
                        break;
                }
                break;
            case 9:
                switch(sm.task)
                {
                    case 1:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #1/12__** : Do You Like Puzzles?\n\n\`Hey there... the name is Ghost Hunter Luna, and I've been sent here to keep an eye on things... My agency has been working to put a stop to this Ghost Invasion... It's gotten way out of hand. I was actually caught in crossfire of this project. Luckily, the volcano rift finally set me free. The rift opened just enough for me to get out, but... if it continues growing, this world might be doomed... I know Ghost Hunter Blaze is trying to stabilize it and use it for something, but I don't know what... You're going to help me, and I'll be sure to reward you. I have an Atom Pet for you. If you aren't an accomplice to all of this madness you could help me investigate... Prove that I can trust you by solving the Mine Puzzle. Use the command %puzzle to learn more. Got it? Return to me for a reward. Hurry now!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Solve the 🎯 Mine Puzzle: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 2:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #2/12__** : Stop, Boss Time\n\n\`I'm trying to sneak into the Volcano to investigate Ghost Hunter Blaze, but there's a problem. This dragon Boss ghost keeps getting in my way. I think it's called Magmoraug... Weird name. Anyways, go fight the dragon boss once, and I will give you some Gems for it.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Defeat <:magmoraug:825122942768644136> Magmoraug once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 3:
                        o1 = ez.acorns
                        o2 = ez.hammers
                        o3 = ez.badges
                        o4 = ez.doubloons
                        if(o1>30){o1=30}
                        if(o2>30){o2=30}
                        if(o3>30){o3=30}
                        if(o4>30){o4=30}
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #3/12__** : The Collection\n\n\`You're well on your way to getting the Atom Pet... I'll give him to you when we are half-way done with our journeys. At the end of them, I'll give you a special reward for completing all of your Ghost Hunter Trainings! I've noticed you're a great hufflepu- I mean you're great at finding things. I need you to collect 30 items from several biomes. These items are important... Why do I need them? That's for me to know, and for you to find out later. If you get them, I'll give you a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Obtain **30** <:acorn:825122942660509707> Acorns from The 🏕️ Forest: **${o1}/30**\n• Obtain **30** 🔨 Hammers from The 🏗️ Construction Site: **${o2}/30**\n• Obtain **30** <:sherrifbadge:825122941637230613> Sherriff Badges from The 🏜️ Wild West: **${o3}/30**\n• Obtain **30** <:doubloon:825122941746151434> Doubloons from The 🏖️ Beach: **${o4}/30**`,message,sm,fs,q)
                        break;
                    case 4:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #4/12__** : Trash Jump\n\n\`Three more tasks until the Atom Pet. Then, I got a few more tasks for the special badge! Time to hone your skills. You're going to solve the puzzle found at the Junkyard. With all five puzzles solved, I'll finally know how to stop Ghost Hunter Blaze... but you just want a reward, right?\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Solve the 🎯 Junkyard Puzzle: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 5:
                        o1 = ez.tires
                        o2 = ez.meteorites
                        o3 = ez.artifacts
                        o4 = ez.pearls
                        if(o1>50){o1=50}
                        if(o2>50){o2=50}
                        if(o3>50){o3=50}
                        if(o4>50){o4=50}
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #5/12__** : Item Mayhem\n\n\`So, I'm gonna need a lot more items if you expect me to figure out what's really going on here. Ghost Hunter Blaze might be on to us, so we need to act fast. Collect 50 items from several biomes. Got it? Good! Return to me for a reward. Make sure he doesn't send people to follow you.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Obtain **50** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o1}/50**\n• Obtain **50** <:meteorite:825122930047320115> Meteorites from ☄️ Area 51: **${o2}/50**\n• Obtain **50** <:artifact:825122914210414592> Artifacts from The <:pyramid:825122937236357164> Pyramids: **${o3}/50**\n• Obtain **50** <:pearl:825122938457686057> Pearls from 💦 Underwater: **${o4}/50**`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #6/12__** : Cityscape Parkour\n\n\`We need to solve another puzzle. I got word this one is in the City. You need to find the clue located there and solve it. Think you can do it? Perfect. Better hurry, we don't want anyone else finding these clues. Top secret stuff, you know? After you solve it, I'll reward you with the Atom Pet I've been talking so much about.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Solve the 🎯 City Puzzle: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 7:
                        if(ez.sellTime==140){o1=1}
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #7/12__** : The Coolest Gear In Town\n\n\`My tasks aren't done yet. I still have a special badge for you to earn, so stick around. For the upcoming tasks, it'll be much easier if you get better equipment. Go to the shop and upgrade your pack to the max! The Distorted Pack! Finish this task, and come back to me for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Upgrade your <:pack:825122944204013588> pack to a 'Distorted Pack': **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 8:
                        o1 = ez.socks
                        o2 = ez.gold
                        o3 = ez.diamonds
                        o4 = ez.tusks
                        if(o1>70){o1=70}
                        if(o2>70){o2=70}
                        if(o3>70){o3=70}
                        if(o4>70){o4=70}
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #8/12__** : From Socks to Riches\n\n\`Now that you've upgraded your equipment, go try it out! You need to collect 70 items from several biomes. Once you're done, I got a few fun tasks for you... and a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Obtain **70** 🧦 Socks from The <:manhole:825122943133941821> Sewers: **${o1}/70**\n• Obtain **70** <:goldbar:825122939006746625> Gold Bars from The ⛏️ Mine: **${o2}/70**\n• Obtain **70** 💎 Diamonds from The 🌋 Volcano: **${o3}/70**\n• Obtain **70** <:tusk:825122936927027289> Ancient Tusks from The 🧊 Ice Cave: **${o4}/70**`,message,sm,fs,q)
                        break;
                    case 9:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #9/12__** : Desert Dash\n\n\`Ghost Hunter Blaze and I used to be co-workers in Area 51... It was fun to work together... But... he started working on a top-secret project about Ghosts. He's what caused this mess. That's why I need to stop him, but enough about that. You're taking on another puzzle now. Your task is to find the clue in the Wild West and solve it. Return to me for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Solve the 🎯 Wild West Puzzle: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 10:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #10/12__** : Gadget Scavenge\n\n\`Just a few more tasks until you get the special badge and I can finally figure out how to stop Ghost Hunter Blaze. This time I'm sending you on a different task. I need the decoder gadget in order to fully translate the clues. Unfortunately, my agency hid it around Uni in pieces. It's up to you now. Find all five gadget fragments and then craft them together and return to me for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Find a 🏹 Gadget Fragment: **${o1}/1**\n• Find a 🏹 Gadget Piece: **${o2}/1**\n• Find a 🏹 Gadget Particle: **${o3}/1**\n• Find a 🏹 Gadget Shard: **${o4}/1**\n• Find a 🏹 Gadget Scrap: **${o5}/1**\n• Craft the 📟 Decoder Gadget: **${o6}/1**`,message,sm,fs,q)
                        break;
                    case 11:
                        if(o1>30){o1=30}
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #11/12__** : Classified Research\n\n\`So, I heard a tip that Blaze actually created a new pet class called Classified... There's only one pet in this class and it hides in Pet Crate #1, but it's really good at hiding. I don't expect you to get it... But, maybe you could at least try to get some info on it? Go unbox a lot of pets... maybe you'll find it. Come back when you're done for a reward. This is really important research.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Unbox **30** 🐶 Pets from Pet Crate #1: **${o1}/30**`,message,sm,fs,q)
                        break;
                    case 12:
                        createQuestMessage("🗺️ Quest #9 - Ghost Hunter Luna","📖 **__Task #12/12__** : The Ghost Hunter Badge\n\n\`This is it, my friend. We've come a long way. Finish this task, and I'll provide you with the pristine Ghost Hunter Badge! It represents perseverance, dedication, and most importantly, Completed Ghost Hunter Training! For your final task, you are gonna solve the final puzzle. You can find it at the Beach. Once you've finished, I will finally have all the clues and the decoder. We can find out how to stop him! Return with the puzzle solved and I'll give you the final reward, The Ghost Hunter Badge!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952","📜 __Goals:__",`• Solve the 🎯 Beach Puzzle: **${o2}/1**`,message,sm,fs,q)
                        break;
                }
                break;
            case 10:
                switch(sm.task)
                {
                    case 1:
                        if(o1>15){o1=15}
                        if(o2>15){o2=15}
                        if(o3>15){o3=15}
                        if(o4>15){o4=15}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #1/13__** : You're My Eyes\n\n\`HUMAN! Ah... Ghost Hunter, did I startle you? Good... Good... Good reflexes. Sorry Hunter, I've been living in this Volcano for weeks! It's done wonders for my tan... Why? Why not? There's a rift forming, a rift that will destroy this world! It's going to open here. I don't know when. Oh... My name's Ghost Hunter Blaze! I'm building a device to stabilize the rift, and you're gonna help me! I'll give you my special Atom Surfer Hoverboard in exchange! One last thing, the enemy ghosts are watching me... every single move! They don't know that I'm trying to stop them so you can't let them see you... Now that we're both on board, I need you to catch some ghosts from the first area for me... Yes, of course I'll reward you well.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Vacuum **15** 🤵‍♂️ Businessmen Ghosts in The 🏙️ City: **${o1}/15**\n• Vacuum **15** 🧑‍🔧 Mechanic Ghosts in The 💡 Junkyard: **${o2}/15**\n• Vacuum **15** 🛍️ Paper Bag Ghosts in The <:manhole:825122943133941821> Sewers: **${o3}/15**\n• Vacuum **15** 👷‍♀️ Worker Ghosts in The 🏗️ Construction Site: **${o4}/15**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>15){o1=15}
                        if(o2>15){o2=15}
                        if(o3>15){o3=15}
                        if(o4>15){o4=15}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #2/13__** : An Irregular Regular Task\n\n\`You're getting there. If you prove yourself, I'll give you that Atom Surfer Hoverboard. Next stop, you'll be heading to the Wild West to catch some more ghosts for me from that area. I'll reward you again when you're done. Keep it hush.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Vacuum **15** <:bandit:825122917930500147> Bandit Ghosts in The 🏜️ Wild West: **${o1}/15**\n• Vacuum **15** 👨‍🔬 Scientist Ghosts in ☄️ Area 51: **${o2}/15**\n• Vacuum **15** 🧑‍🏭 Miner Ghosts in The ⛏️ Mine: **${o3}/15**\n• Vacuum **15** <:pharaoh:825122944514523226> Pharaoh Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o4}/15**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>15){o1=15}
                        if(o2>15){o2=15}
                        if(o3>15){o3=15}
                        if(o4>15){o4=15}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #3/13__** : Undercover Underwater\n\n\`Ghost Hunter Luna sent you, right? She knows where I am. She thinks I didn't notice her spying on me but she was so obvious! Anyways, we need to scope out the area she's in. Catch some more ghosts from the third area. Be cautious about it. This is an excuse to stakeout the area... see who's spying. I'll reward you after.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Vacuum **15** 🏴‍☠️ Pirate Ghosts on The 🏖️ Beach: **${o1}/15**\n• Vacuum **15** 🤿 Diver Ghosts at 💦 Underwater: **${o2}/15**\n• Vacuum **15** <:islander:825122941963993099> Islander Ghosts in The 🌋 Volcano: **${o3}/15**\n• Vacuum **15** <:explorer:825123592290172939> Explorer Ghosts in The 🧊 Ice Cave: **${o4}/15**`,message,sm,fs,q)
                        break;
                    case 4:
                        if(o2>10000000){o2=10000000}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #4/13__** : Converto-matic\n\n\`Hm... I don't have enough to afford it, but we need to buy some tech from Ghost Hunter Adam. You'll be selling your ghosts and converting Ecto-Tokens into Gems for me. That will give us enough to actually afford his tech. I'll give you a reward, but don't tell him I'm here.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Sell your 👻 Ghosts once: **${o1}/1**\n• Convert **10,000,000** <:ectotoken:825122939812315219> Ecto-Tokens to <:gems:825122942413045791> Gems: **${coinToStr(o2)}/10,000,000**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(sm.sky){o1=1}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #5/13__** : Adam's Tech\n\n\`Alright Hunter, we need to get one of Adam's Tech in order to build the stabilizer for the rift... Head to Adam's Hoverboard Shop and purchase the Sky Surfer Hoverboard. Come back to me for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Purchase the Sky Surfer Hoverboard: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 6:
                        if(o1>8){o1=8}
                        if(o2>8){o2=8}
                        if(o3>8){o3=8}
                        if(o4>8){o4=8}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #6/13__** : The Major Ghost Hunt\n\n\`You're getting closer to the Atom Surfer Board but don't tell them I have it. I took it... It was mine. Who's them? People that know I know stuff... Too much stuff. I did a lot of experiments... Enough chat! Collect 8 special ghosts from each biome in the first area. I'll reward you and talk more.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Vacuum **8** 🐈‍⬛ Street Cat Ghosts in The 🏙️ City: **${o1}/8**\n• Vacuum **8** 🗑️ Garbage Bin Ghosts in The 💡 Junkyard: **${o2}/8**\n• Vacuum **8** 🐀 Rat Ghosts in The <:manhole:825122943133941821> Sewers: **${o3}/8**\n• Vacuum **8** <:pigeon:825122931721371690> Pigeon Ghosts in The 🏗️ Construction Site: **${o4}/8**`,message,sm,fs,q)
                        break;
                    case 7:
                        if(o1>8){o1=8}
                        if(o2>8){o2=8}
                        if(o3>8){o3=8}
                        if(o4>8){o4=8}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #7/13__** : Peek-a-Boo\n\n\`My expirements? I made things... things that they marked classified. Just be careful, no one can know! Quick! No questions! Collect 8 special ghosts from each biome in the second area and I'll reward you.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Vacuum **8** 🤠 Cowboy Ghosts in The 🏜️ Wild West: **${o1}/8**\n• Vacuum **8** 👽 Zorg Ghosts in ☄️ Area 51: **${o2}/8**\n• Vacuum **8** 🪨 Rock Ghosts in The ⛏️ Mine: **${o3}/8**\n• Vacuum **8** <:mummy:825122924318556200> Mummy Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o4}/8**`,message,sm,fs,q)
                        break;
                    case 8:
                        if(o1>8){o1=8}
                        if(o2>8){o2=8}
                        if(o3>8){o3=8}
                        if(o4>8){o4=8}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #8/13__** : Spooky Waters\n\n\`Continue working like this and you'll be getting the Atom Surfer Board in no time! Once again! Collect 8 special ghosts from each biome in the third area and I'll reward you.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Vacuum **8** 🦜 Parrot Ghosts on The 🏖️ Beach: **${o1}/8**\n• Vacuum **8** 🧜‍♀️ Mermaid Ghosts at 💦 Underwater: **${o2}/8**\n• Vacuum **8** <:magmamonster:825122940290859009> Magma Monster Ghosts in The 🌋 Volcano: **${o3}/8**\n• Vacuum **8** 🐧 Penguin Ghosts in The 🧊 Ice Cave: **${o4}/8**`,message,sm,fs,q)
                        break;
                    case 9:
                        o1 = ez.newspapers
                        o2 = ez.tires
                        o3 = ez.socks
                        o4 = ez.hammers
                        if(o1>25){o1=25}
                        if(o2>25){o2=25}
                        if(o3>25){o3=25}
                        if(o4>50){o4=50}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #9/13__** : Urban Jungle\n\n\`You really want to know... everything? I'm not sure I can trust you yet... prove it to me first. Go collect items from every biome in the first area. What are you waiting for? If you stop asking questions, I'll reward you well.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Collect **25** 📰 Newspapers from The 🏙️ City: **${o1}/25**\n• Collect **25** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o2}/25**\n• Collect **25** 🧦 Socks from The <:manhole:825122943133941821> Sewers: **${o3}/25**\n• Collect **50** 🔨 Hammers from The 🏗️ Construction Site: **${o4}/50**`,message,sm,fs,q)
                        break;
                    case 10:
                        o1 = ez.badges
                        o2 = ez.meteorites
                        o3 = ez.gold
                        o4 = ez.artifacts
                        if(o1>50){o1=50}
                        if(o2>50){o2=50}
                        if(o3>50){o3=50}
                        if(o4>50){o4=50}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #10/13__** : Desert Sunset\n\n\`Look! There are things you don't know about our world. You're still learning. There are people that... I can't say... Go collect items from every biome in the second area. Come back for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Collect **50** <:sherrifbadge:825122941637230613> Sherriff Badges from The 🏜️ Wild West: **${o1}/50**\n• Collect **50** <:meteorite:825122930047320115> Meteorites from ☄️ Area 51: **${o2}/50**\n• Collect **50** <:goldbar:825122939006746625> Gold Bars from The ⛏️ Mine: **${o3}/50**\n• Collect **50** <:artifact:825122914210414592> Artifacts from The <:pyramid:825122937236357164> Pyramids: **${o4}/50**`,message,sm,fs,q)
                        break;
                    case 11:
                        o1 = ez.doubloons
                        o2 = ez.pearls
                        o3 = ez.diamonds
                        o4 = ez.tusks
                        if(o1>100){o1=100}
                        if(o2>100){o2=100}
                        if(o3>100){o3=100}
                        if(o4>200){o4=200}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #11/13__** : Sandy Shores\n\n\`The Atom Surfer Board is within your reach... Only three more tasks to complete. A final item task... Collect items from every biome in the third area. Come back for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Collect **100** <:doubloon:825122941746151434> Doubloons from The 🏖️ Beach: **${o1}/100**\n• Collect **100** <:pearl:825122938457686057> Pearls from 💦 Underwater: **${o2}/100**\n• Collect **100** 💎 Diamonds from The 🌋 Volcano: **${o3}/100**\n• Collect **200** <:tusk:825122936927027289> Ancient Tusks from The 🧊 Ice Cave: **${o4}/200**`,message,sm,fs,q)
                        break;
                    case 12:
                        if(o1>15){o1=15}
                        if(o2>10){o2=10}
                        if(o3>5){o3=5}
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #12/13__** : Replacement Search\n\n\`If I'm going to give you my power source, the Atom Surfer Board, then I'm gonna need a replacement. I think pets will do. Collect data from pets by unboxing different pet crates multiple times. I gave you a list. Come back for a reward.\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Unbox **15** 🐶 Pets from Pet Crate #1: **${o1}/15**\n• Unbox **10** 🐶 Pets from Pet Crate #2: **${o2}/10**\n• Unbox **5** 🐶 Pets from Pet Crate #3: **${o3}/5**`,message,sm,fs,q)
                        break;
                    case 13:
                        createQuestMessage("🗺️ Quest #10 - Ghost Hunter Blaze","📖 **__Task #13/13__** : Uni Champion\n\n\`Alright Hunter! This is your final task in Uni! And this one is extremely important... I mean, our entire world is in stake here! You helped me build the stabilizer to finally work, and together, we will stop this rift from destroying our beloved world! We just need to make a diversion... something that will stop the enemy ghosts on the other side of this rift for just a few moments... Then, we will have enough time to stabilize the rift and save our world! Ooo, I got it Ghost Hunter! Let's send what they sent here, back to them! The Bosses! You need to go defeat some Bosses so we can put them in the rift! Come back as quickly as you can so we can save Uni!\`","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526","📜 __Goals:__",`• Defeat <:ghastlytree:825122934221307955> Ghastly Tree once: **${o1}/1**\n• Defeat <:georgethegorilla:825122935081664632> George the Gorilla once: **${o2}/1**\n• Defeat <:subjectone:825122932815691847> Subject One once: **${o3}/1**\n• Defeat <:kingkrab:825122934183559239> King Krab once: **${o4}/1**`,message,sm,fs,q)
                        break;
                }
                break;
            case 11:
                const noMoreEmbed = new Discord.MessageEmbed()
                .setColor(6340040)
                .setAuthor(`${message.author.username}'s Questline`,message.author.avatarURL())
                .setDescription("**You have finished all your quests!**\n\nTry using the command **\'%rebirth\'** and see what happens...")
                .setThumbnail("https://static.wikia.nocookie.net/ghost-simulator-roblox/images/e/e0/AoL_Trio.png/revision/latest?cb=20210511033242")
                message.channel.send({ embed: noMoreEmbed });
                break;
        }
    }
}
exports.help = {
    name: 'quest2'
}

function createQuestMessage(t,d,u,n,v,message,sm,fs,q)
{
    if(u=="https://imgur.com/xAhzj6u.png"){u="https://static.wikia.nocookie.net/ghost-simulator-roblox/images/7/72/Screen_Shot_2020-02-12_at_4.47.13_PM.png/revision/latest/scale-to-width-down/350?cb=20200503093253"}
    const questEmbed = new Discord.MessageEmbed()
    .setColor(16776960)
    .setTitle(t)
    .setAuthor(`${message.author.username}'s Questline`,message.author.avatarURL())
    .setDescription(d)
    .setThumbnail(u)
    .addField(n,v)
    message.channel.send({ embed: questEmbed });
    sm.qStarted = true
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
}

function createDoneMessage(d,u,g,fs,db,q,ez,message,sm)
{
    if(u=="https://imgur.com/xAhzj6u.png"){u="https://static.wikia.nocookie.net/ghost-simulator-roblox/images/7/72/Screen_Shot_2020-02-12_at_4.47.13_PM.png/revision/latest/scale-to-width-down/350?cb=20200503093253"}
    const doneEmbed = new Discord.MessageEmbed()
    .setColor(255)
    .setTitle(`Quest #${sm.quest} - Task #${sm.task} - Done`)
    .setAuthor(`${message.author.username}'s Questline`,message.author.avatarURL())
    .setDescription(d)
    .setThumbnail(u)
    message.channel.send({ embed: doneEmbed });
    if(((sm.quest==6)&&(sm.task==19))||((sm.quest==7)&&(sm.task==15))||((sm.quest==8)&&(sm.task==8))||((sm.quest==9)&&(sm.task==12))||((sm.quest==10)&&(sm.task==13))){
        sm.quest = sm.quest + 1
        sm.task = 1
    }else{sm.task = sm.task + 1}
    sm.obj1 = 0
    sm.obj2 = 0
    sm.obj3 = 0
    sm.obj4 = 0
    sm.obj5 = 0
    sm.obj6 = 0
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
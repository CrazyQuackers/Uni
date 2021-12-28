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
                        if(o1==1){
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
                            ez.newspapers-=3
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
                            ez.tires-=4
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
                            ez.socks-=8
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
                            ez.hammers-=15
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
                            ez.newspapers-=10
                            ez.tires-=10
                            ez.socks-=10
                            ez.hammers-=15
                            if(!sm.hbUnlocked){sm.equipped = "basic"}
                            sm.hbUnlocked = true
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
                            ez.newspapers-=3
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
                            ez.tires-=5
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
                            ez.tires-=7
                            ez.socks-=7
                            ez.hammers-=7
                            sm.hypno = true
                            createDoneMessage("\`Congradulations!!! I hope you enjoy your new Super Powerful Pet! It will defenitely help you in the future when you'll start defeating bosses! I think you're next Quest is in The Wild West. You should meet Ghost Hunter Jesse there as soon as possible! I hear he gives ghost hunters a really cool Hoverboard for completing all his tasks...\`\n+**Hypnotize** <:hypnotize:843489441724628992>\n+**70** <:gems:825122942413045791>","https://imgur.com/MGYzhWZ.png",70,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 4:
                switch(sm.task)
                {
                    case 1:
                        if((o1>=15)&&(o2>=4)&&(ez.badges>=15)){
                            message.react("✅")
                            ez.badges-=15
                            createDoneMessage("\`Ya sure are startin' off strong! Yipee! Here's your reward.\`\n+**300** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",300,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if((o1>=15)&&(o2>=10)&&(o3>=8)&&(o4>=3)){
                            message.react("✅")
                            createDoneMessage("\`Yeeeeehaw! You're about as round 'em up Cowboy as me! That's good work if I've ever seen it. Here's Gems for your hard work! Don't forget to upgrade your pack every once in a while!\`\n+**200** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",200,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if((o1>=3)&&(o2>=2)&&(o3>=1)){
                            message.react("✅")
                            createDoneMessage("\`Amazing! You've really upgraded your pet inventory! Remember to keep buying pets to prepare for your boss fight... Now take all these gems!\`\n+**2000** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",2000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if(ez.antenna>=6){
                            message.react("✅")
                            createDoneMessage("\`I knew there was some fishy business going on down yonder! Thanks for the help! Here's some Gems for your troubles.\`\n+**300** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",300,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if((o1>=18)&&(o2>=5)&&(ez.meteorites>=35)){
                            message.react("✅")
                            ez.meteorites-=35
                            createDoneMessage("\`That's what I'm talking about! We own this here town! Have these Gems, partner.\`\n+**340** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",340,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if((o1>=25)&&(o2>=18)&&(o3>=12)&&(o4>=4)){
                            message.react("✅")
                            createDoneMessage("\`That's what I needed! Well, ain't you just the greatest little partner? Here's Gems for your troubles.\`\n+**420** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",420,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Oh boy! You actually did it! I've always wanted to do that, but someone has to keep the peace down here! Gonna give you Gems for that achievement! Good ridin'!\`\n+**200** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",200,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if(ez.antenna>=7){
                            message.react("✅")
                            createDoneMessage("\`See! Some high quality gold! Looks like they've been experimenting on some rocks too... weird stuff. Thank ya kindly for the assistance. Here's Gems for your troubles.\`\n+**350** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",350,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 9:
                        if((o1>=20)&&(o2>=5)&&(ez.gold>=45)){
                            message.react("✅")
                            ez.gold-=45
                            createDoneMessage("\`Thank ya kindly! Here's some Gems for all your hard work.\`\n+**400** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",400,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 10:
                        if((o1>=20)&&(o2>=5)&&(o3>=20)&&(o4>=5)){
                            message.react("✅")
                            createDoneMessage("\`That's what I needed! Well, ain't you just the greatest partner? Here's Gems for your troubles. You're so close to getting the Hoverboard!\`\n+**275** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",275,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 11:
                        if((ez.gems-o1)>=750){
                            message.react("✅")
                            ez.gems-=750
                            createDoneMessage("\`This oughta sqaure me away with him. The feller's a bit grumpy sometimes, but he's a good bud! Keep half of it, go buy yourself something fancy! Like a pet!\`\n+**325** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",325,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 12:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Thank ya kindly. Here's Gems for all your hard work.\`\n+**380** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",380,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 13:
                        if(ez.pyramidsOpen){
                            message.react("✅")
                            createDoneMessage("\`Ain't nothing stoppin' you now! Look at that, there's a Bonus Chest at the top too! It'll give you a nice chunk of Gems every so often... but here's a reward from me.\`\n+**440** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",440,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 14:
                        if((o1>=30)&&(o2>=7)&&(ez.artifacts>=60)){
                            message.react("✅")
                            ez.artifacts-=60
                            createDoneMessage("\`Now I can get a' concentration'. Here's Gems for your services.\`\n+**1000** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",1000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 15:
                        if((o1>=10)&&(o2>=10)&&(o3>=20)&&(o4>=5)){
                            message.react("✅")
                            createDoneMessage("\`Perfect! Well aren't you just a handy dandy friend! Here's Gems for your services.\`\n+**350** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",350,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 16:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Well I'll be darned! You found my lucky boot! Take these Gems as a reward!\`\n+**275** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",275,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 17:
                        if((o1>=8)&&(o2>=8)&&(o3>=8)&&(o4>=8)){
                            message.react("✅")
                            createDoneMessage("\`Exactly what I needed! Here's the Gems as promised. Use them to buy some more pets!! Remember, you've got that boss fight next...\`\n+**5000** <:gems:825122942413045791>","https://imgur.com/FmGviiR.png",5000,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 18:
                        if(o1==1){
                            message.react("✅")
                            sm.champion = true
                            createDoneMessage("\`Hot Diggity! You're alive! You're the best Ghost Hunter I know, and I wouldn't give this Hoverboard to you if I didn't think it! Here ya are, the great Hoverboard and some Gems as a bonus. Thank ya kindly for all the help. Well, that's it from me... Your next questline is Ghost Hunter Hans in Area 51. I really don't know what he's up to....\`\n+**Champion** <:champion:844610527669911602>\n+**1250** <:gems:825122942413045791>","https://imgur.com/IGLh00t.png",1250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
            case 5:
                switch(sm.task)
                {
                    case 1:
                        if((ez.newspapers>=10)&&(ez.tires>=10)&&(ez.socks>=20)){
                            message.react("✅")
                            ez.newspapers-=10
                            ez.tires-=10
                            ez.socks-=10
                            createDoneMessage("\`Sweet! Now where did I put that reward? Here it is! There's a lot more where that came from... That is, if you keep helping me.\`\n+**150** <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",150,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 2:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`You're back! And you've got gems! Excellent, it worked. I guess you're looking for your reward now. Here, just take even more gems (:\`\n+**200** <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",200,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if((o1>=20)&&(o2>=20)&&(o3>=20)){
                            message.react("✅")
                            sm.converter=2
                            createDoneMessage("\`Thanks for all these ingredients, Ghost Hunter! Nice, these are really good quality! What? Oh! Yeah, here's your reward. Upgraded converter machine! Now every 5 Million Ecto-Tokens convert to 1 Gem!\`\n+**Converter Upgrade** <:ectotoken:825122939812315219> <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",0,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 4:
                        if((o1==1)&&(o2==1)){
                            message.react("✅")
                            createDoneMessage("\`Thank you so much! I'm so scatterbrained! I thought it was gone-gone, Ghost Hunter. There were quite a few of us at the Area 51 lab, and I keep in contact with everyone... Everyone except for Ghost Hunter Riley. No one has seen her in a long time... Anyway, thanks for finding this! Here's your reward!\`\n+**250** <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",250,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if(ez.sellTime>=70){
                            message.react("✅")
                            createDoneMessage("\`Welcome back! How's your new pack? Feels like it's stuffed with blueberries and salmon? I don't remember it feeling like that at all! Anyhoo, here, take your reward.\`\n+**300** <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",300,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Hello again! I've got your reward right here. Ta-da! And thanks!\`\n+**350** <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",350,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if(o1==1){
                            message.react("✅")
                            createDoneMessage("\`Excellent! We had some fun AND your pet team grew in size! Thanks for that, here's your reward.\`\n+**400** <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",400,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if(ez.antenna>=8){
                            message.react("✅")
                            sm.converter=3
                            createDoneMessage("\`You did it! I knew you could! And just in time for the converter machine to be upgraded! Now, every 1 Million Ecto-Tokens convert to 1 Gem! It's amazing! Also, you can now use the command %convert all, to convert all of your Ecto-Tokens to Gems! Very good upgrade indeed! It seems like this is the end of our partnership... But it is the start of our friendship! Looks like your next Questline is with Ghost Hunter Captain Finsley. Great man. I wonder what his prize will be...\`\n+**Converter Upgrade** <:ectotoken:825122939812315219> <:gems:825122942413045791>","https://imgur.com/F8TZFYj.png",0,fs,db,q,ez,message,sm)
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
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #1/8__** : Ghost Catching 101\n\n\`Well well well... What do we have here? Another Ghost Hunter to join our ranks! Welcome to our ghost infested world! Join hunters like me, Ghost Hunter Gabe, in fighting against the ghosts! We need all the help we can get! Just use the %catch command and start catching ghosts! Let's start you off easy, go catch 2 Forest Ghosts and use the %quest done command when you're done. I might just give you a reward for helping me...\`\n\nHint: Use the command **%catch forest** to catch ghosts in the forest. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **2** 👻 ghosts in the 🏕️ Forest: **${o1}/2**`,message,sm,fs,q)
                        break;
                    case 2:
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #2/8__** : The Ghost Market\n\n\`Okay, so you may have noticed your Pack will start to get full after you collect ghosts. You can sell the Ghosts you've collected for Ecto-Tokens by using the command %sell. After using the sell command, your pack will be empty and you will be able to catch ghosts again after the sell cooldown time is over. Check your sell cooldown time by using the command %pack. Anyways, go sell your ghosts now and come back to me after you finish.\`\n\nHint: After completing any quest, use the command %quest done to continue to new ones. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Sell the 👻 ghosts in your <:pack:825122944204013588> Pack: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>1){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #3/8__** : Prehistoric Mayhem\n\n\`Next up, special ghosts! Each biome has 2 different types of ghosts. The Forest, for example, has Fairies and Owls! The Fairies are regular ghosts and the Owls are special ghosts! The special ghosts are a bit harder to find but they fill up more space in your Pack so you can sell and get Ecto-Tokens much faster! Start by catching 1 Owl Ghost! Find me when you're done for a reward.\`\n\nHint: Use the command %biomes to learn more about each biome. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **1** 🦉 Owl Ghost in the 🏕️ Forest: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 4:
                        o1 = ez.ectoTokens
                        if(o1>100){o1=100}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #4/8__** : Collection Day\n\n\`Your Pack probably fills up pretty fast, right? Time to get some upgrades! First you're going to need something to buy those upgrades with. Go collect 100 Ecto-Tokens and let me know when you're done.\`\n\nHint: Use the command %sell to sell your ghosts and receive Ecto-Tokens. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Obtain **100** <:ectotoken:825122939812315219> Ecto-Tokens: **${o1}/100**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(ez.capacity>50){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #5/8__** : The Coolest Gear In Town\n\n\`Now that you got some Ecto-Tokens, you can buy new Packs! This will help you collect more stuff easier and faster. Go upgrade your Pack once. Report back to me when you're done for a reward!\`\n\nHint: To upgrade your pack, use the command %pack up. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Upgrade your <:pack:825122944204013588> pack once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #6/8__** : Your First Pet\n\n\`You're probably wondering... What are all these Gems I'm getting for?? Well, gems are used to unbox pets! You can use the gems you have to buy pet crates and then you will randomly receive pets! Use the command %pet crate 1 buy to unbox your first pet from Pet Crate #1! Come back to me after you got your first pet!\`\n\nHint: Learn more about pets and pet crates with the commands %pet and %pet crate. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Unbox a 🐶 pet from Pet Crate #1: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 7:
                        o1 = ez.acorns
                        o2 = ez.parts
                        if(o1>3){o1=3}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #7/8__** : Stop, Thief!\n\n\`So... fun fact about ghosts, they love to steal stuff! The Forest ghosts took my Acorns and Parts! I know, it's weird... could you get them back? Find 3 Acorns and 3 Antenna Parts from Forest ghosts.\`\n\nHint: The command %inventory will display all of your collected items. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Obtain **3** <:acorn:825122942660509707> Acorns from the 🏕️ Forest: **${o1}/3**\n• Obtain **3** 🔩 Antenna Parts: **${o2}/3**`,message,sm,fs,q)
                        break;
                    case 8:
                        o1 = ez.antenna
                        if(o1>2){o1=2}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #8/8__** : Gotta Do the Upgrade\n\n\`Oh, those items you got me? You can use them to upgrade your Antenna, so you can explore new Biomes! To do this, use the command %antenna up. Talk to me after you upgrade, and I'll give you some Gems!\`\n\nHint: You can check your Antenna Level with the command %antenna. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Upgrade your 📡 Antenna to Level **2**: **${o1}/2**`,message,sm,fs,q)
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
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #1/12__** : He's a Bit Catty\n\n\`Hey, buddy... Welcome to my part of the city... They call me Ghost Hunter Adam. Here you'll find Businessman Ghosts and Street Cat Ghosts... and my genius invention of Hoverboards! You want it? Well, you can't have it! ...Unless you complete some tasks for me. First, I gotta see if you're tough enough to handle my technology. Go collect 5 Businessman Ghosts, 2 Street Cats and 3 Newspapers. Come back to me for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **5** 🤵‍♂️ Businessman Ghosts in the 🏙️ City: **${o1}/5**\n• Vacuum **2** 🐈‍⬛ Street Cat Ghosts in the 🏙️ City: **${o2}/2**\n• Obtain **3** 📰 Newspapers in the 🏙️ City: **${o3}/3**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>250){o1=250}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #2/12__** : Ghost Town Collection\n\n\`I need you to collect 250 pack storage from ghosts in the area. It's to power that Hoverboard you want. Find me for a reward afterward... No, you're not getting my technology yet.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Collect **250** <:pack:825122944204013588> Pack Storage from any 👻 ghost: **${o1}/250**`,message,sm,fs,q)
                        break;
                    case 3:
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #3/12__** : Pets Like Crates\n\n\`The pets at the shop can fight bosses in Uni. Open Pet Crate #1 and return to me for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Open Pet Crate #1 once: **${o1}/1**`,message,sm,fs,q)
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
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #4/12__** : Road to the Junkyard\n\n\`See that Junkyard over there? You're gonna need to upgrade your antenna to level 3 to get there. Once you do, I'll get you some Gems and another task.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **10** 🔩 Antenna Parts: **${o1}/10**\n• Obtain **5** 📰 Newspapers in The 🏙️ City: **${o2}/5**\n• Upgrade your 📡 Antenna to level **3**: **${o3}/3**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(o1>7){o1=7}
                        if(o2>2){o2=2}
                        o3 = ez.tires
                        if(o3>4){o3=4}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #5/12__** : Junkyard Stakeout\n\n\`Have you been to the Junkyard down the road? I love riding around with Hoverboards there... If you get some Mechanics, Garbage Bin Ghosts and Tires, I might consider you cool enough to use my technology. If you actually finish, find me for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **7** 🧑‍🔧 Mechanic Ghosts in The 💡 Junkyard: **${o1}/7**\n• Vacuum **2** 🗑️ Garbage Bin Ghosts in The 💡 Junkyard: **${o2}/2**\n• Obtain **4** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o3}/4**`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #6/12__** : Calling Ghost Hunter Adam\n\n\`I must have dropped my Walkie Talkie while hoverboarding in the Junkyard! ...Why don't I look for it? I'm too busy doing important stuff. If you find it, maybe I'll give you a reward. Try using the command %find <item>\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Find Adam's 📞 Walkie Talkie hidden in The 💡 Junkyard: **${o1}/1**`,message,sm,fs,q)
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
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #7/12__** : Underground Shortcut\n\n\`You're well on your way to getting my Hoverboard technology. Next, I need you to unlock the next biome. There's an underground shortcut to The Wild West in the Junkyard. To reach it, upgrade your antenna to level 4. You'll need it unlocked to finish my next task. I'll get you some Gems once you're finished.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **35** 🔩 Antenna Parts: **${o1}/35**\n• Obtain **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o2}/10**\n• Upgrade your 📡 Antenna to level **4**: **${o3}/4**`,message,sm,fs,q)
                        break;
                    case 8:
                        if(o1>15){o1=15}
                        if(o2>4){o2=4}
                        o3 = ez.socks
                        if(o3>8){o3=8}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #8/12__** : What's That Smell?\n\n\`Next, you are gonna collect Paper Bag Ghosts, Rat Ghosts, and 8 Dirty socks from ghosts in the sewers! ...You're so gonna need a bath when you get back, hah! If you make it back, I'll give you a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **15** 🛍️ Paper Bag Ghosts in The <:manhole:825122943133941821> Sewers: **${o1}/15**\n• Vacuum **4** 🐀 Rat Ghosts in The <:manhole:825122943133941821> Sewers: **${o2}/4**\n• Obtain **8** 🧦 Socks from The <:manhole:825122943133941821> Sewers: **${o3}/8**`,message,sm,fs,q)
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
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #9/12__** : Construction Obstruction\n\n\`Do you know what bonus biomes are? They are special biomes that give less Antenna Parts and lots of Gems! I need you to unlock the Construction Site. You're going to need 10 Newspapers, Tires and Socks. Come find me after you unlock it for a reward. To unlock it, use the %unlock command.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **10** 📰 Newspapers from The 🏙️ City: **${o1}/10**\n• Obtain **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o2}/10**\n• Obtain **10** 🧦 Socks from The <:manhole:825122943133941821> Sewers: **${o3}/10**\n• Unlock access to The 🏗️ Construction Site: **${o4}/1**`,message,sm,fs,q)
                        break;
                    case 10:
                        if(o1>20){o1=20}
                        if(o2>5){o2=5}
                        o3 = ez.hammers
                        if(o3>15){o3=15}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #10/12__** : Stop Those Pigeons!\n\n\`You're really close to the Hoverboard, and if you can finish these next three tasks, it's yours. Go collect 20 Worker Ghosts, 5 Pigeon Ghosts, and 15 Hammers in The Construction Site. Come back for a reward.\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **20** 👷‍♀️ Worker Ghosts in The 🏗️ Construction Site: **${o1}/20**\n• Vacuum **5** <:pigeon:825122931721371690> Pigeon Ghosts in The 🏗️ Construction Site: **${o2}/5**\n• Obtain **15** 🔨 Hammers from The 🏗️ Construction Site: **${o3}/15**`,message,sm,fs,q)
                        break;
                    case 11:
                        if(o1>=5){o1=5}
                        if(o2>=5){o2=5}
                        if(o3>=5){o3=5}
                        if(o4>=5){o4=5}
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #11/12__** : Rewind Time\n\n\`We almost have enough storage to power the Hoverboard. I need you to collect ghosts from all biomes in this area. Here's my shopping list! Now get going!\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Vacuum **5** 🐈‍⬛ Street Cat Ghosts from The 🏙️ City: **${o1}/5**\n• Vacuum **5** 🗑️ Garbage Bin Ghosts from The 💡 Junkyard: **${o2}/5**\n• Vacuum **5** 🐀 Rat Ghosts from The <:manhole:825122943133941821> Sewers: **${o3}/5**\n• Vacuum **5** <:pigeon:825122931721371690> Pigeon Ghosts from The 🏗️ Construction Site: **${o4}/5**`,message,sm,fs,q)
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
                        createQuestMessage("🗺️ Quest #2 - Ghost Hunter Adam","📖 **__Task #12/12__** : Hail the Hoverboard\n\n\`Now I need your help to finish building your Hoverboard... Don't look so surprised. Collect items from ghosts in each biome here and the Hoverboard is all yours!\`","https://imgur.com/IGLh00t.png","📜 __Goals:__",`• Obtain **10** 📰 Newspapers from The 🏙️ City: **${o1}/10**\n• Obtain **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o2}/10**\n• Obtain **10** 🧦 Socks from The <:manhole:825122943133941821> Sewers: **${o3}/10**\n• Obtain **10** 🔨 Hammers from The 🏗️ Construction Site: **${o4}/15**`,message,sm,fs,q)
                        break;
                }
                break;
            case 3:
                switch(sm.task)
                {
                    case 1:
                        if(o1>5){o1=5}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #1/6__** : I'm a Hoot\n\n\`Hey! Hey you... Come here! ....The name is Ghost Hunter Liz. I happen to have a connection with some very important people, and they told me to find you. So, trust me or don't. It's up to you. Either way, I've been entrusted with a very powerful pet, and I like to help new Ghost Hunters. I need you to help me, and in return I'll give you the very powerful pet! So about that pet... First, head back to the Forest and vacuum 3 Owl Ghosts, and 5 Fairy Ghosts. Return to me for a reward!\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **5** 🧚 Fairy Ghosts from The 🏕️ Forest: **${o1}/5**\n• Vacuum **3** 🦉 Owl Ghosts from The 🏕️ Forest: **${o2}/3**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>2){o1=2}
                        o2 = ez.newspapers
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #2/6__** : No Cattin' Around\n\n\`Next we are going to send some of these adorable cats to the Ghost World with your help! I'll also need something to read. I need you to Vacuum 2 Cat Ghosts and collect 3 Newspapers from The City. Come back for a reward.\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **2** 🐈‍⬛ Street Cat Ghosts from The 🏙️ City: **${o1}/2**\n• Obtain **3** 📰 Newspapers from The 🏙️ City: **${o2}/3**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>5){o1=5}
                        if(o2>5){o2=5}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #3/6__** : Serious Business\n\n\`Mission #3! I need you to vacuum some ghosts in the Forest and the City. Once you're done come back to me for a reward.\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **5** 🧚 Fairy Ghosts from The 🏕️ Forest: **${o1}/5**\n• Vacuum **5** 🤵‍♂️ Businessmen Ghosts from The 🏙️ City: **${o2}/5**`,message,sm,fs,q)
                        break;
                    case 4:
                        if(o1>3){o1=3}
                        o2 = ez.tires
                        if(o2>5){o2=5}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #4/6__** : Overflowing Trash\n\n\`Next up, I need you to head into the junkyard to vacuum some more ghosts there. There's a lot of garbage bins there that are overflowing with trash! Plus, my car could really use some new tires. Vacuum 3 Garbage Bin Ghosts and collect 5 Tires from The Junkyard.\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **3** 🗑️ Garbage Bin Ghosts from The 💡 Junkyard: **${o1}/3**\n• Obtain **5** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o2}/5**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(o1>5){o1=5}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #5/6__** : Sewer Diving\n\n\`You're so close to the powerful pet! Only two more tasks to go!!! So, I know you're going to hate me, but I need you to go to the sewers... It's for a really short period of time! All I need you to do is vacuum some ghosts there...\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Vacuum **5** 🛍️ Paper Bag Ghosts from The <:manhole:825122943133941821> Sewers: **${o1}/5**\n• Vacuum **3** 🐀 Rat Ghosts from The <:manhole:825122943133941821> Sewers: **${o2}/3**`,message,sm,fs,q)
                        break;
                    case 6:
                        o1 = ez.tires
                        o2 = ez.socks
                        o3 = ez.hammers
                        if(o1>7){o1=7}
                        if(o2>7){o2=7}
                        if(o3>7){o3=7}
                        createQuestMessage("🗺️ Quest #3 - Ghost Hunter Liz","📖 **__Task #6/6__** : Mission for Power\n\n\`Finally, your last mission! I need you to collect some items for me from the junkyard, the sewers, and the construction site. Once you're done with this task, the powerful pet is all yours!!!\`","https://imgur.com/MGYzhWZ.png","📜 __Goals:__",`• Obtain **7** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o1}/7**\n• Obtain **7** 🧦 Socks from The <:manhole:825122943133941821> Sewers: **${o2}/7**\n• Obtain **7** 🔨 Hammers from The 🏗️ Construction Site: **${o3}/7**`,message,sm,fs,q)
                        break;
                }
                break;
            case 4:
                switch(sm.task)
                {
                    case 1:
                        if(ez.antenna<5){message.channel.send(`<@${message.member.id}> Your 📡 antenna needs to be level **5+** in order to start Quest #4!\nUse the command **%antenna** to check your 📡 antenna.`)
                            return;}
                        if(o1>15){o1=15}
                        if(o2>4){o2=4}
                        o3 = ez.badges
                        if(o3>15){o3=15}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #1/18__** : The Hoverboard Effect\n\n\`Yeaaaah, I'm gonna take my horse t- ... oh, Hey! My name is Ghost Hunter Jesse! I could really use some help around these parts. There's been a wagon load of crazy going on here. Aliens, Ghosts... random appearing pyramids... If you can help, I can reward you with a cool new Hoverboard. You in? Great! You can start by helping clean up this here town. It could use a good round-up. Find me after you collect Bandits, Cowboys, and Sherriff Badges and I'll reward ya for the services.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **15** <:bandit:825122917930500147> Bandit Ghosts from The 🏜️ Wild West: **${o1}/15**\n• Vacuum **4** 🤠 Cowboy Ghosts from The 🏜️ Wild West: **${o2}/4**\n• Obtain **15** <:sherrifbadge:825122941637230613> Sherriff Badges from The 🏜️ Wild West: **${o3}/15**`,message,sm,fs,q)
                        break;
                    case 2:
                        if(o1>15){o1=15}
                        if(o2>10){o2=10}
                        if(o3>8){o3=8}
                        if(o4>3){o4=3}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #2/18__** : Round 'em Up\n\n\`I hope you're not bitin' off more than you can chew here! I wouldn't feel right gettin' you involved in situations you couldn't handle. Show me what you've got by collecting some ectoplasm from different biomes. Find me after you collect Bandits, Cowboys, Fairy and Mechanic Ghosts for a reward.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **15** 🧚 Fairy Ghosts from The 🏕️ Forest: **${o1}/15**\n• Vacuum **10** 🧑‍🔧 Mechanic Ghosts from The 💡 Junkyard: **${o2}/10**\n• Vacuum **8** <:bandit:825122917930500147> Bandit Badges from The 🏜️ Wild West: **${o3}/8**\n• Vacuum **3** 🤠 Cowboy Ghosts from The 🏜️ Wild West: **${o4}/3**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>3){o1=3}
                        if(o2>2){o2=2}
                        if(o3>1){o3=1}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #3/18__** : Preparing for Battle\n\n\`You're ways away from the Hoverboard, keep trottin' along. Actually, I'm gonna get you in on a little secret... Your final task from me is a very hard one. You will need to defeat a boss! I know, I know, that's why I'm telling you this. You need to prepare! You need to open more pet crates to get more pets! Afterall, your pets are the ones fighting the boss, not you. Come back to me after you open some pet crates to receive a lot of Gems!\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Open 🐶 Pet Crate #1 **3** times: **${o1}/3**\n• Open 🐶 Pet Crate #2 **2** times: **${o2}/2**\n• Open 🐶 Pet Crate #3 **1** time: **${o3}/1**`,message,sm,fs,q)
                        break;
                    case 4:
                        o1 = ez.parts
                        o2 = ez.badges
                        o3 = ez.antenna
                        if(o1>150){o1=150}
                        if(o2>30){o2=30}
                        if(o3>6){o3=6
                            o1=150
                            o2=30}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #4/18__** : Mission Unthinkable\n\n\`You're really takin' to bein' a cowboy... I've got a top secret mission for you... Them fancy scientists moved in here when the aliens came. I need you to upgrade your antenna to level 6 and get into that Area 51 over there. I'll get you some Gems when you're done!\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Obtain **150** 🔩 Antenna Parts: **${o1}/150**\n• Obtain **30** <:sherrifbadge:825122941637230613> Sherriff Badges from The 🏜️ Wild West: **${o2}/30**\n• Upgrade your 📡 Antenna to level **6**: **${o3}/6**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(o1>18){o1=18}
                        if(o2>5){o2=5}
                        o3 = ez.meteorites
                        if(o3>35){o3=35}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #5/18__** : Agent Ghost Hunter\n\n\`They're doing all kinds of funny things down there! We best put a stop to it! I need you to collect some ghosts and items in that Area 51. Gems are promised when you're done.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **18** 👨‍🔬 Scientist Ghosts in ☄️ Area 51: **${o1}/18**\n• Vacuum **5** 👽 Zorg Ghosts in ☄️ Area 51: **${o2}/5**\n• Obtain **35** <:meteorite:825122930047320115> Meteorites from ☄️ Area 51: **${o3}/35**`,message,sm,fs,q)
                        break;
                    case 6:
                        if(o1>25){o1=25}
                        if(o2>18){o2=18}
                        if(o3>12){o3=12}
                        if(o4>4){o4=4}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #6/18__** : Power to the Source\n\n\`Yeeee-Haw!! Gettin' closer to that Hoverboard! It'll take a lot of power! I'm gonna need you to collect Workers, Paper Bags, Scientists, and Zorgs to continue powering it. Find me after for some Gems.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **25** 🛍️ Paper Bag Ghosts in The <:manhole:825122943133941821> Sewers: **${o1}/25**\n• Vacuum **18** 👷‍♀️ Worker Ghosts at The 🏗️ Construction Site: **${o2}/18**\n• Vacuum **12** 👨‍🔬 Scientist Ghosts in ☄️ Area 51: **${o3}/12**\n• Vacuum **4** 👽 Zorg Ghosts in ☄️ Area 51: **${o4}/4**`,message,sm,fs,q)
                        break;
                    case 7:
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #7/18__** : King of the Rings\n\n\`Still some more tasks 'til you get my amazing Hoverboard! You're going to need a Hoverboard of your own for this task. I wanna see if you can find and jump through the green ring here in The Wild West. If you can do it, I'll reward you. HINT 💡 - \`||\`use the %find <item> and then the %jump commands\`||","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Jump through The 🟢 Green Ring: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 8:
                        o1 = ez.parts
                        o2 = ez.meteorites
                        o3 = ez.antenna
                        if(o1>200){o1=200}
                        if(o2>50){o2=50}
                        if(o3>7){o3=7
                            o1=200
                            o2=50}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #8/18__** : Level Up\n\n\`Did you see that Mineshaft in Area 51? They probably found some top secret stuff in there. You're going to sneak in and check it out! But... First, you need to upgrade your antenna to level 7. I got you some more Gems for when you're done.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Obtain **200** 🔩 Antenna Parts: **${o1}/200**\n• Obtain **50** <:meteorite:825122930047320115> Meteorites from ☄️ Area 51: **${o2}/50**\n• Upgrade your 📡 Antenna to level **7**: **${o3}/7**`,message,sm,fs,q)
                        break;
                    case 9:
                        if(o1>20){o1=20}
                        if(o2>5){o2=5}
                        o3 = ez.gold
                        if(o3>45){o3=45}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #9/18__** : Rocky Road Ahead\n\n\`To continue working on that Hoverboard, I'm gonna need a bit more Ectoplasm. I also need a good conductor. I hear gold is the best. Go to the Mines and collect ghosts and the gold I need for the conductor. Once you're done, come find me for a reward.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **20** 🧑‍🏭 Miner Ghosts in The ⛏️ Mine: **${o1}/20**\n• Vacuum **5** 🪨 Rock Ghosts in The ⛏️ Mine: **${o2}/5**\n• Obtain **45** <:goldbar:825122939006746625> Gold Bars from The ⛏️ Mine: **${o3}/45**`,message,sm,fs,q)
                        break;
                    case 10:
                        if(o1>20){o1=20}
                        if(o2>5){o2=5}
                        if(o3>20){o3=20}
                        if(o4>5){o4=5}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #10/18__** : Super Duper Power Troopers\n\n\`Yeeee-Haw!! Gettin' real close to the Hoverboard! It'll take a lot of power! I'm gonna need you to collect more Ectoplasm and Gems to continue powering it. Collect 20 Businessmen, 5 Rats, 20 Miners, and 5 Rocks. Find me after for some Gems.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **20** 🤵‍♂️ Businessmen Ghosts in The 🏙️ City: **${o1}/20**\n• Vacuum **5** 🐀 Rat Ghosts in The <:manhole:825122943133941821> Sewers: **${o2}/5**\n• Vacuum **20** 🧑‍🏭 Miner Ghosts in The ⛏️ Mine: **${o3}/20**\n• Vacuum **5** 🪨 Rock Ghosts in The ⛏️ Mine: **${o4}/5**`,message,sm,fs,q)
                        break;
                    case 11:
                        if(sm.obj4==0){sm.obj1 = ez.gems
                            o2=0}else{o2 = ez.gems - o1}
                        sm.obj4++;
                        if(o2>750){o2=750}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #11/18__** : I Owe You One\n\n\`So... I owe Ghost Hunter Adam a little something for helping me out with my Hoverboard. Could ya help me pay him back by collecting Gems? I'll split it with ya!\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Collect **750** <:gems:825122942413045791> Gems from anywhere: **${o2}/750**`,message,sm,fs,q)
                        break;
                    case 12:
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #12/18__** : Pet Boo-st\n\n\`I hear they have some dandy lookin' pets in Pet Crate #2. Those pets are able to help a lil' more. Open Pet Crate #2 and come find me for a reward when you're done.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Open 🐶 Pet Crate #2 once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 13:
                        o1 = ez.badges
                        o2 = ez.meteorites
                        o3 = ez.gold
                        if(o1>25){o1=25}
                        if(o2>25){o2=25}
                        if(o3>25){o3=25}
                        if(ez.pyramidsOpen){o4=1
                            o1=25
                            o2=25
                            o3=25}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #13/18__** : You Shall Not Pass\n\n\`See them pyramids? They appeared overnight. It's got a big ghost guarding the entrance with a wall. You gotta unlock the Pyramids. You'll need 25 Sherriff's Badges, Meteors, and Gold Ingots. That ghost sure is hungry... Once you feed him, come find me for a reward. HINT 💡 - \`||\`use the %unlock command\`||","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Obtain **25** <:sherrifbadge:825122941637230613> Sherriff Badges from The 🏜️ Wild West: **${o1}/25**\n• Obtain **25** <:meteorite:825122930047320115> Meteorites from ☄️ Area 51: **${o2}/25**\n• Obtain **25** <:goldbar:825122939006746625> Gold Bars from The ⛏️ Mine: **${o3}/25**\n• Unlock access to The <:pyramid:825122937236357164> Pyramids: **${o4}/1**`,message,sm,fs,q)
                        break;
                    case 14:
                        if(o1>30){o1=30}
                        if(o2>7){o2=7}
                        o3 = ez.artifacts
                        if(o3>60){o3=60}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #14/18__** : Where's My Mummy?\n\n\`Five more tasks until I finish your Hoverboard, but those ghosts have been causing a lot of distractions for me. Some of them hold special artifacts. Think ya could help me by collecting 60 Artifacts, 7 Mummy Ghosts, and 30 Pharaoh Ghosts? I'll give you some Gems for the help. They might be a little sandy though...\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **30** <:pharaoh:825122944514523226> Pharaoh Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o1}/30**\n• Vacuum **7** <:mummy:825122924318556200> Mummy Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o2}/7**\n• Obtain **60** <:artifact:825122914210414592> Artifacts from The <:pyramid:825122937236357164> Pyramids: **${o3}/60**`,message,sm,fs,q)
                        break;
                    case 15:
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        if(o3>20){o3=20}
                        if(o4>5){o4=5}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #15/18__** : True Grit\n\n\`True cowboys aren't afraid of gettin' dity and workin' hard! I need a variety of Ectoplasm for the Hoverboard! Collect 10 Pigeon Ghosts, 10 Garbage Bin Ghosts, 5 Mummy Ghosts, and 20 Pharaoh Ghosts. More Gems coming your way if you finish this here task for me.\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **10** 🗑️ Garbage Bin Ghosts in The 💡 Junkyard: **${o1}/10**\n• Vacuum **10** <:pigeon:825122931721371690> Pigeon Ghosts in The 🏗️ Construction Site: **${o2}/10**\n• Vacuum **20** <:pharaoh:825122944514523226> Pharaoh Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o3}/20**\n• Vacuum **5** <:mummy:825122924318556200> Mummy Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o4}/5**`,message,sm,fs,q)
                        break;
                    case 16:
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #16/18__** : My Lucky Boot\n\n\`Well doggonit! I think one of those Bandits got away with my lucky boot! They may have hidden it away somewhere near. I'm gonna need that if you want me to finish helpin' you get the Hoverboard. Think ya could find it for me? Come back here once you've found it and collect a reward. HINT 💡 - \`||\`use the %find <item> command\`||","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Find Jesse's 👢 Cowboy Boot hidden in The 🏜️ Wild West: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 17:
                        if(o1>8){o1=8}
                        if(o2>8){o2=8}
                        if(o3>8){o3=8}
                        if(o4>8){o4=8}
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #17/18__** : Specimen Collection\n\n\`Only two more tasks until I can finish building the Hoverboard! Gonna need some more Ectoplasm first! I need you to collect ghosts from several of the biomes in this area. I'm asking for a bunch, but I know you can do it! I'll give ya a handful of shiny Gems in exchange!\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Vacuum **8** 🤠 Cowboy Ghosts in The 🏜️ Wild West: **${o1}/8**\n• Vacuum **8** 👽 Zorg Ghosts in ☄️ Area 51: **${o2}/8**\n• Vacuum **8** 🪨 Rock Ghosts in The ⛏️ Mine: **${o3}/8**\n• Vacuum **8** <:mummy:825122924318556200> Mummy Ghosts in The <:pyramid:825122937236357164> Pyramids: **${o4}/8**`,message,sm,fs,q)
                        break;
                    case 18:
                        createQuestMessage("🗺️ Quest #4 - Ghost Hunter Jesse","📖 **__Task #18/18__** : Boss Mode\n\n\`BOSS ATTACK! You're going to fight a Boss. This is the battle you've been preparing for from the beginning of our questline! It might be hard, but bosses give you great rewards when you beat them. Just use the %boss fight command to start the fight, and your pets do the rest! Now... Go fight a Boss. Come find me after for your new Hoverboard!!!\`","https://imgur.com/FmGviiR.png","📜 __Goals:__",`• Defeat any 💀 boss once: **${o1}/1**`,message,sm,fs,q)
                        break;
                }
                break;
            case 5:
                switch(sm.task)
                {
                    case 1:
                        o1 = ez.newspapers
                        o2 = ez.tires
                        o3 = ez.socks
                        if(o1>10){o1=10}
                        if(o2>10){o2=10}
                        if(o3>20){o3=20}
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #1/8__** : Converter Machine 3000\n\n\`Hello there, Ghost Hunter! You're here just in time. The name is Hans, Wizard Hans. Okay, well it's actually Ghost Hunter Hans, but I am a wizard at science! Why am I here? To do a favor for my good friends, Ghost Hunter Gabe and Ghost Hunter Riley. Do you see the converter machine over there? Gabe, Riley and I made it together. We used to all work together in the lab, you know, before it was overrun by ghosts. After the ghosts showed up, I decided to change careers. Science and wizardry are pretty much the same thing anyway. But yeah, the three of us invented this thing. It's pretty cool. If you run some errands for me, Ghost Hunter, I'll tell you more about it. I may even let you try it out! I'll also give you a lot of gems if you help me with all of my tasks. You're on board? Awesome! First, I need you to collect some items for me. I've got a reward ready for you once you're back.\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Collect **10** 📰 Newspapers from The 🏙️ City: **${o1}/10**\n• Collect **10** <:tire:825122944128385054> Tires from The 💡 Junkyard: **${o2}/10**\n• Collect **20** 🧦 Old Socks from The <:manhole:825122943133941821> Sewers: **${o3}/20**`,message,sm,fs,q)
                        break;
                    case 2:
                        sm.converter=1
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #2/8__** : Gib me da Gems!\n\n\`You seem pretty excited to try the converter machine. Understandable! You need to use the command %convert. It will convert some of your Ecto-Tokens into Gems! Currently every 10 Million Ecto-Tokens convert to 1 Gem but we can upgrade it later.\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Use the converter machine once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>20){o1=20}
                        if(o2>20){o2=20}
                        if(o3>20){o3=20}
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #3/8__** : Needs Upgrading\n\n\`Gabe asked me to upgrade the converter machine for you... He must really like you. Anyway, to do that, I'll need you to catch some ghosts. The faster you catch them, the sooner that machine gets upgraded! You know how to catch ghosts, come back for your reward.\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Vacuum **20** 👻 ghosts in The 🏜️ Wild West: **${o1}/20**\n• Vacuum **20** 👻 ghosts in ☄️ Area 51: **${o2}/20**\n• Vacuum **20** 👻 ghosts in The ⛏️ Mine: **${o3}/20**`,message,sm,fs,q)
                        break;
                    case 4:
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #4/8__** : Riley's Ring\n\n\`Oh, Ghost Hunter! I can't find my ring! I don't know where it is! I can't believe I lost it. Riley gave me that ring before she left the lab! What? It's not a small ring. That's crazy talk! I meant a red ring! Please find the red ring and jump through it, Ghost Hunter. I'll give you a reward if you can find it.\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Find The 🔴 Red Ring: **${o1}/1**\n• Jump through The 🔴 Red Ring: **${o2}/1**`,message,sm,fs,q)
                        break;
                    case 5:
                        if(ez.sellTime>=70){o1=1}
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #5/8__** : Charged Charge Pack\n\n\`Just a few more tasks until you get the final converter machine upgrade! Now... how is your pack doing? Have you upgraded it recently? Come back to me after you've upgraded your pack to a 'Charged Pack' to get a sweet reward!\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Upgrade your <:pack:825122944204013588> pack to a 'Charged Pack': **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #6/8__** : Boss Parts: The Gathering\n\n\`I'm making more modifications to the converter machine. Someone's got to keep the machine up to date! I sent out a message to my old co-workers. We've decided to continue our old research. Because of that, maybe you'll meet some of my old friends. Hey, maybe you'll run into Ghost Hunter Riley. Anyway, I'm trying to add a new feature to the machine, but I'm out of boss parts. Go defeat a boss for me. Don't worry, you'll get a reward when you'll come back.\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Defeat a 💀 boss once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 7:
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #7/8__** : Some Free Time Fun\n\n\`Hey, I haven't had free time in a long time. I feel like all I do is work... Let's go do something fun! Let's go open a pet crate! Pet Crate #3 to be exact!\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Unbox a 🐶 pet from Pet Crate #3 once: **${o1}/1**`,message,sm,fs,q)
                        break;
                    case 8:
                        o1 = ez.antenna
                        if(o1>8){o1=8}
                        createQuestMessage("🗺️ Quest #5 - Ghost Hunter Hans","📖 **__Task #8/8__** : Ultimatum Convertum\n\n\`I've only got one more task for you, Ghost Hunter. The ultimate converter task! Are you ready for it? Your task is... Drumroll please. Upgrade your antenna to level 8! After you do so, you'll be able to access the converter's max upgrade! It's pretty awesome, so hurry back!\`","https://imgur.com/F8TZFYj.png","📜 __Goals:__",`• Upgrade your 📡 Antenna to Level **8**: **${o1}/8**`,message,sm,fs,q)
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
    if(((sm.quest==1)&&(sm.task==8))||((sm.quest==2)&&(sm.task==12))||((sm.quest==3)&&(sm.task==6))||((sm.quest==4)&&(sm.task==18))||((sm.quest==5)&&(sm.task==8))){
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
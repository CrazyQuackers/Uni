exports.run = async (bot,message,args) => {
    message.react("📬")
    const embed = {
        color: 13800957,
        title: "Ghost Simulator",
        url: "https://www.roblox.com/games/2685347741",
        author: {
            name: "About Uni",
            icon_url: "https://imgur.com/ASUc77V.png",
        },
        description: "Uni was created by @Crazy Quackers\n\nUni is heavily built off of the game 'Ghost Simulator' in Roblox created by developers: @goro7, @Coven and @MakkieMon\n\nUni is in no way trying to steal Ghost Simulator's ideas or make it look like Ghost Simulator stole it's ideas\n\nUni is a fan-made bot trying to support and promote GS across Discord\n\nUni contains only 1/4 of GS in order to keep the original experience of the game to GS\n\nIf you've enjoyed playing Uni in Discord, check out the real game by clicking the text 'Ghost Simulator' at the top of this message",
        thumbnail: {
            url: "https://imgur.com/OH4qidw.png",
        },
        image: {
            url: "https://imgur.com/K9yduwb.png",
        },
        footer: {
            text: "Play Ghost Simulator Today!",
            icon_url: message.author.avatarURL(),
        },
    };
    message.author.send({embed});
}
exports.help = {
    name: 'game'
}
exports.run = async (bot,message,args) => {
    const questEmbed = {
        color: 16776960,
        title: "🗺️ Quest #1 - Ghost Hunter Gabe",
        description: "📖 **__Task #1/8__** : Ghost Catching 101\n\n\`Well well well... What do we have here? Another Ghost Hunter to join our ranks! Welcome to our ghost infested world! Join hunters like me, Ghost Hunter Gabe, in fighting against the ghosts! We need all the help we can get! Just use the %catch command and start catching ghosts! Let's start you off easy, go catch 2 Forest Ghosts and use the %quest done command when you're done. I might just give you a reward for helping me...\`\n\nHint: Use the command **%catch forest** to catch ghosts in the forest. (Hints will only appear in the first quest)\n",
        thumbnail: {
            url: "https://imgur.com/2RJJI3F.png",
        },
        fields: [
            {
                name: "📜 __Goals:__",
                value: "• Vacuum **2** 👻 ghosts in the 🏕️ Forest: 0/2",
            },
        ],
    };
    message.channel.send({ embed: questEmbed });
}
exports.help = {
    name: 'quest'
}
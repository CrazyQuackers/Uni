exports.run = async (bot,message,args) => {
    let arr = message.content.split(' ');
    let msg = arr[0];
    switch(msg)
    {
        case "%forest":
            message.channel.send("🏕️  **The Forest Biome**  🏕️\n\n👻  Ghosts in the biome = 🧚 **Fairies & Owls** 🦉\n🪛  Items in the biome = <:acorn:825122942660509707> **Acorns** <:acorn:825122942660509707>\n📡  Antenna level required = **1**");
            break;
        case "%city":
            message.channel.send("🏙️  **The City Biome**  🏙️\n\n👻  Ghosts in the biome = 🤵‍♂️ **Businessmen & Street Cats** 🐈‍⬛\n🪛  Items in the biome = 📰 **Newspapers** 📰\n📡  Antenna level required = **2**");
            break;
        case "%junkyard":
            message.channel.send("💡  **The Junkyard Biome**  💡\n\n👻  Ghosts in the biome = 🧑‍🔧 **Mechanics & Garbage Bins** 🗑️\n🪛  Items in the biome = <:tire:825122944128385054> **Tires** <:tire:825122944128385054>\n📡  Antenna level required = **3**");
            break;
        case "%sewers":
            message.channel.send("<:manhole:825122943133941821>  **The Sewers Biome**  <:manhole:825122943133941821>\n\n👻  Ghosts in the biome = 🛍️ **Papar Bags & Rats** 🐀\n🪛  Items in the biome = 🧦 **Socks** 🧦\n📡  Antenna level required = **4**");
            break;
        case "%construction":
            message.channel.send("🏗️  **The Construction Site Biome**  🏗️\n\n👻  Ghosts in the biome = 👷‍♀️ **Workers & Pigeons** <:pigeon:825122931721371690>\n🪛  Items in the biome = 🔨 **Hammers** 🔨\n📡  Antenna level required = **Bonus Biome**");
            break;
        case "%wild":
            message.channel.send("🏜️  **The Wild West Biome**  🏜️\n\n👻  Ghosts in the biome = <:bandit:825122917930500147> **Bandits & Cowboys** 🤠\n🪛  Items in the biome = <:sherrifbadge:825122941637230613> **Sherriff Badges** <:sherrifbadge:825122941637230613>\n📡  Antenna level required = **5**");
            break;
        case "%area":
            message.channel.send("☄️  **The Area 51 Biome**  ☄️\n\n👻  Ghosts in the biome = 👨‍🔬 **Scientists & Zorgs** 👽\n🪛  Items in the biome = <:meteorite:825122930047320115> **Meteorites** <:meteorite:825122930047320115>\n📡  Antenna level required = **6**");
            break;
        case "%mine":
            message.channel.send("⛏️  **The Mine Biome**  ⛏️\n\n👻  Ghosts in the biome = 🧑‍🏭 **Miners & Rocks** 🪨\n🪛  Items in the biome = <:goldbar:825122939006746625> **Gold Bars** <:goldbar:825122939006746625>\n📡  Antenna level required = **7**");
            break;
        case "%pyramids":
            message.channel.send("<:pyramid:825122937236357164>  **The Pyramids Biome**  <:pyramid:825122937236357164>\n\n👻  Ghosts in the biome = <:pharaoh:825122944514523226> **Pharaohs & Mummies** <:mummy:825122924318556200>\n🪛  Items in the biome = <:artifact:825122914210414592> **Artifacts** <:artifact:825122914210414592>\n📡  Antenna level required = **Bonus Biome**");
            break;
        case "%beach":
            message.channel.send("🏖️  **The Beach Biome**  🏖️\n\n👻  Ghosts in the biome = 🏴‍☠️ **Pirates & Parrots** 🦜\n🪛  Items in the biome = <:doubloon:825122941746151434> **Doubloons** <:doubloon:825122941746151434>\n📡  Antenna level required = **8**");
            break;
        case "%underwater":
            message.channel.send("💦  **The Underwater Biome**  💦\n\n👻  Ghosts in the biome = 🤿 **Divers & Mermaids** 🧜‍♀️\n🪛  Items in the biome = <:pearl:825122938457686057> **Pearls** <:pearl:825122938457686057>\n📡  Antenna level required = **9**");
            break;
        case "%volcano":
            message.channel.send("🌋  **The Volcano Biome**  🌋\n\n👻  Ghosts in the biome = <:islander:825122941963993099> **Islanders & Magma Monsters** <:magmamonster:825122940290859009>\n🪛  Items in the biome = 💎 **Diamonds** 💎\n📡  Antenna level required = **10**");
            break;
        case "%ice":
            message.channel.send("🧊  **The Ice Cave Biome**  🧊\n\n👻  Ghosts in the biome = <:explorer:825123592290172939> **Explorers & Penguins** 🐧\n🪛  Items in the biome = <:tusk:825122936927027289> **Ancient Tusks** <:tusk:825122936927027289>\n📡  Antenna level required = **Bonus Biome**");
            break;
    }
}
exports.help = {
    name: 'biome'
}
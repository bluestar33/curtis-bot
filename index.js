const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client()
const fetch = require('node-fetch')

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]

let prefix = "!"

clientInformation.login(process.env.TOKEN)

bot.login(config.token)
bot.on("ready", async message => {
    console.log("----- Bot prêt -----");
bot.on("error", console.error);
bot.login("NzgzODMwMzMyODkzODIzMDI3.X8gc4g.FPPjh-wDrIt2vXK8OaAE3awv8So")

});



// HELP
bot.on("message", async message => {
    if(message.content.startsWith(prefix + "help")){
        let help = new Discord.MessageEmbed()
        .setTitle("Liste des commandes :")
        .setDescription(

             prefix + "narration ou " + prefix + "na --> Créer une embed de narration.\n" + prefix + "me --> Créer une embed décrivat une action commençant par votre pseudo.\n" + prefix + "suggestion --> Créer une embed avec des réactions pour que les autres membres puissent voter.\n" + prefix + "clear --> Supprimer un certain nombre de message.\n" + prefix + "roll --> Envoyer un nombre aléatoire entre 0 et 100"

        )
        .setColor("#F31D07")
        message.channel.send(help)
        message.delete()
    }})



// JOIN
bot.on("guildMemberAdd", async membre => {
    let embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .addFields("Bienvenue à toi ", member, "!")
    .setDescription('Bienvenue sur mon discord communautaire dédié à ma chaîne YouTube !')
    .setImage('https://lh3.googleusercontent.com/a-/AOh14Gip__KzIjfUf9Ks27OFp8ohUwGBJgvWDVrkdqkh=s88-c-k-c0x00ffffff-no-rj-mo')

    let embed2 = bot.guilds.cache.get("791708249698598924").channels.cache.get("784916853175746561")
    member.roles.add("783758064444506193")
    
    bienvenue.send(embed2)
})

// LEAVE
bot.on("guildMemberRemove", async member => {
    let aurevoir = bot.guilds.cache.get("783757322953687111").channels.cache.get("783759964497510471")

    bienvenue.send(`Aurevoir **${member.user.username}**`)
})

// NARRATION
bot.on("message", async message => {
    if(message.content.startsWith(prefix + "na ") || message.content.startsWith(prefix + "narration")){
        let msg = message.content.split(" ").slice(1).join(" ")
        if(!msg) return message.reply("Veuillez entrer votre message.")
        let narration = new Discord.MessageEmbed()
        .setTitle("Narration")
        .setDescription(msg)
        .setColor("#FFC300")
        message.channel.send(narration)
        message.delete()
    }})

// SUGGESTION

bot.on("message", async message => {
    if(message.content.startsWith(prefix + "suggest")){
        message.delete()
        let msg = message.content.slice(8)
        if(!msg) return message.reply("Veuillez entrer votre suggestion.")
        let sug = new Discord.MessageEmbed()
        .setTitle(message.author.username + " propose ceci : ")
        .setDescription(msg)
        .setColor("#2ECC71")
        let msgg = await message.channel.send(sug)

        await msgg.react("✅")
        await msgg.react("❌")

    }})

// CLEAR

bot.on("message", async message => { 
    if(message.content.startsWith(prefix + "clearit")){
        if(message.member.hasPermisson("MANAGE_MESSAGES") || message.member.roles.cache.has("783758064444506193") || message.member.roles.cache.has("783758067111428126"))
        var suppr = message.content.slice(10)
        if(!suppr || isNaN(suppr) || suppr > 100 || suppr < 1) return message.reply("Veuillez choisir un nombre compris entre 1 et 100.")
        let clear = Number(suppr)
        message.channel.bulkDelete(clear+1, true).then(message.channel.send(clear+" messages ont bien été supprimés")).catch(console.error)
    }})

// ME

bot.on("message", async message => {
    if(message.content.startsWith(prefix + "me")){
        let msg = message.content.slice(3)
        if(!msg) return message.reply("Veuillez entrer votre message.")
        let me = new Discord.MessageEmbed()
        .setDescription(message.author.username + msg)
        .setColor("#C70039")
        message.channel.send(me)
        message.delete()
    }})

// ROLL

bot.on("message", async message => {
    if(message.content.startsWith(prefix + "roll")){
        let index = Math.floor(Math.random() * (number.lenght - 1) + 1)   
        message.channel.send(`${message.author} a roulé **${number[index]}**`)
    }})

// MEMBER MESSAGE

bot.on("message", async message => {
    if(message.content === prefix + "membermessage"){
        let embed = new Discord.MessageEmbed()
        .setTitle("Veuillez ajouter une réaction afin d'obtenir le rôle de membre")
        let msg = await message.channel.send(embed)

        await msg.react("✅")
    }})



bot.on("raw", event => {
    if(event.t === "MESSAGE_REACTION_ADD"){
        if(event.d.message_id === "791713697570881587"){
            let guild = bot.guilds.cache.get(event.d.guild_id)
            let member = guild.members.cache.get(event.d.user_id)
            if(member.bot) return

            if(event.d.emoji.name === "✅"){
                member.roles.add("783758064444506193")
                console.log(member + " vient de recevoir le rôle de membre")
            }}}})



bot.on("raw", event => {
    if(event.t === "MESSAGE_REACTION_REMOVE"){
        if(event.d.message_id === "791713697570881587"){
            let guild = bot.guilds.cache.get(event.d.guild_id)
            let member = guild.members.cache.get(event.d.user_id)
            if(member.bot) return

            if(event.d.emoji.name === "✅"){
                member.roles.remove("783758064444506193")
                console.log(member + " vient de se faire enlever le rôle de membre")
            }}}})




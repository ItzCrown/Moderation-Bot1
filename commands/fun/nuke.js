const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "nuke",
    aliases: [],
    description: "Nukes a given channel",
    run: async(client, message, args) => {
    
      if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("Ne!")
        }
        let reason = args.join(" ") || "NIKDO NEVÍ PROČ"
        if(!message.channel.deletable) {
            return message.reply("Tento channel nemůže vybouchnout!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("Channel vybouchnul!")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
        .setFooter(` ${message.author.username}`)
        .setTimestamp();
        await newchannel.send(embed)
    }
}
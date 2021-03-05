const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} menu:` , client.user.displayAvatarURL())
    .setDescription(`` + 
     "\n\n**Info**\n`Help, Weather, Userinfo, Serverinfo, Botinfo, Ping, Invite`" + "\n\n" + "**Zábava**\n`8ball, Afk, Avatar, Coinflip, Giveaway, Howgay, Meme, Master, Nuke, Rate, Rps, Dicksize, Ascii, Hack, Randomnumber`" + "\n\n" + "**Moderace**\n`Clear, Mute, Unmute, Kick, Ban, Unban, Warn, Warnings, Say`" + "\n\n" + "**MUSIC**\n`Radio`")
    .setFooter(`${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};

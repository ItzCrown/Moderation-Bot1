const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "warn",
  aliases: [],
  description: "Warn A User!",
  usage: "Warn <Mention User> | <Reason>",
  run: async (client, message, args) => {
      //Start
    message.delete();  
     if (!message.member.hasPermission("WARN_MEMBERS"))
      return message.channel.send(
        `Ne! nemáš dostatečná práva!`
      );

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Prosím, označ hráče!`);

    let Reason = args.slice(1).join(" ");

    client.db.add(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hráč upozorněn!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
      .addField(`Upozorněný hráč`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Hráčovo upozornění ( celkem )`, Warnings)
      .addField(`Důvod`, `${Reason || "No Reason Provided!"}`)
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};

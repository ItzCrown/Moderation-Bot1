const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "warnings",
  aliases: ["warning"],
  description: "Show User Warnings!",
  usage: "Warnings <Mention User>",
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

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hráčovo upozornění!`)
      .setDescription(`${Member.user.username} má celkem ${Warnings || "0"} upozornění!`)
      .setFooter(`${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
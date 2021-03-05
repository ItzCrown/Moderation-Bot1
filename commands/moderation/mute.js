const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();  
     if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        `Ne! nemáš dostatečná práva!`
      );
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Prosím označ hráče, kterého chceš umlčet!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Prosím vytvoř roli | Jméno role: Muted`
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Hráč má už je umlčen!`);
    }

    let Reason = args.slice(1).join(" ");

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hráč byl umlčen!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
      .addField(`Umlčený hráč`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "Důvod neudělen!"}`)
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Něco je špatně, zkus to znovu později!`);
    }

    //End
  }
};

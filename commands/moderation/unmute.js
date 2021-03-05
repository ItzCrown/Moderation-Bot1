const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unmute",
  aliases: [],
  description: "Unmute A User!",
  usage: "Unmute <Mention User>",
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

    if (!Member) return message.channel.send(`Prosím, označ hráče, kterého chceš odmlčit!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Neexistuje role ztlumení, takže člen již není ztlumen!`
      );

    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Hráč má už ztlumení odstraněno!`);
    }

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hráčovo ztlumení odstraněno!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
      .addField(`Odmlčený hráč`, `${Member.user.tag} (${Member.user.id})`)
      .setFooter(`${message.author.username}`)
      .setTimestamp();

    if (Role && Member.roles.cache.has(Role)) {
      Member.roles.remove([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Něco je špatně, zkus to znovu později!`);
    }

    //End
  }
};
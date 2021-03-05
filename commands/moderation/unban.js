const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unban",
  aliases: [],
  description: "Unban A Member!",
  usage: "Unban <Member ID>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Ne! nemáš dostatečná práva!`
      );

    if (!args[0])
      return message.channel.send(
        `Prosím, zadej ID hráče, kterého chceš odbanovat!`
      );

    if (isNaN(args[0])) return message.channel.send(`Prosím, zdej jiné ID!`);

    if (args[0] === message.author.id)
      return message.channel.send(`Jsi už odbanovaný!`);

    if (args[0] === message.guild.owner.user.id)
      return message.channel.send(`Majitel serveru je už odbanovaný!`);

    if (args[0] === client.user.id)
      return message.channel.send(`Jsem uř odbanovaný!`);

    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member =
      FetchBan.find(
        b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      FetchBan.get(args[0]) ||
      FetchBan.find(
        bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase()
      );

    if (!Member)
      return message.channel.send(
        "Prosím, zadej jiné ID, nebo je tento hráč už odbanovaný!"
      );

    let Reason = args.slice(1).join(" ") || "Důvod neudělen!";

    try {
      message.guild.members.unban(Member.user.id, Reason);
    } catch (error) {
      return message.channel.send(
        `Ne, nemůžes zabanovat tohoto hráče!`
      );
    }

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hráč odbanován!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}}`)
      .addField(`Odbanovaný hráč`, `${Member.user.tag} (${Member.user.id}`)
      .addField(`Důvod`, `${Reason || "důvod neudělen!"}`)
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    return message.channel.send(embed);

    //End
  }
};
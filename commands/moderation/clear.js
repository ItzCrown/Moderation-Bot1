const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => { 
      //Start
    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Ne! nemáš dostatečná práva!"
      );

    if (!args[0])
      return message.channel.send(`Prosím zadej počet zpráv, které chceš smazat!`);

    if (isNaN(args[0]))
      return message.channel.send(`Prosím zadej číslo!`);

    if (args[0] < 4)
      return message.channel.send(
        `Ne! ${args[0]} Sám od sebe nemáš příliš tolik zpráv!`
      );

    if (args[0] > 100)
      return message.channel.send(
        `Nemůžu smazat tolik zpáv **( ${args[0]} )**! Protože **100** zpáv je limit!`
      );

    let Reason = args.slice(1).join(" ") || "Důvod neudělen!";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Zprávy smazány!`)
        .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
        .addField(`Channel`, `${message.channel.name} (${message.channel.id}`)
        .addField(`Smazané zprávy`, `${Message.size}`)
        .setFooter(` ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 10000 }));
    });

    //End
  }
};
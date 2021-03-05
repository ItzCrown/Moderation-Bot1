const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Hack!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`Nemůžeš hacknout sám sebe LMAO!`);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hackování: Dokončeno`)
      .setDescription(
        `Jméno: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    await message.channel.send(`Hackování zahájeno! Hackuju ${Member.user.username}`);

    await message.channel.send(`Hackování: 10%`);

    await message.channel.send(`Hackování 20%`);

    await message.channel.send(`Hackování: 30%`);

    await message.channel.send(`Hackování: 40%`);

    await message.channel.send(`Hackování: 50%`);

    await message.channel.send(`Hackování: 60%`);

    await message.channel.send(`Hackování: 70%`);

    await message.channel.send(`Hackování: 80%`);

    await message.channel.send(`Hackování: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};
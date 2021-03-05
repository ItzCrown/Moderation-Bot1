const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "randomnumber",
  aliases: ["rn"],
  category: "fun",
  description: "Get Random Number!",
  usage: "Randomnumber",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Náhodné číslo je:`)
      .setDescription([result])
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "rate",
  aliases: [],
  description: "Bot Rate Your Given Thing!",
  usage: "Rate <Text>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Prosím, dej mi cokoliv, co můžu ohodnotit !`);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`Já hodnotím...`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 pro ${Content}`)
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
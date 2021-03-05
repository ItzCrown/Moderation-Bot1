const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Tvůj ping je - ${client.ws.ping} ms`)
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};

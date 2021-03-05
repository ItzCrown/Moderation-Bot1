const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const ms = require('ms');

module.exports = {
  name: "master",
  aliases: [],
  description: "master!",
  usage: "master",
  run: async (client, message, args) => {
    //Start
    message.delete()

  const embed = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .addField(`Hah, myslíš, že něco dostaneš ? Maximálně ban :)`)
  .setDescription(`TOP SECRET`)
  .setFooter(` ${message.author.username}`)
  .setTimestamp();
  
  message.channel.send(embed);

    //End
  }
};
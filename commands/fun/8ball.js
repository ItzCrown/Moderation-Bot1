const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "8ball",
  aliases: ["8ball"],
  description: "F8ball!",
  usage: "8ball",
  run: async (bot, message, args) => {
    //Start
    message.delete();

  //!8ball question
  if (!args[1])
    return message.reply("Prosím zadej nějakou větu, minimálně 2 slova!");
  let replies = ["Yes", "No", "I dont Know", "Maybe", "100% NO", "100% YES"];

  let result = Math.floor(Math.random() * replies.length);
  let question = args.join(" ");

  let ballembed = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .addField("Otázka", question)
    .addField("Odpověd", replies[result])
    .setFooter(` ${message.author.username}`)
    .setTimestamp();
    
  message.channel.send(ballembed);

  message.delete();
  }
}

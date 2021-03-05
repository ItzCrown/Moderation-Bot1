const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
  name: "ascii",
  aliases: [],
  description: "Ascii Art!",
  usage: "Ascii <Text>",
  run: async (client, message, args) => {
    //Start

    message.delete();
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Prosím, zadej text!`);

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setFooter(` ${message.author.username}`)
    .setTimestamp();

    if (Content.length > 20)
      return message.channel.send(`Prosím zadej kratší text | Limit : 20`);

    message.channel.send(embed);

    message.delete();

    //End
  }
};
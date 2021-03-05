const { get } = require('superagent');
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "4k",
  aliases: [""],
  description: "4k!",
  usage: "4k",
  run: async(bot, message, args) => {
    //Start
    message.delete();
  if(!message.channel.nsfw) return message.channel.send("Tento příkaz nemůžeš používat v tomto kanále.")
  const {body} = await get("https://nekobot.xyz/api/image?type=4k")
  const assembed = new Discord.MessageEmbed()
  .setTitle('4K')
  .setImage(body.message)
  .setFooter(`Požadoval: ${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
  .setTimestamp()
  .setColor("YELLOW")
  .setFooter(` ${message.author.username}`)
  .setTimestamp();
  message.channel.send(assembed)

    }
  }
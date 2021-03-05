const { get } = require('superagent');
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "pussy",
  aliases: [""],
  description: "Pussy!",
  usage: "pussy",
  run: async(bot, message, args) => {
    //Start
    message.delete();

  if(!message.channel.nsfw) return message.channel.send("Tento příkaz nemůžeš používat v tomto kanále.")
  const {body} = await get("https://nekobot.xyz/api/image?type=pussy")
  const assembed = new Discord.MessageEmbed()
  .setTitle('**Pussy**')
  .setImage(body.message)
  .setFooter(`Požadoval: ${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
  .setTimestamp()
  .setColor("YELLOW")
  .setFooter(` ${message.author.username}`)
  .setTimestamp();
  message.channel.send(assembed)

    }
  }
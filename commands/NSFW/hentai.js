const { get } = require('superagent');
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hentai",
  aliases: [""],
  description: "Hentai!",
  usage: "hentai",
  run: async(bot, message, args) => {
    //Start
    message.delete();
    
  if(!message.channel.nsfw) return message.channel.send("Tento příkaz nemůžeš používat v tomto kanále.")
  const {body} = await get("https://nekobot.xyz/api/image?type=hentai")
  const assembed = new Discord.MessageEmbed()
  .setTitle('**Hentai**')
  .setImage(body.message)
  .setFooter(`Požadoval: ${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
  .setTimestamp()
  .setColor("YELLOW")
  .setFooter(` ${message.author.username}`)
  .setTimestamp();
  message.channel.send(assembed)

    }
  }
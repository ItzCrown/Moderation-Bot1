const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: 'botinfo',
  description: 'bvotinfo!',
  aliases: [], //no aliases
  run: async (bot, message, args) => {
   
    //Start
    message.delete();  

    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.cache.size
    let chansize = bot.channels.cache.size
    let uptimxd = bot.uptime.cache 
    let servsize = bot.guilds.cache.size
    let botembed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`Jméno bota`, ` ${bot.user.username}`, true)
    .addField(`Majitel`, ` <@ItzCrown#8258>`, true)
    .addField(`Servery (celkem)`, `🛡 ${servsize}`, true)
    .addField(`Channely`, `📁 ${chansize}`, true)
    .addField(`Uživatelé`, ` ${usersize}`, true)
    .addField(`Vytvořen`, bot.user.createdAt, true)      
    .setFooter(` ${message.author.username}`)
    .setTimestamp();

  
      message.channel.send(botembed);
  }
}
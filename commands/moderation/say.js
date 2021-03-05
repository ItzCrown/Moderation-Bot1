const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: 'say',
  description: 'The say Command',
  category: 'Untility',
  aliases: [], //no aliases
  run: async (client, message, args, prefix, config) => {
    //Start
    message.delete();  
     if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `Ne! nemáš dostatečná práva!`
      );
    if (!args.join(' ')) {
      return message.channel.send(`Text !`)
      
      let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`INFO!`)
      .addField(`Zpráva`)
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    }
    
    
    message.channel.send(args.join(' '));
    
  }
}
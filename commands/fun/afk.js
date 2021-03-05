//requiring the package
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'afk',
    aliases: [],
    run : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`Niní jsi "AFK"\n**Důvod :** ${content}`)
        .setColor("YELLOW")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        .setFooter(` ${message.author.username}`)
        .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
    message.delete();
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

      const embed = new MessageEmbed()
      .setTitle(guild.name + " Informace!")
      .setColor(Color)
      .setThumbnail(guild.iconURL())
      .addField(`Jméno`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Majitel`, `${guild.owner.user.tag}`, true)
      .addField(`Počet rolí`, Roles, true)
      .addField(`Počet emoji`, Emojis, true)
      .addField(`Počet hráčů`, Members, true)
      .addField(`Počet botů`, Bots, true)
      .addField(`Server byl vytvořen:`, guild.createdAt.toDateString())
      .setFooter(` ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
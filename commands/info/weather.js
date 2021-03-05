const Discord = require("discord.js");
var weather = require("weather-js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "weather",
  aliases: [],
  description: "Show Given Location Weather Information!",
  usage: "Weather <Location>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!args[0]) return message.channel.send("Prosím, vyber lokaci!");

    weather.find({ search: args.join(" "), degreeType: 'C'}, function(error, result) {
      if (error) return message.channel.send(`Něco je špatně, zkus to znovu později!`);

      if (result === undefined || result.length === 0)
        return message.channel.send(
          `Neznámá lokace, prosím, zadej jinou!`
        );

      var current = result[0].current;
      var location = result[0].location;

      const embed = new MessageEmbed()
      const Weather= new Discord.MessageEmbed()
    .setAuthor(`Počasí v ${current.observationpoint}`)
    .setDescription(`${current.skytext}`)
    .addField(`Teplota`, `${current.temperature}°C`)
    .addField(`Vlhkost Vzduchu`, `${current.humidity}`)
    .setThumbnail(current.imageUrl)
    .addField(`Pocitově`, `${current.feelslike}°C`)
    .addField(`Vítr`, `${current.windspeed} **(${current.winddisplay})**`)
    .setColor(Color)
        .setFooter(` ${message.author.username}`)
        .setTimestamp();

      message.channel.send(Weather);
    });

    //End
  }
};

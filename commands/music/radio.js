const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const opusscript = require('opusscript')
const ffmpeg = require('ffmpeg')

module.exports = {
  name: "radio",
  aliases: [],
  description: "SOS!",
  usage: "sos",
  run: async(bot, message, args) => {
    //Start
    message.delete();  

    if(message.member.voice.channel) {
  message.member.voice.channel.join()  
  .then(connection => {
  connection.play('http://ice.actve.net/fm-evropa2-128');
  message.channel.send("Hraje EVropa2 !")
     })
    }
   }
  
};

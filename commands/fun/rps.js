const discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
	name: "rps",
	aliases: [],
  description: "play a game of rock, paper and scissors",
	usage: "rps",
  run: async(client, message, args) => {
		
    
    let embed = new discord.MessageEmbed()
		.setColor("YELLOW")
    .setTitle("Kámen Nůžky Papír!")
		.setDescription("Vyber si ( kámen, nůžky, papír )!")
		.setFooter(` ${message.author.username}`)
    .setTimestamp();
            
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setColor("YELLOW")
            .setTitle("Výsledek")
        		.addField("Ty", `${reaction.emoji.name}`)
        		.addField("Já", `${me}`)
		        .setFooter(` ${message.author.username}`)
            .setTimestamp();
            await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("Prohrál jsi!");
            } else if (me === reaction.emoji.name) {
                return message.reply("Remíza - Tie!");
            } else {
                return message.reply("Vyhrál jsi!");
            }
        })
        .catch(collected => {
                message.reply('Proces byl zrušen, protože jste neodpověděli včas!');
            })
}
}
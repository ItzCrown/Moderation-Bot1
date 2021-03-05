const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  aliases:[],
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`!gv <ČAS> <CHANNEL> <HLAVNÍ CENA>`);
    if (
      !args[0].endsWith("y") &&
      !args[0].endsWith("mo") &&
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s") 
    )
      return message.channel.send(
        `Špatně!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Tohle není číslo!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Nemůžu najít tento channel na serveru!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Hlavní cena nebyla zadána!`);
    message.channel.send(`*Giveaway vytvořena v ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Nová soutěž!`)
      .setDescription(
        `**${prize}**`
      )
      .setTimestamp (Date.now() + ms(args[0]))
      .setColor(`YELLOW`)
    
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reakce: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Nezareagovalo dost lidí na to, abych vybral výherce!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Výherce soutěže **${prize}** je... ${winner}`
      );
    }, ms(args[0]));
  },
};
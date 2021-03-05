const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Ne! nemáš dostatečná práva!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Prosím označ hráče, kterého chceš zabanovat !`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Prosím označ platného hráče !`);

    if (Member.id === message.author.id)
      return message.channel.send(`Nemůžeš zabanovat sám sebe !`);

    if (Member.id === client.user.id)
      return message.channel.send(`Nebanuj mě prosím ! ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Nemůžeš zabanovat Majitele serveru!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`Já nemůžu zabanovat tohoto hráče!`);

    try {
      console.log(`Hráč dostane ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "Důvod neudělen!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Hráč zabanován!`)
        .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
        .addField(`Zabanovaný hráč`, `${Member.tag} (${Member.id})`)
        .addField(`Důvod`, `${Reason || "No Reason Provided!"}`)
        .setFooter(` ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Byl jsi zabanován z **${message.guild.name}** za ${Reason||
            "Důvod neudělen!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Byl zabanován z ${
          message.guild.name
        } For ${Reason || "Důvod neudělen!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `Ne, nemůžes zabanovat tohoto hráče!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};

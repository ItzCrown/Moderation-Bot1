const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: [],
  description: "Kick A Member!",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `Ne! nemáš dostatečná práva!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Prosím, označ hráče!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Prosím, označ hráče!`);

    if (Member.id === message.author.id)
      return message.channel.send(`Nemůžeš kicknout sám sebe LMAO!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Nekickuj mě ! Prosím ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Nemůžeš vyhodit majitele serveru!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send(`Nemohu vyhodit tohoto členar!`);

    try {
      console.log(`Hráč bude vyhozen!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "Důvod neudělen!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Hráč vyhozen!`)
        .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
        .addField(`Vyhozený hráč`, `${Member.tag} (${Member.id})`)
        .addField(`Důvod`, `${Reason || "Důvod neudělen!"}`)
        .setFooter(` ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Byl jsi vyhozen z **${message.guild.name}** za ${Reason ||
            "Důvod neudělen!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Byl vyhozen z  ${
          message.guild.name
        } za ${Reason || "Důvod neudělen!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `I Can't Kick That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};

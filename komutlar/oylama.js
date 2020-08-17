const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  

  const yetkiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkiyok)
  
  var sorusu = args.slice(0).join(" ")
  
  const sorudayaz = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Soru Belirtmelisin`, message.author.avatarURL)
  
  if (!sorusu)
    return message.channel.send(sorudayaz);
  
  const oylama = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle(message.guild.name)
  .setDescription(`${sorusu}`)
  .setThumbnail(message.guild.iconURL)
  
  await message.delete(500)
  await message.channel.send(oylama)
  
  .then(async(message) => {

    await message.react(":yes:739121644634767451");

    message.react(":no:739121636665589862");

       });
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["oylama"],
  perm: 0
}

exports.help = {
  name: "Oylama",
  description: "Oylama Yapar",
  usage: "!oylama (Soru)"
}
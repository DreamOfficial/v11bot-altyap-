const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  
  const botblg = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`${client.user.username} Bilgileri - Made by Burak`, client.user.avatarURL)
  .addBlankField()
  .addField("Botun Yapımcısı", "Burak#6924")
  .addField("Kütüphane", "Discord.js")
  .addField("Prefix", "!")
  .addBlankField()
  .addBlankField()
  .addField(`**Sunucu Sayısı**`, `${client.guilds.size}`)
//  .addField(`**Kullanıcı Sayısı**`, `${client.users.size}`)
  .addField(`**Kullanıcı Sayısı**`, client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
  .addField(`**Komut Sayısı**`, `${client.commands.size}`)
  .addBlankField()
  .addField(`**Gecikme**`, `${client.ping}ms`)
  .setDescription(`**[[Davet Et]](https://bit.ly/EpicBotİnvite)** **[[Destek Sunucusu]](https://discord.gg/4tfMgvc)**`)
  .setFooter(`Sorgulayan : ${message.author.username}`, message.author.avatarURL)
  .setThumbnail(client.user.avatarURL)
  
  message.channel.send(botblg)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bot-bilgi"],
  perm: 0
}

exports.help = {
  name: "Bot Bilgi",
  description: "Bot Bilgilerini Gösterir",
  usage: "+bot-bilgi"
}
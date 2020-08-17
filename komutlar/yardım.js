const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('(Yardım Menüsü')
.setTimestamp()
.addField('📗 Eğlence Komutları **[3]**', '``8ball``, ``slots``, ``sayı-tahmin``')
.addField('📘 Yetkili Komutları **[21]**', '``ban``, ``kick``, ``sil``, ``yaz``, ``oylama``, ``sunucupanel``, ``emojiler``, ``otorol``, ``uyarı``, ``uyarılar``, ``uyarı-sil``, ``mute-rol``, ``mute``, ``reklam-engel``, ``reklam-kick``, ``gelen-giden`` ``gelen-giden-kapat``, ``mod-log``, ``seviye-sistemi``, ``seviye-log``, ``seviye-sıfırla``, ``seviye``, ``kayıt yardım``')
.addField('📙 Genel Komutlar **[7]**', '``kullanıcı-bilgi``, ``sunucubilgi``, ``avatar``, ``link-kısalt``, ``bot-bilgi``, ``şikayet``, ``öneri``')
.setDescription(`**[[Davet Et]](https://bit.ly/)**`)
.setFooter('(Botunuzun Adı)', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
 
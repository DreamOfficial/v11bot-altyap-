const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
  const Durum = user.presence.status;
            const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
            const durm = (Durum == "online" ? (client.emojis.get('736110290638471188') + "Çevrimiçi") : (Durum == "offline" ? (client.emojis.get('736110290122440757') + "Çevrimdışı") : (Durum == "idle" ? (client.emojis.get('736110290340675644') + "Boşta") : (Durum == "dnd" ? (client.emojis.get('736110337723727893') + "Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const botemoji = client.emojis.get('497041350651412480')
            var tarih = ''
            if(moment(user.createdAt).format('MM') === '01') {
                var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '02') {
                var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '03') {
                var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '04') {
                var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '05') {
                var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '06') {
                var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '07') {
                var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '08') {
                var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '09') {
                var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '10') {
                var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '11') {
                var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '12') {
                var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
  
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(user.avatarURL)
        .addField("**Kullanıcının Adı:**", `${user.tag}`)
        .addField("**Kullanıcının ID'si:**", `${user.id}`)
        .addField("**Kullanıcının Sunucudaki Belirli İsmi:**", `${member.nickname !== null ? `${member.nickname}` : 'Sunucuda kullanıcı adı bulunmuyor.'}`)
        .addField("**Kullanıcının Hesabının Kuruluş Tarihi:**", `${tarih}`)
        .addField("**Kullanıcının Durumu:**", `${durm}`)
        .addField("**Kullanıcının Şuanda Oynadığı Oyun:**", `${user.presence.game ? user.presence.game.name : 'Kullanıcı Şu Anda Hiç Bir Oyun Oynamıyor.'}`)
        .addField("**Kullanıcının Sahip Olduğu Roller:**", `${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : 'Bu kullanıcının bu sunucuda hiç rolü bulunmuyor.'}`)
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: `Yetki gerekmiyor. (${0})`
};

exports.help = {
  name: 'kullanıcı-bilgi',
  category: "kullanıcı",
  description: 'İstediğiniz kullanıcı hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi <@kişi-etiket>'
};
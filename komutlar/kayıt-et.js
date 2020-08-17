const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {

  const a = await db.fetch(`yasaklikomutlar_${message.guild.id}`)
if(!a || a == null || !Array.isArray(a) ) {
  await db.set(`yasaklikomutlar_${message.guild.id}`, [])
}
  
  const yasaklikomutlar = await db.fetch(`yasaklikomutlar_${message.guild.id}`)
if(yasaklikomutlar.includes("kayıt-et")) {
  const buyasakhaci = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komut Bu Sunucuda Kullanıma Kapalı`, message.author.avatarURL)
  message.channel.send(buyasakhaci)
} else {
  
  const yetkimyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
  let rol = await db.fetch(`kskgrol${message.guild.id}`)
  let rolbul = message.guild.roles.get(rol)
  
  if(!rolbul)
    return;
  
  if(!message.member.roles.has(rolbul.id))
     return message.channel.send(yetkimyok)
  
  let kayitedilcekkisi = message.mentions.users.first()

    const kisifyo = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Kişi Etiketlemelisin`, message.author.avatarURL)
    
    if (!kayitedilcekkisi)
      return message.channel.send(kisifyo)
    
    const kayitkisi = message.guild.member(kayitedilcekkisi)
    
    var isim = args.slice(1).join(" ")
    
    const ama = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir İsim Ve Yaş Belirtmelisin`, message.author.avatarURL)
    
    if (!isim)
      return message.channel.send(ama)
    
    let tag = db.get(`kstag${message.guild.id}`)
    
    if(tag === undefined || tag === null) {
    await kayitkisi.setNickname(`${isim}`)
    }
  else {
    await kayitkisi.setNickname(`${tag} ${isim}`)
  }
    await kayitkisi.removeRole(db.fetch(`ksalinacakrol${message.guild.id}`))
    
    await kayitkisi.addRole(db.fetch(`ksverilecekrol${message.guild.id}`))
    
    const tmyaptm = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Kullanıcı Başarıyla Kayıt Edildi`, kayitedilcekkisi.avatarURL)
    
    message.channel.send(tmyaptm)
  
  let modlog = db.fetch(`hamsterlogkanal.${message.guild.id}`)
  
  if (!modlog) return;
  
  const modlogkanal = client.channels.get(modlog.id)
  
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**${kayitedilcekkisi.tag} Adlı Kullanıcı Sunucuya Kayıt Edildi!**`)
  .addField(`Yetkili`, `\`\`\`${message.author.tag}\`\`\``)
  .setThumbnail(kayitedilcekkisi.avatarURL)

  message.guild.channels.get(modlogkanal.id).send(sbb)
  
}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt-et"],
  perm: 0
}

exports.help = {
  name: "Kayıt Et",
  description: "Kayıt Eder",
  usage: "/kayıt-et @Kişi (İsim) (Yaş)"
}
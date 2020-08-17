const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
    
  var emojis = message.guild.emojis.array();
  
  const emojiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Sunucuda Hiç Emoji Yok`, message.author.avatarURL)
  
  const emojiylok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Sunucuda Hiç Emoji Yok`, message.author.avatarURL)
  
  if (!emojis || emojis === [])
    return message.channel.send(emojiyok);
  if (emojis.length < 1)
    return message.channel.send(emojiylok);
    if (emojis.length > 1) {
        var page = 1;
        var totalpages = emojis.length;
        var embed = new Discord.RichEmbed()
            .setDescription(`**:${emojis[page - 1].name}:**`)
            .setImage(emojis[page - 1].url)
            .setFooter(`Emoji : ${page}/${totalpages} | Emoji ID : ${emojis[page - 1].id}`)
            .setColor("RANDOM");
        message.channel.send(embed).then(async function (sentEmbed) {
            const emojiArray = ["◀", "▶"];
            const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function () { });
            await sentEmbed.react(emojiArray[1]).catch(function () { });
            var reactions = sentEmbed.createReactionCollector(filter, {
                time: 300000
            });
            reactions.on("collect", async function (reaction) {
                await reaction.remove(message.author);
                if (reaction.emoji.name === "◀") {
                    if (page !== 1) {
                        page = page - 1;
                    } else {
                        page = totalpages;
                    }
                } else {
                    if (page !== totalpages) {
                        page = page + 1;
                    } else {
                        page = 1;
                    }
                }
                embed = new Discord.RichEmbed()
                    .setDescription(`**:${emojis[page - 1].name}:**`)
                    .setImage(emojis[page - 1].url)
                    .setFooter(`Emoji : ${page}/${totalpages} | Emoji ID: ${emojis[page - 1].id}`)
                    .setColor("RANDOM");
              
                sentEmbed.edit(embed).catch(function () { });
            });
          const bittiaga = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setAuthor(`Emojilere Bakmanız İçin Verilen 3 Dakika Sona Erdi`, message.author.avatarURL)
            reactions.on("end", () => sentEmbed.edit(bittiaga));
        }).catch(() => {
          const stepbeklan = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Bir Hata Meydana Geldi`, message.author.avatarURL)
            message.reply(stepbeklan).catch(() => {
            });
        });
    } else {
        let emojiembed = new Discord.RichEmbed()
            .setDescription(`**:${emojis[0].name}:**`)
            .setImage(emojis[0].url)
            .setFooter(`Emoji :  ${1}/${1} | Emoji ID: ${emojis[0].id}`)
            .setColor("RANDOM");
        message.channel.send(emojiembed);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojiler"],
  perm: 0
};

exports.help = {
  name: 'Emojiler',
  description: "Emojileri Gösterir",
  usage: '/emojiler'
};
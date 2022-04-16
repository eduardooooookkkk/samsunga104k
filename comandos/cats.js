const Discord = require('discord.js');
const ojo = ['https://cdn.discordapp.com/attachments/942647191019851866/959713958640635904/74d52982a1668cbf64d068e152145f8d.jpg', 'https://cdn.discordapp.com/attachments/942647191019851866/959713958422544404/e67ac9ca7007370bb7d1168aa9a844cf.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713958867120168/0c2c9a6aeb79f5094c7f0f3501d7bd17.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713959102017598/88dde486998ff4005d0014384bfd8251.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713959517245440/6965f189a7caab0c21e0000f8f06bc67.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713959718576158/b808b656005d13aa00c301ecfe71879b.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713959999586324/8c59cc13982bfce4f04bd1be654cb03f.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713960196706325/70ca214f5d75c0ec86c23397ed5dfdb0.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959713960410644560/1c849c6db229ea10357d514ac735ee3b.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714103969075301/e43df75cfa79fe4f625c1cce14964da8.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714104212348928/e31b68454b500244f206f07db20def8f.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714104443027496/ed02cea6ee9cca8010ee03c709adab16.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714104652738570/721c124a192ede000c63900da15bafaf.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714104854052874/5fe975f0367b1e4c6bddedb5d9c913ea.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714105076359228/95e47a9037f991b9d09baf59c6189997.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714105286070313/b60a5116eb7ebced4eb5d6282ad32e55.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714105508380672/cc9c313f683ac583c00680d63cacb595.jpg','https://cdn.discordapp.com/attachments/942647191019851866/959714105734869042/21edfb8e2cfa489e2b63e6b2ecfeb81b.jpg']
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
name: "cats",
alias: ["gatos"],
execute (client, message, args) {

const { MessageEmbed } = require('discord.js')
message.channel.send(ojo[Math.floor(Math.random() * ojo.length)])



}

}
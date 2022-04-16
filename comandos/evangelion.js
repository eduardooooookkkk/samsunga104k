const Discord = require('discord.js');
const ojo = ['https://cdn.discordapp.com/attachments/959560675573792808/959632259583987742/Screenshot_20211004_101814.jpg' , 'https://cdn.discordapp.com/attachments/959560675573792808/959633558375387216/fc0fccdebbc3468cd00763ecca55a624.jpg','https://cdn.discordapp.com/attachments/959560675573792808/959644099630207006/unknown.png', 'https://cdn.discordapp.com/attachments/958921097468854283/959678015321800704/IMG_20210727_223906_838.webp', 'https://cdn.discordapp.com/attachments/958921097468854283/959678221643841546/20220330_090822.jpg','https://cdn.discordapp.com/attachments/958921097468854283/959678014831099984/image0-2-1.png','https://cdn.discordapp.com/attachments/958921097468854283/959678626566144090/IMG_3833.png','https://cdn.discordapp.com/attachments/958921097468854283/959678802492010506/Screenshot_20220221-002605_Discord.jpg','https://cdn.discordapp.com/attachments/958921097468854283/959678802684952586/Screenshot_20211220_033602-1.jpg','https://cdn.discordapp.com/attachments/958921097468854283/959678911707492382/Screenshot_20210915_222401.jpg', 'https://cdn.discordapp.com/attachments/958921097468854283/959679144218746910/image0-18.jpg','https://cdn.discordapp.com/attachments/958921097468854283/959679711049547816/Screenshot_20210102-040635.jpg']
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
name: "random",
alias: ["ojazos"],
execute (client, message, args) {

const embedPrueba = new Discord.MessageEmbed()
message.channel.send(ojo[Math.floor(Math.random() * ojo.length)])


}

}
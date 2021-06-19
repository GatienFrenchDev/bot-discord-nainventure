const Discord = require('discord.js');

module.exports = (client) => {
    
    const channelid = '768070148212523029' //channel de bienvenue nainventure

    client.on('guildMemberAdd', (member) => {

        client.channels.cache.get('855770857375662090').setName(`Total member ${member.guild.memberCount}`)

        member.roles.add('849975652840767489') //role joueur

        const embed = new Discord.MessageEmbed()
                .setColor('2c99e2')
                .setTitle('👋 Bienvenue')
                .setDescription(`Bienvenue à toi <@${member.id}> sur le serveur de la **Nainventure** ! \n \n Viens discuter avec nous dans le channel <#849772127594217473> `)
                const channel = member.guild.channels.cache.get(channelid)
                channel.send(embed);
    })
}
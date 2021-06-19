const Discord = require('discord.js');

module.exports = {
    name: 'suggestion',
    description: 'Envoie une suggestion',
    execute(message, args, client) {
        const sender = message.author.id

        if (!args[0]) return message.reply('Tu dois entrer une suggestion apres la commande !')
        
        const embed = new Discord.MessageEmbed()
            .setColor('19ff29')
            .setTitle(`💡 Suggestion de <@${sender}>`)
            .setDescription(`${args[0]}`);
            client.channels.cache.get('850019110310248468').send(embed).then(embedMessage => {
                embedMessage.react('✅')
                embedMessage.react('❌')
            })
        
        return
    }
}
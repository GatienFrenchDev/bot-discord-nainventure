const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'donne toutes les commandes',
    async execute(message, args) {
        const embedhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Toutes les commandes du bot Nainventure')
        .addFields(
            { name: '!about', value: 'donnes les informations sur le bot'},
            { name: '!clear ou purge [_nombres de messages_]', value: 'supprime un nombre donné de message (requiert la permission de gérer les messages)'},
            { name: '!kick [_mention de la personne_]', value: "expulse la personne de votre choix du serveur (requiert la permission d'expulser des membres)"},
            { name: '!p ou !play [_nom de la musique_]', value: 'pour jouer une musique sur un vocal via youtube'},
            { name: '!p clear', value: "vide la file d'attente du bot"},
            { name: '!p skip', value: "passe à la prochaine musique sur la file d'attente"},
            { name: '!p stop', value: 'deconnete le bot du vocal'},
            { name: '!pfp [_mention de la personne_]', value: "récupérer la photo de profil d'un utilisateur Discord"},
            { name: '!ping', value: 'vérifier la connectivite du bot'},
            { name: '!p stop', value: 'faire partir le bot du channel'},
            { name: '!slowmode [_temps en secondes_]', value: 'change la valeur du slow mode du channel'},
            { name: '!uptime', value: 'renvoie depuis combien de temps le bot est connecté'},
        )
        message.channel.send(embedhelp);
    }
}

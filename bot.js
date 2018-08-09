const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", function() {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(
        `Official BETA Bot | t.help`, { type: "STREAMING", url: 'https://www.twitch.tv/txi_flexyy' }
    );
});

client.on("message", async msg => {

    let prefix = 't.'
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ping`){
        const then = Date.now(); - then
        msg.channel.send(`**Pinging...**`).then(m => {
            m.edit(`Your Ping is Now: **${Date.now() - then}ms** `)
        });
    }
    if(msg.content.startsWith(`${prefix}creator`)) {
        msg.channel.send("```THIS BOT HAS CREATED BY: Flexyy#3108```")
    }  
    if(msg.content.startsWith(`${prefix}github`))  {
        msg.channel.send("https://github.com/Flexyyy")
    }
    if(msg.content.startsWith(`${prefix}help`)) {
        msg.channel.send(":computer: **The commands has Sent to You in DM** :computer:")
        var embed = new Discord.RichEmbed()
        .addField("Prefix", "t.")
        .addField("GitHub", "Sent Flexyy's GitHub Profile!")
        .addField("Ping", "I Will told you Your Ping!")
        .addField("creator", "I Will told you Who Created Me!")
        .addField("invitelink", "I Will Send Invite Link to Inv me For Discord Servers!")
        .addField("serverlink", "I Will Send My Discord Public Server!")
        .setColor(3447003)
        .setFooter("The Amazing man Who Help me: AniShalev#7444")
        .setThumbnail(client.user.avatarURL)
        msg.author.send(embed); 
    }
    if(msg.content.startsWith(`${prefix}invitelink`)) {
        msg.channel.send("**You Can Invite Me Here:** https://discordapp.com/oauth2/authorize?client_id=477056465169809408&scope=bot&permissions=0")
    }
    if(msg.content.startsWith(`${prefix}serverlink`)) {
        msg.channel.send("**My Testing Server:** https://discord.gg/c295HtJ")
    }
});

client.login(process.env.BOT_TOKEN);
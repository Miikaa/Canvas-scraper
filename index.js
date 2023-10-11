const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

const TOKEN = "INSERT_TOKEN_HERE";
const jsonFile = JSON.parse(fs.readFileSync('./output/todo.json'));

const createEmbed = (index) => {
    const data = jsonFile[index];
    const courseName = data.context_name;
    const assignmentName = data.assignment.name;
    const assignmentUrl = data.html_url.slice(0, -7);
    const dueAt = data.assignment.due_at.slice(0, -10);

    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(courseName)
        .setURL(assignmentUrl)
        .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
        .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
        .addFields(
            { name: 'Tehtävä', value: assignmentName },
        )
        .setTimestamp()
        .setFooter({ text: 'Due date: ' + dueAt, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
};

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

const messageTodo = (message, embeds) => {
    for (const embed of embeds) {
        message.channel.send({ embeds: [embed] });
    }
};

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content == "todo") {
        const embeds = [];
        for (let i = 0; i < Math.min(jsonFile.length, 10); i++) {
            embeds.push(createEmbed(i));
        }
        messageTodo(message, embeds);
    }
});

client.login(TOKEN);

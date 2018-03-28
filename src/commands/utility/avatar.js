const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

class AvatarCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
      aliases: ['a'],
      group: 'utility',
      memberName: 'avatar',
      description: 'Get the avatar of a user.',
      clientPermissions: ['EMBED_LINKS'],
      args: [
        {
          key: 'user',
          prompt: 'Who\'s avatar would you like?',
          type: 'user',
        },
      ],
    });
  }

  async run(message, { user }) {
    await message.delete();
    const avatar = user.avatarURL({ format: 'png' });
    
    const embed = new MessageEmbed()
      .setColor(this.client.options.embedColor)
      .setTitle(`${user.username}'s Avatar`)
      .setDescription(`[Download](${avatar})`)
      .setImage(avatar);

    return message.channel.send(embed);
  }
}

module.exports = AvatarCommand ;

module.exports = message => {
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(`Because of lazy hotcode, I can only ban users you \@. UserID and mentionless banning soon:tm:`)
  }

  if (!member.kickable) {
    return message.channel.send(`This user has elevated permissions and cannot be banned by me.`)
  }

  return member
    .ban()
    .then(() => message.channel.send(`${member.user.tag} was permanently yeeted out of the server.`))
    .catch(error => message.channel.send(`Error caught in ban. Just rclick and manually ban lazyass`))

}
/*CMD
  command: 30 din ka key kharidein
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty(user.telegramid + "_selected_duration", 30, "integer");

Api.sendMessage({
  text: "🎮 Kripya game chunen:",
  reply_markup: {
    keyboard: [
      [{ text: "8BP" }], [{ text: "Carom" }], [{ text: "Soccer" }]
    ],
    resize_keyboard: true
  }
});
Bot.runCommand("/games")

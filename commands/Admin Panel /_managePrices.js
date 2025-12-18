/*CMD
  command: /managePrices
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can manage prices.",
    parse_mode: "HTML"
  });
}

Api.sendMessage({
  text: "<b>💲 User Price Manager</b>\n\nSelect a game:",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "8BP", callback_data: "/price_8bp" }],[
        { text: "Carrom", callback_data: "/price_carrom" }],[
        { text: "Soccer", callback_data: "/price_soccer" }
      ]
    ]
  }
});


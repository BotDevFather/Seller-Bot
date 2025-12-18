/*CMD
  command: /price_8bp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Price
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  text: "<b>8BP Price Manager</b>\nSelect duration:",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "3 Days", callback_data: "/price_8bp_3" }],[
        { text: "10 Days", callback_data: "/price_8bp_10" }],[
        { text: "30 Days", callback_data: "/price_8bp_30" }
      ]
    ]
  }
});


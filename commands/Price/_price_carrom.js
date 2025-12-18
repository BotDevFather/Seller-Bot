/*CMD
  command: /price_carrom
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
  text: "<b>Carrom Price Manager</b>\nSelect duration:",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "3 Days", callback_data: "/price_carrom_3" }],[
        { text: "10 Days", callback_data: "/price_carrom_10" }
      ],
      [
        { text: "30 Days", callback_data: "/price_carrom_30" },
      ]
    ]
  }
});


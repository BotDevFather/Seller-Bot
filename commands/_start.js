/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ❌ nahi
  group: 
CMD*/

let msg = `Swagat hai! Kripya ek vikalp chunen:`;

let keyboard = {
  keyboard: [
    [
      { text: "3 din ka key kharidein" },
      { text: "10 din ka key kharidein" },
      { text: "30 din ka key kharidein" }
    ],
    [
      { text: "Balance dekhein" },
      { text: "Paise jodein" },
      { text: "Stock dekhein" }
    ]
  ],
  resize_keyboard: true
};

Api.sendMessage({
  text: msg,
  reply_markup: keyboard
});


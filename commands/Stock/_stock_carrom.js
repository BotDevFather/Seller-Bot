/*CMD
  command: /stock_carrom
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Stock
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let text = "📦 Upload Carrom Stock\nSelect duration:";
let buttons = [
  [
    { text: "3 Days", callback_data: "/upload_carrom_3" }],[
    { text: "10 Days", callback_data: "/upload_carrom_10" }],[
    { text: "30 Days", callback_data: "/upload_carrom_30" }
  ]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: buttons }
});


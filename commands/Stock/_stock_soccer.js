/*CMD
  command: /stock_soccer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Stock
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let text = "📦 Upload Soccer Stock\nSelect duration:";
let buttons = [
  [
    { text: "3 Days", callback_data: "/upload_soccer_3" }],[
    { text: "10 Days", callback_data: "/upload_soccer_10" }],[
    { text: "30 Days", callback_data: "/upload_soccer_30" }
  ]
];

Api.sendMessage({
  text: text,
  reply_markup: { inline_keyboard: buttons }
});


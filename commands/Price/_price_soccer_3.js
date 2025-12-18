/*CMD
  command: /price_soccer_3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Price
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("price_edit_target", "soccer_3day_price", "string");

Api.sendMessage({
  text: "💲 Enter new <b>User Price</b> for <b>Soccer – 3 Days</b>:",
  parse_mode: "HTML"
});
Bot.runCommand("/pricing")

/*CMD
  command: /upload_8bp_30
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Stock
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("upload_stock_target", "8bp_30day_stock", "string");

Api.sendMessage({
  text: "📝 Send the coupon codes *one per line*.\n\nExample:\nCODE123\nCODE456\nCODE789",
  parse_mode: "Markdown"
});
Bot.runCommand("/uploading")

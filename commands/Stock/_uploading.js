/*CMD
  command: /uploading
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Stock
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let target = Bot.getProperty("upload_stock_target");

if (target && message) {

  let input = message;
  let newCodes = input.split("\n").map(c => c.trim()).filter(c => c !== "");

  let existing = Bot.getProperty(target);
  if (!existing) existing = [];

  let updated = existing.concat(newCodes);

  Bot.setProperty(target, updated, "json");
  Bot.setProperty("upload_stock_target", "", "string");

  Api.sendMessage({
    text: `✔️ *${newCodes.length} codes added* to ${target}.`,
    parse_mode: "Markdown"
  });
}


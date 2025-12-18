/*CMD
  command: /addbalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: /addbalance
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can add balance.",
    parse_mode: "HTML"
  });
}

// Expected format: /addbalance USERID AMOUNT
let parts = message.split(" ");

if (parts.length < 3) {
  return Api.sendMessage({
    text: "❗ Correct format:\n<code>/addbalance USERID AMOUNT</code>\nExample:\n<code>/addbalance 123456789 50</code>",
    parse_mode: "HTML"
  });
}

let targetId = parts[1].trim();
let amount = parseFloat(parts[2].trim());

if (isNaN(amount)) {
  return Api.sendMessage({
    text: "❌ Invalid amount. Please send a number.\nExample:\n<code>/addbalance 123456789 50</code>",
    parse_mode: "HTML"
  });
}

// Balance key format
let key = targetId + "_balance";

// Get existing balance
let currentBalance = Bot.getProperty(key);
if (!currentBalance) currentBalance = 0;

// Update balance
let newBalance = currentBalance + amount;

Bot.setProperty(key, newBalance, "float");

Api.sendMessage({
  text: 
    `✔️ Balance Updated\n\n` +
    `👤 User: <b>${targetId}</b>\n` +
    `➕ Added: <b>₹${amount}</b>\n` +
    `💰 New Balance: <b>₹${newBalance}</b>`,
  parse_mode: "HTML"
});


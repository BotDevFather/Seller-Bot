/*CMD
  command: /removebalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: /removebalance
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can remove balance.",
    parse_mode: "HTML"
  });
}

// Expected format: /removebalance USERID AMOUNT
let parts = message.split(" ");

if (parts.length < 3) {
  return Api.sendMessage({
    text: "❗ Correct format:\n<code>/removebalance USERID AMOUNT</code>\nExample:\n<code>/removebalance 123456789 50</code>",
    parse_mode: "HTML"
  });
}

let targetId = parts[1].trim();
let amount = parseFloat(parts[2].trim());

if (isNaN(amount)) {
  return Api.sendMessage({
    text: "❌ Invalid amount. Please enter a number.\nExample:\n<code>/removebalance 123456789 50</code>",
    parse_mode: "HTML"
  });
}

// Property key format
let key = targetId + "_balance";

// Load balance
let currentBalance = Bot.getProperty(key);
if (!currentBalance) currentBalance = 0;

// Prevent negative balance
if (currentBalance < amount) {
  return Api.sendMessage({
    text: 
      `❌ Cannot remove <b>₹${amount}</b>.\n` +
      `User only has <b>₹${currentBalance}</b>.`,
    parse_mode: "HTML"
  });
}

let newBalance = currentBalance - amount;

Bot.setProperty(key, newBalance, "float");

Api.sendMessage({
  text:
    `✔️ Balance Updated\n\n` +
    `👤 User: <b>${targetId}</b>\n` +
    `➖ Removed: <b>₹${amount}</b>\n` +
    `💰 New Balance: <b>₹${newBalance}</b>`,
  parse_mode: "HTML"
});


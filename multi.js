const TelegramBot = require('node-telegram-bot-api');

// Bot tokeningizni kiriting
const token = '7505300343:AAEKg3AP_RWlGmMQA_ZbdVZ8iUnCfX8au8Y';

// Botni ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// Start komandasi uchun handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Menyu tugmalarini yaratish
  const menuOptions = {
    reply_markup: {
      keyboard: [
        [{ text: 'Menyu 1' }, { text: 'Menyu 2' }],
        [{ text: 'Menyu 3' }],
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  };

  // Foydalanuvchiga menyu tugmalarini yuborish
  bot.sendMessage(chatId, 'Menyu tugmasini tanlang:', menuOptions);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === 'Menyu 1') {
    bot.sendMessage(chatId, 'Siz Menyu 1 ni tanladingiz. Mana sayt: https://000quvonchbek.github.io/multi.bot/');
  } else if (msg.text === 'Menyu 2') {
    bot.sendMessage(chatId, 'Siz Menyu 2 ni tanladingiz.');
  } else if (msg.text === 'Menyu 3') {
    bot.sendMessage(chatId, 'Siz Menyu 3 ni tanladingiz.');
  } else {
    bot.sendMessage(chatId, 'Menyudan tanlang.');
  }
});


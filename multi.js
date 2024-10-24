const TelegramBot = require('node-telegram-bot-api');

// Bot tokeningizni kiriting
const token = '7505300343:AAEKg3AP_RWlGmMQA_ZbdVZ8iUnCfX8au8Y';

// Botni ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// Start komandasi uchun handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // O'yinni boshlash tugmasini yaratish
  const menuOptions = {
    reply_markup: {
      keyboard: [
        [{ text: 'O\'yinni boshlash' }]
      ],
      resize_keyboard: true, // Tugmani mos hajmga keltirish
      one_time_keyboard: true // Bir martalik tugma
    }
  };

  // Foydalanuvchiga o'yin tugmasini yuborish
  bot.sendMessage(chatId, 'O\'yinni boshlash uchun tugmani bosing:', menuOptions);
});

// O'yinni boshlash tugmasini qayta ishlash
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === 'O\'yinni boshlash') {
    bot.sendMessage(chatId, 'Mana o\'yin sayti: https://000quvonchbek.github.io/multi.bot/');
  } else {
    bot.sendMessage(chatId, 'O\'yinni boshlash tugmasini tanlang.');
  }
});

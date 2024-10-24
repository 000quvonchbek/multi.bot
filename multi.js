const TelegramBot = require('node-telegram-bot-api');

// Bot tokeningizni kiriting
const token = '7505300343:AAEKg3AP_RWlGmMQA_ZbdVZ8iUnCfX8au8Y';

// Botni ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// Start komandasi uchun handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Menyu tugmasini yaratish
  const menuOptions = {
    reply_markup: {
      keyboard: [
        [{ text: 'Menyu 1' }, { text: 'Menyu 2' }, { text: 'Menyu 3' }]
      ],
      resize_keyboard: true
    }
  };

  // Foydalanuvchiga menyu tugmalarini yuborish
  bot.sendMessage(chatId, 'Menyuni tanlang:', menuOptions);
});

// Menyu tugmalarini qayta ishlash
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === 'Menyu 1') {
    // Telegram o'yin boshlash tugmasi uchun inline reply_markup
    const gameOptions1 = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'O\'yinni boshlash', callback_game: {} }]
        ]
      }
    };

    // Foydalanuvchiga o'yinni boshlash tugmasini yuborish - Menyu 1
    bot.sendMessage(chatId, 'Menyu 1 uchun o\'yinni boshlash tugmasini bosing:', gameOptions1);
  }

  if (msg.text === 'Menyu 2') {
    // Menyu 2 uchun o'yinni boshlash
    bot.sendMessage(chatId, 'Menyu 2 o\'yini hozircha mavjud emas.');
  }

  if (msg.text === 'Menyu 3') {
    // Menyu 3 uchun o'yinni boshlash
    bot.sendMessage(chatId, 'Menyu 3 o\'yini hozircha mavjud emas.');
  }
});

// Callback handler - o'yinni boshlash uchun
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  // O'yin boshlanishi - o'yin URL'ni yashirish va ichki HTML5 o'yin qo'llash
  bot.answerCallbackQuery(query.id, { text: 'O\'yin boshlandi!' });
});

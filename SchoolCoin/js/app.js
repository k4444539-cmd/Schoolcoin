// Ініціалізація Telegram WebApp
const tg = window.Telegram.WebApp;

// Тестовий баланс (поки без бази даних)
let balance = 100;

document.getElementById("check").addEventListener("click", () => {
  document.getElementById("balance").innerText = balance + " 🪙";
  tg.HapticFeedback.impactOccurred("light"); // легка вібрація (тільки в мобільному Telegram)
});

// Автоматичне встановлення балансу при відкритті
document.getElementById("balance").innerText = balance + " 🪙";

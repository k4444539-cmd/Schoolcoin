document.addEventListener("DOMContentLoaded", () => {
  let user = localStorage.getItem("user");

  if (!user) {
    user = JSON.stringify({
      name: "Гравець",
      balance: 5
    });
    localStorage.setItem("user", user);
  }

  const userData = JSON.parse(user);

  // оновлюємо баланс, якщо є такий елемент
  const balanceEl = document.getElementById("balance");
  if (balanceEl) {
    balanceEl.textContent = userData.balance;
  }
});

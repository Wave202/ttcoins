// const packs = [
//   { coins: 20, price: 0.39 },
//   { coins: 70, price: 1.29 },
//   { coins: 350, price: 6.0 },
//   { coins: 700, price: 12.0 },
//   { coins: 1400, price: 24.0 },
//   { coins: 3500, price: 60.0 },
//   { coins: 7000, price: 120.99 },
//   { coins: 17500, price: 300.0 },
// ];

// let selected = packs[0].coins;
// const packsContainer = document.getElementById("packs");

// function formatPrice(p) {
//   return p.toFixed(2) + " $";
// }

// function createPackElement(pack) {
//   const el = document.createElement("div");
//   el.className = "pack";
//   if (pack.coins === selected) el.classList.add("selected");

//   el.innerHTML = `
//     <img src="img/e0b810e57ba3977744f9cfc8fab7975a.jpg" alt="coin" class="coin">
//     <div class="coins-count">${pack.coins}</div>
//     <div class="price">${formatPrice(pack.price)}</div>
//   `;

//   el.addEventListener("click", () => {
//     selected = pack.coins;
//     document.querySelectorAll(".pack").forEach(p => p.classList.remove("selected"));
//     el.classList.add("selected");
//   });

//   return el;
// }

// packs.forEach(pack => {
//   packsContainer.appendChild(createPackElement(pack));
// });

// document.getElementById("buyBtn").addEventListener("click", () => {
//   const username = document.getElementById("username").value.trim();
//   const pack = packs.find(p => p.coins === selected);

//   if (!username) {
//     alert("Пожалуйста, введите юзернейм перед покупкой!");
//     return;
//   }

//   alert(`Пользователь: ${username}\nВы выбрали пакет: ${pack.coins} монет — ${formatPrice(pack.price)}`);
// });

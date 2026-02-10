/* =========================
   PRODUCTS DATA
========================= */
const products = {
  liquids: [
    { name: 'Elfliq 30ml 50mg', price: '50zl' },
    { name: 'Vozol 30ml 50mg', price: '50zl' },
    { name: 'Chaser special 30ml 50mg', price: '50zl' },
    { name: 'Chaser lux 30ml 60mg', price: '50zl' },
    { name: 'Chaser f/p 30ml 60mg', price: '50zl' },
    { name: 'Chaser black 30ml 50mg', price: '50zl' },
    { name: 'Chaser Limited Edition 30ml 60mg', price: '50zl' },
    { name: 'Chaser Squad Game 30ml 50mg', price: '50zl' }
  ],
  pods: [
    { name: 'Xros 5', price: '120zl' },
    { name: 'Xros 5 mini', price: '100zl' },
    { name: 'OXVA XLIM GO 2', price: '100zl' }, 
  ],
  vapes: [
    { name: 'Vozol gear 50k', price: '110zl' },
    { name: 'Elfbar bc 45k', price: '110zl' },
    { name: 'Elfbar moonlight 40k', price: '100zl' },
    { name: 'Vozol vista 40k', price: '100zl' },
    { name: 'Vozol rave 40k', price: '100zl' },
    { name: 'Elfbar gh 33k', price: '90zl' },
    { name: 'Elfbar combo pro 30k', price: '90zl' },
    { name: 'Elfbar raya d3 pro 30k', price: '90zl' },
    { name: 'Elfbar raya d3 25k', price: '80zl' },
    { name: 'Elfbar planet 25k', price: '80zl' },
    { name: 'Waka 25k', price: '80zl' },
    { name: 'Waka 10k', price: '70zl' },
    { name: 'Elfbar 1500k', price: '35zl' }
  ],
  cartridges: [
    { name: 'Vaporesso XROS 3 ML Cartridge', price: '30zl' },
    { name: 'VAPORESSO VIBE POD 4,5ML', price: '30zl' },
    { name: 'OXVA 3ml ,5ML', price: '30zl' },
  ],
};

/* =========================
   ELEMENTS
========================= */
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const productList = document.getElementById('productList');
const closeModalBtn = document.getElementById('closeModalBtn');

const ageModal = document.getElementById('ageModal');
const confirmAgeBtn = document.getElementById('confirmAgeBtn');

const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');

/* =========================
   PRODUCT MODAL
========================= */
function openModal(type) {
  if (!products[type]) return;

  modalTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1); // Преобразуем первую букву в заглавную
  productList.innerHTML = ''; // Очищаем список

  // Заполняем список продуктов с именем и ценой
  products[type].forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('product-item');
    
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('product-name');
    nameSpan.textContent = item.name;

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('product-price');
    priceSpan.textContent = item.price;

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);

    productList.appendChild(li);
  });

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Восстанавливаем прокрутку страницы
}

/* =========================
   EVENTS — CATALOG
========================= */
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    openModal(card.dataset.type);
  });
});

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

/* =========================
   AGE MODAL (SHOW ONLY ONCE PER SESSION)
========================= */
window.addEventListener('load', () => {
  // Проверяем, был ли уже подтвержден возраст в текущей сессии
  if (!sessionStorage.getItem('ageVerified')) {
    ageModal.style.display = 'flex';
    window.scrollTo(0, 0);
  }
});

// Событие на кнопку подтверждения возраста
confirmAgeBtn.addEventListener('click', () => {
  // Сохраняем в sessionStorage, что возраст подтвержден
  sessionStorage.setItem('ageVerified', 'true');
  ageModal.style.display = 'none'; // Закрываем модалку
});

/* =========================
   BURGER MENU
========================= */
if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

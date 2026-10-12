/* ===========================================================
   LINGO KIDS — JavaScript

   RASMLARNI ALMASHTIRISH:
   1) Yuklab olgan rasmlaringizni images/ papkasiga qo'ying.
   2) Pastdagi BOOKS ro'yxatidagi image yo'llarini o'zgartiring.
      Masalan: image: "images/my-book-1.webp"
   3) Agar bir xil rasmni hero va product kartochkasida ishlatsangiz,
      faqat shu yerdagi yo'lni almashtirish kifoya.
   =========================================================== */

const BOOKS = [
  {
    id: 1,
    title: "Children English — Book 1",
    image: "images/book-1.svg", // <<< 1-KITOB RASMINI SHU YERDA ALMASHTIRING
    price: "400.000 so‘m",
    oldPrice: "550.000 so‘m",
    level: "Starter"
  },
  {
    id: 2,
    title: "Children English — Book 2",
    image: "images/book-2.svg", // <<< 2-KITOB RASMINI SHU YERDA ALMASHTIRING
    price: "420.000 so‘m",
    oldPrice: "570.000 so‘m",
    level: "Next level"
  },
  {
    id: 3,
    title: "Children English — Book 3",
    image: "images/book-3.svg", // <<< 3-KITOB RASMINI SHU YERDA ALMASHTIRING
    price: "440.000 so‘m",
    oldPrice: "590.000 so‘m",
    level: "Practice"
  }
];

const translations = {
  uz: {
    navHome: "Главная", navProjects: "Проекты", navServices: "Сервисы", navContacts: "Контакты",
    languageLabel: "Sayt tili", headerOrder: "Biz bilan bog‘lanish",
    heroEyebrow: '<span class="eyebrow-dot"></span> KICHIK QADAM — KATTA NATIJA',
    heroDescription: "Ingliz, rus, xitoy, fransuz, koreys, ispan, o‘zbek va arab tillarini tez va oson o‘rganing!",
    orderButton: 'Buyurtma berish <span aria-hidden="true">↗</span>',
    deliveryText: "Buyurtmangiz 48 soatda yetib bormasa, yetkazib berish bepul!",
    booksKicker: "BIZNING TO‘PLAM", booksIntro: "Barcha yoshdagi bolalarga qiziqarli, o‘rganish uchun foydali kitoblar.",
    learnMore: 'Batafsil ma’lumot <span aria-hidden="true">↗</span>', popularBadge: "Ommabop", starterLevel: "BOSHLANG‘ICH DARAJA", nextLevel: "KEYINGI BOSQICH", confidentLevel: "MUSTAHKAMLASH",
    bookLanguage: "Kitob tili", buyNow: 'Buyurtma qilish <span aria-hidden="true">↗</span>',
    whyKicker: "NIMA UCHUN BIZ?", whyTitle: "O‘rganish — qiziqarli sarguzasht!", whyDescription: "Rang-barang kitoblar, oddiy mashqlar va bolalarga mos uslub bilan har kuni yangi bilim.",
    benefit1Title: "Oson va tushunarli", benefit1Text: "Bolalar yoshiga mos mashqlar va rangli sahifalar.", benefit2Title: "Sevib o‘rganishadi", benefit2Text: "Qiziqarli rasmlar o‘rganishni odatga aylantiradi.", benefit3Title: "Qulay yetkazib berish", benefit3Text: "Buyurtmangizni uyga yoki o‘zingizga qulay manzilga oling.",
    contactKicker: "SAVOLLARINGIZ BORMI?", contactTitle: "Farzandingiz uchun to‘g‘ri kitobni tanlaymiz.", contactText: "Bizga yozing — sizga mos to‘plamni topishga yordam beramiz.", contactButton: 'Bog‘lanish <span aria-hidden="true">↗</span>',
    footerText: "Kichik o‘quvchilar uchun katta imkoniyatlar.", rights: "Barcha huquqlar himoyalangan.",
    modalKicker: "BUYURTMA", modalTitle: "Keling, tanlab olamiz!", modalDescription: "Ma’lumotlaringizni qoldiring. Bu demo forma bo‘lib, hozircha ma’lumotlarni serverga yubormaydi.", nameLabel: "Ismingiz", phoneLabel: "Telefon raqamingiz", bookLabel: "Kitob to‘plami", messageLabel: "Izoh (ixtiyoriy)", sendOrder: 'Buyurtma so‘rovini tayyorlash <span aria-hidden="true">↗</span>',
    success: "Demo so‘rov tayyorlandi. Haqiqiy buyurtma qabul qilish uchun formani backend yoki Telegram botga ulash kerak.", requiredError: "Iltimos, ismingiz va telefon raqamingizni to‘g‘ri kiriting."
  },
  ru: {
    navHome: "Главная", navProjects: "Книги", navServices: "Преимущества", navContacts: "Контакты",
    languageLabel: "Язык сайта", headerOrder: "Связаться с нами",
    heroEyebrow: '<span class="eyebrow-dot"></span> МАЛЕНЬКИЙ ШАГ — БОЛЬШОЙ РЕЗУЛЬТАТ',
    heroDescription: "Изучайте английский, русский, китайский, французский, корейский, испанский, узбекский и арабский языки легко и с интересом!",
    orderButton: 'Заказать <span aria-hidden="true">↗</span>', deliveryText: "Если заказ не прибудет за 48 часов, доставка бесплатно!",
    booksKicker: "НАША КОЛЛЕКЦИЯ", booksIntro: "Красочные и полезные книги, которые увлекают детей и помогают учиться.", learnMore: 'Подробнее <span aria-hidden="true">↗</span>', popularBadge: "Популярное", starterLevel: "НАЧАЛЬНЫЙ УРОВЕНЬ", nextLevel: "СЛЕДУЮЩИЙ УРОВЕНЬ", confidentLevel: "ЗАКРЕПЛЕНИЕ", bookLanguage: "Язык книги", buyNow: 'Заказать <span aria-hidden="true">↗</span>',
    whyKicker: "ПОЧЕМУ МЫ?", whyTitle: "Учёба — это увлекательное приключение!", whyDescription: "Яркие книги, простые задания и подходящий детям формат помогают узнавать новое каждый день.",
    benefit1Title: "Просто и понятно", benefit1Text: "Упражнения по возрасту и красочные страницы.", benefit2Title: "Учиться интересно", benefit2Text: "Иллюстрации превращают обучение в привычку.", benefit3Title: "Удобная доставка", benefit3Text: "Получите заказ домой или по удобному адресу.",
    contactKicker: "ЕСТЬ ВОПРОСЫ?", contactTitle: "Поможем выбрать книгу для вашего ребёнка.", contactText: "Напишите нам — подберём подходящий набор.", contactButton: 'Связаться <span aria-hidden="true">↗</span>',
    footerText: "Большие возможности для маленьких учеников.", rights: "Все права защищены.",
    modalKicker: "ЗАКАЗ", modalTitle: "Давайте выберем!", modalDescription: "Оставьте данные. Это демонстрационная форма: пока информация не отправляется на сервер.", nameLabel: "Ваше имя", phoneLabel: "Номер телефона", bookLabel: "Набор книг", messageLabel: "Комментарий (необязательно)", sendOrder: 'Подготовить заявку <span aria-hidden="true">↗</span>', success: "Демо-заявка подготовлена. Для реального приёма заказов подключите backend или Telegram-бота.", requiredError: "Пожалуйста, правильно укажите имя и номер телефона."
  },
  en: {
    navHome: "Home", navProjects: "Books", navServices: "Benefits", navContacts: "Contact",
    languageLabel: "Site language", headerOrder: "Contact us",
    heroEyebrow: '<span class="eyebrow-dot"></span> SMALL STEPS — BIG RESULTS',
    heroDescription: "Discover English, Russian, Chinese, French, Korean, Spanish, Uzbek and Arabic in a fun, easy way!",
    orderButton: 'Order now <span aria-hidden="true">↗</span>', deliveryText: "If your order doesn't arrive within 48 hours, delivery is free!",
    booksKicker: "OUR COLLECTION", booksIntro: "Colourful, useful books that keep children curious and make learning fun.", learnMore: 'Learn more <span aria-hidden="true">↗</span>', popularBadge: "Popular", starterLevel: "BEGINNER LEVEL", nextLevel: "NEXT LEVEL", confidentLevel: "PRACTICE", bookLanguage: "Book language", buyNow: 'Order book <span aria-hidden="true">↗</span>',
    whyKicker: "WHY CHOOSE US?", whyTitle: "Learning is an exciting adventure!", whyDescription: "Colourful books, simple activities and a child-friendly approach bring something new every day.",
    benefit1Title: "Simple and clear", benefit1Text: "Age-appropriate exercises and colourful pages.", benefit2Title: "Fun to learn", benefit2Text: "Playful illustrations help learning become a habit.", benefit3Title: "Convenient delivery", benefit3Text: "Get your order delivered to a convenient address.",
    contactKicker: "HAVE QUESTIONS?", contactTitle: "Let’s find the right book for your child.", contactText: "Get in touch and we’ll help you choose a set.", contactButton: 'Get in touch <span aria-hidden="true">↗</span>',
    footerText: "Big opportunities for little learners.", rights: "All rights reserved.",
    modalKicker: "ORDER", modalTitle: "Let’s choose your books!", modalDescription: "Leave your details. This is a demo form and does not send information to a server yet.", nameLabel: "Your name", phoneLabel: "Phone number", bookLabel: "Book set", messageLabel: "Message (optional)", sendOrder: 'Prepare request <span aria-hidden="true">↗</span>', success: "Demo request prepared. Connect a backend or Telegram bot to accept real orders.", requiredError: "Please enter a valid name and phone number."
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let activeSlide = 0;
let lastFocusedElement = null;

function applyLanguage(language) {
  const dict = translations[language] || translations.uz;
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.innerHTML = dict[key];
  });
  const feedback = $('#formFeedback');
  if (feedback) feedback.textContent = '';
  try { localStorage.setItem('lingo-kids-language', language); } catch (_) { /* storage is optional */ }
}

function setImageSource(image, book) {
  if (!image || !book) return;
  image.src = book.image;
  image.alt = book.title;
  image.onerror = () => {
    image.onerror = null;
    image.classList.add('image-unavailable');
    console.warn(`Rasm topilmadi: ${book.image}. script.js ichidagi BOOKS ro‘yxatida yo‘lni tekshiring.`);
  };
}

function renderSlide() {
  const current = BOOKS[activeSlide];
  const previous = BOOKS[(activeSlide - 1 + BOOKS.length) % BOOKS.length];
  const next = BOOKS[(activeSlide + 1) % BOOKS.length];
  const heroImages = {
    previous: $('[data-hero-book="previous"]'),
    active: $('[data-hero-book="active"]'),
    next: $('[data-hero-book="next"]')
  };
  setImageSource(heroImages.previous, previous);
  setImageSource(heroImages.active, current);
  setImageSource(heroImages.next, next);

  const price = $('#heroPrice');
  const oldPrice = $('#heroOldPrice');
  const count = $('#slideCount');
  if (price) price.textContent = current.price;
  if (oldPrice) oldPrice.textContent = current.oldPrice;
  if (count) count.innerHTML = `${String(activeSlide + 1).padStart(2, '0')} <i></i> ${String(BOOKS.length).padStart(2, '0')}`;

  const activeImage = heroImages.active;
  if (activeImage) {
    activeImage.classList.remove('is-changing');
    // Restart a small transition without relying on timers.
    void activeImage.offsetWidth;
    activeImage.classList.add('is-changing');
    requestAnimationFrame(() => activeImage.classList.remove('is-changing'));
  }
}

function changeSlide(direction) {
  activeSlide = (activeSlide + direction + BOOKS.length) % BOOKS.length;
  renderSlide();
}

function openOrder(bookId = null) {
  const modal = $('#orderModal');
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  const bookSelect = $('#orderBook');
  if (bookSelect && bookId) bookSelect.value = String(bookId);
  $('#formFeedback').textContent = '';
  $('#formFeedback').classList.remove('is-error');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  window.setTimeout(() => $('#customerName')?.focus(), 60);
}

function closeOrder() {
  const modal = $('#orderModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
}

function setupRevealAnimations() {
  const revealElements = $$('[data-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13, rootMargin: '0px 0px -35px 0px' });
  revealElements.forEach((element) => observer.observe(element));
}

function closeMobileMenu() {
  const nav = $('#mainNav');
  const toggle = $('#menuToggle');
  nav?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}

function setupProductImages() {
  $$('[data-book-image]').forEach((image) => {
    const book = BOOKS.find((item) => item.id === Number(image.dataset.bookImage));
    if (book) setImageSource(image, book);
  });
}

function setupOrderForm() {
  const form = $('#orderForm');
  const feedback = $('#formFeedback');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const currentLanguage = $('#siteLanguage')?.value || 'uz';
    const dict = translations[currentLanguage] || translations.uz;
    const name = $('#customerName').value.trim();
    const phone = $('#customerPhone').value.trim();
    if (name.length < 2 || phone.replace(/\D/g, '').length < 7) {
      feedback.textContent = dict.requiredError;
      feedback.classList.add('is-error');
      return;
    }
    feedback.textContent = dict.success;
    feedback.classList.remove('is-error');
    // Frontend demo only. Connect a backend or Telegram bot here to submit real orders.
    console.info('Demo order details:', Object.fromEntries(new FormData(form).entries()));
  });
}

function setupNavActiveState() {
  const sections = ['top', 'books', 'services', 'contacts'].map((id) => document.getElementById(id)).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$('.nav-link').forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  setupProductImages();
  renderSlide();
  setupRevealAnimations();
  setupOrderForm();
  setupNavActiveState();

  $('#currentYear').textContent = new Date().getFullYear();
  $('#prevSlide')?.addEventListener('click', () => changeSlide(-1));
  $('#nextSlide')?.addEventListener('click', () => changeSlide(1));

  $$('[data-open-order]').forEach((button) => button.addEventListener('click', () => openOrder()));
  $$('[data-close-order]').forEach((button) => button.addEventListener('click', closeOrder));
  $$('[data-product-order]').forEach((button) => button.addEventListener('click', () => {
    const card = button.closest('[data-product-card]');
    const language = $('.book-language', card)?.value || '';
    const id = button.dataset.productOrder;
    openOrder(id);
    const message = $('#customerMessage');
    if (message && language) message.value = `Kitob tili / Book language: ${language}`;
  }));

  const langSelect = $('#siteLanguage');
  let preferredLanguage = 'uz';
  try {
    const savedLanguage = localStorage.getItem('lingo-kids-language');
    if (savedLanguage && translations[savedLanguage]) preferredLanguage = savedLanguage;
  } catch (_) { /* storage is optional */ }
  if (langSelect) {
    langSelect.value = preferredLanguage;
    langSelect.addEventListener('change', () => applyLanguage(langSelect.value));
  }
  applyLanguage(preferredLanguage);

  const menuToggle = $('#menuToggle');
  menuToggle?.addEventListener('click', () => {
    const nav = $('#mainNav');
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  $$('#mainNav a').forEach((link) => link.addEventListener('click', closeMobileMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeOrder();
      closeMobileMenu();
    }
    if (event.key === 'ArrowLeft' && !$('#orderModal').classList.contains('is-open')) changeSlide(-1);
    if (event.key === 'ArrowRight' && !$('#orderModal').classList.contains('is-open')) changeSlide(1);
  });
});

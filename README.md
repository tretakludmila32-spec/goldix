# Goldix — інтернет-магазин аксесуарів для колекціонерів

**Сайт:** goldix.com.ua
**ФОП:** Трет'як Володимир Анатолійович (РНОКПП 2407104419)

React + Vite сайт для Netlify. Дві категорії товарів: аксесуари для нумізматики (капсули, альбоми, планшети) і філателії (кляйсери, клемташі, альбоми).

## 🚀 Запуск локально

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # збірка в dist/
```

## ✅ Що вже готово

### Функціонал
- ✓ Робочий **кошик** (додати, видалити, змінити кількість) — drawer справа
- ✓ **Форма оформлення замовлення** через Netlify Forms з honeypot-захистом від спаму
- ✓ Сторінка успішного замовлення
- ✓ Cookie-banner з 2 кнопками (Тільки необхідні / Прийняти всі)
- ✓ Іконка кошика зі счітчиком товарів

### Сторінки (13 шт.)
- ✓ Головна
- ✓ 2 категорії (Нумізматика, Філателія)
- ✓ 6 товарів (динамічно з `PRODUCTS`)
- ✓ Про нас (з повними реквізитами + IBAN)
- ✓ Доставка та оплата
- ✓ Повернення та обмін (GMC-compliant: ст. 9 ЗУ 1023-XII, 14 днів, 7 днів на повернення коштів)
- ✓ Контакти
- ✓ **Публічна оферта** (13 розділів)
- ✓ **Політика конфіденційності** (12 розділів, GDPR + ЗУ 2297-VI)
- ✓ **Політика cookies** (з переліком усіх cookies за типами)

### SEO та GMC
- ✓ **JSON-LD Schema.org** через React useEffect:
  - Organization (OnlineStore) — на всіх сторінках
  - WebSite — на головній
  - Product + Offer + MerchantReturnPolicy + OfferShippingDetails — на картках товарів
  - BreadcrumbList — на картках товарів
- ✓ **sitemap.xml** з усіма 15 URL + image sitemaps для товарів
- ✓ robots.txt з дозволом Googlebot, AdsBot-Google, Storebot-Google
- ✓ Meta Open Graph для соцмереж
- ✓ Фавікон — золота літера G

### Реквізити у футері
- ✓ ФОП Трет'як Володимир Анатолійович
- ✓ РНОКПП: 2407104419
- ✓ Адреса: 04070, м. Київ, вул. Хорива, 31, оф. 11
- ✓ Телефон: +380 99 781 4941
- ✓ Email: vladimirtret1965@gmail.com
- ✓ IBAN + банк ПриватБанк (на сторінці «Про нас» і «Контакти»)

### Технічне
- ✓ `_headers` з HSTS для Netlify
- ✓ Прихована форма в `index.html` для реєстрації Netlify Forms при деплої

## 📝 ЩО ЗАЛИШИЛОСЬ ЗАМІНИТИ

1. **Google Search Console токен** — у `index.html` заміни `REPLACE_WITH_YOUR_TOKEN`
2. **Ціни в `src/App.jsx`** — перевір що збігаються з твоїм прайсом:
   - Капсула QUADRUM 38 мм — 38 грн
   - Альбом NUMIS — 1890 грн
   - Планшет Lindner — 749 грн
   - Кляйсер COMFORT A4 — 2690 грн
   - Клемташі Hawid — 289 грн
   - Альбом VARIO — 1390 грн

3. **Фото капсули** — замінити `public/images/product-num-1.png` (зараз капсула з золотою монетою) на нову з рабочего стола: `C:\Users\user\Desktop\nano-banana-out\gen-1776769849964-1.png` (порожня капсула). Це **критичний** блокер GMC — AI-фото з монетою, якої немає в комплекті, класифікується як misrepresentation.

## 🌐 ДЕПЛОЙ НА NETLIFY

1. Створи репозиторій на GitHub → залий код
2. https://app.netlify.com → **Add new site** → **Import from Git**
3. Build command: `npm run build` · Publish directory: `dist`
4. **Domain management** → підключи домен `goldix.com.ua`
5. Увімкни **Force HTTPS**
6. **Forms** → перевір що форма `goldix-order` зареєстрована автоматично
7. **Forms → Settings** → додай email notifications на vladimirtret1965@gmail.com

## 📧 NETLIFY FORMS — КУДИ ПРИХОДЯТЬ ЗАМОВЛЕННЯ

Після деплою:
- Кожне замовлення зберігається в Netlify Dashboard → Forms → goldix-order
- Налаштуй Email notification: Netlify → Site settings → Forms → Notifications → Add notification → Email → ввести vladimirtret1965@gmail.com
- Безкоштовний план Netlify: 100 submissions/місяць (цього більше ніж достатньо для старту)
- Honeypot-поле `bot-field` відсіює більшість ботів автоматично

## 🏪 ПІДКЛЮЧЕННЯ GOOGLE MERCHANT CENTER

### Крок 1. Google Search Console
1. https://search.google.com/search-console
2. Add property → Domain → `goldix.com.ua`
3. Вибери HTML meta tag → скопіюй токен
4. Встав у `index.html` замість `REPLACE_WITH_YOUR_TOKEN`
5. Git push → Netlify передеплоїть автоматично
6. Verify у Search Console
7. Sitemaps → додай `https://goldix.com.ua/sitemap.xml`

### Крок 2. Merchant Center
1. https://merchants.google.com
2. Business country: **Ukraine** · Currency: **UAH** · Language: **Ukrainian**
3. Business name: **Goldix**
4. Business info → Website → `https://goldix.com.ua` → Claim
5. Shipping: Нова Пошта 120 грн / Кур'єр Goldix 150 грн; безкоштовно від 2000 грн
6. Return policy: 14 днів згідно ЗУ 1023-XII
7. Products → **Автоматичне вилучення** (має працювати через JSON-LD) або завантажити фід

### Крок 3. Верифікація бізнесу
Підготуй PDF-сканы:
- Виписка з ЄДР ФОП
- Паспорт (перша сторінка + прописка)
- Підтвердження адреси (договір оренди / комунальний рахунок)

## 📁 СТРУКТУРА ПРОЕКТУ

```
goldix-site/
├── public/
│   ├── images/             6 фото товарів (.png)
│   ├── robots.txt          дозвіл для Googlebot, AdsBot, Storebot
│   ├── sitemap.xml         15 URL з image sitemaps
│   └── _headers            HSTS
├── src/
│   ├── App.jsx             весь код сайту (~1250 рядків)
│   └── main.jsx            React entry point
├── index.html              + прихована форма для Netlify Forms
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md               цей файл
```

## ⚠️ ЧЕКЛИСТ ПЕРЕД GMC-ПОДАЧЕЮ

- [x] Функціональний кошик і форма замовлення
- [x] Публічна оферта, Privacy, Cookies, Повернення
- [x] Реквізити ФОП у футері на всіх сторінках
- [x] JSON-LD Schema.org (Product, Organization, Offer)
- [x] sitemap.xml
- [x] robots.txt з AdsBot-Google
- [x] HTTPS через Netlify
- [x] 14 днів повернення згідно ст. 9 ЗУ 1023-XII
- [x] Cookie banner з choice (не auto-accept)
- [ ] **Замінити фото QUADRUM на порожню капсулу** (критично!)
- [ ] Перевірити та замінити ціни
- [ ] Google Search Console токен у `index.html`
- [ ] Домен goldix.com.ua підключений
- [ ] Google Business Profile створено
- [ ] Документи ФОП для верифікації GMC в PDF

## 📊 ДЖЕРЕЛА ЗАМОВЛЕНЬ (після деплою)

| Канал | Куди приходить |
|---|---|
| Netlify Forms | Dashboard → Forms → goldix-order + email |
| Телефон | +380 99 781 4941 |
| Email | vladimirtret1965@gmail.com |

Після першого замовлення перевір у Netlify що форма працює!

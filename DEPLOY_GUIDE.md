# Goldix — Інструкція з деплою та налаштування WayForPay

## Крок 1. Залити проект на GitHub

```bash
cd goldix-site
git init
git add .
git commit -m "Initial Goldix site with WayForPay"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/goldix.git
git push -u origin main
```

## Крок 2. Створити сайт у Netlify

1. https://app.netlify.com → **Add new site** → **Import from Git** → GitHub
2. Обери репозиторій `goldix`
3. Build settings (мають підтягнутись автоматично з `netlify.toml`):
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions` (автоматично)
4. Натисни **Deploy**
5. Дочекайся першого деплою (~2 хв)

## Крок 3. Підключити домен goldix.com.ua

1. Netlify Dashboard → **Domain management** → **Add custom domain**
2. Ввести `goldix.com.ua`
3. Налаштувати DNS у реєстратора домену:
   - `A @ 75.2.60.5` (Netlify apex)
   - `CNAME www your-site.netlify.app`
4. Дочекатись SSL-сертифіката (~5-10 хв після правильного DNS)
5. Увімкнути **Force HTTPS**

## Крок 4. Додати Environment Variables для WayForPay

Netlify Dashboard → **Site configuration** → **Environment variables** → **Add a variable**

Додати **4 змінні**:

| Key | Value | Де взяти |
|---|---|---|
| `WFP_MERCHANT_ACCOUNT` | твій merchant login | WFP кабінет → Налаштування → Магазин |
| `WFP_SECRET_KEY` | твій secret key | WFP кабінет → Налаштування → Магазин → Показати ключ |
| `WFP_MERCHANT_DOMAIN` | `goldix.com.ua` | (без https://) |
| `WFP_SITE_URL` | `https://goldix.com.ua` | (з https://) |

**⚠️ ВАЖЛИВО:** `WFP_SECRET_KEY` — секретний, **ніколи не комітити в Git**. Він живе тільки в Netlify ENV.

Після додавання змінних → **Trigger deploy** → **Deploy site** (перезбірка щоб підхопили змінні).

## Крок 5. Налаштувати WayForPay кабінет

1. https://m.wayforpay.com/account/site → увійти
2. Твій магазин → **Редагувати**
3. Встановити:
   - **Домен:** `goldix.com.ua`
   - **Service URL:** `https://goldix.com.ua/api/wfp-callback` (куди WFP надсилає callback після оплати)
   - **Return URL:** `https://goldix.com.ua/payment-result` (куди повертається користувач)
   - **Secret Key:** скопіюй точно такий самий, що вставив у Netlify `WFP_SECRET_KEY`
4. Зберегти

## Крок 6. Тестування

### 6.1. Тестова оплата (test mode)
У WFP кабінеті → **Налаштування** → увімкнути **тестовий режим**.

Тестові картки (згідно https://wiki.wayforpay.com/view/852472):
- Visa успіх: `4444 5555 6666 1111` / CVV `111` / 10/30
- Visa відмова: `4444 5555 6666 0000` / CVV `111` / 10/30

Флоу:
1. Зайти на сайт → додати товар у кошик → "Оформити замовлення"
2. Заповнити форму → обрати "💳 Картою онлайн"
3. Redirect на сторінку WFP → ввести тестову картку
4. Після оплати: return на `/payment-result` → показ статусу

### 6.2. Перевірка callback
Netlify Dashboard → **Functions** → **wfp-callback** → **Logs**
Має бути запис про отриманий callback від WFP.

Якщо бачиш "неправильний підпис" — перевір що `WFP_SECRET_KEY` у Netlify збігається точно з ключем у WFP кабінеті (без пробілів).

## Крок 7. Після тестів — бойовий режим

1. WFP кабінет → вимкнути тестовий режим
2. WFP → модерація магазину → надіслати домен на перевірку
3. Дочекатись активації (зазвичай 1-3 робочих дні)

## Крок 8. Налаштувати Netlify Forms

1. Netlify Dashboard → **Forms** → має бути форма `goldix-order`
2. **Forms** → **Notifications** → **Add notification** → **Email notification**
3. Email: `vladimirtret1965@gmail.com`
4. Тепер кожне замовлення (включно з післяплатою/IBAN) приходить на пошту.

## Чеклист перед GMC-подачею

- [ ] Домен `goldix.com.ua` підключено до Netlify
- [ ] HTTPS працює (padlock іконка в браузері)
- [ ] Всі 4 env vars WayForPay встановлено
- [ ] Service URL і Return URL у WFP кабінеті = goldix.com.ua
- [ ] Тестова оплата пройшла успішно
- [ ] Email notification у Netlify Forms увімкнено
- [ ] Замінити фото капсули QUADRUM (прибрати золоту монету)
- [ ] Перевірити реальні ціни та MPN
- [ ] Google Search Console токен у `index.html`

## Локальна розробка з WFP

```bash
# Встанови Netlify CLI
npm install -g netlify-cli

# Підключи до свого сайту
cd goldix-site
netlify link

# Локальний dev з емуляцією functions та env vars
netlify dev
```

Відкриється на http://localhost:8888. Всі функції `/api/*` будуть працювати локально.

## Troubleshooting

### "WFP_SECRET_KEY не налаштовано"
→ Env vars не підхопились. Trigger deploy → Deploy site у Netlify.

### Callback приходить але статус "pending" на сторінці результату
→ Netlify Blobs потребує кілька секунд на propagation. Polling триває ~20 сек, потім показує "pending".

### "Invalid signature" у логах wfp-callback
→ `WFP_SECRET_KEY` у Netlify ≠ secret key у WFP кабінеті. Перевір обидва.

### WFP повідомляє "невідомий серверний URL"
→ Перевір що Service URL у кабінеті WFP точно `https://goldix.com.ua/api/wfp-callback` (без trailing slash).

### Функції повертають 404 після деплою
→ Перевір у Netlify Dashboard → Functions: мають бути 3 функції з path `/api/create-payment`, `/api/wfp-callback`, `/api/payment-status`. Якщо ні — перегляд Deploy log, чи правильно підхопився `netlify/functions` directory.

## Безпека

- `WFP_SECRET_KEY` тільки в ENV, ніколи в коді ✓
- HMAC_MD5 підпис перевіряється на callback (захист від підробки) ✓
- Replay attacks: WFP шле унікальний orderReference + timestamp; нашa логіка ідемпотентна (повторне збереження в Blobs не шкодить) ✓
- `merchantSignature` генерується на сервері, не на клієнті (клієнт не може підробити суму) ✓

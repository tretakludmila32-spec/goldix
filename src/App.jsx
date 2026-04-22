import React, { useState, useEffect } from 'react';

// ==================== ДАНІ ТОВАРІВ ====================
const PRODUCTS = [
  // Нумізматика
  {
    id: "NUM-QUAD-38",
    cat: "numismatic",
    name: "Капсула для монет Leuchtturm QUADRUM, 38 мм",
    brand: "Leuchtturm",
    mpn: "330824",
    price: "38",
    shortDesc: "Оригінальна квадратна капсула Leuchtturm QUADRUM з м'якою EVA-вкладкою діаметром 38 мм. Безпечна для срібла і золота, без PVC і пластифікаторів.",
    desc: "Квадратна капсула Leuchtturm QUADRUM (артикул 330824) — один із найпопулярніших стандартів зберігання колекційних та інвестиційних монет у світі. Внутрішній діаметр 38 мм оптимально підходить для монет вагою 1 унція: Canadian Maple Leaf, Vienna Philharmonic, American Silver Eagle, Krugerrand 1 oz Silver, Somalia Elephant, Australian Kangaroo, Lunar Series та більшості сучасних інвестиційних монет 1 oz Silver/Gold. Зовнішній розмір 50×50×6,25 мм — єдиний для всіх капсул системи QUADRUM, що дозволяє зберігати їх у стандартних планшетах, касетах та демонстраційних боксах Leuchtturm і Lindner без індивідуального підбору. Корпус виготовлено з ударостійкого прозорого полістиролу високої оптичної якості — монета повністю видна з обох боків без вилучення. М'яка чорна EVA-вкладка фіксує монету та створює контрастний фон для ефектного експонування. Матеріал повністю pH-нейтральний, не містить полівінілхлориду (PVC), пластифікаторів, сірки та кислот — це гарантує безпечне довготривале зберігання дорогоцінних металів без ризику «молочної хвороби» (milk spots) та потьмяніння. Капсула відкривається і закривається повторно. Виготовляється в Німеччині на фабриці Leuchtturm у Гайнсберзі.",
    features: [
      "Внутрішній Ø 38 мм — для 1 oz Maple Leaf, Philharmonic, Silver Eagle",
      "Сумісна з планшетами системи QUADRUM (50×50 мм)",
      "Без PVC, без кислот, без пластифікаторів — безпечна для золота і срібла",
      "Ударостійкий прозорий корпус, м'яка EVA-вкладка",
      "Виробник: Leuchtturm (Німеччина)"
    ],
    specs: [
      ["Виробник", "Leuchtturm"],
      ["Артикул", "330824"],
      ["Внутрішній діаметр", "38 мм"],
      ["Зовнішній розмір", "50×50×6,25 мм"],
      ["Матеріал", "Прозорий пластик + EVA"],
      ["Країна виробництва", "Німеччина"],
    ],
    img: "/images/product-num-1.png",
  },
  {
    id: "NUM-ALBUM-NUMIS",
    cat: "numismatic",
    name: "Альбом для монет Leuchtturm NUMIS з футляром",
    brand: "Leuchtturm",
    mpn: "313617",
    price: "1890",
    shortDesc: "Класичний альбом Leuchtturm NUMIS із захисним футляром-slipcase. У комплекті 5 різних листів NH і 5 прокладок. 4-кільцевий механізм.",
    desc: "Альбом Leuchtturm NUMIS (артикул 313617) — еталонне рішення для систематизації колекції монет, що стало стандартом де-факто серед європейських нумізматів з 1970-х років. Комплект поставляється у захисному футлярі-slipcase з того ж матеріалу, що й обкладинка — це подвійний шар захисту від пилу, ультрафіолету та випадкових пошкоджень, коли альбом стоїть на полиці. Тверда обкладинка формату 235×270×60 мм вкрита якісним шкірзамінником із срібним тисненням логотипу Leuchtturm на корінці та лицьовій стороні. 4-кільцевий метал-механізм дозволяє вільно додавати, видаляти та переставляти листи без ризику їх пошкодження. У комплект уже входять 5 різних листів NUMIS: NH44 (44 кишені Ø 22 мм для копійок і дрібних монет), NH34 (34 кишені Ø 27 мм для стандартних монет), NH25 (25 кишень Ø 34 мм для ювілейних), NH17 (17 кишень Ø 43 мм для крон і 1 oz монет) та MIX (комбінований лист для різних діаметрів). Між кожним листом прокладено біла прокладка-вкладиш, яка запобігає потертостям та дотику монет з сусіднього листа. Альбом вміщує до 15 листів NUMIS — додаткові можна придбати окремо. Плівка кишень повністю без кислот, пластифікаторів та PVC — безпечна для довготривалого зберігання колекційних монет з будь-якого металу. Виготовляється на фабриці Leuchtturm у Німеччині.",
    features: [
      "У комплекті: альбом + футляр-slipcase + 5 листів NH + 5 прокладок",
      "5 різних листів: NH44, NH34, NH25, NH17, MIX",
      "4-кільцевий механізм, вміщує до 15 листів",
      "Плівка без PVC, кислот і пластифікаторів",
      "Виробник: Leuchtturm (Німеччина)"
    ],
    specs: [
      ["Виробник", "Leuchtturm"],
      ["Артикул", "313617"],
      ["Розмір", "235×270×60 мм"],
      ["Механізм", "4-кільцевий"],
      ["Листів у комплекті", "5 + 5 прокладок"],
      ["Країна виробництва", "Німеччина"],
    ],
    img: "/images/product-num-2.png",
  },
  {
    id: "NUM-TRAY-12",
    cat: "numismatic",
    name: "Планшет Lindner для 12 монет у капсулах QUADRUM",
    brand: "Lindner",
    mpn: "2315CE",
    price: "749",
    shortDesc: "Планшет Lindner з м'якою оксамитовою підкладкою на 12 осередків для монет у квадратних капсулах 50×50 мм. Синій колір.",
    desc: "Планшет Lindner артикул 2315CE — універсальне рішення для зберігання та експонування колекційних монет, зафіксованих у квадратних капсулах стандарту 50×50 мм (Leuchtturm QUADRUM, Lindner Karat, SAFE Octo та сумісні). 12 осередків розташовано у сітці 4×3, кожен осередок точно відповідає розміру квадратної капсули — монети утримуються в одному положенні, не ковзають при перенесенні. Вся поверхня планшета та стінки осередків вкриті м'яким оксамитом темно-синього кольору (Royal Blue) — цей класичний колір створює ідеальний контрастний фон для срібних, золотих і біметалевих монет, роблячи колекцію максимально презентабельною. Зовнішні розміри 236×303 мм і товщина 15 мм дозволяють розміщувати планшет у стандартних демонстраційних боксах Lindner серії Standard та MATRIX. Завдяки уніфікованим розмірам кілька планшетів можна штабелювати один на одного у кейсі, економлячи простір. Жорстка основа з високоякісного картону не прогинається під вагою монет. Ідеально підходить для колекціонерів, які бажають зручно переглядати монети без вилучення з капсул, для спеціалізованих виставок, торгових операцій та оцінки колекції. Також зручний як подарунок нумізмату-початківцю разом з першим набором капсул. Виготовляється в Німеччині.",
    features: [
      "12 осередків 50×50 мм у сітці 4×3",
      "М'який оксамит темно-синього кольору (Royal Blue)",
      "Сумісний з капсулами Leuchtturm QUADRUM і Lindner Karat",
      "Підходить для боксів Lindner Standard та MATRIX",
      "Виробник: Lindner (Німеччина)"
    ],
    specs: [
      ["Виробник", "Lindner"],
      ["Артикул", "2315CE"],
      ["Кількість осередків", "12 (3×4)"],
      ["Розмір осередку", "50×50 мм"],
      ["Зовнішній розмір", "236×303 мм"],
      ["Країна виробництва", "Німеччина"],
    ],
    img: "/images/product-num-3.png",
  },
  // Філателія
  {
    id: "PHI-COMFORT-A4",
    cat: "philatelic",
    name: "Кляйсер для марок Leuchtturm COMFORT A4, 64 чорні сторінки",
    brand: "Leuchtturm",
    mpn: "338035",
    price: "2690",
    shortDesc: "Професійний кляйсер Leuchtturm COMFORT A4 з 64 чорними сторінками по 9 смуг, з подвійним пергаміном між сторінками. Плівка без кислот.",
    desc: "Професійний кляйсер Leuchtturm COMFORT формату A4 (артикул 338035) — стандарт де-факто для систематизації марок серед філателістів усього світу. 64 чорні сторінки з щільного картону товщиною 300 г/м² надійно утримують марки без прогину та не просвічують. На кожній сторінці розміщено 9 горизонтальних прозорих смуг — це дозволяє розмістити близько 900–1100 марок середнього розміру в одному кляйсері. Між кожною парою сторінок вклеєно подвійний розділювальний пергамін crystal-clear — це критично важлива деталь, яка запобігає тертю марок об зубцеве поле сусідньої сторінки, захищає клей марок без наклейки (mint never hinged) від зчеплення та додатково оберігає барвники від вицвітання. Тверда палітурка обтягнута шкірзамінником люкс-якості у класичному чорному або зеленому кольорі (уточнюйте наявність), корінець прикрашений золотим тисненням LEUCHTTURM. Розмір кляйсера 230×305 мм відповідає формату A4, що дозволяє зберігати навіть великоформатні пам'ятні блоки, малі аркуші та купони без складання. Плівка смуг виготовлена з полівінілхлорид-фрі (PVC-free) матеріалу, повністю без кислот, пластифікаторів і оптичних відбілювачів — це гарантує безпечне зберігання марок десятиліттями без жовтіння, злипання та хімічної міграції. Підходить для колекцій: Україна, СРСР, Європа, Великобританія, США, тематичні колекції (флора, фауна, космос, спорт). Виготовляється на фабриці Leuchtturm у Німеччині з 1955 року.",
    features: [
      "64 чорні сторінки × 9 смуг = 576 рядів для марок",
      "Подвійний пергамін між сторінками — захист від тертя",
      "Формат A4 — вміщує пам'ятні блоки та малі аркуші",
      "Плівка без PVC, без кислот, без пластифікаторів",
      "Тверда обкладинка зі шкірзаміну, золоте тиснення",
      "Виробник: Leuchtturm (Німеччина)"
    ],
    specs: [
      ["Виробник", "Leuchtturm"],
      ["Артикул", "338035"],
      ["Формат", "A4 (230×305 мм)"],
      ["Кількість сторінок", "64"],
      ["Смуг на сторінці", "9"],
      ["Матеріал плівки", "Без кислот і пластифікаторів"],
    ],
    img: "/images/product-phi-1.png",
  },
  {
    id: "PHI-HAWID-25",
    cat: "philatelic",
    name: "Клемташі Hawid, 25 захисних смуг для марок",
    brand: "Hawid",
    mpn: "HA-SET-25MIX",
    price: "289",
    shortDesc: "Набір з 25 оригінальних клемташів Hawid різної висоти (24–41 мм) для монтажу марок. Самоклейна задня сторона, чорний фон.",
    desc: "Оригінальні клемташі Hawid — найпоширеніший у світі професійний спосіб монтажу марок у філателістичних альбомах, винайдений німецькою родиною Hawid ще в 1930-х роках. Цей комплект містить 25 прозорих смуг різної висоти: 24 мм, 25 мм, 26 мм, 27 мм, 30 мм, 31 мм, 33 мм, 36 мм, 39 мм та 41 мм (по 2-3 шт. кожного розміру) — набір розрахований на зберігання усіх стандартних форматів поштових марок світу. Довжина кожної смуги — 210 мм, що дозволяє розмістити 3-5 марок підряд залежно від ширини. Двошарова плівка складається з двох шарів: прозорого переднього (PVC-free, crystal clear) для ідеальної видимості марки та чорного заднього, який створює контрастний фон і змушує кольори марки «заграти». Задня сторона повністю покрита самоклейним шаром на водній основі — клемташ легко наклеюється на будь-яку альбомну сторінку без додаткового клею, сухо і чисто, не пошкоджуючи папір альбому. Марка вставляється збоку через відкритий торець без жодного контакту її клейової сторони з клеєм Hawid — цей принцип дозволяє зберігати марки mint never hinged (MNH) без найменшого пошкодження клею, що критично для філателістичної вартості. Смуги легко ріжуться звичайними ножицями під розмір конкретної марки або блоку. Плівка повністю без кислот, пластифікаторів і оптичних відбілювачів — безпечна для довготривалого зберігання десятиліттями. Ідеально поєднується з кляйсерами Leuchtturm COMFORT, альбомами VARIO, аркушами для філателістичних колекцій. Виготовляється у Німеччині компанією Hawid KG (Вітценгаузен).",
    features: [
      "25 смуг різної висоти (24–41 мм), довжина 210 мм",
      "Двошарова плівка: прозора + чорний фон",
      "Самоклейна задня сторона — без додаткового клею",
      "Не пошкоджує клей марок MNH",
      "Без PVC, без кислот, безпечна для марок десятиліттями",
      "Виробник: Hawid KG (Німеччина)"
    ],
    specs: [
      ["Виробник", "Hawid"],
      ["Артикул", "HA-SET-25MIX"],
      ["Кількість смуг", "25 шт."],
      ["Довжина смуги", "210 мм"],
      ["Висота", "24–41 мм (мікс)"],
      ["Тло", "Чорне"],
    ],
    img: "/images/product-phi-2.png",
  },
  {
    id: "PHI-VARIO-ALB",
    cat: "philatelic",
    name: "Альбом для марок Leuchtturm VARIO з 10 листами, чорний",
    brand: "Leuchtturm",
    mpn: "346078",
    price: "1390",
    shortDesc: "Альбом Leuchtturm VARIO з 10 листами різного поділу (1C, 2C, 3C, 4C) у твердій чорній обкладинці. 4-кільцевий механізм.",
    desc: "Альбом Leuchtturm VARIO (артикул 346078) — найуніверсальніший формат у філателії, який поєднує функціональність кляйсера і гнучкість ring-binder. На відміну від класичного COMFORT з фіксованими смугами, VARIO дозволяє самостійно комбінувати та переставляти листи з різною кількістю кишень залежно від розміру матеріалу. У комплекті одразу 10 листів різного поділу: тип 1C (1 велика кишеня на весь лист для великоформатних блоків і сувенірних аркушів), тип 2C (2 кишені для середніх блоків), тип 3C (3 кишені для стандартних поштових блоків і конвертів FDC), тип 4C (4 кишені для серій марок або купонів). Усі листи мають єдиний зовнішній формат і пробиті 4-кільцевим стандартом, сумісні з альбомами VARIO, COMPACT і спеціалізованими. Тверда обкладинка розміром 245×270×35 мм обтягнута якісним шкірзамінником чорного кольору з прихованим корінцем — класичний і стриманий дизайн, що підходить для офісу, кабінету та домашньої бібліотеки. Метал-механізм на 4 кільця Ø 25 мм вміщує до 20 листів без переповнення. Між листами можна встановити чорні розділювальні прокладки (купуються окремо) для додаткового захисту цінних марок від механічного тертя. Прозора плівка усіх листів повністю без кислот, пластифікаторів та PVC — безпечне зберігання десятиліттями без ризику жовтіння плівки та зчеплення з марками. Ідеально підходить для колекцій марок України, Німеччини, СРСР, Великобританії, тематичних колекцій, FDC-конвертів, блоків Європи CEPT, купонів відповіді IRC. Виготовляється на фабриці Leuchtturm у Гайнсбергу, Німеччина.",
    features: [
      "У комплекті: альбом + 10 листів (1C, 2C, 3C, 4C)",
      "4-кільцевий механізм, вміщує до 20 листів",
      "Сумісний з листами VARIO всіх типів",
      "Плівка без PVC, кислот і пластифікаторів",
      "Тверда обкладинка зі шкірзаміну, чорний колір",
      "Виробник: Leuchtturm (Німеччина)"
    ],
    specs: [
      ["Виробник", "Leuchtturm"],
      ["Артикул", "346078"],
      ["Розмір", "245×270×35 мм"],
      ["Механізм", "4-кільцевий"],
      ["Листів у комплекті", "10 різного поділу"],
      ["Колір", "Чорний"],
    ],
    img: "/images/product-phi-3.png",
  },
];

// ==================== СТОРІНКА РЕЗУЛЬТАТУ ОПЛАТИ ====================
function PaymentResultPage({ s, go }) {
  const [status, setStatus] = useState("loading"); // loading | approved | declined | pending | error
  const [data, setData] = useState(null);
  const [orderRef, setOrderRef] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // WayForPay повертає параметри в URL після оплати (returnUrl)
    // Проте найнадійніше джерело — запит до нашого API, який читає з Blobs
    const ref = params.get("orderReference") || params.get("orderRef") || "";
    setOrderRef(ref);

    if (!ref) {
      setStatus("error");
      return;
    }

    let cancelled = false;
    let tries = 0;
    const maxTries = 10; // ~20 секунд

    const poll = async () => {
      tries++;
      try {
        const res = await fetch(`/api/payment-status?orderRef=${encodeURIComponent(ref)}`);
        if (!res.ok) throw new Error("Status check failed");
        const json = await res.json();
        if (cancelled) return;

        if (json.status === "pending") {
          // Callback ще не прийшов — ретрай
          if (tries < maxTries) {
            setTimeout(poll, 2000);
          } else {
            setStatus("pending");
            setData(json);
          }
          return;
        }

        setData(json);
        if (json.transactionStatus === "Approved") {
          setStatus("approved");
        } else if (json.transactionStatus === "Declined" || json.transactionStatus === "Expired") {
          setStatus("declined");
        } else {
          setStatus("pending");
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
        }
      }
    };
    poll();

    return () => { cancelled = true; };
  }, []);

  return (
    <div style={s.container}>
      <div style={{ maxWidth: 600, margin: "60px auto", padding: "0 22px", textAlign: "center" }}>
        {status === "loading" && (
          <>
            <div style={{
              width: 48, height: 48, border: "3px solid #f5f5f7",
              borderTopColor: "#d4a017", borderRadius: "50%",
              margin: "0 auto 24px",
              animation: "spin 0.8s linear infinite",
            }}/>
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Перевіряємо статус платежу</h1>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>Це може зайняти декілька секунд...</p>
          </>
        )}

        {status === "approved" && (
          <>
            <div style={{ fontSize: 72, marginBottom: 16 }}>✅</div>
            <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Оплата пройшла успішно!</h1>
            <p style={{ fontSize: 17, color: "#424245", marginBottom: 20, lineHeight: 1.5 }}>
              Дякуємо за замовлення. Ми отримали оплату і найближчим часом зв'яжемося з вами для підтвердження деталей доставки.
            </p>
            <div style={{ background: "#f5f5f7", borderRadius: 12, padding: "16px 20px", marginBottom: 24, textAlign: "left", fontSize: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                <span style={{ color: "#6e6e73" }}>Номер замовлення:</span>
                <strong>{orderRef}</strong>
              </div>
              {data?.amount && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                  <span style={{ color: "#6e6e73" }}>Сума:</span>
                  <strong>{data.amount} {data.currency || "UAH"}</strong>
                </div>
              )}
              {data?.cardPan && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                  <span style={{ color: "#6e6e73" }}>Картка:</span>
                  <strong>{data.cardPan}</strong>
                </div>
              )}
            </div>
            <button
              onClick={() => { window.history.replaceState({}, "", "/"); go("home"); }}
              style={{ padding: "12px 28px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
            >На головну</button>
          </>
        )}

        {status === "declined" && (
          <>
            <div style={{ fontSize: 72, marginBottom: 16 }}>❌</div>
            <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Оплата не пройшла</h1>
            <p style={{ fontSize: 17, color: "#424245", marginBottom: 20, lineHeight: 1.5 }}>
              {data?.reason ? `Причина: ${data.reason}` : "На жаль, ваш банк відхилив транзакцію."} Ви можете спробувати ще раз або обрати інший спосіб оплати (післяплата Нової Пошти або банківський переказ).
            </p>
            <div style={{ background: "#f5f5f7", borderRadius: 12, padding: "16px 20px", marginBottom: 24, textAlign: "left", fontSize: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                <span style={{ color: "#6e6e73" }}>Номер замовлення:</span>
                <strong>{orderRef}</strong>
              </div>
            </div>
            <button
              onClick={() => { window.history.replaceState({}, "", "/"); go("home"); }}
              style={{ padding: "12px 28px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
            >Повернутися до магазину</button>
          </>
        )}

        {status === "pending" && (
          <>
            <div style={{ fontSize: 72, marginBottom: 16 }}>⏳</div>
            <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Оплата обробляється</h1>
            <p style={{ fontSize: 17, color: "#424245", marginBottom: 20, lineHeight: 1.5 }}>
              Банк ще не підтвердив платіж. Ми надішлемо вам email коли статус зміниться. Номер замовлення: <strong>{orderRef}</strong>
            </p>
            <button
              onClick={() => { window.history.replaceState({}, "", "/"); go("home"); }}
              style={{ padding: "12px 28px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
            >На головну</button>
          </>
        )}

        {status === "error" && (
          <>
            <div style={{ fontSize: 72, marginBottom: 16 }}>⚠️</div>
            <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Не вдалося отримати статус</h1>
            <p style={{ fontSize: 17, color: "#424245", marginBottom: 20, lineHeight: 1.5 }}>
              Зв'яжіться з нами за телефоном <strong>+380 99 781 4941</strong> або email <strong>vladimirtret1965@gmail.com</strong> щоб перевірити статус замовлення.
            </p>
            <button
              onClick={() => { window.history.replaceState({}, "", "/"); go("home"); }}
              style={{ padding: "12px 28px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
            >На головну</button>
          </>
        )}
      </div>
    </div>
  );
}

// ==================== ДОДАТОК ====================
export default function App() {
  const [page, setPage] = useState("home");
  const [productId, setProductId] = useState(null);
  const [cookieConsent, setCookieConsent] = useState(null); // null = не вирішено, 'all' | 'necessary' | 'custom'
  const [cart, setCart] = useState([]); // [{id, name, price, qty, img}]
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState("np");

  const go = (p) => { setPage(p); window.scrollTo(0, 0); };
  const openProduct = (id) => { setProductId(id); setPage("product"); window.scrollTo(0, 0); };
  const acceptCookies = (level) => setCookieConsent(level);

  const addToCart = (p) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === p.id);
      if (existing) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id: p.id, name: p.name, price: Number(p.price), qty: 1, img: p.img, mpn: p.mpn }];
    });
    setCartOpen(true);
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  // Обробка повернення з WayForPay: /payment-result?orderReference=...
  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    if (path === "/payment-result") {
      setPage("paymentResult");
    }
  }, []);

  // ==================== СТИЛІ ====================
  const s = {
    body: { fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",Arial,sans-serif', color: "#1d1d1f", background: "#fff", letterSpacing: "-0.022em", lineHeight: 1.47, fontSize: 17, minHeight: "100vh" },
    topBar: { background: "#000", color: "#f5f5f7", fontSize: 12, padding: "8px 22px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 },
    label: { color: "#86868b" },
    header: { background: "#fff", borderBottom: "1px solid #d2d2d7", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", position: "sticky", top: 0, zIndex: 100 },
    logo: { fontSize: 24, fontWeight: 600, cursor: "pointer" },
    logoAccent: { color: "#d4a017" },
    nav: { background: "#1d1d1f", padding: "0 22px", display: "flex", whiteSpace: "nowrap", overflowX: "auto" },
    navItem: { padding: "16px 18px", color: "#f5f5f7", fontSize: 13, fontWeight: 500, cursor: "pointer", background: "none", border: "none", fontFamily: "inherit" },
    navItemActive: { color: "#2997ff" },
    container: { maxWidth: 1280, margin: "0 auto", padding: "0 22px" },
    pageHeader: { padding: "30px 0 50px", textAlign: "center" },
    pageH1: { fontSize: 42, fontWeight: 600, lineHeight: 1.08, marginBottom: 10 },
    pageP: { fontSize: 19, color: "#6e6e73", maxWidth: 700, margin: "0 auto" },
    hero: { background: "#f5f5f7", padding: "70px 22px", textAlign: "center" },
    heroH1: { fontSize: 48, fontWeight: 600, lineHeight: 1.07, marginBottom: 14 },
    heroAccent: { background: "linear-gradient(135deg,#d4a017,#ffd700,#b8860b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
    heroP: { fontSize: 19, color: "#6e6e73", maxWidth: 700, margin: "0 auto 28px" },
    btn: { display: "inline-block", padding: "12px 22px", background: "#0071e3", color: "#fff", borderRadius: 980, fontSize: 17, border: "none", cursor: "pointer", fontFamily: "inherit", margin: 5 },
    btnOutline: { display: "inline-block", padding: "12px 22px", background: "transparent", color: "#0071e3", border: "1px solid #0071e3", borderRadius: 980, fontSize: 17, cursor: "pointer", fontFamily: "inherit", margin: 5 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18, paddingBottom: 60 },
    card: { background: "#f5f5f7", borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", border: "none", padding: 0, textAlign: "left", fontFamily: "inherit", color: "inherit", transition: "transform 0.2s" },
    cardImg: { height: 220, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, overflow: "hidden" },
    cardImgEl: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" },
    cardInfo: { padding: 18 },
    cardMeta: { fontSize: 12, color: "#6e6e73", marginBottom: 6 },
    cardH4: { fontSize: 15, fontWeight: 600, minHeight: 44, marginBottom: 8, lineHeight: 1.3 },
    cardPrice: { fontSize: 22, fontWeight: 600, margin: "8px 0" },
    crumbs: { padding: "20px 0", fontSize: 13, color: "#6e6e73" },
    crumbLink: { cursor: "pointer", color: "#6e6e73" },
    crumbSep: { margin: "0 8px", color: "#d2d2d7" },
    seoBlock: { maxWidth: 1000, margin: "20px auto 0", padding: "60px 22px 80px", borderTop: "1px solid #d2d2d7" },
    seoH2: { fontSize: 32, fontWeight: 600, marginTop: 40, marginBottom: 16, lineHeight: 1.15 },
    seoH3: { fontSize: 22, fontWeight: 600, marginTop: 28, marginBottom: 12 },
    seoP: { fontSize: 17, lineHeight: 1.7, color: "#424245", marginBottom: 14 },
    seoUl: { fontSize: 17, lineHeight: 1.7, color: "#424245", paddingLeft: 22, marginBottom: 14 },
    productGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 40, padding: "20px 0 60px" },
    productImg: { background: "#f5f5f7", borderRadius: 18, padding: 30, minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" },
    footer: { background: "#f5f5f7", color: "#6e6e73", padding: "40px 22px 20px", fontSize: 12, marginTop: 40 },
    footerGrid: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 30, paddingBottom: 20, borderBottom: "1px solid #d2d2d7" },
    footerH5: { color: "#1d1d1f", fontSize: 12, fontWeight: 600, marginBottom: 12 },
    footerLink: { color: "#6e6e73", cursor: "pointer", display: "block", marginBottom: 6 },
    footerLegal: { maxWidth: 1280, margin: "20px auto 0", paddingTop: 20, fontSize: 11, lineHeight: 1.6, color: "#86868b" },
  };

  // ==================== КОМПОНЕНТИ ====================
  const Card = ({ p }) => (
    <button style={s.card} onClick={() => openProduct(p.id)}>
      <div style={s.cardImg}>
        <img src={p.img} alt={p.name} style={s.cardImgEl} onError={(e) => { e.target.style.display = 'none'; }}/>
      </div>
      <div style={s.cardInfo}>
        <div style={s.cardMeta}>{p.brand}</div>
        <div style={s.cardH4}>{p.name}</div>
        <div style={s.cardPrice}>{p.price} грн</div>
      </div>
    </button>
  );

  const Crumbs = ({ items }) => (
    <div style={s.crumbs}>
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span style={s.crumbSep}>›</span>}
          {it.go ? <span style={s.crumbLink} onClick={it.go}>{it.label}</span> : it.label}
        </span>
      ))}
    </div>
  );

  const navItems = [
    ["numismatic", "Нумізматика"],
    ["philatelic", "Філателія"],
    ["about", "Про нас"],
    ["delivery", "Доставка та оплата"],
    ["returns", "Повернення"],
    ["contacts", "Контакти"],
  ];

  const product = productId ? PRODUCTS.find(p => p.id === productId) : null;
  const numismaticProducts = PRODUCTS.filter(p => p.cat === "numismatic");
  const philatelicProducts = PRODUCTS.filter(p => p.cat === "philatelic");

  // ==================== JSON-LD SCHEMA.ORG ====================
  useEffect(() => {
    // Видаляємо попередні json-ld теги
    document.querySelectorAll('script[data-goldix-jsonld]').forEach(el => el.remove());

    const baseUrl = "https://goldix.com.ua";
    const schemas = [];

    // Organization — на всіх сторінках
    schemas.push({
      "@context": "https://schema.org",
      "@type": "OnlineStore",
      "@id": `${baseUrl}#organization`,
      name: "Goldix",
      url: baseUrl,
      logo: `${baseUrl}/favicon.svg`,
      description: "Інтернет-магазин аксесуарів для нумізматів і філателістів. Оригінальна продукція Leuchtturm, Lindner, Hawid.",
      telephone: "+380997814941",
      email: "vladimirtret1965@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "вул. Хорива, 31, оф. 11",
        addressLocality: "Київ",
        postalCode: "04070",
        addressCountry: "UA"
      },
      founder: { "@type": "Person", name: "Трет'як Володимир Анатолійович" },
      areaServed: "UA",
      currenciesAccepted: "UAH",
      paymentAccepted: "Cash on Delivery, Bank Transfer",
    });

    // WebSite — на головній
    if (page === "home") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: baseUrl,
        name: "Goldix",
        inLanguage: "uk-UA",
      });
    }

    // Product — на сторінці товару
    if (page === "product" && product) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: [`${baseUrl}${product.img}`],
        description: product.desc,
        brand: { "@type": "Brand", name: product.brand },
        mpn: product.mpn,
        sku: product.id,
        category: product.cat === "numismatic" ? "Нумізматика" : "Філателія",
        additionalProperty: product.specs.map(([name, value]) => ({
          "@type": "PropertyValue",
          name,
          value
        })),
        offers: {
          "@type": "Offer",
          url: `${baseUrl}/product/${product.id}`,
          priceCurrency: "UAH",
          price: product.price,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": `${baseUrl}#organization` },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "UA",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 14,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/ReturnShippingFees"
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: { "@type": "MonetaryAmount", value: "120", currency: "UAH" },
            shippingDestination: { "@type": "DefinedRegion", addressCountry: "UA" },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
              transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" }
            }
          }
        }
      });

      // BreadcrumbList
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Головна", item: baseUrl },
          { "@type": "ListItem", position: 2, name: product.cat === "numismatic" ? "Нумізматика" : "Філателія", item: `${baseUrl}/${product.cat}` },
          { "@type": "ListItem", position: 3, name: product.name }
        ]
      });
    }

    // Інжектимо
    schemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-goldix-jsonld", "");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [page, productId, product]);

  // ==================== РЕНДЕР ====================
  return (
    <div style={s.body}>
      {/* ТОП-БАР */}
      <div style={s.topBar}>
        <div>
          <span style={s.label}>📞 </span>+380 99 781 4941 ·{" "}
          <span style={s.label}>✉️ </span>vladimirtret1965@gmail.com
        </div>
        <div style={s.label}>Пн–Пт: 9:00–18:00 · UA</div>
      </div>

      {/* ХЕДЕР */}
      <header style={s.header}>
        <div style={s.logo} onClick={() => go("home")}>
          <span style={s.logoAccent}>Goldix</span>
        </div>
        <div
          onClick={() => setCartOpen(true)}
          style={{ fontSize: 14, color: "#1d1d1f", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", border: "1px solid #d2d2d7", borderRadius: 980 }}
        >
          🛍 Кошик
          {cartCount > 0 && (
            <span style={{ background: "#d4a017", color: "#fff", borderRadius: 980, padding: "2px 8px", fontSize: 12, fontWeight: 600 }}>{cartCount}</span>
          )}
        </div>
      </header>

      {/* НАВІГАЦІЯ */}
      <nav style={s.nav}>
        {navItems.map(([id, lbl]) => (
          <button
            key={id}
            style={{ ...s.navItem, ...(page === id ? s.navItemActive : {}) }}
            onClick={() => go(id)}
          >
            {lbl}
          </button>
        ))}
      </nav>

      {/* ГОЛОВНА */}
      {page === "home" && (
        <>
          <section style={s.hero}>
            <h1 style={s.heroH1}>
              Аксесуари для <span style={s.heroAccent}>колекціонерів</span>
            </h1>
            <p style={s.heroP}>
              Капсули, альбоми, кляйсери та клемташі від провідних світових виробників —
              Leuchtturm, Lindner, Hawid. Оригінальна продукція, доставка по всій Україні.
            </p>
            <button style={s.btn} onClick={() => go("numismatic")}>Нумізматика</button>
            <button style={s.btnOutline} onClick={() => go("philatelic")}>Філателія</button>
          </section>

          <div style={{ padding: "60px 22px", maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 10 }}>Аксесуари для нумізматики</h2>
            <p style={{ fontSize: 17, color: "#6e6e73", marginBottom: 30 }}>
              Професійне зберігання монет: капсули, альбоми, планшети.
            </p>
            <div style={s.grid}>
              {numismaticProducts.map(p => <Card key={p.id} p={p}/>)}
            </div>

            <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 10, marginTop: 40 }}>Аксесуари для філателії</h2>
            <p style={{ fontSize: 17, color: "#6e6e73", marginBottom: 30 }}>
              Кляйсери, альбоми та клемташі для колекції марок.
            </p>
            <div style={s.grid}>
              {philatelicProducts.map(p => <Card key={p.id} p={p}/>)}
            </div>
          </div>
        </>
      )}

      {/* КАТЕГОРІЯ: НУМІЗМАТИКА */}
      {page === "numismatic" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Аксесуари для нумізматики" },
          ]}/>
          <div style={s.pageHeader}>
            <h1 style={s.pageH1}>Аксесуари для нумізматики</h1>
            <p style={s.pageP}>
              Професійне зберігання та експонування колекційних монет. Капсули Leuchtturm QUADRUM,
              альбоми NUMIS, планшети Lindner — оригінальна продукція з сертифікатом.
            </p>
          </div>
          <div style={s.grid}>
            {numismaticProducts.map(p => <Card key={p.id} p={p}/>)}
          </div>

          <div style={s.seoBlock}>
            <h2 style={s.seoH2}>Як обрати аксесуари для зберігання монет</h2>
            <p style={s.seoP}>
              Правильне зберігання — запорука збереження колекційної вартості монети. Дотики пальців,
              потрапляння вологи і хімічно активних речовин можуть залишити незворотні сліди на поверхні
              дорогоцінних і навіть звичайних мідних чи нікелевих монет.
            </p>
            <h3 style={s.seoH3}>Капсули</h3>
            <p style={s.seoP}>
              Індивідуальні пластикові капсули — базовий рівень захисту. Для інвестиційних монет стандарту
              1 oz (38 мм) оптимально підходять квадратні капсули Leuchtturm QUADRUM, які вміщують монету
              в м'яку EVA-вкладку без кислот і пластифікаторів.
            </p>
            <h3 style={s.seoH3}>Альбоми</h3>
            <p style={s.seoP}>
              Альбоми NUMIS — класичний формат для систематизації колекції. 4-кільцевий механізм дозволяє
              додавати листи з кишенями під монети різного діаметру. Окремий футляр-кейс захищає альбом
              від пилу і світла.
            </p>
            <h3 style={s.seoH3}>Планшети і боксы</h3>
            <p style={s.seoP}>
              Для експонування і зручного перегляду — планшети Lindner з осередками під квадратні капсули.
              Вміщуються в уніфіковані бокси серії Standard.
            </p>
          </div>
        </div>
      )}

      {/* КАТЕГОРІЯ: ФІЛАТЕЛІЯ */}
      {page === "philatelic" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Аксесуари для філателії" },
          ]}/>
          <div style={s.pageHeader}>
            <h1 style={s.pageH1}>Аксесуари для філателії</h1>
            <p style={s.pageP}>
              Професійне зберігання поштових марок. Кляйсери Leuchtturm COMFORT, альбоми VARIO,
              клемташі Hawid — оригінальна продукція без кислот і пластифікаторів.
            </p>
          </div>
          <div style={s.grid}>
            {philatelicProducts.map(p => <Card key={p.id} p={p}/>)}
          </div>

          <div style={s.seoBlock}>
            <h2 style={s.seoH2}>Як зберігати колекцію марок</h2>
            <p style={s.seoP}>
              Марки особливо чутливі до вологи, ультрафіолету і контакту з папером, що містить кислоти.
              Правильні умови зберігання подовжують життя колекції на десятиріччя.
            </p>
            <h3 style={s.seoH3}>Кляйсери</h3>
            <p style={s.seoP}>
              Кляйсер COMFORT A4 з чорними сторінками і прозорими смугами — стандарт де-факто серед
              філателістів. Пергамінові прокладки між сторінками запобігають зчепленню марок і механічному
              тертю. Плівка смуг безпечна для довготривалого зберігання.
            </p>
            <h3 style={s.seoH3}>Клемташі Hawid</h3>
            <p style={s.seoP}>
              Оригінальні Hawid-смуги — найпоширеніший у світі спосіб монтажу марок. Самоклейний задній бік
              кріпиться до альбомного листа, а марка акуратно вставляється в прозору кишеню без клею на
              самій марці. Легко ріжуться ножицями під потрібний розмір.
            </p>
            <h3 style={s.seoH3}>Альбоми VARIO</h3>
            <p style={s.seoP}>
              Система VARIO пропонує листи різного поділу (1C, 2C, 3C, 4C) для марок, блоків і пам'ятних
              випусків різного формату. Гнучкість — головна перевага перед фіксованими кляйсерами.
            </p>
          </div>
        </div>
      )}

      {/* ПРО НАС */}
      {page === "about" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Про нас" },
          ]}/>
          <div style={{ maxWidth: 800, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Про нас</h1>
            <p style={s.seoP}>
              «Goldix» — український інтернет-магазин аксесуарів для нумізматів і філателістів.
              Ми працюємо з 2024 року і постачаємо оригінальну продукцію провідних європейських виробників:
              Leuchtturm (Німеччина), Lindner (Німеччина), Hawid (Німеччина), SAFE (Німеччина).
            </p>
            <h2 style={s.seoH2}>Чому обирають нас</h2>
            <ul style={s.seoUl}>
              <li>Оригінальна продукція напряму від виробників, без підробок</li>
              <li>Всі матеріали без кислот і пластифікаторів — безпечні для довготривалого зберігання</li>
              <li>Доставка Новою Поштою по всій Україні за 1–3 робочих дні</li>
              <li>14 днів на повернення згідно із Законом «Про захист прав споживачів»</li>
              <li>Професійна консультація щодо обрання аксесуарів для вашої колекції</li>
            </ul>
            <h2 style={s.seoH2}>Реквізити</h2>
            <p style={s.seoP}>
              <strong>ФОП Трет'як Володимир Анатолійович</strong><br/>
              РНОКПП: 2407104419<br/>
              Адреса: 04070, м. Київ, вул. Хорива, 31, офіс 11<br/>
              Email: vladimirtret1965@gmail.com<br/>
              Тел.: +380 99 781 4941<br/>
              IBAN: UA55 3052 9900 0002 6008 0462 4854 2<br/>
              Банк: АТ КБ «ПРИВАТБАНК»
            </p>
          </div>
        </div>
      )}

      {/* ДОСТАВКА ТА ОПЛАТА */}
      {page === "delivery" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Доставка та оплата" },
          ]}/>
          <div style={{ maxWidth: 800, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Доставка та оплата</h1>
            <h2 style={s.seoH2}>Способи доставки</h2>
            <ul style={s.seoUl}>
              <li><strong>Самовивіз з офісу у Києві</strong> — <strong>безкоштовно</strong>, у день замовлення (вул. Хорива, 31, оф. 11)</li>
              <li><strong>Нова Пошта</strong> — 120 грн, 1–3 робочих дні (відділення, поштомат або кур'єр за адресою)</li>
              <li><strong>Кур'єр Goldix по Україні</strong> — 150 грн, адресна доставка до дверей</li>
            </ul>
            <p style={s.seoP}>
              <strong>Безкоштовна доставка</strong> при замовленні від 2000 грн (Нова Пошта).
            </p>
            <h2 style={s.seoH2}>Способи оплати</h2>
            <ul style={s.seoUl}>
              <li>Онлайн-оплата карткою (Visa, Mastercard) через LiqPay</li>
              <li>Оплата через Apple Pay / Google Pay</li>
              <li>Банківський переказ (для ТОВ/ФОП)</li>
              <li>Накладений платіж (Нова Пошта)</li>
            </ul>
            <h2 style={s.seoH2}>Термін обробки замовлення</h2>
            <p style={s.seoP}>
              Замовлення, оформлені до <strong>16:00</strong> у робочі дні, відправляються <strong>того ж дня</strong>.
              Замовлення, оформлені після 16:00 або у вихідні — протягом <strong>1 робочого дня</strong>.
            </p>
            <p style={s.seoP}>
              Для доставки кур'єром Goldix: при оформленні до 16:00 — доставка у день замовлення;
              пізніше 16:00 — наступного робочого дня.
            </p>
            <h2 style={s.seoH2}>Регіони доставки</h2>
            <p style={s.seoP}>
              Ми доставляємо по всій підконтрольній території України. На жаль, через правові
              обмеження ми не здійснюємо доставку на тимчасово окуповані території.
            </p>
          </div>
        </div>
      )}

      {/* ПОВЕРНЕННЯ */}
      {page === "returns" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Повернення та обмін" },
          ]}/>
          <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Повернення та обмін</h1>
            <p style={{ ...s.seoP, fontStyle: "italic", color: "#86868b" }}>Редакція від 21 квітня 2026 року</p>
            <p style={s.seoP}>
              Умови повернення та обміну товару в Goldix (goldix.com.ua) регулюються Законом України «Про захист прав споживачів» №1023-XII від 12.05.1991 та постановою Кабінету Міністрів України №172 від 19.03.1994.
            </p>

            <h2 style={s.seoH2}>1. Підстави для повернення</h2>
            <p style={s.seoP}>Покупець має право:</p>
            <ul style={s.seoUl}>
              <li>Повернути або обміняти непродовольчий товар належної якості протягом <strong>14 календарних днів</strong> з дня отримання (ст. 9 ЗУ №1023-XII), якщо він не підійшов за формою, розміром, кольором, конфігурацією</li>
              <li>Повернути товар неналежної якості протягом гарантійного строку виробника (ст. 8 ЗУ №1023-XII)</li>
              <li>Відмовитися від Товару дистанційної покупки (ст. 13 ЗУ «Про електронну комерцію»)</li>
            </ul>

            <h2 style={s.seoH2}>2. Строки</h2>
            <p style={s.seoP}><strong>14 календарних днів</strong> з дня отримання — для товару належної якості. Претензії щодо недоліків — протягом гарантійного строку виробника або 2 років з моменту передачі (ч. 5 ст. 7 ЗУ №1023-XII).</p>

            <h2 style={s.seoH2}>3. Товари goldix.com.ua підлягають поверненню</h2>
            <p style={s.seoP}>Постанова КМУ №172 від 19.03.1994 затверджує вичерпний перелік товарів, що не підлягають поверненню (продовольчі товари, ліки, засоби гігієни, парфумерія, натільна білизна, ювелірні вироби тощо). <strong>Аксесуари для колекціонерів (капсули, альбоми, кляйсери, клемташі Leuchtturm, Lindner, Hawid) до цього переліку НЕ входять і підлягають поверненню</strong> на загальних умовах.</p>

            <h2 style={s.seoH2}>4. Умови повернення товару належної якості</h2>
            <p style={s.seoP}>Всі умови мають виконуватися одночасно:</p>
            <ul style={s.seoUl}>
              <li>Не минуло 14 календарних днів з дня отримання</li>
              <li>Товар не був у використанні</li>
              <li>Збережено товарний вигляд і споживчі властивості</li>
              <li>Збережено оригінальну упаковку, пломби, ярлики</li>
              <li>Наявний документ про покупку (чек, квитанція, email-підтвердження)</li>
              <li>Комплектність повна</li>
            </ul>

            <h2 style={s.seoH2}>5. Порядок повернення</h2>
            <ol style={s.seoUl}>
              <li>Звернутися за телефоном <strong>+380 99 781 4941</strong> або e-mail <strong>vladimirtret1965@gmail.com</strong></li>
              <li>Надати: ПІБ, номер Замовлення, найменування Товару, причину повернення, реквізити для повернення коштів (IBAN)</li>
              <li>Продавець протягом 1–2 робочих днів надає інструкцію та адресу для відправлення</li>
              <li>Покупець відправляє Товар «Новою Поштою» на вказану адресу</li>
              <li>Після отримання Продавець перевіряє стан Товару та повертає кошти</li>
            </ol>
            <p style={s.seoP}><strong>Оплата зворотної доставки:</strong></p>
            <ul style={s.seoUl}>
              <li>Товар належної якості — за рахунок <strong>Покупця</strong></li>
              <li>Товар неналежної якості — за рахунок <strong>Продавця</strong> (ст. 8 ЗУ №1023-XII)</li>
            </ul>
            <p style={s.seoP}>Посилки «післяплатою» без попереднього погодження не приймаються.</p>

            <h2 style={s.seoH2}>6. Строки повернення коштів</h2>
            <p style={s.seoP}>Кошти повертаються протягом <strong>7 календарних днів</strong> після отримання Товару (ч. 3 ст. 9 ЗУ №1023-XII). Повернення здійснюється тим же способом, яким була здійснена оплата, або на вказаний Покупцем IBAN.</p>

            <h2 style={s.seoH2}>7. Обмін</h2>
            <p style={s.seoP}>Покупець має право обміняти товар на аналогічний. За відсутності потрібного товару Покупець може: придбати інший з доплатою або компенсацією різниці; дочекатися надходження потрібного товару; розірвати договір і отримати кошти.</p>

            <h2 style={s.seoH2}>8. Товар неналежної якості</h2>
            <p style={s.seoP}>При виявленні дефекту Покупець за вибором вимагає:</p>
            <ul style={s.seoUl}>
              <li>Зменшення ціни</li>
              <li>Безоплатне усунення недоліків</li>
              <li>Заміну на аналогічний товар належної якості</li>
              <li>Розірвання договору (при істотних недоліках) з поверненням коштів</li>
            </ul>
            <p style={s.seoP}>Звернення має містити фото або відео дефекту і номер Замовлення. Експертиза проводиться за рахунок Продавця; якщо підтверджується вина Покупця — за його рахунок. Строк задоволення вимоги — не більше 14 днів.</p>

            <h2 style={s.seoH2}>9. НЕ підлягає поверненню або обміну</h2>
            <ul style={s.seoUl}>
              <li>Минув 14-денний строк</li>
              <li>Товар був у використанні</li>
              <li>Порушено цілісність упаковки або пломб (крім випадків неналежної якості)</li>
              <li>Відсутнє підтвердження покупки</li>
              <li>Пошкодження з вини Покупця</li>
            </ul>

            <h2 style={s.seoH2}>10. Контакти служби підтримки</h2>
            <p style={s.seoP}>
              Телефон: +380 99 781 4941<br/>
              E-mail: vladimirtret1965@gmail.com<br/>
              Адреса: 04070, м. Київ, вул. Хорива, 31, оф. 11<br/>
              Години роботи: Пн–Пт, 10:00–18:00
            </p>
          </div>
        </div>
      )}

      {/* КОНТАКТИ */}
      {page === "contacts" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Контакти" },
          ]}/>
          <div style={{ maxWidth: 800, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Контакти</h1>
            <h2 style={s.seoH2}>Зв'язатися з нами</h2>
            <ul style={s.seoUl}>
              <li><strong>Телефон:</strong> +380 99 781 4941</li>
              <li><strong>Email:</strong> vladimirtret1965@gmail.com</li>
              <li><strong>Viber / Telegram:</strong> +380 99 781 4941</li>
              <li><strong>Адреса:</strong> 04070, м. Київ, вул. Хорива, 31, офіс 11</li>
            </ul>
            <h2 style={s.seoH2}>Години роботи</h2>
            <p style={s.seoP}>
              Пн–Пт: 9:00 – 18:00<br/>
              Сб–Нд: вихідний<br/>
              Замовлення на сайті приймаються цілодобово.
            </p>
            <h2 style={s.seoH2}>Реквізити</h2>
            <p style={s.seoP}>
              ФОП Трет'як Володимир Анатолійович<br/>
              РНОКПП: 2407104419<br/>
              IBAN: UA55 3052 9900 0002 6008 0462 4854 2<br/>
              Банк: АТ КБ «ПРИВАТБАНК»
            </p>
          </div>
        </div>
      )}

      {/* ПУБЛІЧНА ОФЕРТА */}
      {page === "oferta" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Публічна оферта" },
          ]}/>
          <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Публічна оферта</h1>
            <p style={{ ...s.seoP, fontStyle: "italic", color: "#86868b" }}>Редакція від 21 квітня 2026 року</p>
            <p style={s.seoP}>
              Цей документ є офіційною публічною пропозицією (офертою) Фізичної особи-підприємця <strong>Трет'яка Володимира Анатолійовича</strong> (далі — «Продавець») укласти договір купівлі-продажу товарів дистанційним способом на викладених нижче умовах з будь-якою дієздатною особою (далі — «Покупець»), яка акцептує цю оферту в порядку, передбаченому ст. 633, 638, 641, 642 Цивільного кодексу України та ст. 11 Закону України «Про електронну комерцію» №675-VIII від 03.09.2015 р.
            </p>

            <h2 style={s.seoH2}>1. Загальні положення</h2>
            <p style={s.seoP}><strong>Продавець</strong> — ФОП Трет'як Володимир Анатолійович, РНОКПП 2407104419, адреса: 04070, м. Київ, вул. Хорива, 31, оф. 11.</p>
            <p style={s.seoP}><strong>Покупець</strong> — дієздатна фізична або юридична особа, яка має намір придбати Товар. <strong>Сайт</strong> — https://goldix.com.ua. <strong>Товар</strong> — аксесуари для колекціонерів (капсули, альбоми, кляйсери, клемташі виробництва Leuchtturm, Lindner, Hawid). <strong>Замовлення</strong> — належно оформлений запит Покупця. <strong>Акцепт</strong> — повне та безумовне прийняття умов Оферти шляхом оформлення Замовлення.</p>
            <p style={s.seoP}>Акцепт здійснюється через оформлення Замовлення на Сайті, по телефону або через оплату Товару. Договір укладений з моменту отримання Продавцем Замовлення та його підтвердження.</p>

            <h2 style={s.seoH2}>2. Предмет Договору</h2>
            <p style={s.seoP}>Продавець зобов'язується передати у власність Покупця Товар з каталогу, а Покупець — прийняти та оплатити його. Асортимент, кількість, ціна та характеристики Товару визначаються на Сайті на момент Замовлення. Продавець має право змінювати ціни й асортимент; зміни не поширюються на прийняті Замовлення.</p>

            <h2 style={s.seoH2}>3. Порядок оформлення Замовлення</h2>
            <p style={s.seoP}>Покупець оформлює Замовлення самостійно на Сайті, по телефону +380 99 781 4941 або на e-mail vladimirtret1965@gmail.com. Покупець надає: ПІБ, телефон, email, адресу доставки. Покупець несе відповідальність за достовірність наданих даних. Продавець підтверджує Замовлення телефоном або email; з моменту підтвердження Замовлення прийняте до виконання. Продавець має право відмовити у виконанні за відсутності Товару або некоректних даних.</p>

            <h2 style={s.seoH2}>4. Ціна та оплата</h2>
            <p style={s.seoP}>Ціни вказані в гривнях (UAH) і включають усі податки. ФОП Трет'як В.А. працює на спрощеній системі оподаткування, не є платником ПДВ. Вартість доставки не включена та сплачується окремо за тарифами перевізника.</p>
            <p style={s.seoP}>Способи оплати: післяплата Нової Пошти; безготівковий переказ на IBAN Продавця в АТ КБ «ПриватБанк»; онлайн-оплата картою через LiqPay/WayForPay (після підключення). При безготівковій оплаті Замовлення вважається оплаченим з моменту надходження коштів.</p>

            <h2 style={s.seoH2}>5. Доставка</h2>
            <p style={s.seoP}>Доставка здійснюється «Новою Поштою» по всій території України: до відділення, кур'єром за адресою або до поштомата. Вартість визначається тарифами «Нової Пошти» на момент відправлення. Передача Товару до служби доставки — 1–2 робочих дні після підтвердження Замовлення. Доставка зазвичай 1–3 робочі дні. Право власності та ризик пошкодження переходять до Покупця з моменту отримання від перевізника. Покупець зобов'язаний перевірити комплектність у присутності представника перевізника; при виявленні пошкоджень — скласти акт.</p>

            <h2 style={s.seoH2}>6. Права та обов'язки сторін</h2>
            <p style={s.seoP}><strong>Продавець зобов'язаний:</strong> передати Товар належної якості та повної комплектації; надавати достовірну інформацію; забезпечувати конфіденційність даних. <strong>Продавець має право:</strong> змінювати умови оферти й ціни; відмовити у Замовленні з обґрунтованих причин.</p>
            <p style={s.seoP}><strong>Покупець зобов'язаний:</strong> надати достовірні дані; оплатити й прийняти Товар; ознайомитися з Офертою, Політикою конфіденційності та Умовами повернення. <strong>Покупець має право:</strong> на повну інформацію про Товар; відмовитися від Товару на умовах законодавства та розділу 8.</p>

            <h2 style={s.seoH2}>7. Відповідальність</h2>
            <p style={s.seoP}>Сторони несуть відповідальність згідно з законодавством України. Продавець не несе відповідальності за дії третіх осіб (перевізники, банки); шкоду через неправильну експлуатацію Покупцем; тимчасову недоступність Сайту. Сукупна відповідальність Продавця обмежується вартістю сплаченого Товару.</p>

            <h2 style={s.seoH2}>8. Повернення Товару</h2>
            <p style={s.seoP}>Покупець має право відмовитися від Товару належної якості протягом <strong>14 календарних днів</strong> з дня отримання згідно зі ст. 9 Закону України «Про захист прав споживачів» №1023-XII за умови збереження товарного вигляду, упаковки та документа про покупку. При виявленні недоліків — заміна, усунення, зменшення ціни або розірвання договору згідно зі ст. 8 ЗУ 1023-XII. Деталі — <span style={{ color: "#d4a017", cursor: "pointer" }} onClick={() => go("returns")}>сторінка «Повернення»</span>.</p>

            <h2 style={s.seoH2}>9. Конфіденційність</h2>
            <p style={s.seoP}>Обробка персональних даних здійснюється згідно із Законом України №2297-VI «Про захист персональних даних» та <span style={{ color: "#d4a017", cursor: "pointer" }} onClick={() => go("privacy")}>Політикою конфіденційності</span>. Оформленням Замовлення Покупець надає згоду на обробку своїх даних з метою виконання договору.</p>

            <h2 style={s.seoH2}>10. Форс-мажор</h2>
            <p style={s.seoP}>Сторони звільняються від відповідальності за обставин непереборної сили: воєнних дій, ракетних обстрілів, блекаутів, стихійних лих, епідемій, рішень держорганів, збоїв перевізників і платіжних систем. Сторона повідомляє про форс-мажор протягом 10 календарних днів.</p>

            <h2 style={s.seoH2}>11. Строк дії Оферти</h2>
            <p style={s.seoP}>Оферта діє з моменту розміщення на Сайті й до відкликання Продавцем. Продавець має право в односторонньому порядку змінювати Оферту; нова редакція чинна з моменту публікації за адресою https://goldix.com.ua/oferta.</p>

            <h2 style={s.seoH2}>12. Вирішення спорів</h2>
            <p style={s.seoP}>Спори вирішуються переговорами на підставі письмового звернення; строк розгляду — до 30 днів. У разі недосягнення згоди — суд згідно з законодавством України. Застосовується право України. Покупець-фізособа може звернутися до Держпродспоживслужби або суду за місцем проживання.</p>

            <h2 style={s.seoH2}>13. Реквізити Продавця</h2>
            <p style={s.seoP}>
              ФОП Трет'як Володимир Анатолійович<br/>
              РНОКПП: 2407104419<br/>
              Адреса: 04070, м. Київ, вул. Хорива, 31, оф. 11<br/>
              Телефон: +380 99 781 4941<br/>
              E-mail: vladimirtret1965@gmail.com<br/>
              Сайт: https://goldix.com.ua<br/>
              IBAN: UA55 3052 9900 0002 6008 0462 4854 2<br/>
              Банк: АТ КБ «ПриватБанк»<br/>
              Система оподаткування: спрощена, без ПДВ
            </p>
          </div>
        </div>
      )}

      {/* ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ */}
      {page === "privacy" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Політика конфіденційності" },
          ]}/>
          <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Політика конфіденційності</h1>
            <p style={{ ...s.seoP, fontStyle: "italic", color: "#86868b" }}>Редакція від 21 квітня 2026 року</p>
            <p style={s.seoP}>
              Ця Політика визначає порядок обробки персональних даних користувачів сайту https://goldix.com.ua відповідно до Закону України «Про захист персональних даних» №2297-VI, Закону України «Про електронну комерцію» №675-VIII та Регламенту ЄС 2016/679 (GDPR) для відвідувачів з ЄС.
            </p>

            <h2 style={s.seoH2}>1. Загальні положення</h2>
            <p style={s.seoP}>Користуванням Сайту та оформленням Замовлення Користувач надає згоду на обробку даних на умовах цієї Політики. Актуальна редакція: https://goldix.com.ua/privacy.</p>

            <h2 style={s.seoH2}>2. Володілець персональних даних</h2>
            <p style={s.seoP}>
              ФОП Трет'як Володимир Анатолійович<br/>
              РНОКПП: 2407104419<br/>
              Адреса: 04070, м. Київ, вул. Хорива, 31, оф. 11<br/>
              Телефон: +380 99 781 4941<br/>
              E-mail для запитів: vladimirtret1965@gmail.com
            </p>

            <h2 style={s.seoH2}>3. Які дані ми збираємо</h2>
            <p style={s.seoP}><strong>3.1. Надані Користувачем:</strong> ПІБ, телефон, email, адреса доставки Нової Пошти, дані одержувача (якщо Товар оформлюється на третю особу за її згодою).</p>
            <p style={s.seoP}><strong>3.2. Автоматично зібрані:</strong> IP-адреса, пристрій, операційна система, браузер, мова; дата й час відвідувань; джерело переходу (UTM-мітки); файли cookies; історія переглядів і замовлень.</p>
            <p style={s.seoP}><strong>3.3. Платіжні дані</strong> обробляються LiqPay/WayForPay/банками-еквайрами та не зберігаються повністю на серверах Продавця.</p>
            <p style={s.seoP}><strong>3.4.</strong> Сайт не збирає свідомо даних осіб молодших за 16 років.</p>

            <h2 style={s.seoH2}>4. Мета обробки</h2>
            <ul style={s.seoUl}>
              <li>Ідентифікація Користувача</li>
              <li>Виконання Замовлення й договору</li>
              <li>Зв'язок щодо доставки й обслуговування</li>
              <li>Розгляд звернень і повернень</li>
              <li>Виконання податкового законодавства</li>
              <li>Маркетингові комунікації за окремою згодою</li>
              <li>Аналіз Сайту й покращення сервісу</li>
              <li>Захист від шахрайства</li>
            </ul>

            <h2 style={s.seoH2}>5. Правові підстави</h2>
            <p style={s.seoP}>Згідно зі ст. 11 ЗУ 2297-VI та ст. 6 GDPR: згода суб'єкта даних (маркетинг, non-essential cookies); необхідність виконання договору; обов'язок за законом (податки, бухоблік); законні інтереси (захист від шахрайства, базова аналітика).</p>

            <h2 style={s.seoH2}>6. Строки зберігання</h2>
            <p style={s.seoP}>Дані про Замовлення — не менше 3 років (ст. 257 ЦКУ); податкова документація — 1095 днів (ПКУ); маркетингові дані — до відкликання згоди; cookies — згідно з <span style={{ color: "#d4a017", cursor: "pointer" }} onClick={() => go("cookies")}>Політикою cookies</span>.</p>

            <h2 style={s.seoH2}>7. Передача третім особам</h2>
            <p style={s.seoP}>Продавець не продає дані Користувачів. Передача здійснюється лише для виконання договору або за законом:</p>
            <ul style={s.seoUl}>
              <li><strong>АТ «Нова Пошта»</strong> — для доставки (виконання договору)</li>
              <li><strong>АТ КБ «ПриватБанк», LiqPay, WayForPay</strong> — для платежів</li>
              <li><strong>Google LLC</strong> (Analytics, Ads, Merchant Center) — аналітика, реклама (за згодою)</li>
              <li><strong>Meta Platforms Ireland</strong> (Pixel, за використання) — ретаргетинг</li>
              <li><strong>Органи державної влади</strong> — за законною вимогою</li>
            </ul>

            <h2 style={s.seoH2}>8. Cookies і аналітика</h2>
            <p style={s.seoP}>Сайт використовує cookies та пікселі (Google Analytics 4, Google Ads, Google Merchant Center). Рекламні й аналітичні cookies встановлюються лише після згоди через cookie-banner. Деталі — <span style={{ color: "#d4a017", cursor: "pointer" }} onClick={() => go("cookies")}>Політика cookies</span>.</p>

            <h2 style={s.seoH2}>9. Права суб'єкта даних</h2>
            <p style={s.seoP}>Згідно зі ст. 8 ЗУ 2297-VI та ст. 15–22 GDPR Користувач має право:</p>
            <ul style={s.seoUl}>
              <li>Знати про джерела й цілі обробки</li>
              <li>Отримати доступ до своїх даних</li>
              <li>Виправити неточні дані</li>
              <li>Вимагати видалення (право «бути забутим»)</li>
              <li>Обмежити обробку</li>
              <li>Відкликати згоду</li>
              <li>На переносимість даних</li>
              <li>Подати скаргу до Уповноваженого ВРУ з прав людини (ombudsman.gov.ua)</li>
            </ul>
            <p style={s.seoP}>Запит надсилайте на vladimirtret1965@gmail.com — ми відповідаємо протягом 30 днів.</p>

            <h2 style={s.seoH2}>10. Безпека</h2>
            <p style={s.seoP}>Використовуємо HTTPS/TLS-шифрування; обмежений доступ до даних; регулярні оновлення ПЗ; резервне копіювання. Абсолютна безпека передачі через Інтернет не гарантується.</p>

            <h2 style={s.seoH2}>11. Контакти</h2>
            <p style={s.seoP}>
              E-mail: vladimirtret1965@gmail.com<br/>
              Тел.: +380 99 781 4941<br/>
              Адреса: 04070, м. Київ, вул. Хорива, 31, оф. 11
            </p>

            <h2 style={s.seoH2}>12. Зміни</h2>
            <p style={s.seoP}>Продавець має право оновлювати Політику; суттєві зміни — через Сайт або email. Дата редакції: 21 квітня 2026 р.</p>
          </div>
        </div>
      )}

      {/* ПОЛІТИКА COOKIES */}
      {page === "cookies" && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: "Політика cookies" },
          ]}/>
          <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 0 60px" }}>
            <h1 style={s.pageH1}>Політика cookies</h1>
            <p style={{ ...s.seoP, fontStyle: "italic", color: "#86868b" }}>Редакція від 21 квітня 2026 року</p>

            <h2 style={s.seoH2}>1. Що таке cookies</h2>
            <p style={s.seoP}>Cookies — невеликі текстові файли, які сайт зберігає у браузері Користувача для запам'ятовування дій, налаштувань, авторизації, аналітики, реклами. Окрім cookies використовуємо localStorage, пікселі та SDK.</p>

            <h2 style={s.seoH2}>2. Які cookies використовує goldix.com.ua</h2>

            <h3 style={s.seoH3}>2.1. Необхідні (не потребують згоди)</h3>
            <ul style={s.seoUl}>
              <li><strong>session_id / auth_token</strong> — авторизація (до 30 днів)</li>
              <li><strong>cart_id / cart_items</strong> — кошик (до 30 днів)</li>
              <li><strong>csrf_token</strong> — безпека (сеанс)</li>
              <li><strong>cookie_consent</strong> — згода (12 місяців)</li>
            </ul>

            <h3 style={s.seoH3}>2.2. Функціональні</h3>
            <ul style={s.seoUl}>
              <li><strong>lang</strong> — мова (12 місяців)</li>
              <li><strong>user_prefs</strong> — сортування, обране відділення Нової Пошти (12 місяців)</li>
            </ul>

            <h3 style={s.seoH3}>2.3. Аналітичні (потребують згоди)</h3>
            <ul style={s.seoUl}>
              <li><strong>Google Analytics 4</strong> (_ga, _ga_*) — статистика (14 місяців)</li>
            </ul>

            <h3 style={s.seoH3}>2.4. Рекламні (потребують згоди)</h3>
            <ul style={s.seoUl}>
              <li><strong>Google Ads</strong> (_gcl_au, IDE) — ремаркетинг (13 місяців)</li>
              <li><strong>Google Merchant Center</strong> — товарний фід</li>
              <li><strong>Meta Pixel</strong> (_fbp, fr) — за використання (90 днів)</li>
            </ul>

            <h2 style={s.seoH2}>3. Правова підстава</h2>
            <p style={s.seoP}>Законні інтереси — для необхідних і функціональних; згода Користувача — для аналітичних і рекламних (ст. 11 ЗУ 2297-VI, ст. 6–7 GDPR, Директива ЄС 2002/58/EC).</p>

            <h2 style={s.seoH2}>4. Як керувати cookies</h2>
            <p style={s.seoP}>Через посилання «Налаштування cookies» у футері Сайту або в налаштуваннях браузера (Chrome, Firefox, Safari, Edge). Відключення може зламати функціональність (кошик, авторизація). Додатково: adssettings.google.com, facebook.com/adpreferences, youronlinechoices.com.</p>

            <h2 style={s.seoH2}>5. Строки зберігання</h2>
            <p style={s.seoP}>Деталі вказані в розділі 2. Максимум — до 24 місяців.</p>

            <h2 style={s.seoH2}>6. Згода</h2>
            <p style={s.seoP}>При першому відвідуванні відображається cookie-banner: «Прийняти всі» / «Тільки необхідні» / «Налаштувати». Згода зберігається 12 місяців і може бути відкликана в будь-який час.</p>

            <h2 style={s.seoH2}>7. Зміни</h2>
            <p style={s.seoP}>Актуальна редакція: https://goldix.com.ua/cookies. Дата: 21 квітня 2026 р.</p>
          </div>
        </div>
      )}

      {/* СТОРІНКА РЕЗУЛЬТАТУ ОПЛАТИ (повернення з WayForPay) */}
      {page === "paymentResult" && <PaymentResultPage s={s} go={go}/>}

      {/* СТОРІНКА ТОВАРУ */}
      {page === "product" && product && (
        <div style={s.container}>
          <Crumbs items={[
            { label: "Головна", go: () => go("home") },
            { label: product.cat === "numismatic" ? "Нумізматика" : "Філателія", go: () => go(product.cat) },
            { label: product.name },
          ]}/>
          <div style={s.productGrid}>
            <div>
              <div style={s.productImg}>
                <img src={product.img} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}/>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, color: "#6e6e73" }}>{product.brand} · Арт. {product.mpn}</div>
              <h1 style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.1, marginBottom: 14 }}>{product.name}</h1>
              <p style={{ fontSize: 17, color: "#424245", lineHeight: 1.5 }}>{product.shortDesc}</p>
              <div style={{ fontSize: 32, fontWeight: 600, margin: "20px 0" }}>{product.price} грн</div>
              <button style={s.btn} onClick={() => addToCart(product)}>Додати в кошик</button>
              {product.features && (
                <div style={{ marginTop: 28, padding: "20px 22px", background: "#faf7ed", borderLeft: "3px solid #d4a017", borderRadius: "0 12px 12px 0" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#6e6e73", marginBottom: 12, letterSpacing: "0.05em", textTransform: "uppercase" }}>Ключові особливості</div>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.7, color: "#1d1d1f" }}>
                    {product.features.map((f, i) => <li key={i} style={{ marginBottom: 4 }}>{f}</li>)}
                  </ul>
                </div>
              )}
              <table style={{ width: "100%", fontSize: 14, borderCollapse: "collapse", marginTop: 30 }}>
                <tbody>
                  {product.specs.map(([k, v], i) => (
                    <tr key={i}>
                      <td style={{ padding: "10px 0", color: "#6e6e73", borderTop: i > 0 ? "1px solid #d2d2d7" : "none" }}>{k}</td>
                      <td style={{ padding: "10px 0", borderTop: i > 0 ? "1px solid #d2d2d7" : "none" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 22px 60px" }}>
            <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 16 }}>Опис</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#424245" }}>{product.desc}</p>
          </div>
        </div>
      )}

      {/* ФУТЕР */}
      <footer style={s.footer}>
        <div style={s.footerGrid}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#1d1d1f", marginBottom: 12 }}>
              <span style={s.logoAccent}>Goldix</span>
            </div>
            <div>Аксесуари для нумізматів і філателістів. Оригінальна продукція Leuchtturm, Lindner, Hawid.</div>
            <div style={{ marginTop: 10 }}>
              +380 99 781 4941<br/>
              vladimirtret1965@gmail.com
            </div>
          </div>
          <div>
            <div style={s.footerH5}>Каталог</div>
            <span style={s.footerLink} onClick={() => go("numismatic")}>Нумізматика</span>
            <span style={s.footerLink} onClick={() => go("philatelic")}>Філателія</span>
          </div>
          <div>
            <div style={s.footerH5}>Інформація</div>
            <span style={s.footerLink} onClick={() => go("about")}>Про нас</span>
            <span style={s.footerLink} onClick={() => go("delivery")}>Доставка та оплата</span>
            <span style={s.footerLink} onClick={() => go("returns")}>Повернення та обмін</span>
            <span style={s.footerLink} onClick={() => go("contacts")}>Контакти</span>
          </div>
          <div>
            <div style={s.footerH5}>Правова інформація</div>
            <span style={s.footerLink} onClick={() => go("oferta")}>Публічна оферта</span>
            <span style={s.footerLink} onClick={() => go("privacy")}>Політика конфіденційності</span>
            <span style={s.footerLink} onClick={() => go("cookies")}>Політика cookies</span>
          </div>
          <div>
            <div style={s.footerH5}>Реквізити</div>
            <div style={{ lineHeight: 1.7 }}>
              ФОП Трет'як В.А.<br/>
              РНОКПП: 2407104419<br/>
              м. Київ, вул. Хорива, 31, оф. 11
            </div>
          </div>
        </div>
        <div style={s.footerLegal}>
          © 2026 Goldix. Всі права захищено.
          Сайт відповідає вимогам Закону України «Про електронну комерцію» № 675-VIII
          та Закону України «Про захист прав споживачів» № 1023-XII.
        </div>
        <div style={{ textAlign: "center", marginTop: 20, color: "#86868b" }}>goldix.com.ua</div>
      </footer>

      {/* ДРОВЕР КОШИКА */}
      {cartOpen && (
        <>
          <div
            onClick={() => setCartOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1500 }}
          />
          <div style={{
            position: "fixed", top: 0, right: 0, bottom: 0,
            width: "min(480px, 100vw)", background: "#fff", zIndex: 1501,
            display: "flex", flexDirection: "column",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
          }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #d2d2d7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>Кошик {cartCount > 0 && `(${cartCount})`}</h2>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#6e6e73" }}>✕</button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#6e6e73" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🛍</div>
                  <div style={{ fontSize: 17, marginBottom: 8 }}>Ваш кошик порожній</div>
                  <div style={{ fontSize: 14 }}>Додайте товари з каталогу</div>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{ display: "flex", gap: 12, padding: "16px 0", borderBottom: "1px solid #f5f5f7" }}>
                    <div style={{ width: 70, height: 70, background: "#f5f5f7", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 6 }}>
                      <img src={item.img} alt={item.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}/>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4, lineHeight: 1.3 }}>{item.name}</div>
                      <div style={{ fontSize: 12, color: "#6e6e73", marginBottom: 8 }}>Арт. {item.mpn}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #d2d2d7", borderRadius: 980, padding: "2px 6px" }}>
                          <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ background: "none", border: "none", cursor: "pointer", width: 24, height: 24, fontSize: 16, color: "#6e6e73" }}>−</button>
                          <span style={{ minWidth: 20, textAlign: "center", fontSize: 14 }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ background: "none", border: "none", cursor: "pointer", width: 24, height: 24, fontSize: 16, color: "#6e6e73" }}>+</button>
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>{item.price * item.qty} грн</div>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#86868b", fontSize: 18, alignSelf: "flex-start" }}>✕</button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: "20px 24px", borderTop: "1px solid #d2d2d7", background: "#fafafa" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 17 }}>
                  <span style={{ color: "#6e6e73" }}>До сплати:</span>
                  <strong style={{ fontSize: 22 }}>{cartTotal} грн</strong>
                </div>
                <div style={{ fontSize: 12, color: "#86868b", marginBottom: 14 }}>
                  * Вартість доставки розраховується окремо за тарифами Нової Пошти.
                </div>
                <button
                  onClick={() => { setCartOpen(false); setCheckoutOpen(true); setOrderSent(false); }}
                  style={{ width: "100%", padding: "14px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 17, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
                >Оформити замовлення →</button>
              </div>
            )}
          </div>
        </>
      )}

      {/* МОДАЛ ОФОРМЛЕННЯ ЗАМОВЛЕННЯ */}
      {checkoutOpen && (
        <>
          <div
            onClick={() => !orderSent && setCheckoutOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1600 }}
          />
          <div style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "min(560px, 95vw)", maxHeight: "90vh", overflowY: "auto",
            background: "#fff", borderRadius: 20, zIndex: 1601,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}>
            {!orderSent ? (
              <>
                <div style={{ padding: "24px 28px 16px", borderBottom: "1px solid #f5f5f7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>Оформлення замовлення</h2>
                  <button onClick={() => setCheckoutOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#6e6e73" }}>✕</button>
                </div>

                <form
                  name="goldix-order"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target;
                    const data = new FormData(form);
                    const paymentMethod = data.get("payment");
                    const orderRef = `GOLDIX-${Date.now()}`;

                    // Спершу зберігаємо замовлення в Netlify Forms (щоб завжди був запис, навіть якщо WFP впав)
                    data.append("form-name", "goldix-order");
                    data.append("order-ref", orderRef);
                    data.append("cart-summary", cart.map(i => `${i.name} (Арт.${i.mpn}) × ${i.qty} = ${i.price * i.qty}₴`).join("\n"));
                    data.append("cart-total", `${cartTotal} грн`);

                    try {
                      await fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams(data).toString(),
                      });
                    } catch (err) {
                      // Не фейлимо — WFP-оплата важливіша; повідомимо, якщо все зовсім погано
                      console.error("Netlify Forms save failed:", err);
                    }

                    if (paymentMethod === "card") {
                      // Редірект на WayForPay через нашу серверну функцію
                      try {
                        const res = await fetch("/api/create-payment", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            orderRef,
                            products: cart.map(i => ({ name: i.name, price: i.price, count: i.qty })),
                            clientFirstName: String(data.get("name") || "").split(" ")[1] || "",
                            clientLastName: String(data.get("name") || "").split(" ")[0] || "",
                            clientEmail: String(data.get("email") || ""),
                            clientPhone: String(data.get("phone") || "").replace(/\D/g, ""),
                          }),
                        });
                        if (!res.ok) throw new Error("WFP init failed");
                        const html = await res.text();
                        // Відкриваємо сторінку редиректу з auto-submit формою
                        document.open();
                        document.write(html);
                        document.close();
                      } catch (err) {
                        alert("Не вдалося ініціювати оплату карткою. Спробуйте ще раз або оберіть інший спосіб оплати.\n\nПомилка: " + err);
                      }
                    } else {
                      // Післяплата або IBAN — звичайний flow
                      setOrderSent(true);
                      setCart([]);
                    }
                  }}
                  style={{ padding: "20px 28px 28px" }}
                >
                  {/* Honeypot для защиты от спама */}
                  <p style={{ display: "none" }}>
                    <label>Не заповнюйте це поле: <input name="bot-field"/></label>
                  </p>

                  {/* Сводка заказа */}
                  <div style={{ background: "#f5f5f7", padding: 14, borderRadius: 12, marginBottom: 18, fontSize: 13 }}>
                    <div style={{ fontWeight: 600, marginBottom: 8 }}>Ваше замовлення:</div>
                    {cart.map(i => (
                      <div key={i.id} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0" }}>
                        <span style={{ color: "#424245" }}>{i.name} × {i.qty}</span>
                        <span style={{ fontWeight: 500 }}>{i.price * i.qty} ₴</span>
                      </div>
                    ))}
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 8, marginTop: 8, borderTop: "1px solid #d2d2d7", fontWeight: 600 }}>
                      <span>Разом:</span>
                      <span>{cartTotal} грн</span>
                    </div>
                  </div>

                  {/* Поля формы */}
                  <label style={{ display: "block", marginBottom: 14 }}>
                    <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>ПІБ <span style={{ color: "#d4a017" }}>*</span></div>
                    <input name="name" required placeholder="Іваненко Іван Іванович" style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }}/>
                  </label>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                    <label>
                      <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>Телефон <span style={{ color: "#d4a017" }}>*</span></div>
                      <input name="phone" type="tel" required placeholder="+380 99 123 4567" style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }}/>
                    </label>
                    <label>
                      <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>Email</div>
                      <input name="email" type="email" placeholder="you@example.com" style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }}/>
                    </label>
                  </div>

                  <label style={{ display: "block", marginBottom: 14 }}>
                    <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>Доставка <span style={{ color: "#d4a017" }}>*</span></div>
                    <select
                      name="delivery"
                      required
                      value={selectedDelivery}
                      onChange={(e) => setSelectedDelivery(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", background: "#fff" }}
                    >
                      <option value="pickup">🏢 Самовивіз з офісу у Києві (безкоштовно)</option>
                      <option value="np">Нова Пошта (120 грн) — 1–3 робочих дні</option>
                      <option value="goldix-courier">Кур'єр Goldix по Україні (150 грн)</option>
                    </select>
                  </label>

                  {selectedDelivery === "pickup" ? (
                    <div style={{ marginBottom: 14, padding: "12px 14px", background: "#faf7ed", borderLeft: "3px solid #d4a017", borderRadius: "0 12px 12px 0", fontSize: 13, lineHeight: 1.5 }}>
                      <strong>Самовивіз за адресою:</strong><br/>
                      04070, м. Київ, вул. Хорива, 31, оф. 11<br/>
                      <span style={{ color: "#6e6e73" }}>Пн–Пт: 10:00–18:00. Ми зв'яжемося з вами для узгодження часу.</span>
                      <input type="hidden" name="address" value="Самовивіз: вул. Хорива 31, оф. 11"/>
                    </div>
                  ) : (
                    <label style={{ display: "block", marginBottom: 14 }}>
                      <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>
                        {selectedDelivery === "goldix-courier" ? "Адреса доставки" : "Місто та № відділення"} <span style={{ color: "#d4a017" }}>*</span>
                      </div>
                      <input name="address" required placeholder={selectedDelivery === "goldix-courier" ? "Київ, вул. Прикладна 1, кв. 5" : "Київ, відділення №1"} style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }}/>
                    </label>
                  )}

                  <label style={{ display: "block", marginBottom: 14 }}>
                    <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>Оплата <span style={{ color: "#d4a017" }}>*</span></div>
                    <select name="payment" required defaultValue="card" style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", background: "#fff" }}>
                      <option value="card">💳 Картою онлайн (Visa/Mastercard, Apple Pay, Google Pay)</option>
                      {selectedDelivery === "np" && (
                        <option value="cod">Післяплата Нової Пошти</option>
                      )}
                      <option value="iban">Банківський переказ на IBAN</option>
                    </select>
                  </label>

                  <label style={{ display: "block", marginBottom: 18 }}>
                    <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 4 }}>Коментар до замовлення</div>
                    <textarea name="comment" rows="2" placeholder="Необов'язково" style={{ width: "100%", padding: "10px 14px", border: "1px solid #d2d2d7", borderRadius: 12, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", resize: "vertical" }}/>
                  </label>

                  <label style={{ display: "flex", gap: 8, fontSize: 13, color: "#424245", marginBottom: 16, cursor: "pointer" }}>
                    <input type="checkbox" name="consent" required style={{ marginTop: 3, accentColor: "#d4a017" }}/>
                    <span>
                      Я ознайомлений з <span style={{ color: "#d4a017", textDecoration: "underline", cursor: "pointer" }} onClick={(e) => { e.preventDefault(); setCheckoutOpen(false); go("oferta"); }}>Публічною офертою</span> та <span style={{ color: "#d4a017", textDecoration: "underline", cursor: "pointer" }} onClick={(e) => { e.preventDefault(); setCheckoutOpen(false); go("privacy"); }}>Політикою конфіденційності</span> і надаю згоду на обробку моїх персональних даних.
                    </span>
                  </label>

                  <button
                    type="submit"
                    style={{ width: "100%", padding: "14px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 17, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
                  >Підтвердити замовлення на {cartTotal} грн</button>

                  <div style={{ fontSize: 12, color: "#86868b", marginTop: 12, textAlign: "center" }}>
                    Ми зв'яжемося з вами протягом 1 робочого дня для підтвердження.
                  </div>
                </form>
              </>
            ) : (
              <div style={{ padding: "48px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>✓</div>
                <h2 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>Дякуємо за замовлення!</h2>
                <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 24, lineHeight: 1.5 }}>
                  Ми отримали ваше замовлення і зв'яжемося з вами протягом 1 робочого дня для підтвердження деталей доставки.
                </p>
                <button
                  onClick={() => { setCheckoutOpen(false); setOrderSent(false); go("home"); }}
                  style={{ padding: "12px 28px", background: "#d4a017", color: "#fff", border: "none", borderRadius: 980, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
                >На головну</button>
              </div>
            )}
          </div>
        </>
      )}

      {/* COOKIE BANNER */}
      {cookieConsent === null && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          borderTop: "1px solid #d2d2d7",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
          padding: "20px 22px",
          zIndex: 1000,
          fontSize: 14,
          lineHeight: 1.5,
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ flex: "1 1 400px", minWidth: 260 }}>
              🍪 <strong>Ми використовуємо файли cookies</strong><br/>
              <span style={{ color: "#6e6e73" }}>
                Щоб goldix.com.ua працював правильно, ми використовуємо необхідні cookies. З вашої згоди ми також застосовуємо аналітичні та рекламні cookies, щоб покращувати сервіс. Детальніше — у <span style={{ color: "#d4a017", cursor: "pointer", textDecoration: "underline" }} onClick={() => { setCookieConsent("necessary"); go("cookies"); }}>Політиці cookies</span>.
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={() => acceptCookies("necessary")}
                style={{ padding: "10px 18px", border: "1px solid #d2d2d7", background: "#fff", color: "#1d1d1f", borderRadius: 980, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}
              >Тільки необхідні</button>
              <button
                onClick={() => acceptCookies("all")}
                style={{ padding: "10px 18px", border: "none", background: "#d4a017", color: "#fff", borderRadius: 980, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >Прийняти всі</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

# Lingo Kids — o‘quv kitoblari sayti

Oddiy HTML, CSS va JavaScript asosida tuzilgan moslashuvchan (responsive) demo sayt. Framework yoki qo‘shimcha kutubxona kerak emas.

## Ishga tushirish

1. `lingo-book-site` papkasini Visual Studio Code orqali oching.
2. `index.html` faylini brauzerda oching. Qulayroq ishlash uchun VS Code'dagi Live Server kengaytmasidan foydalanishingiz mumkin.
3. `style.css` dizayn va animatsiyalarni, `script.js` esa tugmalar, slayder, til tanlash va forma mantiqini boshqaradi.

## O‘zingizning rasmlaringizni qo‘yish

1. Internetdagi siz foydalanishga ruxsat berilgan yuqori sifatli kitob rasmini **asl fayl** sifatida yuklab oling. Skrinshot yoki preview/thumbnail emas, original PNG, JPG yoki WebP faylni tanlang.
2. Rasmlarni `images` papkasiga qo‘ying. Masalan:
   - `images/book-1.webp`
   - `images/book-2.webp`
   - `images/book-3.webp`
3. `script.js` ni ochib, yuqoridagi `BOOKS` ro‘yxatidan rasm yo‘lini o‘zgartiring. Masalan:

   ```js
   image: "images/book-1.webp", // <<< 1-KITOB RASMI
   ```

   Boshqa rasm uchun ham mos ravishda `book-2.webp` va `book-3.webp` yozing. Rasmlar hero-slayderda ham, pastdagi mahsulot kartochkalarida ham ishlatiladi.
4. Fayl nomlari va katta-kichik harflari aynan mos kelishiga e’tibor bering. GitHub Pages Linux serverida `Book-1.webp` va `book-1.webp` boshqa-boshqa nom hisoblanadi.
5. Sifat uchun CSS rasmlarni siqmaydi; faqat ko‘rinadigan maydonga moslab joylashtiradi. Mahsulot rasmlarida `object-fit: contain` bor, shuning uchun kitob kesilib qolmaydi. Juda katta original rasm sahifa yuklanishini sekinlashtirishi mumkin; sifatni saqlaydigan, optimallashtirilgan WebP ham mos keladi.

> Eslatma: internetdagi rasm URL'ini ham `image: "https://..."` ko‘rinishida yozish mumkin, lekin saytni GitHub Pages'da mustaqil va ishonchli ishlatish uchun rasmni `images/` ichiga saqlash yaxshiroq. Foydalanish huquqi sizda bo‘lgan rasmlarni tanlang.

## Hozir nimalar ishlaydi?

- Kitoblarni oldinga/orqaga almashtiradigan hero slayder (strelka tugmalari yoki klaviaturadagi ← / → tugmalari).
- Uzb / Рус / Eng til tanlagichi. Tanlov brauzer xotirasida saqlanishi mumkin.
- Buyurtma tugmalari va forma modali.
- Mahsulot kartalaridagi kitob tili tanlash.
- Scroll reveal animatsiyalari, hover effektlari va mobil menyu.
- Telefon va planshetlarga mos dizayn.

## Buyurtma formasiga oid muhim eslatma

Forma hozir **frontend demo**: tekshiruvdan o‘tadi va ekranda xabar chiqaradi, lekin hech qayerga buyurtma yubormaydi. Haqiqiy buyurtmalarni qabul qilish uchun backend, forma xizmati yoki Telegram bot bilan ulash kerak. Saytda haqiqiy buyurtma olinayotgandek ko‘rsatmaslik uchun bu holat formaning o‘zida ham yozilgan.

## GitHub'ga yuklash

### Brauzer orqali (eng sodda usul)

1. GitHub.com saytiga kiring va akkauntingizga kiring.
2. `New repository` bosing. Masalan, repository nomini `lingo-kids-site` qiling.
3. `Public` tanlang (GitHub Pages orqali bepul statik sayt chiqarish uchun) va repository yarating.
4. `Add file` → `Upload files` bosing.
5. Kompyuteringizdagi loyiha papkasining **ichidagi** barcha fayl va `images` papkasini yuklang. `index.html` repository'ning eng yuqori darajasida turishi kerak, yana ichki `lingo-book-site/lingo-book-site/` papkaga tushib qolmasin.
6. `Commit changes` bosing.

### Git buyruqlari orqali (VS Code terminalida)

Git o‘rnatilgan bo‘lsa, loyiha papkasining terminalida quyidagilarni kiriting. `YOUR-USERNAME` o‘rniga GitHub loginni yozing:

```bash
git init
git add .
git commit -m "Create Lingo Kids website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lingo-kids-site.git
git push -u origin main
```

Agar `remote origin already exists` xabari chiqsa, `git remote set-url origin https://github.com/YOUR-USERNAME/lingo-kids-site.git` buyrug‘idan foydalaning. GitHub so‘rasa, web orqali login qiling yoki token/credential manager ishlating — akkaunt parolingizni terminalga kiritmang.

### Saytni GitHub Pages orqali chiqarish

1. GitHub repository'ni oching → `Settings` → `Pages`.
2. `Build and deployment` bo‘limida `Deploy from a branch` tanlang.
3. Branch: `main`, folder: `/(root)` tanlang, so‘ng `Save` bosing.
4. Biroz kuting; `Settings → Pages` sahifasida sayt manzili ko‘rinadi. Odatda format: `https://YOUR-USERNAME.github.io/lingo-kids-site/`.
5. Sayt ochilganda rasmlar ko‘rinmasa, `script.js` ichidagi fayl yo‘llari, fayl nomlari va `images` papkasi repository'ga yuklanganini tekshiring.

# Website QM — Company Profile

Company profile PT Quadra Manunggal Sejahtera (software house & IT consulting, pengembang QuadraOne).

Website statis satu halaman: HTML, CSS, dan JavaScript biasa, tanpa build. Tersedia dalam dua bahasa (ID/EN).

## Menjalankan di komputer

```bash
python -m http.server 5500
```

Lalu buka http://127.0.0.1:5500/. Bisa juga membuka `index.html` langsung di browser.

## Struktur

| File | Isi |
|---|---|
| `index.html` | Seluruh konten halaman (teks Bahasa Indonesia) |
| `styles.css` | Tampilan, warna brand, animasi, responsive |
| `script.js` | Ganti bahasa ID/EN (teks Inggris ada di sini), animasi scroll, pengiriman form kontak |
| `assets/logo/` | Logo Q1 PMS, Q1 POS, dan logogram QM |

## Mengubah konten

- Teks Indonesia: ubah langsung di `index.html`.
- Teks Inggris: ubah di objek `en` dalam `script.js`. Kuncinya sama dengan atribut `data-i18n` di HTML.
- Kontak (alamat, email, WhatsApp): ada di bagian Kontak dan footer `index.html`, plus `WA_NUMBER` dan `CONTACT_EMAIL` di `script.js`.

## Form kontak

Form dikirim ke email lewat [FormSubmit](https://formsubmit.co) (gratis, tanpa server), ke alamat `CONTACT_EMAIL` di `script.js`.

- **Aktivasi sekali di awal:** saat form pertama kali dikirim dari website, FormSubmit mengirim email aktivasi ke `CONTACT_EMAIL`. Klik **Activate** di email itu. Sebelum diaktifkan, pesan belum diteruskan.
- Kalau pengiriman gagal, pengunjung otomatis ditawari tautan WhatsApp berisi pesan yang sama.
- Ada kolom tersembunyi (`_honey`) untuk menyaring spam dari bot.

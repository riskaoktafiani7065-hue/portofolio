# Portfolio Siswa - Next.js

Website portfolio siswa yang dikembangkan menggunakan Next.js, TypeScript, React, dan Tailwind CSS.

Project ini merupakan pengembangan lanjutan dari Tugas 1 dengan penambahan styling responsif, reusable components, interaktivitas, pencarian dan filter project, dark mode, dynamic routing, serta halaman 404.

## Deskripsi Project

Website ini dibuat sebagai portfolio untuk menampilkan informasi mengenai diri saya, skills yang sedang dipelajari, project yang telah dibuat, serta informasi kontak.

Pada pengembangan lanjutan ini, website diperbarui agar memiliki tampilan yang lebih modern, responsif, interaktif, dan mudah dikembangkan.

Website terdiri dari beberapa bagian utama:

- Home
- Skills
- About
- Projects
- Contact
- Footer

Selain halaman utama, terdapat juga halaman About yang lebih lengkap dan halaman detail project menggunakan dynamic routing.

## Teknologi yang Digunakan

Teknologi yang digunakan dalam project ini:

- Next.js
- TypeScript
- React
- Tailwind CSS
- Figma
- Supabase

---

# Penambahan Fitur

Pada pengembangan lanjutan project, beberapa fitur telah ditambahkan dan diperbarui.

## 1. Tailwind CSS Styling

Tailwind CSS digunakan untuk mengatur tampilan website menggunakan utility classes.

Beberapa styling yang diterapkan antara lain:

- Responsive layout
- Flexbox
- CSS Grid
- Spacing dan padding
- Typography
- Border dan border radius
- Shadow
- Hover effect
- Dark mode
- Responsive breakpoint
- Background grid
- Animasi
- Transition

Website dibuat dengan pendekatan mobile-first sehingga tampilan dapat menyesuaikan ukuran layar smartphone, tablet, maupun desktop.

Breakpoint yang digunakan antara lain:

- `sm:`
- `md:`
- `lg:`
- `xl:`

Beberapa elemen juga diberikan efek interaksi seperti:

- `hover:-translate-y-1`
- `hover:shadow-lg`
- `transition-all`
- `duration-300`

Tujuannya agar tampilan website menjadi lebih interaktif dan tidak terlalu statis.

---

# Components

Kode website dipisahkan menjadi beberapa reusable component agar struktur project lebih rapi, mudah dibaca, dan mudah dikembangkan.

Beberapa component yang digunakan:

## Navbar

File:

`src/component/navbar.tsx`

Navbar digunakan sebagai navigasi utama website.

Navbar memiliki menu:

- Home
- Skills
- About
- Projects
- Contact

Navbar juga memiliki:

- Active section indicator
- Light Mode
- Dark Mode
- Responsive navigation

Indikator aktif digunakan untuk menunjukkan section yang sedang dibuka atau dilihat oleh pengguna.

## Hero

File:

`src/component/hero.tsx`

Component Hero digunakan sebagai bagian utama halaman Home.

Hero berisi:

- Perkenalan
- Judul utama
- Deskripsi singkat
- Link atau tombol menuju bagian About
- Social media

Hero dibuat responsif agar dapat menyesuaikan tampilan desktop dan mobile.

## About

File:

`src/component/about.tsx`

Component About digunakan untuk menampilkan informasi singkat mengenai diri saya.

Bagian About pada halaman utama berisi deskripsi singkat mengenai:

- Saya sebagai Software Engineering student
- Ketertarikan terhadap programming
- Ketertarikan terhadap web development
- Proses belajar dan pengembangan kemampuan

Terdapat juga tombol:

`Selengkapnya Tentang Saya`

yang mengarahkan pengguna menuju halaman About yang lebih lengkap.

## CounterApresiasi

File:

`src/component/CounterApresiasi.tsx`

Component ini merupakan Client Component yang menggunakan `useState`.

Fungsinya adalah menyediakan tombol apresiasi yang dapat diklik oleh pengguna.

Setiap tombol diklik, jumlah apresiasi akan bertambah.

Contoh:

`0 → 1 → 2 → 3 → ...`

Fitur ini digunakan sebagai contoh penerapan interaktivitas pada website menggunakan React State.

## Badge

File:

`src/component/Badge.tsx`

Badge digunakan untuk menampilkan label kategori dan status Featured pada project.

Component ini menggunakan TypeScript interface untuk menerima props berupa text.

Contoh penggunaan:

```tsx
<Badge text="Web Development" />
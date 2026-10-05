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

## Supabase Database

Pada Module 3, project portfolio ini mulai menggunakan Supabase sebagai database untuk menyimpan data proyek.

### Table: `proyek`

| Column | Type | Description |
|---|---|---|
| `id` | int8 | Primary key, dibuat otomatis |
| `created_at` | timestamp | Waktu data dibuat |
| `judul` | text | Judul proyek |
| `deskripsi` | text | Deskripsi proyek |
| `teknologi` | text | Teknologi yang digunakan |
| `link` | text | Link proyek, dapat bernilai kosong |

Data pada tabel `proyek` ditampilkan pada halaman `/proyek` menggunakan Supabase Client.
RLS (Row Level Security) diaktifkan dan dibuat policy untuk mengizinkan akses baca data.

---

# Module 4 - Server Actions, CRUD Penuh & Proteksi Halaman Admin

Pada Module 4, project dikembangkan dengan menambahkan sistem admin untuk mengelola data project menggunakan Server Actions, Supabase Authentication, CRUD, dan proteksi halaman admin.

## Admin Authentication

Ditambahkan halaman login admin menggunakan Supabase Authentication dengan metode email dan password.

Halaman login:

`/admin/login`

Jika login berhasil, pengguna diarahkan ke halaman admin. Jika pengguna belum login dan mencoba mengakses halaman admin, pengguna akan diarahkan kembali ke halaman login.

## Admin Dashboard

Ditambahkan halaman dashboard admin sebagai tempat untuk mengelola project.

Dashboard memiliki sidebar untuk navigasi antara:

\- Dashboard
\- Kelola Proyek
\- Logout

Halaman admin juga dibuat responsif agar dapat digunakan pada desktop maupun mobile.

## CRUD Project

Pada Module 4, data project sudah dapat dikelola secara penuh melalui fitur CRUD.

### Create

Admin dapat menambahkan project baru melalui form yang tersedia.

Data yang dapat ditambahkan meliputi:

\- Judul
\- Deskripsi
\- Teknologi
\- Link
\- Category
\- Image
\- Featured

### Read

Data project dari database Supabase ditampilkan pada halaman admin dalam daftar project.

### Update

Admin dapat mengubah data project yang sudah tersimpan melalui halaman Edit.

### Delete

Admin dapat menghapus project melalui halaman Hapus.

Setelah proses CRUD dilakukan, data akan diperbarui pada database Supabase dan dapat ditampilkan kembali pada halaman portfolio.

## Server Actions

Proses Create, Update, dan Delete menggunakan Server Actions pada Next.js.

Server Actions digunakan untuk menjalankan proses perubahan data pada server dan berinteraksi dengan database Supabase.

Setiap proses perubahan data juga melakukan pengecekan pengguna yang sedang login.

## Proteksi Halaman Admin

Halaman admin dilindungi menggunakan authentication dan middleware.

File middleware:

`middleware.ts`

Proteksi diterapkan pada halaman:

`/admin/*`

Pengguna yang belum melakukan login tidak dapat mengakses halaman admin dan akan diarahkan ke:

`/admin/login`

## Supabase Row Level Security

RLS (Row Level Security) pada tabel `proyek` digunakan untuk mengatur hak akses terhadap data.

Policy yang digunakan:

\- SELECT → dapat membaca data project
\- INSERT → hanya pengguna yang sudah login
\- UPDATE → hanya pengguna yang sudah login
\- DELETE → hanya pengguna yang sudah login

Dengan RLS, proses pengelolaan data project menjadi lebih aman karena akses database dibatasi berdasarkan authentication pengguna.

## Supabase Server dan Browser Client

Untuk mendukung authentication dan interaksi dengan Supabase, project menggunakan beberapa client:

\- `lib/supabase.ts`
\- `lib/supabase-server.ts`
\- `lib/supabase-browser.ts`

Server Client digunakan untuk kebutuhan pada server, sedangkan Browser Client digunakan untuk kebutuhan pada sisi client.

## Project Table

Component `ProjectTable.tsx` digunakan untuk menampilkan daftar project pada halaman admin.

Pada desktop, project ditampilkan dalam bentuk tabel.

Pada mobile, project ditampilkan dalam bentuk card agar informasi tetap mudah dibaca tanpa perlu melakukan horizontal scrolling.

Setiap project memiliki aksi:

\- Edit
\- Hapus

## Testing

Fitur yang telah diuji pada Module 4:

\- Login admin
\- Login dengan email dan password
\- Proteksi halaman admin
\- Dashboard admin
\- Menampilkan project
\- Menambahkan project
\- Mengedit project
\- Menghapus project
\- Logout
\- Supabase RLS
\- Tampilan responsive desktop dan mobile

## Deployment

Project menggunakan GitHub sebagai repository dan Vercel sebagai platform deployment.

Repository GitHub:

`https://github.com/riskaoktafiani7065-hue/portofolio`

Website:

`https://portofolio-riska-vert.vercel.app`

## Kesimpulan Module 4

Pada Module 4, portfolio dikembangkan dengan sistem admin yang memungkinkan data project dikelola secara penuh melalui fitur CRUD.

Project juga sudah menggunakan Supabase Authentication, Server Actions, middleware untuk proteksi halaman admin, serta Row Level Security untuk mengatur akses data pada database.

---

# Module 5 - Optimasi SEO, Metadata, Open Graph, Sitemap & Performa

Pada Module 5, project portfolio dikembangkan dengan menambahkan optimasi SEO, metadata, Open Graph Image, robots.txt, sitemap.xml, serta optimasi gambar untuk meningkatkan performa dan kualitas website.

## SEO dan Metadata

Metadata digunakan untuk memberikan informasi mengenai halaman website kepada mesin pencari dan platform yang menggunakan informasi halaman tersebut.

Pada Module 5, project menggunakan Static Metadata dan Dynamic Metadata.

## Static Metadata

Static Metadata ditambahkan pada:

`src/app/layout.tsx`

Metadata yang digunakan meliputi:

- Title
- Description
- Open Graph
- Metadata Base

Title digunakan untuk menentukan judul halaman website, sedangkan description digunakan untuk memberikan deskripsi mengenai portfolio.

Metadata utama portfolio:

- Riskaa Oktafiani - Website Profil & Portfolio
- Portfolio Riskaa Oktafiani, siswi Rekayasa Perangkat Lunak yang tertarik pada web development dan teknologi.

## Dynamic Metadata

Dynamic Metadata digunakan pada halaman detail project:

`src/app/proyek/[id]/page.tsx`

Dynamic Metadata digunakan agar informasi metadata dapat menyesuaikan dengan project yang sedang dibuka.

Dengan Dynamic Metadata, setiap halaman detail project dapat memiliki title dan description yang sesuai dengan data project dari Supabase.

Contohnya, halaman:

`/proyek/my-app`

dapat memiliki metadata yang berbeda dengan halaman project lainnya.

## Open Graph Image

Project juga menggunakan Open Graph Image otomatis menggunakan:

`src/app/opengraph-image.tsx`

Open Graph Image dibuat menggunakan:

`ImageResponse` dari `next/og`

Ukuran Open Graph Image:

- Width: 1200px
- Height: 630px
- Format: PNG

Open Graph Image digunakan sebagai gambar preview ketika link website dibagikan pada platform yang mendukung Open Graph.

Desain Open Graph Image disesuaikan dengan tema portfolio menggunakan warna biru muda dan biru utama portfolio.

## Robots.txt

Project menyediakan file:

`src/app/robots.ts`

File tersebut menghasilkan:

`/robots.txt`

Robots digunakan untuk mengatur akses crawler terhadap halaman website.

Halaman admin tidak diperbolehkan untuk diakses oleh crawler dengan konfigurasi:

`/admin/`

Sitemap website juga dicantumkan pada konfigurasi robots.txt.

## Sitemap.xml

Project menyediakan sitemap melalui:

`src/app/sitemap.ts`

Sitemap menghasilkan:

`/sitemap.xml`

Sitemap dibuat secara dinamis dengan mengambil data project dari tabel `proyek` di Supabase.

URL yang terdapat pada sitemap meliputi halaman utama, halaman proyek, dan halaman detail setiap project.

Contoh URL:

- `/`
- `/proyek`
- `/proyek/my-app`
- `/proyek/jadwal-saya`
- `/proyek/management-siswa`
- `/proyek/mietime`
- `/proyek/web-berita`

Dengan sitemap dinamis, project baru yang ditambahkan ke database dapat ikut dimasukkan ke dalam sitemap.

## Optimasi Gambar

Project menggunakan `next/image` untuk menampilkan gambar.

Contoh penggunaan pada halaman detail project:

`src/app/proyek/[id]/page.tsx`

Gambar project menggunakan komponen:

`Image` dari `next/image`

Setiap gambar juga memiliki atribut `alt` yang menggunakan judul project.

Optimasi gambar digunakan untuk membantu meningkatkan performa website dan accessibility.

Project juga telah diperiksa untuk memastikan tidak terdapat penggunaan tag `<img>` biasa pada source code.

## Lighthouse

Lighthouse digunakan untuk melakukan pengecekan kualitas website.

Kategori yang diperiksa:

- Performance
- Accessibility
- Best Practices
- SEO

### Hasil Lighthouse Sebelum Optimasi

Hasil awal Lighthouse pada website production:

- Performance: 100
- Accessibility: 96
- Best Practices: 100
- SEO: 100

Hasil tersebut digunakan sebagai nilai awal sebelum optimasi Module 5.

### Hasil Lighthouse Setelah Optimasi

Hasil akhir Lighthouse akan dicatat setelah seluruh optimasi Module 5 selesai dilakukan pada website production.

- Performance: ___
- Accessibility: ___
- Best Practices: ___
- SEO: ___

## Testing Module 5

Fitur dan optimasi yang telah diuji pada Module 5:

- Static Metadata
- Dynamic Metadata
- Open Graph Image
- robots.txt
- sitemap.xml
- Dynamic sitemap dari Supabase
- next/image
- Image alt
- Lighthouse Performance
- Lighthouse Accessibility
- Lighthouse Best Practices
- Lighthouse SEO

## Deployment Module 5

Setelah perubahan Module 5 selesai, project akan di-push ke GitHub dan di-deploy menggunakan Vercel.

Production website:

`https://portofolio-riska-vert.vercel.app`

## Kesimpulan Module 5

Pada Module 5, portfolio dikembangkan dengan menambahkan optimasi SEO dan performa website.

Project telah menggunakan Static Metadata, Dynamic Metadata, Open Graph Image, robots.txt, sitemap.xml yang mengambil data project dari Supabase, serta optimasi gambar menggunakan next/image.

Lighthouse digunakan untuk membandingkan kondisi website sebelum dan sesudah optimasi pada aspek Performance, Accessibility, Best Practices, dan SEO.
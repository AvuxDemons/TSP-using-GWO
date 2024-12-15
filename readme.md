# Traveling Salesman Problem (TSP) dengan Algoritma Grey Wolf Optimizer (GWO)

Proyek ini menyelesaikan masalah **Traveling Salesman Problem (TSP)** dengan menggunakan **Grey Wolf Optimizer (GWO)**. Algoritma GWO adalah algoritma optimasi berbasis alam yang meniru pola perburuan serigala abu-abu untuk menemukan solusi optimal dalam masalah TSP.

## Deskripsi

TSP adalah masalah optimasi di mana seorang salesman harus mengunjungi sejumlah kota, dimulai dan berakhir di kota yang sama, dengan tujuan untuk meminimalkan total jarak perjalanan. Dalam proyek ini, algoritma **Grey Wolf Optimizer (GWO)** digunakan untuk mencari jalur optimal yang mengunjungi setiap kota hanya sekali dengan jarak terpendek.

### Apa itu Grey Wolf Optimizer (GWO)?

Grey Wolf Optimizer (GWO) adalah algoritma optimasi yang terinspirasi dari perilaku berburu serigala, di mana ada 4 peran utama dalam kawanan serigala:
1. **Alpha**: Pemimpin kawanan, solusi terbaik yang ditemukan.
2. **Beta**: Pembantu yang membantu dalam pencarian solusi.
3. **Delta**: Serigala lainnya yang mendukung dalam mencari solusi.

Proyek ini memodelkan masalah TSP sebagai pencarian posisi lokasi / kota yang optimal dalam ruang solusi menggunakan mekanisme pergerakan yang ditiru dari serigala.

## Fitur

* Menggunakan **Grey Wolf Optimizer (GWO)** untuk mencari solusi terbaik dari TSP.
* Mampu menangani berbagai jumlah kota (dimensi).
* Output menunjukkan jalur perjalanan yang optimal.
  

## Struktur Koordinat Kota

Pada proyek ini, koordinat lokasi / kota diatur dalam format dua dimensi (x, y) mengikuti format UTM ( Universal Transverse Mercator ), yang merepresentasikan posisi lokasi / kota di bidang koordinat kartesian. Berikut adalah penjelasan mengenai pengaturan koordinat kota:

### Format Koordinat:

* Setiap kota memiliki dua nilai koordinat: **x** dan **y**, yang mewakili posisi kota di ruang 2D.
* Koordinat ini didapatkan berdasarkan koordinat peta.

## Konfigurasi Project

### Atur Koordinat Lokasi

Koordinat disimpan pada file `fitness.js`

<img src="https://i.ibb.co.com/zrm7bFZ/code.png" width="720px" alt="coordinate" />

// ***[Lesson 1: Section Intro]***
// Cara terbaik untuk memulai Node.js adalah dengan eksplor modul sistemnya
// Modul sistem memungkinkan untuk load library eksternal, untuk memanfaatkan modul bawaan Node.js dan modul npm pihak ketiga
// termasuk library untuk terhubung ke database, membuat server web,dll
// Node.js memiliki banyak modul bawaan yang biasanya disebut modul inti (core module)


// ***[Lesson 2: importing Node.js Core Modules]***
// Fungsi [Require] digunakan untuk load modul dan mengakses isinya
// [require] adalah variabel global yang disediakan untuk semua script Node.js
const fs = require('fs') // menggunakan require untuk load module fs -> Modul bawaan untuk memanipulasi file sistem
fs.writeFileSync('notes.txt', 'I live in Indonesia') // menggunakan writeFileSync untuk menulis pesan di [notes.txt]


// ***[Lesson 3: Importing your own files]***
// selain untuk load module bawaan, [require] juga dapat digunakan untuk load file JavaScript yang sudah dibuat
// caranya dengan menggunakan [require] diikuti dengan path script yang akan diload
const checkUtils = require ('./utils.js')
checkUtils()


// ***[Lesson 4: Importing a npm modules]
// ketika menginstall Node.js, sekalian mendapat npm.
// npm adalah package manager yang mengizinkan untuk menginstall dan menggunakan npm library pihak ketiga

// [Initializing npm]
// sebelum aplikasi Node.js dapat digunakan, perlu inisialiasi npm terlebih dahulu
// caranya dengan menggunakan [npm init] pada root projek

// [installing an npm Module]
// menginstall npm dapat menggunakan command [npm install] di terminal
// menginstall validator dapat menggunakan command [npm install validator]
const validator = require('validator') //menggunakan [require] untuk load validator kemudian menggunakan fungsi [isURL] yang disediakan oleh validator untuk memeriksa apakah string tertentu berisi URL yang valid
console.log(validator.isURL('https://mead.io'))


// ***[Lesson 5: Printing in color]***
// mewarnai teks dapat menggunakan npm: chalk


// ***[Lesson 6: Global npm Modules and nodemon]***
// npm module dapat digunakan diluar script jika menginstallnya secara global

// [installing an npm Globally]
// [npm install -g nodemon]
// nodemon bergun agar tidak usah me restart aplikasi jika ada perubahan, karena otomatis mengubahnya diterminal
// cara menggunakannya adalah dengan menambahkan command [nodemon] sebbelum script yang akan di run
// contoh: nodemon app.js
// untuk stop nodemon dapat menggunakan [ctrl + c] pada terminal

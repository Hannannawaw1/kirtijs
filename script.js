//membuat array
// Tetapkan array yang diberikan sebagai constant animals
const animals = ["anjing", "kucing", "domba"];

// Print constant animals
console.log(animals);

/* Mendapatkan element array
const animals = ["anjing", "kucing", "domba"];

// Print element array pertama
console.log(animals[0]);

// Print element array ketiga
console.log(animals[2]);

*/

/* Mengupdate element array
const animals = ["anjing", "kucing", "domba"];

// Gantikan element ketiga dari array menjadi "kelinci"
animals[2] = "kelinci";

// Print array ketiga dari constant animal ke console
console.log(animals[2]);

*/

/*Iterasi dengan array
const animals = ["anjing", "kucing", "domba"];

// Gunakan loop for untuk mem-print nilai animals di console secara berurutan
for (let i = 0; i < 3; i++){
  console.log(animals[i]);
}

*/

/*Iterasi dengan array(length)
const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mem-print jumlah element di array
console.log(animals.length);

// Gunakan property length untuk mengubah kondisi dibawah
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

*/

/* Object 
// Deklarasikan constant character dan berikan object yang sudah disediakan
const character = {name : "Ninja Ken",age : 14};

// Print nilai character
console.log(character);


*/
/* Mengakses dan memperbarui nilai object 
const character = {name: "Ninja Ken", age: 14};

// Print nilai property name milik character
console.log(character.name);

// Gantikan nilai age milik character ke 20 
character.age = 20;

// Print constant character ke console
console.log(character);

*/

/* Array dalam object1 
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 1000}
];

// Print element pertama milik array characters
console.log(characters[0]);

// Print nilai milik property name dari element array character kedua 
console.log(characters[1].name);


*/

/* Array dalam object2 
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];

// Selesaikan loop for dibawah
for (let i = 0; i < characters.length;i++) {
  console.log("-------------------");
  
  // Tentukan nilai constant character
  const character = characters[i];
  
  // Print "Nama saya adalah ____"
  console.log(`Nama saya adalah ${character.name}`);
  
  // Print "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character.age} tahun`);
  
}

*/

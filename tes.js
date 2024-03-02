function SumMultiplier(arr) {
  // Menghitung jumlah semua elemen dalam array
  var sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  // Menghitung dua kali lipat jumlah elemen dalam array
  var doubleSum = sum * 2;
  console.log(doubleSum);
  // Menggunakan nested loop untuk mencari dua angka yang dapat dikalikan sehingga hasilnya lebih besar dari doubleSum
  for (var i = 0; i < arr.length; i++) {
    console.log(i);
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] > doubleSum) {
        return "true";
      }
    }
  }

  // Jika tidak ada dua angka yang memenuhi kondisi, kembalikan "false"
  return "false";
}

// Contoh pemanggilan fungsi
console.log(SumMultiplier([2, 2, 2, 2, 4, 1])); // Output: "true"

// Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    var highestCommonFactor = 0; 
    for (var i = 0; i < angka1; i++){
        //for (var j=1; j < angka2; j++)
        if (angka1 % i == angka2 % i){
          highestCommonFactor = i; 
        }
    }
    return highestCommonFactor;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1 --> CUMA INI SALAH. HASIL MALAH 6
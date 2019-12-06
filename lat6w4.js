// Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    var faktor1 = 0; 
    var faktor2 = 0; 
    var faktorStr1 = 0;
    var faktorStr2 = 0;
    var lowest = 0; 

    for (var i = 0; i <= angka; i++){
      if (angka % i === 0){
        faktor1 = i
        faktor2 = angka / i
        faktorStr1 = faktor1.toString().length
        faktorStr2 = faktor2.toString().length
      }
      var digit = faktorStr1 + faktorStr2
      //console.log(digit)

      if (lowest ===0){
        lowest = digit;
      } else if (digit < lowest){
        lowest = digit
      }
    }
    return lowest
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


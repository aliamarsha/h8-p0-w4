// Ubah Huruf

/* CARA LAMA
function ubahHuruf(kata) {
    var newKata = kata.split([]); 
    console.log(newKata);
    for (var i=0; i < newKata.length; i++){
        switch(newKata[i]){
            case 'a':
                newKata[i] = 'b';
                break; 
            case 'b':
                newKata[i] = 'c';
                break; 
            case 'c':
                newKata[i] = 'd';
                break; 
            case 'd':
                newKata[i] = 'e';
                break;
            case 'e':
                newKata[i] = 'f';
                 break; 
           case 'f':
                newKata[i] = 'g';
                 break;   
           case 'g':
                newKata[i] = 'h';
                 break;   
           case 'h':
                newKata[i] = 'i';
                 break;   
           case 'i':
                newKata[i] = 'j';
                 break;   
           case 'j':
                newKata[i] = 'k';
                 break;   
           case 'k':
                newKata[i] = 'l';
                 break;                                       
           case 'l':
                newKata[i] = 'm';
                 break;    
           case 'm':
                newKata[i] = 'n';
                 break; 
           case 'n':
                newKata[i] = 'o';
                 break; 
          case 'o':
                newKata[i] = 'p';
                 break;   
          case 'p':
                newKata[i] = 'q';
                 break; 
          case 'q':
                newKata[i] = 'r';
                 break; 
          case 'r':
                newKata[i] = 's';
                 break; 
          case 's':
                newKata[i] = 't';
                 break; 
          case 't':
                newKata[i] = 'u';
                 break; 
          case 'u':
                newKata[i] = 'v';
                 break; 
          case 'v':
                newKata[i] = 'w';
                 break; 
          case 'w':
                newKata[i] = 'x';
                 break; 
          case 'x':
                newKata[i] = 'y';
                 break; 
          case 'y':
                newKata[i] = 'x';
                 break; 
          default :
                newKata[i] = 'a';
        }
    }
    return newKata.join("");
  }
  */ 


  // CARA CEPAT
  function ubahHuruf(kata) {
     var result = "";
     var alphabet = "abcdefghijklmnopqrstuvwxyz";
     
      for (var i = 0; i < kata.length; i++){
            for (var j = 0; j < alphabet.length; j++){
                  if (kata[i] == alphabet[j] && alphabet[j] == "z"){
                        result += alphabet[0];
                  } else if (kata[i] == alphabet[j]){
                       result += alphabet[j + 1];
                 }
                 
            }
      }
      return result;
    }

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developerz')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
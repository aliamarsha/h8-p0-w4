// Mengurutkan Abjad
function urutkanAbjad(str) {
        var words = str.split(''); 
        var rearrangedArray = words.sort();
        var rearrangedWords = rearrangedArray.join("");
        return rearrangedWords;
    }
      
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
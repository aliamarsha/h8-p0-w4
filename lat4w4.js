// Mencari Modus

function cariModus(arr) {
  var penampung = []

  for (var i=0; i < arr.length; i++){
    cek = false;
    for (var j=0; j < penampung.length; j++){
      if (arr[i] == penampung[j][0]){
        penampung[j][1] += 1; 
      }
    }
    if (cek == false){
      penampung.push([arr[i], 1])
    }
  }
  var pembanding = 0; 
  var lokasiModus = 0; 

  for (var k = 0; k < penampung.length; k++){
    if (pembanding < penampung[k][1]){
      pembanding = penampung[k][1]; 
      lokasiModus = k; 
    } 
  }

  if (pembanding == 1 || penampung[lokasiModus][1] == arr.length){
    return -1
  }
  //console.log(lokasiModus)
  return penampung[lokasiModus][0];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
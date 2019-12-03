// Shopping Time

function shoppingTime(memberId, money) {
var item = ["Sepatu Stacattu", "Baju Zoro", "Baju H&N", "Sweater Uniklooh", "Casing Handphone"];
var sisaUang = money;     
var listPurchased = []; 
// var memberId = ""; 


for (var i=0; i < sisaUang; i++){
    if (sisaUang >= 1500000 ){
        listPurchased.push(item[0]);
        sisaUang -= 1500000;
    }
    else if (sisaUang >= 500000){
        listPurchased.push(item[1]);
        sisaUang -= 500000
    }
    else if (sisaUang >= 250000){
        listPurchased.push(item[2]);
        sisaUang -= 250000
    }
    else if (sisaUang >= 175000){
        listPurchased.push(item[3]);
        sisaUang -= 175000
    }
    else if (sisaUang >= 50000){
        listPurchased.push(item[4]);
        sisaUang -= 50000
    break; 
    }
    
}

if (memberId === ""){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
} else if ( money < 50000){
    return "Mohon maaf, uang tidak cukup"
} else if (memberId === undefined){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
}


var obj = {}; 


obj.memberId = memberId
obj.money = money
obj.listPurchased = listPurchased
obj.changeMoney = sisaUang

return obj
}

  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
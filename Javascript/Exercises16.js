function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(String(angka).length == 1){
        return angka
    }
    var depan = Number(String(angka)[0])
    var sisa = ''
    for(var i = 1; i < String(angka).length; i++){
        sisa += String(angka)[i]
    }
    return depan + totalDigitRekursif(Number(sisa))
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
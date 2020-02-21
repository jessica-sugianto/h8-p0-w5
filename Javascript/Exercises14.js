function changeVocals (str) {
    //code di sini
    var kamus = ['a','b','e','f','i','j','o','p','u','v','A','B','E','F','I','J','O','P','U','V']
    var hapus = 'aeiou'
    var temp = ''
    var hasil= ''
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < kamus.length; j = j + 2){
            if(str[i] == kamus[j]){
                temp += kamus[j+1]
            }
        }
        temp += str[i]
    }

    return temp
  }
  
  function reverseWord (str) {
    //code di sini
    var hasil = ''
    for(var i = str.length-1; i >= 0; i--){
        hasil += str[i]
    }
    return hasil
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var hasil = ''
    for( var i = 0; i < str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            hasil += str[i].toUpperCase()
        }else if(str[i] == str[i].toUpperCase()){
            hasil += str[i].toLowerCase()
        }
    }
    return hasil
  }
  
  function removeSpaces (str) {
    //code di sini
    var hasil = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] != ' '){
            hasil += str[i]
        }
    }
    return hasil
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var merubahVocal = changeVocals(name)
    var membalikHuruf = reverseWord(merubahVocal)
    var membalik = setLowerUpperCase(membalikHuruf)
    var hapus = removeSpaces(membalik)

    return hapus
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
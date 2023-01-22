

//forEach
function doubleValues(arr){
    let newArray = [];
    arr.forEach(function (value){
        newArray.push(value * 2);
});
return newArray;
};

 function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function (val) {
       if(val % 2 == 0) {
        newArray.push(val);
       }; 
    })
    return newArray;
 };
 
 function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function (val) {
      newArray.push(val[0] + val[val.length - 1]);
        });
    return newArray;
 };
 function addKeyAndValue(arr, key, value){
    arr.forEach(function (val) {
      val[key] = value;
        });
    return arr;
 };

 function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  //map
  function doubleValuesWithMap(arr){
    return arr.map(function(v){
        return v * 2;
    })
  };

  function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    })
  };
  function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];

    })
};
function extractFullName(arr,){
    return arr.map(function(val){
        return val.first + ' ' + val.last;
    })
};
//filter

function filterByValue(arr, key){
 return arr.filter(function(val){
    return val[key] !== undefined;
})    
};

function find(arr, value){
    return arr.filter(function(val){
     return val === value;
    })[0];
};

function findInObj(arr,key, value){
    return arr.filter(function(val){
        return val[key] === value;
    })[0];
};
function removeVowels(str){
const vowels = 'aeiou';
return str.toLowerCase()
.split("")
.filter(function(val){
    return vowels.indexOf(val) === -1;
})
.join("")
};
function doubleOddNumbers(arr){
    return arr
    .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }



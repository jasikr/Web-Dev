let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( 6.35.toFixed(20) ); // 6.34999999999999964473
alert( 1.35.toFixed(20) ); // 1.35000000000000008882

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
 
  
  alert(`Read: ${readNumber()}`);

  let i = 0;
  while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
  }


  function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );


  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );

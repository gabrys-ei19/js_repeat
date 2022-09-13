const ile = parseInt(prompt("Podaj ilość liczb w ciągu: ", "9"))
let x;
function fibonaci(x){
  if(x<2){
    return x;
  }else{
    return fibonaci(x-1)+fibonaci(x-2);
  }
}

console.log('Ciąg Fibonacciego:');
for (i = 0; i < ile; i++) {
    console.log(fibonaci(i));
}
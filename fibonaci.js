x = 0;
y = 1;
ile = parseInt(prompt("Podaj ilość liczb w ciągu: ", "9"))
console.log('Ciąg Fibonacciego:');

for (let i = 1; i <= ile; i++) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
}
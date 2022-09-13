x = 0;
y = 1;
console.log('Ciąg Fibonacciego:');

for (let i = 1; i <= 8; i++) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
}
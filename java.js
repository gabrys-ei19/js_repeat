let imie = 'sebastian';
let nazwisko = Array('G', 'A', 'B', 'R', 'Y', 'S');
imie = imie.reverse();
nazwisko = nazwisko.reverse();
let wynik = '';
function ImieNazw(tekst = '') {
  let i = 0;
  wynik = '';
  while (tekst[i] != undefined) {
    wynik += tekst[i];
    i++;
  }
  return wynik;
}
wynik = ImieNazw(imie) + ' ' + ImieNazw(nazwisko);
console.log(wynik);

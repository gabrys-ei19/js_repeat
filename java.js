imie = 'sebastian';
nazwisko = Array('G', 'A', 'B', 'R', 'Y', 'S');
imie = imie.reverse();
nazwisko = nazwisko.reverse();
wynik = '';
function ImieNazw(tekst = '') {
  i = 0;
  wynik = '';
  while (tekst[i] != undefined) {
    wynik += tekst[i];
    i++;
  }
  return wynik;
}
wynik = ImieNazw(imie) + ' ' + ImieNazw(nazwisko);
console.log(wynik);

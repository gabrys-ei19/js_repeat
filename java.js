imie = "sebastian";
nazwisko = Array('G','A','B','R','Y','S');
odwrot = "";
wynik = "";
function ImieNazw (tekst = "") {
  i = 0;
  wynik = "";
  while(tekst[i] != undefined) {
    wynik += tekst[i];
    i++
  }
  return wynik;
}
wynik = ImieNazw(imie) +" "+ImieNazw(nazwisko)
odwrot = revers(wynik)
console.log(odwrot);
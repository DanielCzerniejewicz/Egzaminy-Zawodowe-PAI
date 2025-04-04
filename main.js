function Wykonaj()
{
    let wypisz = document.getElementById("wypisane");
    let input = document.getElementById("input").value;
    wypisz.innerHTML = `Potrzeba tyle puszek : ${Math.ceil(input/4)}`;
}
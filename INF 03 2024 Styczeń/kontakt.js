function Przeslij() {
    let DANE = document.getElementById("Dane");
    let TRESC = document.getElementById("tresc");
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let zgloszenie = document.getElementById("zgloszenie").value;
    let REGULAMIN = document.getElementById("regulamin");

    if (REGULAMIN.checked) {
        DANE.innerHTML = `${imie.toUpperCase()} ${nazwisko.toUpperCase()}`;
        TRESC.innerHTML = `${zgloszenie}`;
    } else {
        DANE.innerHTML = '<font color="red">Musisz zapoznać się z regulaminem</font>';
    }
}

function Resetuj() {
    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("zgloszenie").value = "";
    document.getElementById("email").value = "";
}

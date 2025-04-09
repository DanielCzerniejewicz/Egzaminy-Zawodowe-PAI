<?php
$server = 'localhost';
$base = 'motory';
$user = 'root';
$pass = ''; 
$mysqli = new mysqli($server, $user, $pass, $base);

$query = "SELECT COUNT(wycieczki.id) AS ilosc_wycieczek FROM wycieczki";
$result = $mysqli->query($query);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $ilosc_wycieczek = $row['ilosc_wycieczek'];

    echo "<p>wpisanych wycieczek: $ilosc_wycieczek</p>";
} else {
    echo "<p>Brak wyników.</p>";
}

$mysqli->close();
?>

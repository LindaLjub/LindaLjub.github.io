<?php
//Box 3

//Skapar en funktion "box3" inom måsvingarna, som jag sedan anropar i index. 
function box3() {
    
// Skapar och tilldelar en sträng vid namn $out, som är tom. out. betyder out + något.
$out ="";     
    
// ansluta till databasen genom att anropa $mysqli i som finns i connect_db.
$mysqli=connect_db();   
  
    
// Skapar en variabel med en sql-fråga, välj alla (*) från "passagerare" i databasen, visar endast 4 stycken passagerare. Och endast de som åker ekonomiklass. 
$sql="select * from klubbmedlemmar";  
    

//Skicka frågan till databasen och lagra svaret i en vektor.
$result=$mysqli->query($sql); 
    
 
// Skapa en tabell med ett Id.  
    $out.='<table id="table_tre" class="display">';
    $out.='<thead>'; // till tabellerna, datatables.
    $out.='<tr>';
 // Överskriften i tabellen.
    $out.='<th>Förnamn:</th><th>Efternamn:</th>'; 
    $out.='</tr>'; 
    $out.='</thead>'; 
   
    
    $out.='<tbody>'; // till tabellerna, datatables.
    
// Skapar en while loop, och delar upp vektorn i rader.  
// Vektor = Samlar flera värden i en variabel.
 
while ($row=$result->fetch_array()) {
    
$out.='<tr>'; // Skapar en tabellrad

    
$out.='<td>'; // Skapar en tabellrad
$out.=$row['name']; // Lägger till "efternamn" från databasen i tabellcellen
$out.='</td>'; // avslutar tabellcellen.
    
    
$out.='<td>'; // Skapar en cell i tabellraden
$out.=$row['lastname']; // Lägger till "klass" från databasen i tabellcellen
$out.='</td>'; // avslutar tabellcellen.
    
$out.='</tr>'; // avslutar tabellraden.
     
    
}
    $out.='</tbody>';
    $out.='</table>'; // avslutar tabellen
    
 // returnerar strängen, det är det som skrivs ut på sidan. Visar i detta fall allt som är skrivet som "out.".  
    return $out; 
    
}



?>

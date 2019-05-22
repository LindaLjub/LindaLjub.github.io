<?php
//Box 2

//Skapar en funktion "box2" inom måsvingarna, som jag sedan anropar i index.  

function box2() {
    
// Skapar och tilldelar en sträng vid namn $out, som är tom. 
$out =""; 
    

 // ansluta till databasen genom att anropa $mysqli i som finns i connect_db.
$mysqli=connect_db(); 
    
 
// Skapar en variabel med en sql-fråga, välj alla (*) från "land" i databasen. 
$sql="select * from highscore order by points"; 
    
 
//skicka en förfrågan till databasen och lagra svaret i en vektor. 
 $result=$mysqli->query($sql); 
    
    
// Skapa en tabell med ett Id. 
$out.='<table id="table_two" class="display">';
$out.='<thead>';  // till tabellerna, datatables.
// Överskriften i tabellen.
$out.='<tr>';
$out.='<th>Poäng:</th><th>Förnamn:</th><th>Efternamn:</th><th>Åtgärd:</th><th>Åtgärd:</th>';
$out.='</tr>'; 
$out.='</thead>';    
         
$out.='<tbody>';  // till tabellerna, datatables.
    
// Skapar en while loop, och delar upp vektorn i rader.  
// Vektor = Samlar flera värden i en variabel. 
 
while ($row=$result->fetch_array()) {
    
    $out.='<tr>'; // Skapar en tabellrad
    
    $out.='<td>'; // Skapar en cell i tabellraden
    $out.=$row['points']; // Lägger till "airport" från databasen i tabellcellen
    $out.='</td>'; // avslutar tabellcellen.
    
    $out.='<td>'; // Skapar en tabellrad
    $out.=$row['name']; // Lägger till "land" från databasen i tabellcellen
    $out.='</td>'; // avslutar tabellcellen.
    
    $out.='<td>'; // Skapar en tabellrad
    $out.=$row['lastname']; // Lägger till "land" från databasen i tabellcellen
    $out.='</td>'; // avslutar tabellcellen.
    
    
    // Skapar en länk till redigera.php, skapar ett id "redair" och ett id "red" ex. redair=".$row['airport']. 
    
    $out.='<td>'; // Skapar en tabellrad
    $out.="<a href='redigera.php?redpoints=".$row['points']."&redname=".$row['name']."'>Redigera</a>";
    $out.='</td>'; // avslutar tabellcellen
    
    // Skapar en länk till delete.php, skapar ett id "del", del=".$row['airport'].
    
    $out.='<td>'; // Skapar en tabellrad
    //skapar ett id med namn, del. Skapar en länk till delete.
    $out.="<a href='delete.php?del=".$row['name']."'>Radera</a>";
    $out.='</td>'; // avslutar tabellcellen
    
}
   
  $out.='</tbody>';    
  $out.='</table>';  // avslutar tabellen
                                              
 //Skapar en länk "lägg till land", till en ny sida "create.php". Med en radbrytning.
$out.="<br/><a href='create.php'>[ Lägg till highscore ]</a>"; 
   
 //Skapar en länk till index.php.
$out.="<a href='index.php'>[ Uppdatera sidan ]</a>"; 
    
    
// Returnerar strängen $out, detta skrivs alltså ut. 
return $out; 
    
    
    }
    ?>


















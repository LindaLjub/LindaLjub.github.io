<?php
//Box 4

//Skapar en funktion "search" inom måsvingarna, som jag sedan anropar i index.
function box4(){

?>

<!-- Ett formulär med textruta och en skicka knapp, med id "varde" och submit-knappen har id "submit". -->
  
<form action="index.php" method="get"> Ange Klubb-Id:
    <br>
    <br><input type="text" name="varde"/> 
    <br>
    <br>
        <input type="submit" id="submit" name="submit"> 
</form>      

<?php
    
 }
?>


 <?php 

//Skapar en funktion "box4" inom måsvingarna, som jag sedan anropar i index.
     
function search(){
    
    
    
    
  // Skapar och tilldelar en sträng vid namn $out, som är tom. out. betyder out + något.
    $text ="";
     
// ansluta till databasen genom att anropa $mysqli i som finns i connect_db. 
$mysqli=connect_db(); 

 //Hämtar in värden från varde, alltså från textrutan i formuläret.  
$bokningsreferens = $_GET['varde'];
      
       
// Skapar en variabel med en sql-fråga, Välj alla från passagerare, skapar en inner join för att koppla ihop två tabeller. 
    
 $sql="SELECT * FROM klubbmedlemmar INNER JOIN kontaktuppgifter ON kontaktuppgifter.personid=klubbmedlemmar.id WHERE kontaktuppgifter.klubbid= $bokningsreferens";
       
  
    

//Skicka frågan till databasen och lagra svaret i en vektor.
$result=$mysqli->query($sql);   
    
    
    // skapa en tabell
    $text.='<table>';
    $text.='<tr>';
     // Rubrikerna till tabellen.
    $text.='<br><th>Förnamn:</th><th>Efternamn:</th><th>Id:</th>';
    $text.='</tr>';
    
    
 
        
     // Skapar en while loop, och delar upp vektorn i rader.  
    // Vektor = Samlar flera värden i en variabel. 
    
while ($row=$result->fetch_array()) {
    

    $text.='<tr>'; // tabellrad
    
    $text.='<td>'; // en cell i tabellraden
    $text.=$row['name']; // lägger till förnamn i tabellcellen
    $text.='</td>'; // avslutar tabellcellen.
    
    $text.='<td>'; // en cell i tabellraden
    $text.=$row['lastname']; // lägger till efternamn i tabellcellen
    $text.='</td>'; // avslutar tabellcellen.
     
    $text.='<td>'; // en cell i tabellraden
    $text.=$row['id']; // lägger till passagerarid i tabellcellen
    $text.='</td>'; // avslutar tabellcellen.
   
    
    $text.='</tr>'; // avslutar tabellraden
        
    }
    

    $text.='</table>'; // avslutar tabellen
    
    
    
    
    
// returnerar strängen, det är det som skrivs ut på sidan.
    return $text;  
    
     
    
}
   

?>









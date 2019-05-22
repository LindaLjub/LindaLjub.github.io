<?php
//Box 1

//Skapar en funktion "box1" inom måsvingarna, som jag sedan anropar i index.  
function box1() {
    
    // Skapar och tilldelar en sträng vid namn $out, som är tom. out. betyder out + något.
    $out ="";
    
    
    // ansluta till databasen genom att anropa connect_db. 
    $mysqli=connect_db(); 
    
    
    // Skapar en variabel med en sql-fråga, Välj alla (*) från "avgang" i databasen, sorterat efter tid, endast 4 stycken, och börja på datum 2017-09-20.
    
    $sql="select * from highscorevuxna order by points DESC"; 
    
    
    //ASC - DESC
    
    
    //Skicka frågan till databasen och lagra svaret i en vektor.
    $result=$mysqli->query($sql); 
    

    // skapa en tabell med ett Id. 
    $out.='<table id="table_id" class="display">';
    $out.='<thead>'; // till tabellerna, datatables.
    $out.='<tr>';
    // Rubrikerna till tabellen.
    $out.='<th>Poäng:</th><th>Förnamn:</th><th>Efternamn:</th><th>Id:</th>';
    $out.='</tr>';
    $out.='</thead>';
    
     
    $out.='<tbody>'; // till tabellerna, datatables.
    
    // Skapar en while loop, och delar upp vektorn i rader.  
    // Vektor = Samlar flera värden i en variabel. 
    
    while ($row=$result->fetch_array()) {
        
        $out.='<tr>'; // tabellrad
        
        $out.='<td>'; // en cell i tabellraden
        $out.=$row['points']; // lägger till points i tabellcellen
        $out.='</td>'; // avslutar tabellcellen.
        
        $out.='<td>'; // en cell i tabellraden
        $out.=$row['name']; // lägger till name i tabellcellen
        $out.='</td>'; // avslutar tabellcellen.
        
        $out.='<td>'; // en cell i tabellraden
        $out.=$row['lastname']; // lägger till lastname i tabellcellen
        $out.='</td>'; // avslutar tabellcellen.
        
        $out.='<td>'; // en cell i tabellraden
        $out.=$row['id']; // lägger till id i tabellcellen
        $out.='</td>'; // avslutar tabellcellen.
       
        
        $out.='</tr>'; // avslutar tabellraden
        
    }
    
    $out.='</tbody>';
    $out.='</table>'; // avslutar tabellen
    
  
    
    // returnerar strängen, det är det som skrivs ut på sidan.
    return $out; 

    
//här slutar funktionen.    
}






?>


<!DOCTYPE html>
<html lang="sv">
  <head>
      
      <meta charset="utf-8">
      <!-- Gör att webbplatsen fungerar för mobil -->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!--kopplar css-fil -->
        <link rel="stylesheet" href="individuell.css">
      <!--Sidans titel -->
      <title>Ta bort</title>  
  </head>

<body>
<?php

                               
// Ansluter till databasen, genom att anropa db_connect.php. 
include_once "db_connect.php";

// Ansluter till databasen.  
 $mysqli=connect_db();       


// Hämtar in värden från "del" som finns i länken i box2. Skapar en variabel $id. 
$id = $_GET['del'];         
             


 // Skapar en variabel med en sql-fråga, Ta bort värden från databasen, där id "del". 
$sql="DELETE from highscore WHERE name='$id'"; 
       
             
             
//Skicka frågan till databasen och lagra svaret i en vektor.
$result=$mysqli->query($sql);        
                   
            
 ?>

<!-- Länkt till index.php -->
          
  <a href="index.php">Tillbaka till startsidan</a> 
<br><br>
    
    <!-- Validera Html och Css, direkt genom länken -->
   
<a href="http://validator.w3.org/check/referer">[ Validera HTML ]</a>
<a href="http://jigsaw.w3.org/css-validator/check/referer"> [ Validera CSS ]</a>


</body>  
</html>
<!DOCTYPE html>
<html lang="sv">
  <head>
  
    <meta charset="utf-8">
      <!-- Gör att webbplatsen fungerar för mobil -->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!--kopplar css-fil -->
        <link rel="stylesheet" href="individuell.css">
      <!--Sidans titel -->
      <title>Lägg till</title>
      
    </head>
    <body>
        
<!---funktionen som hämtas när man trycker på lägg till. --> 
<?php

// Ansluter till databasen, genom att anropa db_connect.php. 
include_once "db_connect.php";

// Ansluter till databasen, genom att anropa connect_db. 
$mysqli=connect_db();  

?>

<!-- Rubrik till forulär --> 
 <h3>Lägg till highscore</h3>

<!-- Ett formulär med 2 textruta och en skicka knapp, med id "name och points" och submit-knappen har id "create_done". -->

    <form method="get">  
   Poäng: <br><input type="text" name="points"/><br>
   Förnamn: <br><input type="text" name="name"/> <br>
   Efternamn: <br><input type="text" name="lastname"/> 
    <br><br>
        
    <!-- knapp "lägg till" -->
    <button type="submit" id="create_done" name="create_done">Lägg till</button>
  </form>             
     


        <!-- Länk till index.php -->
 <br><a href="index.php"> Tillbaka till startsidan</a>
<br><br>
  <!-- Validera Html och Css, direkt genom länken -->  
<a href="http://validator.w3.org/check/referer">[ Validera HTML ]</a>
<a href="http://jigsaw.w3.org/css-validator/check/referer"> [ Validera CSS ]</a>
  

    
<?php
        
// Isset - När man trycker på knappen "lägg till" (create_done) sker detta.
 if(isset($_GET['create_done']))
    { 
        
          
  //Hämtar in värden från formuläret.   
$points = $_GET['points'];  
$name = $_GET['name'];     
$lastname = $_GET['lastname'];
        
 // Skapar en variabel med en sql-fråga, Lägg till i "highscore", under points, name, lastname. Dom värden från formuläret.   
 $sql="INSERT INTO highscore (points, name, lastname) VALUES ('$points', '$name', '$lastname')";     
        
        
 //Skicka frågan till databasen och lagra svaret i en vektor.
$result=$mysqli->query($sql);        
                   
//Text som syns när du tryck på knappen.
   
  ?> 
<script>
    
    alert("Ditt higscore har nu lagts till!")
       </script>
             
     
 <?php         
        
    
    }             
 
?>
    
    </body>
</html>
 


<!DOCTYPE html>
<html lang="sv">
  <head>
  
    <meta charset="utf-8">
      <!-- Gör att webbplatsen fungerar för mobil -->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!--kopplar css-fil -->
        <link rel="stylesheet" href="individuell.css">
      <!--Sidans titel -->
      <title>Redigera</title>
      
    </head>
    <body>


<?php

// Ansluter till databasen, genom att anropa db_connect.php. 
include_once "db_connect.php";

// Ansluter till databasen.  
 $mysqli=connect_db();

//Hämtar in (red,redair) från länken och skapar skapar två variabler. 
//Variablerna från formuläret kopplas till dom skapade variablerna. 

$editpoints = $_GET['redpoints'];
$points = $editpoints; 

$editname = $_GET['redname'];
$name = $editname;

?>

    
 <h3>Redigera poäng:</h3> <!-- Rubrik till forulär --> 

     
<!-- Ett formulär med två textrutor och en skicka knapp, med två olika id och submit-knappen har id "editinfo". Skriver ut vilket land du vill redigera -->     
        
<form method="get"> 
Ny poäng: <br>
<input type="text" name="redigerapoints" value="<?php echo $points; ?>">
<br>   
    
<!-- Denna är gömd för att motverka förvirring -->

<input type="hidden" name="redigeranamn" value="<?php echo $name; ?>"> 

<br>
<button type="submit" id="editinfo" name="editinfo"> Redigera </button>
<br><br>
</form> 

        
        

<?php 
    
// Isset - När man trycker på knappen "redigera" (editinfo) sker detta.
    
 if(isset($_GET['editinfo']))
    {
 
// Ansluter till databasen.
include_once "db_connect.php";
$mysqli=connect_db();
    
  
//Hämtar in värden från formulär "redigera land", skapar två variabler.   
$name2 = $_GET['redigeranamn'];
$points2 = $_GET['redigerapoints'];  
  
     


 // Skapar en variabel med en sql-fråga, uppdatera information. Använder mig av de två variabler som jag skapat här ovanför. Specificerar tex, kolumnen "land" blir formulärets "redigeraland".     
 $sql="UPDATE highscore SET points='$points2' WHERE name='$name2'";      
    
  
//Skicka frågan till databasen och lagra svaret i en vektor. 
$result=$mysqli->query($sql);      
    
//Text som syns när du tryck på knappen.
   
  ?> 
<script>
    
    alert("Din ändring har nu blivit utförd.")
       </script>
             
     
 <?php    
     
}

 ?>       


  
<!-- Länk till startsida -->
    
<a href="index.php">Tillbaka till startsidan.</a>
<br><br>
  <!-- Validera Html och Css, direkt genom länken -->  
<a href="http://validator.w3.org/check/referer">[ Validera HTML ]</a>
<a href="http://jigsaw.w3.org/css-validator/check/referer"> [ Validera CSS ]</a>
        
</body>
</html>
    
<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
		<!--
		<link rel="stylesheet" href="sendmessage.css"
		-->
		<title>Sendmessage script v.1.1</title>
	</head>

	<body>
<?php
//
        /*
        // // // // // // // // // // // // // // // // // //
        // Ursprungligt Script från w3schools.com m.fl. Reviderat: 2016-09-08 /Ryan Dias
        //
        // Anpassa genom att här nedanför byta till din egen e-postadress och byta ut länken till din webbsida
        // Scriptet använder attributet name så du måste tagga några av dina fält som
        // name="email", name="subject", name="from", name="submit"  för att det ska fungera som tänkt
        // --- OM du använder scriptet från mifs kan det vara svårt att få mailet att komma fram till din studentmail
        // välj i så fall en annan mottagaradress ---
        //
        // För att referera till detta skript från ditt formulär ska du lägga till action="form15.php" (som attribut="värde") i din form-tagg
        //
        // // // // // // // // // // // // // // // // // //
        */

// Här anger du din epostadress dit scriptet skall skicka meddelandet.
/********************************************************************************************************************************************************/

$sendto='linda.lindgr3n@hotmail.com';
$url='http://home.mi.sh.se/~sh17hp0755/pages/formular';

/*********************************************************************************************************************************************************/

/* Här nedan skall du inte ändra något */

function spamcheck($field)
  {
  // Sanitize e-mail address
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
  // Validate e-mail address
  if(filter_var($field, FILTER_VALIDATE_EMAIL))
    {
    return TRUE;
    }
  else
    {
    return FALSE;
    }
  }
?>


<?php
// display form if user has not clicked submit
if (!isset($_POST["submit"]))
  {
  ?>
   Error: Submit-taggen i ditt formulär är felaktigt eller döpt fel. Se instruktionen.

  <?php
  }
else
  // the user has submitted the form
  {
  // Check if the input fields is filled out correct as instruction
  if (!isset($_POST['email'])){ echo "Error: Formuläret saknar input-tagg med namnet <strong>email</strong>. En input-tagg med namnet <strong>email</strong> är obligatoriskt i formuläret.<br>";}
  if (!isset($_POST['from'])){ echo "Error: Formuläret saknar input-tagg med namnet <strong>from</strong>. En input-tagg med namnet <strong>from</strong> är obligatoriskt i formuläret.<br>";}
  if (!isset($_POST['subject'])){ echo "Error: Formuläret saknar input-tagg med namnet <strong>subject</strong>. En input-tagg med namnet <strong>subject</strong> är obligatoriskt i formuläret.<br>";}
  if (isset($_POST["email"]))
    {
    // Check if "from" email address is valid
    $mailcheck = spamcheck($_POST["email"]);
    if ($mailcheck==FALSE)
      {
      echo "Error: Formulärinmatning. Epostadressen har skrivits in felaktigt i formuläret";
      }
    else
      {
      $from = $_POST["from"]; // sender
      $subject = $_POST["subject"];
      $email = $_POST["email"];




	   function build_message($request_input){if(!isset($message_output))
	   {$message_output ="";}if(!is_array($request_input))
	   {$message_output = $request_input;}
	   else{foreach($request_input as $key => $value)
	   {if(!empty($value)){if(!is_numeric($key))
	   {$message_output .= str_replace("_"," ",ucfirst($key)).": ".build_message($value).PHP_EOL.PHP_EOL;}
	   else{$message_output .= build_message($value).", ";}}}}return rtrim($message_output,", ");}

    $message = build_message($_REQUEST);


      // message lines should not exceed 70 characters (PHP rule), so wrap it
      $message = wordwrap($message, 70);
      // send mail
      mail($sendto,$subject,$message, "From: $from\n");
	  echo "<h1>Tack för ditt mail!</h1>";
	  echo "<br>Med vänliga hälsningar";
      echo "<br>Linda Lindgren";
	  echo "<br>";
	  echo "";
	  echo "";
	  echo "";
	  echo "";
	  echo "";

        echo "<p><a href='http://home.mi.sh.se/~sh17hp0755/'>-->Tillbaka till start</a></p>";
      }
    }
  }
?>
</body>
<html>

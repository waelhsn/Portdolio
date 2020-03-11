<!DOCTYPE html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="stylePHP.css">
	 
</head>
<html>
<body>
<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['message'];
		$to='wael.cbf@gmail.com';
		$subject='Mail From My Site';
		$message="Name: ".$name."\n"."Says the folowing: "."\n\n".$msg;
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
			echo " 
			<h1>Sent Successfully!<h1> <br> <p> Thank you"." ".$name.", Wael will contact you shortly.</p>
			</body> ";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
</body>
</html>

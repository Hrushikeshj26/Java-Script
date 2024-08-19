<html >
<head>
<title>Student Registration</title>
</head>
<body>
<h2>Student Registration</h2>
<?php
	$sname=$_POST['sname'];
	$rno=$_POST['rno'];
	if(empty($sname))
	{
		die('ERROR: Please provide your name.');
	}
	if(empty($rno))
	{
		die('ERROR: Please provide your roll number.');
	}
	echo "Register successfully";
?>
</body>
</html>
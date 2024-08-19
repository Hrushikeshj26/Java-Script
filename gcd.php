<?php
	function getGCD($a, $b)
	{
		if ($b == 0)
		{
			return $a;
		}
		else
		{
			return getGCD($b, $a % $b);
		}
	}
	function getLCM($a, $b)
	{
		return ($a * $b) / getGCD($a, $b);
	}
?>
<html>
<head>
<title>Find GCD and LCM</title>
</head>
<body>
<h4>GCD and LCM of two numbers</h4>
<?php
	if (!isset($_POST['submit']))
	{
	?>
	<form method="post" action="gcd.php">
	Enter two integers: <br />
	<input type="text" name="num_1" size="3" />
	<p>
	<input type="text" name="num_2" size="3" />
	<p>
	<input type="submit" name="submit" value="Submit" />
	</form>
	<?php
	}
	else
	{
	$num1 = (int)$_POST['num_1'];
	$num2 = (int)$_POST['num_2'];
	echo "You entered: $num1, $num2";
	echo "<br />";
	echo "The GCD of ($num1, $num2) is: " . getGCD($num1, $num2);
	echo "<br />";
	echo "The LCM of ($num1, $num2) is: " . getLCM($num1, $num2);
	}
?>
</body>
</html>
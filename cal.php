<html>
<head>
<title>Simple calculator program in php</title>
</head>
<?php
	if(!isset($_POST['operator']))
	{
		?>
		<?php
	}
	else
	{
		$first_num=$_POST['first_num'];
		$second_num=$_POST['second_num'];
		$operator=$_POST['operator'];
		$result=' ';
		if(is_numeric($first_num)&& is_numeric($second_num))
		{
			switch($operator)
			{
				case"add":$result=$first_num+$second_num;
				break;
				case"substract":$result=$first_num-$second_num;
				break;
				case"multiply":$result=$first_num*$second_num;
				break;
				case"divide":$result=$first_num/$second_num;
				break;
			}
		}
	}
?>
<body>
<h1>simple calculator program</h1>
<form method="post" action="cal.php">
	<p>
	<input type="number" name="first_num" value="<?php echo $first_num; ?>"/>
	<b>first number</b>
	</p>
	<p>
	<input type="number" name="second_num" value="<?php echo $second_num; ?>"/>
	<b>second number</b>
	</p>
	<p>
	<input type="number" name="result" value="<?php echo $result; ?>"/>
	<b>result</b>
	</p>
	<input type="submit" name="operator" value="add"/>
	<input type="submit" name="operator" value="substract"/>
	<input type="submit" name="operator" value="multiply"/>
	<input type="submit" name="operator" value="divide"/>
</form>
</body>
</html>

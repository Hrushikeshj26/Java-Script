<html>
<head>
<title>Login Form</title>
</head>
<body>
	<h2>Login Form</h2>
	<?php
		if(!isset($_POST['submit']))
		{
	?>
	<form method="post" action="Database.php">
		Username:<br/>
		<input type="text" name="username"/>
		<p>
		Password:<br/>
		<input type="password" name="password"/>
		<p>
		<input type="submit" name="submit" vlaue="log In"/>
	</form>
	<?php
		}
		else
		{
			$username = $_POST['username'];
			$password = $_POST['password'];
			
			if(empty($username))
			{
				die('ERROR: Please enter your username');
			}
			if(empty($password))
			{
				die('ERROR: Please enter your password');
			}
			try
			{
				$pdo = new PDO('mysql:host=localhost;dbname=login', 'root', '');
			}
			catch(PDOException $e)
			{
				 die('ERROR: Could not connect: '.$e->getMessage());
			}
			$user = $pdo->quote($username);
			
			$sql = "SELECT username,password FROM users WHERE username=$user";
			if($result = $pdo->query($sql))
			{
				$row = $result->fetch();
				if($row[0]==$username)
				{
					if($password==$row[1])
					{
						echo 'Your Login Successfully';
					}
					else
					{
						echo 'You entered incorrect Password';
					}
				}
				else
				{
					echo 'You enterd incorrect username';
				}	
			}
			else
			{
				echo 'ERROR: Could not execute $sql.'.print_r($pdo->errorInfo());
			}		
			unset($pdo);
		}
	?>		
</body>
</html>
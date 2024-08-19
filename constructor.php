<?php
	class myclass
	{
		function __construct()
		{
			echo "Its a User-defined Constructor <br>";
		}
		function __destruct()
		{
			echo "object is destroyed <br>";
		}
	}
	$obj1=new myclass();
	$obj2=new myclass();
?>
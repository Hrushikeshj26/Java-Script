<?php
	date_default_timezone_set("Asia/kolkata");
	$hours= date('H');
	if($hours >=0 && $hours <12)
	{
	 echo 'Good morning';
	}
	else if($hours >=12 && $hours <16)
	{
	 echo 'Good afternoon';
	}
	else if($hours >=16 && $hours <20)
	{
	 echo 'Good evening';
	}
	else
	{
	 echo 'Good night';
	}
?>

<?php
	$input= array( 15, 6, 0, 27, -4, -18, 2, 17);
	echo " Smallest element in given array is " .min($input)."<br>";
	echo " Largest element in given array is " .max($input)."<br>";
	
	$asc=$input;
	sort($asc);
	echo " Sorted elements in Ascending order are:";
	for($i=0; $i<count($asc); $i++)
	echo " ".$asc[$i];
	echo "<br>";
	
	$dsc=$input;
	rsort($dsc);
	echo " Sorted elements in Descending order are:";
	for($i=0;$i<count($dsc);$i++)
	echo " ".$dsc[$i];
	echo "<br>";
	
	$rev=array_reverse($input);
	echo " Reverse elements are:";
	for($i=0;$i<count($rev);$i++)
	echo " ".$rev[$i];
	echo "<br>";
	
	$random=$input;
	shuffle($random);
	echo " Shuffled elements are:";
	for($i=0;$i<count($random);$i++)
	echo " ".$random[$i];
	echo "<br>";
?>
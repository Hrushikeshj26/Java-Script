<?php
$start = 17;
$end=139;
$total =0;
echo "Prime numbers from $start to $end are <br>";
while ($start <= $end )
{
	$count=0;
	for ( $i=2; $i<=$start/2; $i++)
	{
		if (($start%$i)==0)
		{
			$count++;
			break;
		}
	}
	if ($count==0)
	{
		echo "$start ";
		$total++;
	}
	$start++;
}
echo "<br>Total prime numbers are $total";
?>

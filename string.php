<?php
$str1="Welcome to BCA";
echo "String is ".$str1."<br>";
echo " Length of string is ".strlen($str1)."<br>";
echo " String in reverse order is ".strrev($str1)."<br>";
echo " String in lower case ".strtolower($str1)."<br>";
echo " String in upper case ".strtoupper($str1)."<br>";
echo " Total words present in String are ".str_word_count($str1)."<br>";
echo " substring of String is ".substr($str1,3,7)."<br>";
?>
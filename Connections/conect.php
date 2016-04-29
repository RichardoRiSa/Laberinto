<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_tucodigo = "localhost";
$database_tucodigo = "laberinto";
$username_tucodigo = "root";
$password_tucodigo = "RicarDo91";
$tucodigo = mysql_pconnect($hostname_tucodigo, $username_tucodigo, $password_tucodigo) or trigger_error(mysql_error(),E_USER_ERROR); 

?>
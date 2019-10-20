<?php
//the variables
$SERVER = 'localhost';
$USER = 'root';
$PASSWORD = 'usbw';
$DATABASE = 'email_subscriptions';
$url = '../';
$url_repeat = '../';

//_dbx is the connection variable
$_dbx = new mysqli ($SERVER,$USER,$PASSWORD);

//Checking Connection
if ($_dbx->connect_error){
 echo "Connection not detected".$_dbx->connect_error;
}

//Create the database
$database_sql = "CREATE DATABASE IF NOT EXISTS $DATABASE";
if ($_dbx->query($database_sql) === FALSE){
  return true;
}

$table_sql = "CREATE TABLE IF NOT EXISTS $DATABASE.emails(ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, EMAIL VARCHAR(30) NOT NULL)";
if ($_dbx->query($table_sql) === FALSE){
  echo "Table not created: ".$_dbx->error;
}

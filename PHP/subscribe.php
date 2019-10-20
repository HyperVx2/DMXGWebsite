<?php
SESSION_START();
include "db_config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
  $email = $_POST['email'];

  $result = mysqli_query($_dbx, "SELECT * FROM $DATABASE.emails WHERE email='$email'");
  $num_rows = mysqli_num_rows($result);

  // Double entry
  if ($num_rows) {
    header("location: $url_repeat");//Takes you to your specified url
  }
  // New entry
  if (!$num_rows) {
    $table_input = "INSERT INTO $DATABASE.emails(ID, EMAIL) VALUES (NULL, '$email')";
    if ($_dbx->query($table_input) === TRUE){
      header("location: $url");//Takes you to your specified url
    }else{
      echo "Unable to record".$_dbx->error;
    }
  }
}
$_dbx->close();

<!-- <?php
//Validating name, email and message

// First we define variables and set to empty value
$nameErr = $emailErr = $messageErr = "";
$name = $email = $message = "";

if
($_SERVER["REQUEST_METHOD"] == "POST") {
  $nameErr = "Name is required"; 
} else {
  $name = input($_POST["name"]);
  // check if name only containe letters and white space 
  if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
    $nameErr = "Only letters and and white space allowed";
  }
}

if (empty($_POST["email"])) {
  $emailerr = "Email is required";
} else {
  $email = process_input($_POST["email"]);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailErr = "Invalid email format";
  }
}

if (empty($_POST["message"])) {
  $messageErr = "Message is required";
} else {
  $message = test_input($_POST["message"]);
}
?> 


<?php  
  if (isset($_POST['email'])) {

    //Email information
    $admin_email = "website email";
    $name = $_POST['name'];
    $phone = $_POST['email'];
    $message = $_POST['message'];

    //send email
    mail($admin_email, "New Form Submission", $message . '-' . $phone, "from:" . $email)

    header('Location: http://edgeledger.net/success.html');
  }
?>-->
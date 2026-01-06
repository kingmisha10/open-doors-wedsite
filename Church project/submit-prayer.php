<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "yourchurch@email.com"; // CHANGE THIS
    $subject = "New Prayer Request - Open Doors Assembly";

    $message = "
    Name: {$_POST['first_name']} {$_POST['last_name']}
    Email: {$_POST['email']}
    Address: {$_POST['address']}
    City: {$_POST['city']}
    Country: {$_POST['country']}
    Subject: {$_POST['subject']}

    Prayer Request:
    {$_POST['prayer']}
    ";

    $headers = "From: Prayer Form <no-reply@opendoorsassembly.com>";

    mail($to, $subject, $message, $headers);

    echo "Prayer request submitted successfully.";
}
?>
<?php

$imageLink = $_POST['firstParam'];

$to = "mannka@mnstate.edu";
$subject = "Submission From the Fargo Project: Design Your Park";
$message = '
<html>
<head>
<title>HTML email</title>
</head>
<body>
<h1>You Have a New Submission!</h1>
<p>Someone submitted a park design for the Fargo Project. See their design by clicking on the link below.</p>
<p><a href="';

$message .= $imageLink;

$message .= '">See the design &gt;&gt;</a></p>
</body>
</html>
';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <mannka@mnstate.edu>' . "\r\n";

mail($to,$subject,$message,$headers);

echo "email sent";

?>

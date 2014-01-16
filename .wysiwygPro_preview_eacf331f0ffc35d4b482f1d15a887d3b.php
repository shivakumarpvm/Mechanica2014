<?php
if ($_GET['randomId'] != "p5U4DyLosOMOBhp4e_hpYVbinjosRrdUYufcqyh2nniy5Q4_9oJ6DeiXqTt0DKpH") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  

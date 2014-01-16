<?php
if ($_GET['randomId'] != "UPw34iE2bBa_dvH4pj_jtAoxWMUvaIl39Bd8iaxiPRtqvUDQC8CHkP6nEf8tpeLQ") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  

<?php
    include 'dbconnect.php';
    $sql = "select username, terminalName, ip, loginTime, idleTime, allProcessesDuration, currentProcessDuration, currentProcessName from w";
    $result = mysqli_query($connection, $sql);
    $rows = array();
    if (mysqli_num_rows($result) > 0) {
        $data   =   mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data);
        mysqli_free_result($result);
    }
    
?>

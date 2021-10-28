$(document).ready(function() {
    $(document).on("click", "#homeBtn", function() {
        $("#content").empty();
        $("#content").append("<h1>Hello!</h1>");
        $("#content").append("<h3>This is a webpage for observing the behaviour of a linux server and the applications within it. You can select any from the options above and see the corresponding details.</h3>");
        $("#content").append("<h3>The tables are updated every 10 minutes at the :00, :10, ..., :50 marks. Make sure to refresh if you want to see updated data.</h3>")
    });

    $(document).on("click", "#psBtn", function() {
        $("#content").empty();
        $.get("backend/getProcesses.php", function(data, status) {
            var trHTML = '<table>' ;
            trHTML += 
                '<tr><th>Username</th>' +
                '<th>Process Id</th>' + 
                '<th>Parent Process Id</th>' +
                '<th>CPU Usage</th>' + 
                '<th>Starting Time</th>' + 
                '<th>Terminal Name</th>' +
                '<th>CPU Time</th>' +
                '<th>Process Name</th>' + 
                '</tr>';

            var obj = JSON.parse(data);

            for (var key in obj) {
                var item = obj[key];
                trHTML += 
                '<tr><td>' + item.userName +
                '</td><td>' + item.processId +
                '</td><td>' + item.parentProcessId +
                '</td><td>' + item.cpuUsage +
                '</td><td>' + item.startingTime +
                '</td><td>' + item.terminalName +
                '</td><td>' + item.cpuTime +
                '</td><td>' + item.processName +
                '</td></tr>';
            }
            trHTML += '</table>';
            $("#content").append(trHTML);
        });
    });        

    $(document).on("click", "#dfBtn", function() {
        $("#content").empty();
        $.get("backend/getDiskUsage.php", function(data, status) {
            var trHTML = '<table>' ;
            trHTML += 
                '<tr><th>Filesystem Name</th>' +
                '<th>Total Size</th>' + 
                '<th>Used Space</th>' +
                '<th>Available Space</th>' + 
                '<th>Use Percent</th>' + 
                '<th>Mounted On Path</th>' +
                '</tr>';

            var obj = JSON.parse(data);

            for (var key in obj) {
                var item = obj[key];
                trHTML += 
                '<tr><td>' + item.filesystemName +
                '</td><td>' + item.totalSize +
                '</td><td>' + item.usedSpace +
                '</td><td>' + item.availableSpace +
                '</td><td>' + item.usePercent +
                '</td><td>' + item.mountedOnPath +
                '</td></tr>';
            }
            trHTML += '</table>';
            $("#content").append(trHTML);
        });
    });

    $(document).on("click", "#wBtn", function() {
        $("#content").empty();
        $.get("backend/getLoggedUsers.php", function(data, status) {
            var trHTML = '<table>' ;
            trHTML += 
                '<tr><th>Username</th>' +
                '<th>Terminal Name</th>' + 
                '<th>IP</th>' +
                '<th>Login Time</th>' + 
                '<th>Idle Time</th>' + 
                '<th>All Processes Duration</th>' +
                '<th>Current Process Duration</th>' +
                '<th>Current Process Name</th>' + 
                '</tr>';

            var obj = JSON.parse(data);

            for (var key in obj) {
                var item = obj[key];
                trHTML += 
                '<tr><td>' + item.username +
                '</td><td>' + item.terminalName +
                '</td><td>' + item.ip +
                '</td><td>' + item.loginTime +
                '</td><td>' + item.idleTime +
                '</td><td>' + item.allProcessesDuration +
                '</td><td>' + item.currentProcessDuration +
                '</td><td>' + item.currentProcessName +
                '</td></tr>';
            }
            trHTML += '</table>';
            $("#content").append(trHTML);
        });
    });

    $(document).on("click", "#histBtn", function() {
        $("#content").empty();
        $.get("backend/getCommandHistory.php", function(data, status) {
            var trHTML = '<table>' ;
            trHTML += 
                '<tr><th>Index</th>' +
                '<th>Command Name</th>' + 
                '</tr>';

            var obj = JSON.parse(data);

            for (var key in obj) {
                var item = obj[key];
                trHTML += 
                '<tr><td>' + item.cmdId +
                '</td><td>' + item.commandName +
                '</td></tr>';
            }
            trHTML += '</table>';
            $("#content").append(trHTML);
        });
    });
});
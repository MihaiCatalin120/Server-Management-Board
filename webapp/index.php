<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monitoring PEX</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="script.js"></script>
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    body {
      background-image: gray;
      margin: 0 0 0 0;
    }

    #header {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: darkblue;
      height: 100px;
      font-family: 'Montserrat', sans-serif;
      font-size: x-large;
      color: white;

    }

    #navbar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      height: 30px;
      font-family: 'Montserrat', sans-serif;
      font-size: medium;
      color: white;

    }

    #navbar button {
      all: unset;
      margin: 9px 0 10px 50px;
      color:white;
      user-select: none;
    }

    #navbar button:hover {
      transition-duration: 0.2s;
      background-color: white;
      color: black;
    }

    #content {
      position: absolute;
      margin: auto;
      top:130px;
      width:100%;
      min-height: 850px;
      height:auto;
      background-color: lightblue;
      font-family: 'Montserrat', sans-serif;
    }

    #content h1{
      margin:10px 0 0 0;
      text-align: center;
    }

    #content h3{
      margin-left: 50px;
    }

    #content table, #content th, #content td {
      border: 1px solid black;
    }

    #content table {
      width: 100%;
      border-collapse: collapse;
    }

    #footer {
      display: flex;
      position: fixed;
      bottom: 0%;
      align-items: center;
      justify-content: center;
      background-color: black;
      height: 20px;
      width: 100%;
      font-family: 'Montserrat', sans-serif;
      font-size: small;
      color: white;

    }



  </style>
</head>
<body>
  <div id="header">
    <p>Server Monitoring Board</p>
  </div>

  <div id="navbar">
    <button id="homeBtn">Home</button>
    <button id="psBtn">Processes</button>
    <button id="dfBtn">Disk Usage</button>
    <button id="wBtn">Logged Users</button>
    <button id="histBtn">Commands history</button>
  </div>

  <div id="content">
    <h1>Hello!</h1>
    <h3>This is a webpage for observing the behaviour of a linux server and the applications within it. You can select any from the options above and see the corresponding details.</h3>
    <h3>The tables are updated every 10 minutes at the :00, :10, ..., :50 marks. Make sure to refresh if you want to see updated data.</h3>
  </div>

  <div id="footer">
    <p>Mihai-Catalin Toderita  |  Website used in the PEX Project</p>
  </div>
</body>
</html>
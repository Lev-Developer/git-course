<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>about.php</title>
    <link rel="stylesheet" href="site_about.css">
   

</head>
<body>
<div class="header">
<?php
        include "menu.php";
    ?>
 <select onchange="window.location.href=this.options[this.selectedIndex].value">
                <option value="http://localhost/levs_site/about.php">English</option>
                 <option value="http://localhost/levs_site/about_translate.php">Русский</option>
                
                  
</select>
</div>
    <div class="content">
    <img width="200" class="img1" src="work.svg">
       <img class="transistion_cloud_left-cloud" src="cloud.svg" >
    <img class="transistion_cloud_right-cloud" src="cloud (1).svg" >
     <img class="transistion_cloud_left-flag" src="flag.svg" >
    <img class="transistion_cloud_right-flag" src="flag (1).svg" >
    <img class="transistion_cloud_center-cloud" src="cloud (1).svg" >
    
    </div>
    <div class="hello">
    <img width="200px" class="pencil" src="pencil.svg" >
         <h3>My works</h3>
         <p class="this_is">This is my second Job</br>the first here http://levveremchuk.ga/</p>
      </div>
      <div class="footer"></div>




</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="site_contact.css">
</head>
<body>

<div class="header">
<?php
       include "menu_translate.php";
    ?>
 <select onchange="window.location.href=this.options[this.selectedIndex].value">
 <option value="http://localhost/levs_site/contact_translate.php">Русский</option>
                 
           
                 <option value="http://localhost/levs_site/contact.php">English</option>
                
                  
</select>
</div>
    <div class="content">
    <h3 class="levs">Страница Контактов</h3>
       <img class="transistion_cloud_left-cloud" src="cloud.svg" >
    <img class="transistion_cloud_right-cloud" src="cloud (1).svg" >
     <img class="transistion_cloud_left-flag" src="flag.svg" >
    <img class="transistion_cloud_right-flag" src="flag (1).svg" >
    <img class="transistion_cloud_center-cloud" src="cloud (1).svg" >
</div>
<div class="hello"><h3 >Мой тел:+380739170100</br>Моя Електроная Почта:LevVeremchuk2607@i.ua</h3></div>

<div class="footer"></div>

</body>
</html>

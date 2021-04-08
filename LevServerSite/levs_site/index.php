

<html>

<head>
<meta name='freelancehunt' content='b0fc63e3db5ee78' />
    <meta charset="utf-8" />
    <title>site html</title>
    <link rel="stylesheet" href="site.css">
   
<body>
<div class="header">

        <?php
                include "menu.php";
        ?>
 <select onchange="window.location.href=this.options[this.selectedIndex].value">
                <option value="http://localhost/levs_site/index.php">English</option>
                 <option value="http://localhost/levs_site/translate.php">Русский</option>


</select>
</div>
 <div class="content">
            <h1 class="i_lev">I`m Lev</h1>
            <img class="transistion_cloud_left-cloud" src="cloud.svg">
            <img class="transistion_cloud_right-cloud" src="cloud (1).svg">
        </div>

        <div class="content_2">
            <img class="land_svg" src="land.svg">
        </div>
        <div class="hello">
            <img class="lev" src="top.png" width="200">
            <h3>Hi.</h3>
            <p class="designer">I am a web designer / developer from Dubno, Ukraine.</br> I'm a beginner so far. I have a
                passion for web design and a love of website development</p>
        </div>
    

    <div class="footer"></div>
    </div>
   
   <script src="site.js"></script>
</body>

</html>
 
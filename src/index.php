<?php
/*      This work is free. You can redistribute it and/or modify it under the
        terms of the Do What The Fuck You Want To Public License, Version 2,
        as published by Sam Hocevar. See the COPYING file for more details. */


$files = array_diff(scandir('./css'), array('.', '..'));
$requested_theme = $_GET['theme'].'.css';
$css; // Global css theme

if(in_array($requested_theme, $files)) {
    $css = $_GET['theme'];
} else {
    $css =  "light";
    $time = new DateTime("now");
}
?>

<!DOCTYPE html> 
<html>
    <head>
        <title>Welcome Home</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="utf-8">
        <link rel="icon" href="images/ruri.ico" sizes="16x16 32x32 48x48 64x64" type="image/vnd.microsoft.icon" />
        <link rel="stylesheet" style="text/css" href="css/common.css" />
        <link rel="stylesheet" style="text/css" href="css/<?= $css ?>.css" />
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/application.js"></script>
    </head>
    <body>
        <main>
            <header>
                <h1>Welcome to the Internet, <span class="highlite">Goshujin-sama</span></h1>
                <p class="subtitle">Its not like I like you or anything, baka.</p>
            </header>
            <section class="search-container">
                <form class="search-form" method="get" action="https://next.duckduckgo.com/">
                    <input class="search-bar duckduckgo" type="text" name="q" placeholder="DuckDuck Go" autofocus="autofocus" />
                </form>
                <form class="search-form" method="get" action="https://youtube.com/results">
                    <input class="search-bar youtube" type="text" name="search_query" placeholder="Youtube" />
                </form>
                <form class="search-form" method="get" action="https://es.wikipedia.org/w/index.php?search=p">
                    <input class="search-bar wikipedia" type="text" name="search" placeholder="Wikipedia (es)" />
                </form>
            </section>
            <nav>
                <ul class="button-list">
                    <li class="button buttonGrey button-arrow">
                        <a> Dev</a>
                        <ul>
                            <li><a href="http://github.com/KuroAku">Github</a></li>
                            <li><a href="http://trello.com">Trello</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey button-arrow">
                        <a>Gaming</a>
                        <ul>
                            <li><a href="https://osu.ppy.sh/u/4070543">Osu!</a></li>
                            <li><a href="https://www.gensokyo.org">Gensokyo</a></li>
                            <li><a href="https://mega.co.nz/#F!ikAxDKLK!KhLTsUCPooQFmyD3ITxJSg">Touhou games</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey button-arrow">
                        <a>Dialy</a>
                        <ul>
                            <li><a href="http://volafile.io/r/BEEPi">Volafile</a></li>
                            <li><a href="https://lainchan.org/">Lainchan</a></li>
                            <li><a href="https://9gag.com">9gag</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey"><a href="https://translate.google.es/">Traductor</a></li>
                </ul>
                <ul class="button-list">
                    <li class="button buttonGrey button-arrow">
                        <a href="http://www.uah.es/">Uni</a>
                        <ul>
                            <li><a href="https://uah.blackboard.com/webapps/bb-auth-provider-shibboleth-BBLEARN/execute/shibbolethLogin?returnUrl=https%3A//uah.blackboard.com/webapps/portal/frameset.jsp&authProviderId=_207_1">Blackboard</a></li>
                            <li><a href="http://www.cc.uah.es/">Departamento CC</a></li>
                            <li><a href="https://atc1.aut.uah.es/">Departamento Automática</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey button-arrow">
                        <a href="http://4chan.org">4chan</a>
                        <ul>
                            <li><a href="http://boards.4chan.org/g/">Technology</a></li>
                            <li><a href="http://boards.4chan.org/jp/">Otaku Culture</a></li>
                            <li><a href="http://boards.4chan.org/w/">Anime wallpaper</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey button-arrow">
                        <a>Otaku</a>
                        <ul>
                            <li><a href="http://jkanime.net">JKAnime</a></li>
                            <li><a href="http://www.nyaa.se/">Nyaa</a></li>
                            <li><a href="https://jlist.com">JList</a></li>
                            <li><a href="https://http://vndb.org">VNDB</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey button-arrow">
                        <a>Tech</a>
                        <ul>
                            <li><a href="http://hackaday.com/">Hach a Day</a></li>
                            <li><a href="https://thepiratebay.se/">Pirate bay</a></li>
                            <li><a href="https://www.hostinger.it">Hostinger</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="button-list">
                    <li class="button buttonGrey button-arrow">
                        <a>Linux</a>
                        <ul>
                            <li><a href="https://www.archlinux.org">ArchLinux</a></li>
                        </ul>
                    </li>
                    <li class="button buttonGrey button-arrow">
                        <a>Music</a>
                    </li>
                </ul>
            </nav>
        </main>
    </body>
</html>


/*

 Functions specific to this site.

  */

//---------------------------------------------
// header of page
function writeHeader() {
  document.write(' \
    <header> \
      <div id=nav> \
        <a href="https://aplsimple.github.io" id=tohome title="Go home"><img id="flagimg" height=14 width=14 src="../../../zoo/favicon.jpg"> \
        <span id=flagcont>&nbsp;Home</span></a> \
        <a href="../../misc/news/news.html"  id=nav1   title="News and views">News</a> \
        <a href="../../misc/links/links.html" id=nav2   title="Some links">Links</a> \
        <a href="https://aplsimple.github.io/ru" id=helpme title="Switch to Russian pages"> \
        <img id="flagimg" height=14 width=14 src="../../zoo/ru.png"> \
        <span id=flagcont>&nbsp;to Russian</span></a> \
      </div> \
    </header>');
}


//---------------------------------------------
// footer of page
function writeFooter(pageinfo) {
  document.write('<footer><div id=spr>by aplsimple at ');
  writeDocTime();
  document.write(' &nbsp;<div id=liam></div></div><div>');
  document.write('&nbsp; <span id=spr2>'+pageinfo);
  document.write('&nbsp;</span></div></footer>');
  prepCollapsible();
}

//---------------------------------------------
// reinversed mail
function gmailCom(){
  document.getElementById('liam').innerHTML =
    invertStr('moc'+'.'+'liamg@elpmislpa');
}

//---------------------------------------------
// operations at loading
window.onload = function() {
  gmailCom();
}

//---------------------------------------------
// operations before unloading
window.onbeforeunload = function() {
}

writeHeader();

/*

 Functions specific to this site.

  */

//---------------------------------------------
// header of page
function writeHeader() {
  homeLINK = document.baseURI;
  ilen = 19
  ibase = homeLINK.indexOf('aplsimple.github');
  if (ibase<0) { ibase = homeLINK.indexOf('aplsimple_github'); ilen += 10 };
  if (ibase>=0) { homeLINK = homeLINK.substring(0,ibase+ilen) };
  document.write(' \
    <head><meta name="viewport" content="initial-scale=1.0"></head> \
    <header> \
      <div id=nav> \
        <a href='+homeLINK+'/index.html id=tohome title="Go home"><img id="flagimg" height=14 width=14 src="../../../zoo/favicon.jpg"> \
        <span id=flagcont>&nbsp;Home</span></a> \
        <a href="../../misc/news/news.html"  id=nav1   title="News and views">News</a> \
        <a href="../../misc/links/links.html" id=nav2   title="Some links">Links</a> \
        <a href='+homeLINK+'/ru/index.html id=helpme title="Switch to Russian pages"> \
        <img id="flagimg" height=14 width=14 src="../../zoo/ru.png"> \
        <span id=flagcont>&nbsp;Ru</span></a> \
      </div> \
    </header>');
}


//---------------------------------------------
// footer of page
function writeFooter(pageinfo) {
  document.write('<footer><div id=spr> &nbsp;');
  writeDocTime();
  document.write('<div id=liam></div></div><div>');
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

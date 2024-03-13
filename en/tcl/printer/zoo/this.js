/* Functions specific to this site. */

//---------------------------------------------
// header of page

function writeHeader() {
  document.write(' \
    <head><meta name="viewport" content="initial-scale=1.0"></head> \
    <header> \
      <div id=nav> \
        <a href='+homeLINK()+'/index.html id=tohome title="Go home"><img id="flagimg" height=14 width=14 src="'+homeLINK()+'/zoo/favicon.jpg"> \
        <span id=flagcont>&nbsp;Home</span></a> \
        <a href="'+homeLINK()+'/en/misc/news/news.html"  id=nav1   title="News and views">News</a> \
        <a href="'+homeLINK()+'/en/misc/links/links.html" id=nav2   title="Some links">Links</a> \
        <a href="'+homeLINK()+'/en/misc/gallery/gallery.html" id=nav3   title="Some demos">Gallery</a> \
        <a href="'+homeLINK()+'/en/misc/springs/springs.html" id=nav4   title="Springs of words">Springs</a> \
        <a href="'+homeLINK()+'/ru/misc/stream/stream.html"   id=nav2   title="Sort of blog">Streams</a> \
        <a href='+homeLINK()+'/ru/index.html id=helpme title="Switch to Russian pages"> \
        <img id="flagimg" height=14 width=14 src="'+homeLINK()+'/en/zoo/ru.png"> \
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

/*
 
 Functions specific to this site.
 
  */
//---------------------------------------------
// header of page
function writeHeader(prntdir) {
  homeLINK = document.baseURI;
  ilen = 19
  ibase = homeLINK.indexOf('aplsimple.github');
  if (ibase<0) { ibase = homeLINK.indexOf('aplsimple_github'); ilen += 10 };
  if (ibase>=0) { homeLINK = homeLINK.substring(0,ibase+ilen) };
  document.write(' \
    <head><meta name="viewport" content="initial-scale=1.0"></head> \
    <header> \
      <div id=nav> \
        <a href='+homeLINK+'/ru/index.html id=tohome title="до дому, до хаты"><img id="flagimg" height=14 width=14 src="../'+prntdir+'zoo/favicon.jpg"> \
        <span id=flagcont>&nbsp;Домой</span></a> \
        <a href="'+prntdir+'misc/news/news.html"       id=nav1   title="Вести с полей">Новости</a> \
        <a href="'+prntdir+'misc/links/links.html"     id=nav2   title="Авторские сайты">Авторство</a> \
        <a href="'+prntdir+'misc/self/self.html"       id=nav2   title="Я пиит... от слова \'пить\'">Отсебятина</a> \
        <a href="'+prntdir+'misc/stream/stream.html"   id=nav2   title="Типа бложика">Стремнина</a> \
        <a href="'+prntdir+'misc/running/running.html" id=nav2   title="Бегу и прочей ерунде посвящается">Бег</a> \
        <a href='+homeLINK+'/index.html id=helpme title="Switch to English pages"> \
        <img id="flagimg" height=14 width=14 src="'+prntdir+'zoo/en.png"> \
        <span id=flagcont>&nbsp;to English</span></a> \
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
if (prntdir==="undefined") {prntdir = '../../';}
writeHeader(prntdir);

function _1(e){for(var t=0,n=0;n<e.length&&" "==e[n];n++)t++;return e.substring(t,e.length)}function _2(e){for(var t=e.length,n=t-1;n>=0&&" "==e[n];n--)t=n
return e.substring(0,t)}function _3(e){return _1(_2(e))}function _4(e){for(var t="",n=e.length;n>0;n--)t+=e[n-1];return t}function _5(){document.getElementById("liam").innerHTML=_4("moc.liamg@elpmislpa")}function _6(){return 1==l3?"#322400":"red"}function _7(){document.getElementById("ruNoteName").innerHTML=rusNotes[l3]+" ("+l4+(l8?"-"+l8:"")+")",document.getElementById("grNoteName").innerHTML=rusMode?rusNotes[l3]:greNotes[l3];var e=_6(),t=_6().replace("red","white");document.getElementById("textin").style.color=e,document.getElementById("textout").style.color=e,document.getElementById("ruNoteName").style.color=t,document.getElementById("grNoteName").style.color=t}function _8(e,t){return _h(),l4-l8+t>MAXNAMES&&e&&_0("Можно ввести не более "+MAXNAMES+" имен в одной записке!",!0),l4-l8+t<=MAXNAMES}function toKeyDown(e){if("Enter"==e.key||13==e.keyCode){var t=document.getElementById("textin").value
t.length>1&&"\n\n"==t.substring(t.length-2,t.length)&&(e.preventDefault(),document.getElementById("textin").value=t.substring(0,t.length-1))}}function toKeyUp(e){var t="Enter"==e.key||13==e.keyCode||","==e.key;(t||"Backspace"==e.key||"Delete"==e.key)&&_8(t,1)}function _9(){document.location=MY_SITE}function _0(e,t){window.alert(e.replace(/<br>/gi,"\n").replace(/&nbsp;/gi," "))}function _a(){_h(),document.getElementById("nav").hidden=!0,document.getElementById("flagimg").src=rusMode?"img/fl_russia.png":"img/fl_greece.png";var e,t
for(i in masid)e=document.getElementById(i),e.hidden=!0,t=masid[i][RUS_LANGUAGE?0:1],t&&(e.innerHTML=t),t=masid[i][RUS_LANGUAGE?2:3],t&&(e.title=t),e.hidden=!1
document.getElementById("nav").hidden=!1,document.getElementById("cb1").hidden=!rusMode||OPTS_HIDDEN,document.getElementById("lb1").hidden=document.getElementById("cb1").hidden}function _b(e){l8++;var t=" и т.д. ...<br>";l7.length<MAXERRLEN?l7+=e+"<br>":l7=l7.replace(t,"")+t}function toFlag(){rusMode=!rusMode,_a()}function _c(e){return e.substring(0,1).toLocaleUpperCase()+e.substring(1,40)}function _d(e){var t=e[l1];return""==t?t=_c(l1):t?l1=intoGenCase(l1):t=e[fromGenCase(l1)],t}function _e(e,t,n){if(t!==n)for(var l=1;l>=0;)(l=e.indexOf(t))>=0&&(e=e.replace(t,n));return e}function _f(e){return""==e||"\n"==e[e.length-1]}function _g(e,t){return e+(" "==t[0]||_f(e)?"":", ")+t}function _h(){var e=document.getElementById("cb2").checked,t=document.getElementById("textin").value.toLocaleLowerCase();t=_e(_3(t),"  "," ");for(k in greekTitles)k.indexOf(" ")>0&&(t=_e(t,k,_e(k," ","_")));var n,l=t.replace(/<.*?>/gi,"").split(/\s*\r?\n\s*|\s*,\s*/);l4=0
var o=[];l5="",l6="",t="",l7="",l8=0
for(var r=0;r<l.length;r++){if(_I="",n=l[r]){if(++l4>MAXNAMES){_b("\nПРОБЛЕМА: превышено допустимое число имен ("+MAXNAMES+")");break}o=n.split(/\s+/),o[0]=_e(o[0],"_"," "),o.length>1&&(o[1]=_e(o[1],"_"," ")),l1=pseudoNames[o[0]],l1||(l1=o[0]),I3=_d(greekNames),I3?(l5=_g(l5,_c(l1)),l6=_g(l6,I3),o.length>1&&(l1=o[1],I3=_d(greekTitles),I3?(l5=_g(l5," "+l1),l6=_g(l6," "+I3)):e?_I="уточните звание: "+l1:(l5=_g(l5," "+l1),l6=_g(l6," "+l1)))):(I3=_d(greekTitles),I3&&o.length>1?(l5=_g(l5,l1),l6=_g(l6,I3),l1=pseudoNames[o[1]],l1||(l1=o[1]),I3=_d(greekNames),I3?(l5=_g(l5," "+_c(l1)),l6=_g(l6," "+I3)):e?_I="уточните имя после звания: "+n:(l5=_g(l5," "+_c(l1)),l6=_g(l6," "+_c(l1)))):e?_I="уточните звание/имя: "+n:(l5=_g(l5,n),l6=_g(l6,n))),o.length>2&&(_I="уточните звание/имя: "+n,l6=_g(l6,n))}_I.length&&(_I="ПРОБЛЕМА: "+_I,l5=_g(l5,(_f(l5)?"":"\n")+_I+"\n"),l6=_g(l6,(_f(l6)?"":"\n")+_I+"\n"),_b(_I))}document.getElementById("textout").value=rusMode?_e(l5,"_"," "):_e(l6,"_"," "),_7()}function toListL(){rusNotes[l3-1]?l3--:l3=MAX_TYPES_ID,_7()}function toListR(){rusNotes[l3+1]?l3++:l3=0,_7()}function _i(){return!l7.length||(_0(l7+"<br><br>У С Т Р А Н И Т Е &nbsp;&nbsp;&nbsp; П Р О Б Л Е М Ы !!!",!0),!1)}function toChangedText(){document.getElementById("textin").value.replace(/<.*?>/gi,"").split(/\s*\r?\n\s*|\s*,\s*/).length!=l4&&_h()}function toUpdate(){_h()}function _j(){return"newPrWin"+ ++l9}function _k(){return rusMode?rusNotes[l3]:greNotes[l3]}function toHelp(){window.open(RUS_LANGUAGE?"css/help_rus.html":"css/help_eng.html","_blank")}function toHTML(e){var t
t=rusMode&&1==l3?"img/html2.jpg":rusMode||1!=l3?rusMode&&0==l3?"img/html1.jpg":"img/html10.jpg":"img/html20.jpg";var n='<!DOCTYPE html><html lang=ru><head><meta charset="UTF-8"><style type="text/css">body{background-image: url("'+t+'"); background-repeat:no-repeat;} </style><title>'+_k()+"</title> </head><body>";_h();var l=document.getElementById("textout").value
if(_i()){for(var o="",r=0;r<LEFTMARGIN;r++)o+="&nbsp;";for(var i=!rusMode||l3>1?BLANKLINES2:BLANKLINES,u=_k().split(/\s+/),d="",r=0;r<u.length;r++)d+=u[r]+" ",d.length>20&&r+1<u.length&&(d+="<br>"+o,i--);for(var r=0;r<i;r++)n+="<br>";n+='<b><font face="'+PRINT_FONTFACE+'" size="'+PRINT_FONTSIZE+'"',n+=" color="+_6(),n+=">",(!rusMode||l3>1)&&(n+=o+d+"<br><br><br>"),n+=("<br>"+l.replace(/<.*?>/gi,"").replace(/, /gi,"<br>")).replace(/<br>/gi,"<br>"+o),n+="</font></b>",n+="</body></html>";var g=window.open("",_j(),"toolbar=yes, status=yes, width="+PRINT_WIDTH+", height="+PRINT_HEIGHT);g.document.write(n),e&&g.print(),l0[l9]=g}}function toPDF(e){if(_h(),_i()){var t,n=!1
rusMode&&1==l3?t="notu2.jpg":rusMode||1!=l3?rusMode&&0==l3?t="notu1.jpg":(t="notu10.jpg",n=!0):(t="notu20.jpg",n=!0);for(var l=[],o=0,r=(MRGN02,MRGN1),i=_k().split(/\s+/),u="",d=[],g=0;g<i.length;g++)u+=i[g]+" ",d[0]=u
n&&(o=1,l[0]={text:d[0],style:"h1",margin:MRGN01},r=MRGN02);var c=0
l[0]&&(c=l[0].margin[0],l[0].margin[0]+=rusMode?MRGADD_RU[l3]:MRGADD_GR[l3]);for(var _=document.getElementById("textout").value.split(/\s*\r?\n\s*|\s*,\s*/),g=0;g<_.length;g++)l[o+g]={text:_[g],style:"h1",margin:g?MRGN2:r};var a={info:{title:"Церковная записка",author:"aplsimple",subject:"notus",keywords:"Записки церковные"},pageSize:"A4",pageOrientation:"portrait",pageMargins:[20,20,20,20],background:[{image:"backi"}],content:l,width:500,height:850,defaultStyle:{font:"times",color:_6(),fontSize:PDF_FONTSIZE},images:{backi:t}};pdfMake.fonts={times:{normal:"times.ttf"}},e?pdfMake.createPdf(a).print():pdfMake.createPdf(a).open(),c&&(l[0].margin[0]=c)}}function toSel1(){if(document.getElementById("sel1").value!=SEL_HEAD1&&_8(!0,1)){var e=document.getElementById("sel1").value
document.getElementById("textin").value+=e+"\n",_8(!0,0)}document.getElementById("sel1").value=SEL_HEAD1,document.getElementById("textin").focus()}function toSel2(){if(document.getElementById("sel2").value!=SEL_HEAD2&&_8(!0,1)){var e=document.getElementById("sel2").value
document.getElementById("textin").value+=e+" ",_8(!1,0)}document.getElementById("sel2").value=SEL_HEAD2,document.getElementById("textin").focus()}function _l(e,t,n){var l="<option id=opt selected>"+n+"</option>",o=0
for(var r in e)l+="<option id=opt"+o+">"+(1==t?_c(r):r)+"</option>",o++;document.getElementById("sel"+t).innerHTML=l}var rusMode=!0,l3=0,l4=0,l5="",l6="",l7="",l8=0,l9=0,l0=[],l1
window.onload=function(){_a(),document.getElementById("cb1").checked=!0,document.getElementById("cb2").checked=!0,document.getElementById("textin").focus(),_l(greekNames,1,SEL_HEAD1),_l(greekTitles,2,SEL_HEAD2),_5()},window.onbeforeunload=function(){for(var e,t=1;t<=l9;t++)if(e=l0[t])try{e.close()}catch(e){}l9=0,l0=[]};
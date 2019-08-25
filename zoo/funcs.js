
//---------------------------------------------
// trimmings
function trimStrLeft(st) {
  var sz=0;
  for (var i=0; i<st.length; i++)
    if (st[i]!=' ') break; else sz++;
  return st.substring(sz,st.length);
}
function trimStrRight(st) {
  var sz=st.length;
  for (var i=sz-1; i>=0; i--)
    if (st[i]!=' ') break; else sz=i;
  return st.substring(0,sz);
}
function trimStr(st) {
  return trimStrLeft(trimStrRight(st));
}

//---------------------------------------------
// make a string inverted
function invertStr(st) {
  var s='';
  for (var i=st.length; i>0; i--)
    s += st[i-1];
  return s;
}

//---------------------------------------------
// put out a document modification time
function writeDocTime(){
  if (document.fileUpdatedDate===undefined) {
    document.write(document.lastModified);
  } else {
    document.write(document.fileUpdatedDate);
  }
}

//---------------------------------------------
// replace all occurences of s1 to s2 in st
function replaceAllStr (st, s1, s2)
{
 if (s1!==s2)
   for (var i=1; i>=0;)
     {
     i = st.indexOf(s1);
     if (i>=0)
       st = st.replace(s1,s2);
     }
 return st;
}

//---------------------------------------------
// check for an empty line
function isNewLine(out) {
  return (out=="" || out[out.length-1]=='\n');
}

//---------------------------------------------
// prepare collapsible elements
function prepCollapsible() {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

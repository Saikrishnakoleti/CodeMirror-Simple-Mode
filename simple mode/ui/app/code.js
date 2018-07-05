$(document).ready(function() {

  CodeMirror.defineMode("mymode", function() {

      return {
          token: function(stream,state) {
var s = /[A-Za-z]/;
var k = /[^0-9]/
              if (stream.match(s) ) {
                  return "style1";
              } else if (stream.match(k) ) {
                  return "style2";
              } else {
                  stream.next();
                  return null;
              }
          }
      };

  });


  var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
      mode: "mymode",
      lineNumbers: true
  });

  });

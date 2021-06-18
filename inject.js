var get_url = prompt("请输入链接", "");
var get_url_num = get_url.match(/.+/g);
document.write(`
               <script>
                   function clean() {
                       var e = document.getElementsByClassName('fish_mark')[0].outerText;
                       document.open();
                       document.clear();
                       document.close();
                       document.write(e.replace(/http.+/g,"<br>"));
                   }
              </script>
              <p style="user-select:none">
                  <button onclick="clean()">clean</button>
                  <br>
              </p><div class="fish_mark">`);
for (var i = 0; i < get_url_num.length; i++) {
document.write(`<a href="` + get_url_num[i] + `">` + get_url_num[i] + `</a><br>`);
}

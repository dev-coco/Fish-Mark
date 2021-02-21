var get_url = prompt("请输入链接", "");
var get_url_num = get_url.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
document.write(`
               <script>
                   function test() {
                       var e = document.documentElement.outerHTML.replace(/https.*?[A-Za-z0-9.?/=]+[A-Za-z0-9]/g, "").replace(/<div class.*?>|<\\/div>|href/g,\"\");;
                       document.open();
                       document.clear();
                       document.close();
                       document.write(e);
                   }
              </script>
              <p style="user-select:none">
                  <button onclick="test()">clean</button>
                  <br>
              </p>`);
for (var i = 0; i < get_url_num.length; i++) {
document.write(`<a href="` + get_url_num[i] + `">` + get_url_num[i] + `</a><br>`);
}

var f = prompt("请输入链接", "");
var b = f.match(/http.+/g);
document.write("<script>function test(){var e=document.documentElement.outerHTML.replace(/https.*?[A-Za-z0-9.?/=]+[A-Za-z0-9]/g,\"\");document.open(),document.clear(),document.close(),document.write(e)}</script><div style=\"user-select:none\"><button onclick=\"test()\">clean</button><br></div>");
for (var i = 0; i < b.length; i++) {
document.write("<a href=\""+b[i]+"\">"+b[i]+"</a><br>");
}

if (location.href.indexOf("facebook") > -1) {
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
        document.write(`<a href="${get_url_num[i]}">${get_url_num[i]}</a><br>`);
    }
} else if (location.href.indexOf("whatsapp") > -1) {
    if (document.getElementById("fish_mark")) {
        var get_html = fish_mark.getElementsByTagName('span');
        var str = [];
        for (const x of get_html) {
            if (x.outerHTML.indexOf("div") > -1) {
                var mark = x.outerHTML.replace(/<\/div.+|<span><div.*?>/g, "") + "\n";
            } else {
                var mark = "\n";
            }
            str += mark;
        }
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("复制成功");
    } else {
        var get_phone = prompt('');
        var get_data = get_phone.match(/.+/g);
        var para = document.createElement("div");
        var element = document.querySelector("body");
        element.appendChild(para);
        para.setAttribute("id", "fish_mark");
        para.setAttribute("style", 'position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);border: 1px solid;padding: 3px 12px;border-radius: 10px;color: #fff;background-color: #99CCFF;z-index: 9999;font-size: 16px;width: 180px;height: 300px;overflow: scroll;');
        for (var i = 0; i < get_data.length; i++) {
            fish_mark.innerHTML += `<span>${get_data[i]}</span>`;
        }
    }
} else {
    alert('请在对应页面使用。');
}

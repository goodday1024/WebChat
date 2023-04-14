var lastsend = [] 
function send(){
    document.getElementById("main").style.display = "none"
    const msg = document.getElementById('question').value
    if (msg == ''){
        alert('input is null')
    }
    else{
        lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML +=  String(document.getElementById('question').value)
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: document.getElementById('question').value,apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
    }
}
function hide(){
    document.getElementById("main").style.display = "none"
    lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML += "写一篇文章"
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: "帮我写一篇文章200字",apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
}
function hide1(){
    document.getElementById("main").style.display = "none"
    lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML +=  "帮我写一段代码"
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: "帮我写一段C++输出hello world的代码",apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
}
function hide2(){
    document.getElementById("main").style.display = "none"
    lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML +=  "给我讲一个笑话"
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: "给我讲一个笑话",apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
}
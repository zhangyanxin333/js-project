//封装ajax
function ajax1(options){
	//创建一个ajax对象
	var xhr = new XMLHttpRequest();
	//打开要发送的地址  如果是get请求 需要将数据直接写在get里(对数据进行处理再拼接)  如果是post请求 需要将数据直接存放到send里
	//url?a=1&b=2  处理数据
	var str = "";
	for(var key in options.data){
		str += "&" + key + "=" + options.data[key];
	}
	str = str.slice(1);
	//  判断请求方式
	if(options.type == "get"){
		xhr.open("get",options.url+"?"+str);
		xhr.send();
	}

	else if(options.type == "post"){ 
		//post请求必须设置响应头
		xhr.open("post",options.url);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var d = xhr.responseText;
			options.success&&options.success(d);
		}
		else if(xhr.status != 200){
			options.error&&options.error(xhr.status)
		}
	}
}

var oBody = document.querySelector("body");
//通过ajax将数据渲染到页面中
var oFirstDiv = document.querySelector(".floor-content>.first-div>.floor-tabs-panel");
console.log(oFirstDiv)
//获取要划过的对象h3
var endH3 = document.querySelectorAll(".first-ul>li>h3");
console.log(endH3)

endH3[0].onmouseover = function(){
    var str1 = ""
	ajax1({
		type:"get",
		url:"json/data1.json",
		success:function(data){
			data = JSON.parse(data)
			for(var i=0;i<data.length;i++){
				str1 += `
				
					<div class="item" data-id="${data[i].id}">
						<div class="wrap">
							<a href="##">
								<img src="${data[i].img}" alt="">
							</a>
							<p class="title1">
								<a href="##">${data[i].title}</a>
							</p>
							<p class="price">
								<span class="second-color">${data[i].price}</span>
							</p>
							<a href="##" class="add-cart"></a>
						</div>
					</div>
				`
            }
            oFirstDiv.innerHTML = "";            
            oFirstDiv.innerHTML = str1;		
		},
		fail:function(e){
			console.log(e);
		}
	})
}

endH3[1].onmouseover = function(){
    var str2 = "" 
	ajax1({
		type:"get",
		url:"json/data2.json",
		success:function(data){
			data = JSON.parse(data)
			for(var i=0;i<data.length;i++){
				str2 += `
				
					<div class="item" data-id="${data[i].id}">
						<div class="wrap">
							<a href="##">
								<img src="${data[i].img}" alt="">
							</a>
							<p class="title1">
								<a href="##">${data[i].title}</a>
							</p>
							<p class="price">
								<span class="second-color">${data[i].price}</span>
							</p>
							<a href="##" class="add-cart"></a>
						</div>
					</div>
				`
            }
            oFirstDiv.innerHTML = "";
            oFirstDiv.innerHTML = str2;
		},
		fail:function(e){
			console.log(e);
		}
	})
}

endH3[2].onmouseover = function(){
    var str3 = ""     
	ajax1({
		type:"get",
		url:"json/data3.json",
		success:function(data){
			data = JSON.parse(data)
			for(var i=0;i<data.length;i++){
				str3 += `
				
					<div class="item" data-id="${data[i].id}">
						<div class="wrap">
							<a href="##">
								<img src="${data[i].img}" alt="">
							</a>
							<p class="title1">
								<a href="##">${data[i].title}</a>
							</p>
							<p class="price">
								<span class="second-color">${data[i].price}</span>
							</p>
							<a href="##" class="add-cart"></a>
						</div>
					</div>
				`
            }
            oFirstDiv.innerHTML = "";
            oFirstDiv.innerHTML = str3;
		},
		fail:function(e){
			console.log(e);
		}
	})
}

endH3[3].onmouseover = function(){
    var str4 = "" 
	ajax1({
		type:"get",
		url:"json/data4.json",
		success:function(data){
			data = JSON.parse(data)
			for(var i=0;i<data.length;i++){
				str4 += `
				
					<div class="item" data-id=${data[i].id}>
						<div class="wrap">
							<a href="##">
								<img src="${data[i].img}" alt="">
							</a>
							<p class="title1">
								<a href="##">${data[i].title}</a>
							</p>
							<p class="price">
								<span class="second-color">${data[i].price}</span>
							</p>
							<a href="##" class="add-cart"></a>
						</div>
					</div>
				`
            }
            oFirstDiv.innerHTML = "";
            oFirstDiv.innerHTML = str4;
		},
		fail:function(e){
			console.log(e);
		}
	})
} 
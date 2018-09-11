function getAli(){
    this.ali = document.querySelectorAll(".w>ul>li");
    this.oul = document.querySelector(".w>ul");
    // this.oli = document.querySelectorAll(".")
    this.timer = null;
}

getAli.prototype.init = function(){
    this.over();
    this.out();
}

getAli.prototype.over = function(){
    var _this = this;
    for(var i=0;i<this.ali.length;i++){
        var _this1 = _this;
        this.ali[i].onmouseover = function(){
            // clearInterval(_this.timer);
            // _this1.timer = setInterval(function(){
            //     _this1.style.left = _this.ali[i].offsetWidth + "px"
            // },3000)
            for(var j=0;j<_this.ali.length;j++){
                _this.ali[j].className = "";
            }
            this.className = "fl";
        }
    }
}

getAli.prototype.out = function(){
    var _this = this;
    for(var i=0;i<this.ali.length;i++){
        this.ali[i].onmouseout = function(){
            for(var j=0;j<_this.ali.length;j++){
                _this.ali[j].className = "";
                _this.ali[0].className = "fl"
            }
        }
    }
}

var li = new getAli();
li.init()

//获取二级导航div和ul下所有的li

oul = document.getElementById("category-layer2");
adiv = oul.querySelectorAll("#category-layer2>.list>dl");
// 获取二级菜单
oTwoul = document.getElementById("category-layer3");
for(var i=0;i<adiv.length;i++){
    adiv[i].onmouseover = function(){
        var a = this.children[1].children;
        a[0].style.color = "#e31939";
        a[1].style.color = "#e31939";
        var span = this.children[0].children[1];
        this.style.background = "#fff";
        span.style.color = "#e31939";
        oTwoul.style.display = "block";
    }
    adiv[i].onmouseout = function(){
        var a = this.children[1].children;
        a[0].style.color = "";
        a[1].style.color = "";
        var span = this.children[0].children[1];
        this.style.background = "";
        span.style.color = "";
        oTwoul.style.display = "none";
    }
}

//鼠标滑过商品种类时 显示边框 1L 2L 3L 
var oFloorTabNav = document.getElementsByClassName("floor-tabs-nav")
var oFloorTabNavH3 = document.querySelectorAll(".floor-tabs-nav>li>h3");
var oFloorTabNavLi = document.querySelectorAll(".floor-tabs-nav>li")
for(var i=0;i<oFloorTabNavH3.length;i++){
    oFloorTabNavH3[i].index = i;
    oFloorTabNavH3[i].onmouseover = function(){
        for(var j=0;j<oFloorTabNavH3.length;j++){
            oFloorTabNavH3[j].className = "";
            // oFloorTabNavLi
        }
		this.className = "floor-tabs-nav li floor-tabs-selected";
		//this.styte.background = "#fff";
        // oFloorTabNavLi[this.index].style.paddingBottom = "5px"
    }
    
}

//获取非行间样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr]
    }
}
// 完美运动框架
function move(obj,json,fn){
	//防止多次点击   关闭掉上一个定时器
	clearInterval(obj.timer);
	//开启定时器  obj.timer:防止多个对象抢定时器
	obj.timer = setInterval(function(){
		//开关门
		var bStop = true;
		//传入的是一个对象 需要将对象中所有的值进行遍历
		for(var attr in json){
			/*
				因为offset的局限性太大，如果想要这个方法灵活多用只能用获取非行间样式

				考虑2点
					1、透明度是小数 不能够直接取整需要先*100在取整

					2、因为getStyle()获取出来的是字符串 我们需要将它转换为数字
			 */
			var iCur = 0;
			if(attr == "opacity"){
				iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			/*
			因为要做缓存运动，因此需要计算速度 速度是一个不定值  
			公式：  (目标值 - 当前对象的位置) /系数  建议是8

			考虑的问题：
				计算机处理小数有问题因此需要将小数干掉，我们要进行向上取整和向下取整
			 */
			//算速度
			var speed = (json[attr] - iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			/*判断是否都已经到达终点 只要有一个没有到达终点就将bStop为false  循环完毕以后判断bstop来决定关闭定时器*/
			if(json[attr] !=iCur){
				bStop = false;
			}

			/*
				考虑2部分
					1、透明度是不需要加px的因此需要单独判断
					2、普通的属性是需要加px的因此需要再次判断

			 */
			if(attr == "opacity"){
				//透明度的兼容性
				obj.style.opacity = (iCur+speed)/100;
				obj.style.filter = "alpha(opacity:"+(iCur+speed)+")";
			}else{
				obj.style[attr] = (iCur+speed)+"px";
			}
		}

		//当循环完毕以后 判断bStop的状态来决定是否关闭定时器
		if(bStop){
			clearInterval(obj.timer);
			//链式操作
			fn&&fn();
		}

	},30)
}


//轮播
// var oBanner = document.getElementById("floor-banner");
// var oUl = document.querySelector("#floor-banner>ul");
// var oLi = oUl.getElementsByTagName("li");
// var oSpan = document.querySelectorAll(".foucs-btn>span");
// var li = oLi[0].cloneNode(true);
// oUl.appendChild(li);
// var iWidth = oLi[0].offsetWidth;
// oUl.style.width = iWidth * oLi.length + "px";
// var timer = null;
// var iNow = 0;

// //鼠标滑过
// oBanner.onmouseover = function(){
//     clearInterval(timer);
// } 
// oBanner.onmouseout = function(){
//     autoplay();
// }
// //自动播放
// autoplay()
// function autoplay(){
//     timer = setInterval(function(){
//         if(iNow == oLi.length -1){
//             iNow = 1;
//             oul.style.left = 0;
//         }
//         else{
//             iNow++;
//         }
//         toImg();
//     },1000)
// }

// //轮播原理
// function toImg(){
//     move(oUl,{left:-iNow*iWidth})
//     for(var i=0;i<oSpan.length;i++){
//         oSpan[i].className = "";
//     }
//     oSpan[iNow == oLi.length-1?0:iNow].className = "active";
// }

// var oBanner = document.getElementById("floor-banner");
// var oUl = document.querySelector("#floor-banner>ul");
// var oLi = oUl.getElementsByTagName("li");
// var oSpan = document.querySelectorAll(".foucs-btn>span");
// var li = oLi[0].cloneNode(true);
// oUl.appendChild(li);
// var iWidth = oLi[0].offsetWidth;
// oUl.style.width = iWidth * oLi.length + "px";
// var timer = null;
// var iNow = 0;
function Swiper(container,options){
	this.oBanner = document.querySelector(container);
	this.oUl = 	this.oBanner.getElementsByTagName("ul")[0];
    this.aLi = this.oUl.getElementsByTagName("li");
    this.ospan = this.oBanner.querySelectorAll(".foucs-btn>span");
	this.prevEl = this.ospan[0];
    this.nextEl = this.ospan[1];
	this.aBtn = this.oBanner.querySelectorAll(options.circle+">"+"a");
	this.iNow = 0;
	this.iWidth = this.aLi[0].offsetWidth;
    this.timer = null;
}

Swiper.prototype.init = function(){
    var li = this.aLi[0].cloneNode(true);
    
	this.oUl.appendChild(li);
    this.oUl.style.width = this.iWidth * this.aLi.length+"px";
	this.autoPlay();
	this.over();
	this.out();
	this.prev();
	this.next();
	this.toggle();
}


Swiper.prototype.toggle = function(){
	var _this = this;
	for(var i=0;i<this.aBtn.length;i++){
		this.aBtn[i].index = i;
		this.aBtn[i].onmouseover = function(){
			for(var j=0;j<_this.aBtn.length;j++){
				_this.aBtn[j].className = ""
			}

			this.className = "active";
			_this.iNow = this.index;
			_this.toImg();
		}
	}
}

Swiper.prototype.next = function(){
	var _this = this;
	this.nextEl.onclick = function(){
		if(_this.iNow == _this.aLi.length-1){
			_this.iNow = 1;
			_this.oUl.style.left = 0;
		}else{
			_this.iNow++;
		}

		_this.toImg();
	}
}

Swiper.prototype.prev= function(){	
	var _this = this;
	this.prevEl.onclick = function(){
		if(_this.iNow == 0){
			_this.iNow = _this.aLi.length-2;
			_this.oUl.style.left = -(_this.aLi.length-1)*_this.aLi[0].offsetWidth+"px";

		}else{
			_this.iNow--;
		}

		_this.toImg();
	}
}

Swiper.prototype.out = function(){
	var _this = this
	this.oBanner.onmouseout = function(){

		_this.autoPlay()
	}
}


Swiper.prototype.over = function(){
	var _this = this
	this.oBanner.onmouseover = function(){
		
		clearInterval(_this.timer);
	}
}
Swiper.prototype.autoPlay = function(){
	var _this = this;
	clearInterval(this.timer)
	this.timer = setInterval(function(){
		if(_this.iNow == _this.aLi.length-1){
			_this.iNow = 1;
			_this.oUl.style.left = 0;
		}else{
			_this.iNow++;
		}

		_this.toImg();
	},3000)
}

Swiper.prototype.toImg = function(){
	move(this.oUl,{left:-this.iNow*this.iWidth})

	for(var i=0;i<this.ospan.length;i++){
		this.ospan[i].className = "";
	}

    this.ospan[this.iNow==this.aLi.length-1?0:this.iNow].className = "active";
}
var swiper = new Swiper("#floor-banner",{prevEl:".foucs-btn>prevEl",
            nextEl:".foucs-btn>nextEl"});
swiper.init()
var swiper1 = new Swiper("#floor-banner1",{prevEl:".foucs-btn>prevEl",
            nextEl:".foucs-btn>nextEl"});
swiper1.init()
var swiper2 = new Swiper("#floor-banner2",{prevEl:".foucs-btn>prevEl",
            nextEl:".foucs-btn>nextEl"});
swiper2.init()
var swiper3 = new Swiper("#floor-banner3",{prevEl:".foucs-btn>prevEl",
            nextEl:".foucs-btn>nextEl"});
swiper3.init()

// 获取底部将数据填入
// var obj = [
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"},
// 			{"id":1,
// 			"img":"images/goods1.jpg",
// 			"title":"七分妆玻尿酸水润面膜",
// 			"price":"￥99.00"}
// 		]
var oDiv = document.querySelector(".floor-footer>ul");
// console.log(oDiv)
var str = "";
for(var i=0;i<oDiv.length;i++){
	str += `<li>
	<a href="##">
		<img src="${oDiv[i].img}" />
		<div class="goods-info">
			<p class="goods-name">${oDiv[i].title}</p>
			<p class="goods-other">
				<span class="color">${oDiv[i].price}</span>
				<i class="add-cart"></i>
			</p>
		</div>
	</a>
</li>`
}
// console.log(str)
oDiv.innerHTML += str;

//封装ajax
function ajax(options){
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



// 将所有的图片通过ajax渲染到页面(ul)中
var likeUl = document.querySelector(".floor-footer-box>.floor-footer>ul")
ajax({
	type:"get",
	url:"json/data.json",
	success:function(data){
		data = JSON.parse(data)
		// console.log(data.length)
		for(var i=0;i<data.length;i++){
			str += `<li>
			<a href="##">
				<img src="${data[i].img}" />
				<div class="goods-info" data-id="${data[i].id}">
					<p class="goods-name">${data[i].title}</p>
					<p class="goods-other">
						<span class="color">${data[i].price}</span>
						<i class="add-cart"></i>
					</p>
				</div>
			</a>
		</li>`
		}
		likeUl.innerHTML = str;		
	},
	fail:function(e){
		console.log(e);
	}
})

// 猜你喜欢(guess you like ul li a) 当鼠标划过的时候 显示红色边框
// var gululA = likeUl.getElementsByTagName("a");
// console.log(gululA.length);
// for(var i=0;i<gululA.length;i++){
// 	// console.log(1)
// 	gululA[i].onmouseover = function(){
// 		console.log(1)
// 		gululA.style.borderColor = "red";
// 	}
// }

// gululA.onmouseout = function(){
// 	gululA.style.borderColor = "#f6f6f6";	
// }

/*
//当鼠标划过商品详情的每个格子的时候显示每个对应的详情框
var endUl = document.getElementsByClassName("fouth-ul");
//获取要划过的对象h3
var endH3 = document.querySelectorAll(".fouth-ul>li>h3");
//获取要显示的div	
var aDiv = document.querySelectorAll(".fouth-div>.floor-tabs-panel");
//console.log(aDiv)
//console.log(aDiv);

for(var i=0;i<endH3.length;i++){
	endH3[i].index = i;	
	endH3[i].onmouseover = function(){
		aDiv[this.index].className = "floor-tabs-panel floor-tabs-hide";
		}
	}
*/




//设置cookie
function setCookie(key,val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);

	document.cookie = key+"="+val+";path=/;expires="+d;
}

//删除cookie
function removeCookie(key,val){
	setCookie(key,val,-1)
}

//获取cookie
function getCookie(key){
	var cookie = document.cookie;
	var arr = cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(key == newArr[0]){
			return newArr[1];
		}
	}
}
var oBody = document.querySelector("body");
oBody.onclick = function(e){
    var e = e || event;
    var target = e.target || e.srcElement;
    if( (target.tagName == "A" || target.tagName == "I") && target.className == "add-cart"){
        var goodsId = target.parentNode.parentNode.getAttribute("data-id");
        var goods = {};
        //到cookie里面取拿值
        if(getCookie("info")){
            arr = JSON.parse(getCookie("info"))
        }
        else{
            var arr = [];
        }
        //判断数组是否为空  如果为空的话将这个东西添加到对象中然后在添加到数组中 如果不为空的话  需要判断这个东西在不在购物车里
        if(arr.length>0){
            for(var i=0;i<arr.length;i++){
                //关键点
                var bStop = false;
                if(arr[i].id == goodsId){
                    arr[i].num++;
                    bStop = true;
                    break;
                }
            }
            if(!bStop){
                goods.id = goodsId;
                goods.num = 1;
                arr.push(goods)
            }
        }
        else{
            goods.id = goodsId;
            goods.num = 1;
            arr.push(goods)
        }
        setCookie("info",JSON.stringify(arr),7)
    }
}
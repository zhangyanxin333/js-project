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

var oshoppingCar = document.getElementById("shopping-car");
oshoppingCar.onclick = function(){
    var str = oshoppingCar.innerHTML;
    str = str.substring(3,5);
    if(str == 0){
        oshoppingCar.setAttribute("href","html/car.html")
    }
    else{
        oshoppingCar.setAttribute("href","html/car1.html")
    }
}
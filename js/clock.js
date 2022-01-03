function ilkbuyuk(params) {

    return `${params[0].toUpperCase()}${params.slice(1)}`
    
}
function showTime()
{
    let zaman=new Date();
document.getElementById("myClock").innerHTML=`${zaman.getDate()}/${zaman.getMonth()+1}/${zaman.getFullYear()}  ${zaman.getHours()}:${zaman.getMinutes()}:${zaman.getSeconds()}`
}

let isim=prompt("İsim Giriniz")
isim=ilkbuyuk(isim);
document.getElementById("myName").innerHTML=isim

setInterval(() => {

    showTime();
}, 1000);
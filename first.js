var boxid = document.getElementById('box');
var spanid = document.getElementById('click');
var count =0;
boxid.addEventListener('click',function(){
    count++;
    console.log(count);
    spanid.innerText=count + "";
})
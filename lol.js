function lol(a){
    if(a==1) return 1;
    a = a + lol(a-1);
    return a
}
console.log(lol(99));

const output = document.getElementById('demo');
function loca(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error);
    }else{
        output.innerHTML = "Geolocation is not supported by your browser!";
    }
}
function success(position){
    output.innerHTML = 'Latitude'+position.coords.latitude+
    "<br>Longtitude: "+position.timestamp;
}
function error(){
    alert("can not find your location");
}
//drag and drpo  API

function start(ev){
    ev.dataTransfer.setData("text",  ev.target.id);
}
function over(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data))
}
function pre(ev){
    ev.preventDefault();
}
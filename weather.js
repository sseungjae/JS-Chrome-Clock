const API_KEY = "81497240f61a2131345c48fdfa585cb6";

const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    }else{
        //get Weather
    }
}

function init(){

}

init();
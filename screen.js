var Date = new Date();
function getdate() {
    
    document.getElementById("res").innerText = Date;  
  
}
function year() {
    document.getElementById("res").innerText = Date.getFullYear();
}
function month() {
    var month = ["JANUARY","february","march","april","may","june","july","august" ,"september",
"octomber","november","december"]
    document.getElementById("res").innerText = month[Date.getMonth()];


}
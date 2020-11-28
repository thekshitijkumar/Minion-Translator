var input = document.querySelector("#text-area");
var btn_translate = document.querySelector("#btn-translate");
var output = document.querySelector("#output-text-area");

//minion api
const url="https://api.funtranslations.com/translate/minion.json";
const finalUrl=url+"?"+"text=";


function clickEventHandler(event)
{

    console.log(input.value);

    var userString=input.value;
    var req=finalUrl+userString;
    console.log(req);
    fetch(req)
    .then(response =>response.json())
    .then(json =>{
        output.innerText=json.contents.translated})
    .catch(()=>alert("Sever down.Please try after some time!!") );
    
        // console.log("result printed");
    

}
btn_translate.addEventListener("click",clickEventHandler);



var mydata = null;
var vv = "left";

fetch('https://cors-anywhere.herokuapp.com/https://brokeprotocol.com/servers.json')
    .then(res => res.json())
    .then((out) => {
        useJSON(out);
}).catch(err => console.error(err));

function useJSON(json){
    json.forEach(
        function(obj){ 
        var element = document.createElement("div");
        var h1 = document.createElement("h1");
        h1.style.fontWeight = "900";
        h1.style.fontSize = 12;
        h1.style.color = "blue";
        h1.innerHTML = " " + obj["Name"];
        var p2 = document.createElement("p");
        p2.innerHTML = "Players: <br>";
        p2.style.fontWeight = "600";
        var ul = document.createElement("ul");
        ul.className = "list-group";
        var row = document.createElement("div");
        row.className = "row";
        obj["Players"].forEach(
            function(obj){
                var li = document.createElement("li");
                if(vv == "right"){
                    vv = "left"
                }else{
                    vv = "right"
                }
                li.className = "list-group-item list-group-item-info vv";
                li.innerHTML = obj;
                ul.appendChild(li);
            }
        )
        p2.appendChild(ul);
        p2.style.fontWeight = "600";
        p2.style.color = "red";
        var p3 = document.createElement("p");
        p3.innerHTML = "Total players: " + obj["PlayerCount"];
        p3.style.fontWeight = "600";
        p3.style.color = "green";

        var breaker = document.createElement("p");
        breaker.innerHTML = "<br>";
        element.appendChild(h1);
        element.appendChild(p2);
        element.appendChild(p3);
        element.appendChild(breaker);

        var myadderdiv = document.getElementById("adder");
        myadderdiv.appendChild(element);
        console.log(obj);
    });
}

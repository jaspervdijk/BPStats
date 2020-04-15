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
        var cont = document.createElement("div");
        cont.className = "container";
        var rw = document.createElement("div");
        rw.className = "row";
        var lg = document.createElement("div");
        cont.appendChild(rw);
        var col6 = document.createElement("div");
        col6.className = "col-6";
        rw.appendChild(col6);
        col6.appendChild(lg);
        lg.className= "list-group d-flex flex-row flex-wrap";
        obj["Players"].forEach(
            function(obj){
                var a = document.createElement("a");
                a.href="#";
                a.className = "list-group-item w-50 list-group-item-action";
                a.innerText = obj;
                lg.appendChild(a);
            }
        )
        p2.appendChild(cont);
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

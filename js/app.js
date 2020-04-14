var mydata = null;

fetch('https://cors-anywhere.herokuapp.com/https://brokeprotocol.com/servers.json')
    .then(res => res.json())
    .then((out) => {
        useJSON(out);
}).catch(err => console.error(err));

function useJSON(json){
    json.forEach(
        function(obj){ 
            console.log(obj);
        var element = document.createElement("div");
        element.className = "jumbotron";
        var h1 = document.createElement("h1");
        element.appendChild(h1);
        h1.className = "display-4";
        h1.innerHTML = obj["Name"];
        h1.style.fontWeight = "600"
        h1.style.color = "blue";
        var p1 = document.createElement("p");
        element.appendChild(p1);
        p1.className = "lead";
        p1.innerHTML = obj["ServerInfo"]["ShortDescription"];
        p1.style.color = "green";
        p1.style.fontWeight = "500";
        var hr = document.createElement("hr");
        element.appendChild(hr);
        hr.className = "my-4";
        var p2 = document.createElement("p");
        element.appendChild(p2);
        p2.innerHTML = "Server playercount = " + obj["PlayerCount"];
        p2.style.color = "red";
        p2.style.fontWeight = "500";
        var p3 = document.createElement("p");
        element.appendChild(p3);
        p3.className = "lead";
        var a = document.createElement("a");
        a.className = "btn btn-primary btn-lg";
        var index = -1;
        var val = obj["Name"];
        a.href = "server.html?x=" + val;
        a.role="button";
        a.innerHTML = "INFO";
        p3.appendChild(a);
        var myadderdiv = document.getElementById("adder");
        myadderdiv.appendChild(element);
        console.log(obj);
    });
}

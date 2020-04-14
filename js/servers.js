function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

    fetch('https://cors-anywhere.herokuapp.com/https://brokeprotocol.com/servers.json')
    .then(res => res.json())
    .then((out) => {
        useJSON(out);
}).catch(err => console.error(err));

function useJSON(json){
    var val = getParameterByName('x');
    for (var i = 0; i < json.length; i++){
        if (json[i].Name == val){
          index = i;
        }
    }

    var h1 = document.getElementById("h1");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");

    var cardbody = document.getElementById("cardbody");
    
    var ip = document.getElementById("ip");
    var port = document.getElementById("port");
    var version = document.getElementById("version");
    var steam = document.getElementById("steam");
    var whitelist = document.getElementById("Whitelisted");
    var maxPlayers = document.getElementById("Maxplayers");

    maxPlayers.innerHTML = "MaxPlayers: " + json[index]["MaxPlayers"];
    whitelist.innerHTML = "Whitelisted = " + json[index]["Whitelisted"];
    steam.innerHTML = "Steam = " + json[index]["Steam"];
    version.innerHTML = "Server Version: " + json[index]["ServerVersion"];
    port.innerHTML = "Port: " + json[index]["Port"];
    ip.innerHTML = "IP: " + json[index]["Ip"];
    h1.innerHTML = json[index]["Name"];
    p1.innerHTML = json[index]["ServerInfo"]["ShortDescription"];
    p2.innerHTML = "Player count = " + json[index]["PlayerCount"];
    playersDrop(json);
    cardbody.innerHTML = json[index]["ServerInfo"]["Description"];

}

function playersDrop(json){
    var dropdown = document.getElementById("dropDownMenuPart");

    json[index]["Players"].forEach(
        function(obj){
            var dropDownItem = document.createElement("a");
            dropDownItem.className = "dropdown-item";
            dropDownItem.href = "#";
            dropDownItem.innerHTML = obj;
            dropdown.appendChild(dropDownItem);
        }
    )
}

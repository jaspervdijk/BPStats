var mydata = null;
var color1 = "#007bff";
var color2 = "#e83e8c";
var color3 = "#6f42c1";
var color;
var colorer = 0;
fetch('https://cors-anywhere.herokuapp.com/https://brokeprotocol.com/servers.json')
    .then(res => res.json())
    .then((out) => {
        useJSON(out);
}).catch(err => console.error(err));

function useJSON(json){
    json.forEach(
        function(obj){ 
        var myadderdiv = document.getElementById("adder");
        myadderdiv.appendChild(makeIT(obj["Name"], obj));
    });
}

function makeIT(title, obj){
  var my3 = document.createElement("div")
  my3.className = "my-3 p-3 bg-white rounded shadow-sm";

  var h6 = document.createElement("h6");
  h6.className = "border-bottom border-gray pb-2 mb-0";
  h6.innerHTML = title;

  var media1 = mediaIO("Server Shortdescription:", obj["ServerInfo"]["ShortDescription"]);
  var media2 = mediaIO("Server playercount:", + obj["PlayerCount"]);
  var val = obj["Name"];
  var href = "server.html?x=" + val;
  var media3 = mediaIO("INFO", href);

  var small = document.createElement("small");
  small.className = "d-block text-right mt-3";
  var hreff = document.createElement("a");
  hreff.href = "#";
  small.appendChild(hreff);
  my3.appendChild(h6);
  my3.appendChild(media1);
  my3.appendChild(media2);
  my3.appendChild(media3);
  my3.appendChild(small);
  return my3;
}

function mediaIO(titel, content){
    var media = document.createElement("div");
    media.className = "media text-muted pt-3";
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "bd-placeholder-img mr-2 rounded");
    svg.setAttribute("width", "32");
    svg.setAttribute("height", "32");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("focusable", false);
    svg.setAttribute("role", "img");
    svg.setAttribute('aria-label', "Placeholder: 32x32")
    media.appendChild(svg);
  
    var title = document.createElement("title");
    title.innerHTML = "Placeholder";
    svg.appendChild(title);
  
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    console.log(colorer);
    if(colorer == 0)
    {
        color = color1;
        colorer ++;
    }
    else if(colorer == 1)
    {
        color = color2;
        colorer ++;
    }else{
        color = color3;
        colorer = 0;
    }
    console.log(color);
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
  
    var txt = document.createElement("text");
    txt.setAttribute("x", "50%");
    txt.setAttribute("y", "50%");
    txt.setAttribute("fill", color);
    txt.setAttribute("dy", ".3em");
    txt.innerHTML = "32x32";
    svg.appendChild(txt);
  
    var p2 = document.createElement("p");
    p2.className = "media-body pb-3 mb-0 small lh-125 border-bottom border-gray";
  
    var strong = document.createElement("strong");
    strong.className = "d-block text-gray-dark";
    strong.innerHTML = titel;
    if(titel == "INFO")
    {
        var p3 = document.createElement("a");
        p3.href = content;
        p3.innerText = "SERVER INFO";
        p2.appendChild(strong);
        p2.appendChild(p3);
    }else{
        var p3 = document.createElement("p");
        p3.innerText = content;
        p2.appendChild(strong);
        p2.appendChild(p3);
    }
    media.appendChild(p2);
    return media;
}


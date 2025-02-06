var container = document.createElement("div");
container.innerHTML = "<p>Sorry, your request could not be processed:<\/p>";
var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);
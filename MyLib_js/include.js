var currentRoot = "";

function load(src){
	document.write(`<script src="${currentRoot}/${src}.js"></script>`);
}


currentRoot = "MyLib_js/";
load("HelloWorld");
load("JoinFunction");
load("XORTable");

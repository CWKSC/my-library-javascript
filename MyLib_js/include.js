var currentRoot = "";

function load(src){
	document.write(`<script src="${currentRoot}/${src}.js"></script>`);
}
function loadByUrl(name){
	document.write(`<script src="https://raw.githubusercontent.com/CWKSC/MyLib_js/master/MyLib_js/${name}"`)
}

loadByUrl("HelloWorld");
loadByUrl("JoinFunction");
loadByUrl("CTFTool");

// currentRoot = "MyLib_js";
// load("HelloWorld");
// load("JoinFunction");
// load("CTFTool");

(() => {

var root = "";

function load(name){
	document.write(`<script 
		type="text/javascript" 
		src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js/${root}${name}.js"
		async> </script>`);
}

["CTFTool", 
"AdvanceLooping",
]
.map(load);

})();


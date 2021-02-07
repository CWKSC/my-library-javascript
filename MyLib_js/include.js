(() => {

function load(name){
	document.write(`<script 
		type="text/javascript" 
		src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js/${name}.js"
		async> </script>`);
}
load("CTFTool");
load("AdvanceLooping");

})();


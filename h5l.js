//test
var H5L  = {
	instanceCount:0

};

var h5l = function(wrapperid){
	this.instance = H5L.instanceCount;
	H5L.instanceCount++;
	this.main = document.getElementById("myHL5");
	this.main.className+=" h5l-wrapper"
	var editorContainer = document.createElement("div");
	editorContainer.id = "h5l-editor-" + this.instance;
	editorContainer.innerHTML = "dd"
	editorContainer.className += " h5l-editor"
	this.main.appendChild(editorContainer);
	this.editor = ace.edit("hl5-editor-" + this.instance);
	this.editor.getSession().setMode("ace/mode/javascript");
	this.editor.getSession().setUseSoftTabs(true);
	this.editor.getSession().setUseWrapMode(true);
	this.editor.setShowPrintMargin(false);
	this.editor.getSession().setUseWorker(false);
	this.editor.setHighlightActiveLine(false);
	var canvasContainer = document.createElement("canvas");
	canvasContainer.className += " h5l-canvas"
	this.main.appendChild(canvasContainer);
	this.canvas = canvasContainer;
};
h5l.prototype.setEditorHeight = function(height) {
	this.editor.style.height = height+"px";
	//if(height > parseFloat(this.canvas.style.height.replace("px",""))){
		this.setWrapperHeight(height);
	//}
};
h5l.prototype.setCanvasDimensions = function(width,height){
	this.canvas.style.height = height+"px"
	this.canvas.style.width = width+"px"
}
h5l.prototype.setInitialHeight = function(width,height){
	this.setCanvasDimensions(width,height)
	this.setEditorHeight(height);
	this.setWrapperHeight(height);
};
h5l.prototype.setWrapperHeight = function(height) {
	this.main.style.height = height+"px";
}
var test = new h5l("myH5L");
test.setInitialHeight(400,500);

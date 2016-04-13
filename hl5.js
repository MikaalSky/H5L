//test
var HL5  = {
	instanceCount:0

};

var hl5 = function(wrapperid){
	this.instance = HL5.instanceCount;
	HL5.instanceCount++;
	this.main = document.getElementById("myHL5");
	this.main.className+=" h5l-wrapper"
	var editorContainer = document.createElement("div");
	editorContainer.id = "hl5-editor-" + this.instance;
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
hl5.prototype.setEditorHeight = function(height) {
	this.editor.style.height = height+"px";
	if(height > parseFloat(this.canvas.style.height.replace("px",""))){
		this.setWrapperHeight(height);
	}
};
hl5.prototype.setInitialHeight = function(height){
	this.canvas.style.height = height+"px";
	this.setEditorHeight(height);
	this.setWrapperHeight(height);
};
hl5.prototype.setWrapperHeight = function(height) {
	this.main.style.height = height+px;
}
}
var test = new hl5("myHL5");
test.setInitialHeight(400);

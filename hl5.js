//test
var HL5  = {
	instanceCount:0

};

var hl5 = function(wrapperid){
	this.instance = HL5.instanceCount;
	HL5.instanceCount++;
	this.main = document.getElementById("myHL5");
	var editorContainer = document.createElement("div");
	editorContainer.id = "hl5-editor-" + this.instance;
	editorContainer.innerHTML = "dd"
	editorContainer.className += "hl5-editor"
	this.main.appendChild(editorContainer);
	this.editor = ace.edit("hl5-editor-" + this.instance);
	this.editor.getSession().setMode("ace/mode/javascript");
	this.editor.getSession().setUseSoftTabs(true);
	this.editor.getSession().setUseWrapMode(true);
	this.editor.setShowPrintMargin(false);
	this.editor.getSession().setUseWorker(false);
	this.editor.setHighlightActiveLine(false);
};

var test = new hl5("myHL5")
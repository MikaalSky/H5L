//test
var H5L = {
    instanceCount: 0
};
var h5l = function(wrapperid) {
    this.instance = H5L.instanceCount;
    H5L.instanceCount++;
    this.main = document.getElementById(wrapperid);
    this.main.className += " h5l-wrapper"
    var editorContainer = document.createElement("div");
    editorContainer.id = "h5l-editor-" + this.instance;
    editorContainer.innerHTML = "dd"
    editorContainer.className += " h5l-editor"
    this.main.appendChild(editorContainer);
    this.aceEditor = ace.edit("h5l-editor-" + this.instance);
    this.aceEditor.getSession().setMode("ace/mode/javascript");
    this.aceEditor.getSession().setUseWrapMode(true);
    this.aceEditor.getSession().setUseSoftTabs(true);
    this.aceEditor.setShowPrintMargin(false);
    this.aceEditor.getSession().setUseWorker(false);
    this.aceEditor.setHighlightActiveLine(false);
    this.aceEditor.getSession().setAnnotations([{
        row: 0,
        column: 0,
        text: "Strange error",
        type: "error" // also warning and information
    }]);
    this.editor = this.main.getElementsByClassName("h5l-editor")[0];
    var canvasContainer = document.createElement("canvas");
    canvasContainer.className += " h5l-canvas"
    this.main.appendChild(canvasContainer);
    this.canvas = this.main.getElementsByClassName("h5l-canvas")[0];
};
h5l.prototype.setEditorHeight = function(height) {
    this.editor.style.height = height + "px";
    //if(height > parseFloat(this.canvas.style.height.replace("px",""))){
    this.setWrapperHeight(height);
    //}
    this.aceEditor.resize();
};
h5l.prototype.setCanvasDimensions = function(width, height) {
    this.canvas.style.maxHeight = height + "px"
    this.canvas.style.maxWidth = width + "px"
}
h5l.prototype.setInitialHeight = function(width, height) {
    this.setCanvasDimensions(width, height)
    this.setEditorHeight(height);
};
h5l.prototype.setWrapperHeight = function(height) {
    this.main.style.minHeight = height + "px";
}
var test = new h5l("myH5L");
test.setInitialHeight(400, 400);

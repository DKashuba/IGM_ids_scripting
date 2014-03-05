// 
// Here we export doc
// 
function Factory(myDoc, name) {
	var doc = myDoc;
	var name = name;
	var savePath = '/srv/_IGM/';
    this.exportFile = function (type) {
        var file;

        if (type === 'pdf') 
        	file = new pdfType(name, savePath);
        else
        	file = new pdfType();
        
        file.type = type;
        file.export = function () {
        	if (doc && file.fileRes) 
        		doc.exportFile(file.format, file.fileRes);
        }

        return file;
    }
        
}

var pdfType = function (name, savePath) {
    this.format = ExportFormat.pdfType;
    if (name != '' && savePath != '') 
    	this.fileRes = new File(savePath + name);
};


var factory = new Factory(myDocument, 'Table.pdf');
var fileInst = factory.exportFile('pdf');
fileInst.export();

// 
// Here we export doc
// 
// myDocument.exportFile(ExportFormat.pdfType, new File("/srv/_IGM/ImprovedHelloWorld.pdf"));
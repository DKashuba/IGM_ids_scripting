//HelloWorld.jsx
//Create a new document.
var myDocument = app.documents.add();
//Get a reference to the first page.
var myPage = myDocument.pages.item(0);
//Create a text frame.
var myTextFrame = myPage.textFrames.add();
//Specify the size and shape of the text frame. myTextFrame.geometricBounds = ["6p0", "6p0", "18p0", "18p0"]; //Enter text in the text frame.
myTextFrame.contents = "Hello World!";
// Save the document (fill in a valid file path). 
myDocument.save(new File("/srv/_IGM/myTestDocument.indd"));
//Close the document.
app.documents.item(0).close();
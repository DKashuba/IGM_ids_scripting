//ImprovedHelloWorld.jsx
var myDoc = (function () {
    var instance;

    function createInstance() {
        var object = app.documents.add();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var myDocument = myDoc.getInstance();
var myPage = myDocument.pages.item(0);

var myTextFrame = myPage.textFrames.add();
// myTextFrame.geometricBounds = [20, 20, 190, 190];
// myTextFrame.contents = "This is some example text.";


//Fill the text frame with placeholder text.
var myString = "Table 1 LTR (pargraph direction LTR)\r";
myString += "Column 1,Column 2,Column 3;1a,1b,1c;2a,2b,2c;3a,3b,3c\r";
myString += "Table 2 RTL, right Align (pargraph direction LTR)\r";
myString += "Column 1,Column 2,Column 3;1a,1b,1c;2a,2b,2c;3a,3b,3c\r";
myString += "Table 3 RTL, left align (pargraph direction RTL)\r";
myString += "Column 1,Column 2,Column 3;1a,1b,1c;2a,2b,2c;3a,3b,3c\r";
myString += "Table 4 LTR(pargraph direction RTL)\r";
myString += "Column 1,Column 2,Column 3;1a,1b,1c;2a,2b,2c;3a,3b,3c\r"; 

myTextFrame.contents = myString;

var myStory = myDocument.stories.item(0);

var myPargraph = myStory.paragraphs.item(1);
myPargraph.paragraphDirection = ParagraphDirectionOptions.leftToRightDirection;
var myStartCharacter = myPargraph.characters.item(0);
var myEndCharacter = myPargraph.characters.item(-2);
var myText = myStory.texts.itemByRange(myStartCharacter, myEndCharacter);
var myTable = myText.convertToTable(",",";");

var myPargraph = myStory.paragraphs.item(3);
myPargraph.paragraphDirection = ParagraphDirectionOptions.leftToRightDirection; 
var myStartCharacter = myPargraph.characters.item(0);
var myEndCharacter = myPargraph.characters.item(-2);
var myText = myStory.texts.itemByRange(myStartCharacter, myEndCharacter);
var myTable = myText.convertToTable(",",";");

//Change Table direction (paragraph direction is LTR, the converted table is LTR 
//use table direction property to have table RTL), this change also the align 
myStory.tables.item(1).tableDirection = TableDirectionOptions.rightToLeftDirection;

var myPargraph = myStory.paragraphs.item(5);
myPargraph.paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;
var myStartCharacter = myPargraph.characters.item(0);
var myEndCharacter = myPargraph.characters.item(-2);
var myText = myStory.texts.itemByRange(myStartCharacter, myEndCharacter);
var myTable = myText.convertToTable(",",";");

var myPargraph = myStory.paragraphs.item(7);
myPargraph.paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;
var myStartCharacter = myPargraph.characters.item(0);
var myEndCharacter = myPargraph.characters.item(-2);
var myText = myStory.texts.itemByRange(myStartCharacter, myEndCharacter);
var myTable = myText.convertToTable(",",";");

//Change Table direction (paragraph direction is RTL, the converted table is RTL 
//use table direction property to have table LTR) 
myStory.tables.item(3).tableDirection = TableDirectionOptions.leftToRightDirection;


// 
// Here we export doc
// 
myDocument.exportFile(ExportFormat.pdfType, new File("/srv/_IGM/ImprovedHelloWorld.pdf"));
//Close the document.
app.documents.item(0).close();
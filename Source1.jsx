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
// var myTextFrame = myPage.textFrames.add();
// myTextFrame.geometricBounds = [20, 20, 190, 190];
// myTextFrame.contents = "This is some example text.";

// var myTextFrame = myDocument.pages.item(0).textFrames.add({geometricBounds:[20, 20, 190, 190], contents:"This is some example text."});

var myNewText = "\rThis is a new paragraph of example text.";
myTextFrame.parentStory.insertionPoints.item(-1).contents = myNewText;

//
// create preferences
//
with(app.pdfExportPreferences){
    //Basic PDF output options.
    pageRange = PageRange.allPages;
    acrobatCompatibility = AcrobatCompatibility.acrobat6;
    exportGuidesAndGrids = false;
    exportLayers = false;
    exportNonPrintingObjects = false;
    exportReaderSpreads = false;
    generateThumbnails = false;
try{
    ignoreSpreadOverrides = false;
}
catch(e){}
includeBookmarks = true;
includeHyperlinks = true;
includeICCProfiles = true;
includeSlugWithPDF = false;
includeStructure = false;
interactiveElementsOption = InteractiveElementsOptions.doNotInclude;
//Setting subsetFontsBelow to zero disallows font subsetting;
//set subsetFontsBelow to some other value to use font subsetting.
subsetFontsBelow = 0;
//
//Bitmap compression/sampling/quality options.
colorBitmapCompression = BitmapCompression.zip;
colorBitmapQuality = CompressionQuality.eightBit;
colorBitmapSampling = Sampling.none;
//thresholdToCompressColor is not needed in this example.
//colorBitmapSamplingDPI is not needed when colorBitmapSampling
//is set to none.
grayscaleBitmapCompression = BitmapCompression.zip;
grayscaleBitmapQuality = CompressionQuality.eightBit;
grayscaleBitmapSampling = Sampling.none;
//thresholdToCompressGray is not needed in this example.
//grayscaleBitmapSamplingDPI is not needed when grayscaleBitmapSampling
//is set to none.
monochromeBitmapCompression = BitmapCompression.zip;
monochromeBitmapSampling = Sampling.none;
//thresholdToCompressMonochrome is not needed in this example.
//monochromeBitmapSamplingDPI is not needed when
//monochromeBitmapSampling is set to none.
//
//Other compression options.
compressionType = PDFCompressionType.compressNone;
compressTextAndLineArt = true;
cropImagesToFrames = true;
optimizePDF = true;
//Printers marks and prepress options.
//Get the bleed amounts from the document's bleed.
//~ bleedBottom = app.activeDocument.documentPreferences.documentBleedBottomOffset;
//~ bleedTop = app.activeDocument.documentPreferences.documentBleedTopOffset;
//~ bleedInside = app.activeDocument.documentPreferences.
//~ documentBleedInsideOrLeftOffset;
//~ bleedOutside = app.activeDocument.documentPreferences.
//~ documentBleedOutsideOrRightOffset;
//If any bleed area is greater than zero, then export the bleed marks.
if(bleedBottom == 0 && bleedTop == 0 && bleedInside == 0 &&
bleedOutside == 0){
    bleedMarks = true;
}
else{
    bleedMarks = false;
}
colorBars = true;
colorTileSize = 128;
grayTileSize = 128;
cropMarks = true;
omitBitmaps = false;
omitEPS = false;
omitPDF = false;
pageInformationMarks = true;
pageMarksOffset = 1;
pdfColorSpace = PDFColorSpace.unchangedColorSpace;
//Default mark type.
pdfMarkType = 1147563124;
printerMarkWeight = PDFMarkWeight.p125pt;
registrationMarks = true;
try{
    simulateOverprint = false;
}
catch(e){}
useDocumentBleedWithPDF = true;
//Set viewPDF to true to open the PDF in Acrobat or Adobe Reader.
viewPDF = false;
}

// app.activeDocument.exportFile(ExportFormat.pdfType, File("/c/_IGM/myTestDocument.pdf"), false);
app.documents[0].exportFile(ExportFormat.pdfType, File("/srv/_IGM/myTestDocument.pdf"), false);
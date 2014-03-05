var myPDFExportPreset = app.pdfExportPresets.item("prepress"); 
app.documents[0].exportFile(ExportFormat.pdfType, File("/c/myTestDocument.pdf"), false, myPDFExportPreset);
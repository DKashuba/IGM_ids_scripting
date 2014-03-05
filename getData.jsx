// 
// get data table class
// 
var getData = (function () {
    return {
        // get simple csv-like text
        getTextData: function() {

            //Fill the text frame with placeholder text.
            var myString = "Note 9 Table 3 Amortization Intangible Assets\r";
            myString += "Column 1,Column 2,Column 3;1a,1b,1c;2a,2b,2c;3a,3b,3c\r";

            return myString;

        },
        getDbData: function() {

            return null;

        }
    }
})();

// pass data to text frame
myTextFrame.contents = getData.getTextData();
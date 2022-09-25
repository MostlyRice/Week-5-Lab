
    let homeownerNameInput = document.querySelector('#homeowner-name')
    let homeownerHouseNumberInput = document.querySelector('#homeowner-house-number')
    let homeownerStreetNameInput = document.querySelector('#homeowner-street-name')
    let treeTypeSelect = document.querySelector('#tree-type')
    let cityNameInput = document.querySelector('#city')
    let zipcodeInput = document.querySelector('#zipcode')
    let submitButton = document.querySelector('#submit-order')
    let orderSummaryParagraph = document.querySelector('#order-summary')

    submitButton.addEventListener('click', function() {

        let name = homeownerNameInput.value 
        let houseNumber = homeownerHouseNumberInput.value
        let streetName = homeownerStreetNameInput.value
        let treeType = treeTypeSelect.value
        let city = cityNameInput.value
        let zipcode = zipcodeInput.value

        let errors = []

        // Validate that all six input and select elements have been completed
        //  - check they all have a value
        if (!name) {    
            errors.push('Enter your name')
        }
        if (!houseNumber) {
            errors.push('Enter your house number')
        }
        if (!streetName) {
            errors.push('Enter your street address')
        }
        if (treeType == "") {
            errors.push('Select a tree type')
        }
        if (!city) {
            errors.push('Enter your city')
        }
        if (!zipcode) {
            errors.push('Enter a zip code')
        }
        if (errors.length > 0) {
            let errorMessage = errors.join('\n')
            alert(errorMessage)
            return
        }
        
        // Validate the zipcode is in the range 55001 and 56763. 
        // to check that the zip code is in Minnesota.
        if (zipcode <55001 || zipcode > 56763) {
            errors.push('Enter a valid Minnesota zipcode')
        }
        // Make sure your script doesn't accept non-numeric input for the zip code. 

        // Optional extra: add the class .error to any inputs with an error (and only inputs with an error)
        // to give the user visual feedback for which inputs need to be fixed or completed. 
        // There's a style for input.error and select.error defined in the styles (in the head)
        // which will be applied if you give the class .error to any elements on the page. 
        // Make sure you remove this class when the form is completed correctly.

        
        // If a form element has not been completed, or if the data is not valid, 
        // add an error message to the errors array. (Hint: use push to add to the end of the array)
        // Add one error message for each problem with the form. 

        
        // TODO - If there are any errors after checking all of the input elements, 
        // display an alert with all of the error messages. (Hint: use join)
        // and then return from this function to prevent further processing 


        // If there are no errors, use a template string to display an order 
        // summary in the order summary paragraph.
        let summary =  `Homeowner Name: ${name} Address: ${houseNumber} ${streetName} ${city}, Minnesota ${zipcode} 
        Tree Type: ${treeType}`

        orderSummaryParagraph.innerHTML = summary
    })



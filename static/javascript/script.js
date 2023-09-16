// const SelectImage = document.querySelector('.select_image_button');
// const InputFile = document.querySelector('#pic_upload');
// const form = document.querySelector('#myForm');

// SelectImage.addEventListener('click', function(){
//     InputFile.click();
// })


document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const uploadForm = document.querySelector("#upload-form");

    // Get the file input element
    const PicUpload = document.querySelector("#pic_upload");

    const SelectImage = document.querySelector('.select_image_button');

    const PicSubmit = document.querySelector('#pic_submit');

    const Submit = document.querySelector('.submit_buttom');

    // Add a click event listener to the "select_image_button"
    SelectImage.addEventListener('click', function() {
        //console.log("Button clicked");
        PicUpload.click(); // Trigger file input click when the button is clicked
    });

    Submit.addEventListener('click', function(){
        PicSubmit.click();
    });

    // Add a submit event listener to the form
    uploadForm.addEventListener("submit", function(event) {
        console.log("Form submitted");
        // Check if a file is selected
        if (fileInput.files.length === 0) {
            alert("Please select a file.");
            event.preventDefault(); // Prevent the form from submitting
        }
    });
});
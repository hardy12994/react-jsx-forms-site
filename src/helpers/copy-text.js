let copyToClipBoard = function (id) {
    // /* Get the text field */
    var copyText = document.getElementById(id);

    // /* Select the text field */
    // copyText.select();

    // /* Copy the text inside the text field */
    // document.execCommand("copy");

    // /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);


    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = copyText.value;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
};



export default copyToClipBoard = copyToClipBoard;
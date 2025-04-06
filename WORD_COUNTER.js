//JavaScript code 
//Function to count words in a string 
function countWords(text) {
    //Trim the text to remove leading and trailing whitespace, then split by spaces 
    const words = text.trim().split(/\s+/);
    //Return the number of words, handling the case of empty input 
    return words[0] === "" ? 0 : words.length;  //If the first element is empty, return 0; otherwise, return the length of the array
}

//Get the textarea and word count display elements by their IDs
const textInput = document.getElementById("textInput"); // Selects the textarea for user input 
const wordCountDisplay = document.getElementById("wordCount");  //Selects the element to display the word count 

//Adds an event listener to the text area to count words on input 
textInput.addEventListener("input", function() {
    const text = textInput.value;  //get the current value of the text area 
    const wordCount = countWords(text); //Call the count words function to get the word count 
    wordCountDisplay.innerText = `Word Count: ${wordCount}`; // Update the word count display with the new count 
});
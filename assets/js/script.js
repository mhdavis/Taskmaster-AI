// DEVELOPER_INITIALS -- Developer Comments take this format --
// Otherwise they are explanitory comments

/*
----------------- OVERALL COMMENTS -----------------------
- Consider making a list of keywords, that way if you host on server and people
create new keywords through tasks, it adds them to global list of keyword object
names, so that Taskmaster learns new tasks it can provide.

*/

// List of available tasks that can be appended with new task types
let objectTaskArray = [];

document.getElementById("submit").addEventListener('click', submitRequest());

function submitRequest() {
    let userInput = document.getElementById("input-text").value;
    console.log("event handler clicked");
    extractKeyword(userInput);
    userInput = "";
}

/*
FUNCTION: MAKE OBJECT
constructor that uses keyword and infoArray to create object
named after keyword used with info array property using user input
*/
function makeObject(taskType, taskRecipient, information, printedStatement) {
  // MHD -- Check to make sure setting up constructor correctly --
  this.taskType = taskType;
  this.taskRecipient = taskRecipient
  this.infoArray = information;
  // MHD -- Unsure of whether to include print statement --
  this.statement = statement;
}


/*
FUNCTION: CONVERT TO ARRAY
Converts string to array
*/
function convertToArray(string) {
  if (typeof string === String) {
    return string.split('');
  } else {
    alert("Please enter a string");
  }
}

/*
FUNCTION: DETECT PASSPHRASE
Detects to see if "Yo Taskmaster" is used in user input at the beginning

***input argument must be an array

MHD -- instead have it convertToArray then make everything uppercase
removing the need to check all possible capitalization cases.
*/
function detectPassphrase(str) {
  let inputArray = convertToArray(str);
  let lwrInputArray = inputArray.join('')
    .toLowerCase()
    .split('');
  if (inputArray.length >= 2) {
    if (lwrInputArray[0] === "yo" && lwrInputArray[1] === "taskmaster") {
      return true;
    } // end second if statement
  } // end first if statement
  return false;
};


function setAppointment() {
  let specificTaskRecipient = prompt("Who is your appointment with?");
  let specificInfoStr = prompt("What time and day is your appointment?");
  let specificInfoArray = specificInfoStr.split(' on '); // MHD -- need better separation case --
  let specificPrintedStatement = "You have a " + specificTaskType + " with " + specificRecipient + " at " + specificInfoArray[0] + " on " + specificInfoArray[1];
  let taskMade = objectTaskArray.push((makeObject(specificTask, specificTaskRecipient, specificTask, specificPrintedStatement)));
  console.log(ObjectTaskArray);
  return;
}

/*
FUNCTION: EXTRACT KEYWORD
parses request from user input and extract keywords

***takes string as argument
*/
function extractKeyword(input) {
  // checks to see if initial request takes command word "Yo Taskmaster"
  if (typeof input === String) {
    // parse string into array of words
    let inputArray = input.tolowerCase()
      .split('');
    // request is an empty string
    if (inputArray.length !== 0) {
      // determine if the passphrase was used
      if (detectPassphrase(input) === true) {
        for (let i = 0; i < inputArray.length; i++) {
          // if the user used "make", "set", "or appointment"
          if (inputArray.indexOf("make") > -1 ||
            inputArray.indexOf("set") > -1 ||
            inputArray.indexOf("schedule") > -1 &&
            inputArray.indexOf("appointment") > -1);
          // if "Yo Taskmaster" is included in the input
          // MHD -- improve conditions to be more inclusive of various scenario --
          let specificTaskType = "appointment";
          // check to see if appointment isn't already in object array;
          for (i = 0; i < objectTaskArray.length; i++) {
            if (specifiedTask === objectTaskArray[i]) {
              console.log("it looks like this task already exists");
              console.log(objectTaskArray[i]);
            } else {
              // MHD -- improve condtions to be more inclusve of different phrasings
              setAppointment();
            }
          }

        }
      } else if (detectPassphrase(input) === false) {
        // if "Yo taskmaster" is NOT included in the user input
        // state: "sorry i didn't get that, could you please address me with 'Yo Task Master' "
        alert("please use the 'Yo Taskmaster' phrase to enable taskmaster")

      } else if (inputArray.length == 2) {
        // If the request ONLY has the words "Yo Taskmaster"
        if (inputArray[0] === "Yo" || inputArray[0] === "yo") {
          if (inputArray[1] === "Taskmaster" || inputArray[1] === "taskmaster") {
            console.log('How may I help you? Please specify your request');
          }
        }
      }
    }
  }
}

// DEVELOPER_INITIALS -- Developer Comments take this format --
// Otherwise they are explanitory comments


/*
----------------- OVERALL COMMENTS -----------------------
- Consider making a list of keywords, that way if you host on server and people
create new keywords through tasks, it adds them to global list of keyword object
names, so that Taskmaster learns new tasks it can provide.

*/

//
// MHD --  --
let objectTaskArray = [];

/*
FUNCTION: MAKE OBJECT
constructor that uses keyword and infoArray to create object
named after keyword used with info array property using user input
*/
function makeObject (taskType, taskRecipient, information, printedStatement) {
  // MHD -- Check to make sure setting up constructor correctly
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
function convertToArray (string) {
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
function detectPassphrase (input) {
  var inputArray = convertToArray(input);
    if (inputArray.length !== 0) {
      if (inputArray[0] == "Yo" || inputArray[0] == "yo") {
        if (inputArray[1] == "Taskmaster" || inputArray[1] == "taskmaster") {
          // MHD -- consider changing conditionals to ignore capitalization --
          return true;
        } // end third if statement
      } // end second if statement
    } // end first if statement
  return false;
};

/*
FUNCTION: EXTRACT KEYWORD
parses request from user input and extract keywords

***takes string as argument
*/
function extractKeyword (input) {
  // checks to see if initial request takes command word "Yo Taskmaster"
  if (typeof input === String) {
    var inputArray = input.split('');
    if (inputArray.length !== 0) {
      if (detectPassphrase(input) === true) {
        for (var i=0; i < inputArray.length; i++) {

          if (inputArray.indexOf("make") > -1 || inputArray.indexOf("set") > -1 && inputArray.indexOf("appointment") > -1);
          // if "Yo Taskmaster" is included in the input
          // MHD -- improve conditions to be more inclusive of various scenario --
            var specificTaskType = "appointment";
            for (i=0; i < objectTaskArray.length; i++) {
              if (specifiedTask === objectTaskArray[i]) {

              } else {
                // MHD -- improve condtions to be more inclusve of different phrasings
                  var specificTaskRecipient = prompt ("Who is your appointment with?");
                  var specificInfoStr = prompt("What time and day is your appointment?");
                  var specificInfoArray = specificInfoStr.split(' on '); // MHD -- need better separation case --
                  var specificPrintedStatement = "You have a " + specificTaskType + " with " + specificRecipient + " at " + specificInfoArray[0] + " on " + specificInfoArray[1];
                  var taskMade = objectTaskArray.push((makeObject(specificTask, specificTaskRecipient, specificTask, specificPrintedStatement)));
              }
            }

          }
      } else if (detectPassphrase(input) === false) {
      // if "Yo taskmaster" is NOT included in the user input
      // state: "sorry i didn't get that, could you please address me with 'Yo Task Master' "
        alert()

      } else if (inputArray.length == 2) {
        // If the request ONLY has the words "Yo Taskmaster"
        if (inputArray[0] == "Yo" || inputArray[0] == "yo") {
          if (inputArray[1] == "Taskmaster" || inputArray[1] == "taskmaster") {
            alert('How may I help you? Please specify your request');
          }
        }
    }
  }
}

// Function that makes appointments

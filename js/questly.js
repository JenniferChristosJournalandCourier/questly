// Connected to index.html

var myForm, nameField, questField, userData;
myForm = document.querySelector('form');
nameField = myForm.elements.name;
questField = myForm.elements.quest;

// function concat(str1, str2) {
//   return str1 + ' ' + str2;
// }

// concat('Kermit', 'The Frog');
// will return 'Kermit The Frog'

function getValues(ev) {
  ev.preventDefault();
  userData = {
    name: nameField.value,
    quest: questField.value
  }
  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
  storyDiv.innerHTML = userData.name + ', ' + userData.quest;
}

myForm.onsubmit = getValues;

// access values like this, once you've run getValues():
// userData.quest

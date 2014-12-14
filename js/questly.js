// Connected to index.html

var myForm, nameField, questField, colorField, userData;
myForm = document.querySelector('form');
nameField = myForm.elements.name;
questField = myForm.elements.quest;
colorField = myForm.elements.color;


// function concat(str1, str2) {
//   return str1 + ' ' + str2;
// }

// concat('Kermit', 'The Frog');
// will return 'Kermit The Frog'

function getValues(ev) {
  ev.preventDefault();
  userData = {
    name: nameField.value,
    quest: questField.value,
    color: colorField.value
  }
  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
  storyDiv.innerHTML = userData.name + ', in a quest to ' + userData.quest + ', shall ride a ' + userData.color + ' horse.';
}

myForm.onsubmit = getValues;

// access values like this, once you've run getValues():
// userData.quest

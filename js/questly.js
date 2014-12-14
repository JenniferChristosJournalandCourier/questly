// Connected to index.html
function questly() {
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
  //debugger;
  userData = {
    name: nameField.value,
    quest: questField.value,
    color: colorField.value,
    friend: this.elements.friend.checked
  }
  //console.log(userData.friend);
  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
  var friendStory = '';
  if (userData.friend) {
    friendStory = ' Hey, I see you brought your friend!';
  }
  storyDiv.innerHTML = userData.name + ', in a quest to ' + userData.quest + ', shall ride a ' + userData.color + ' horse.' + friendStory;
}

myForm.onsubmit = getValues;

}
questly();

// access values like this, once you've run getValues():
// userData.quest

// Connected to index.html
function questly() {
  var myForm, nameField, secretAgentNameField, questField, colorField, userData;
  myForm = document.querySelector('form');
  nameField = myForm.elements.name;
  secretAgentNameField = myForm.elements.secret_agent_name;
  questField = myForm.elements.quest;
  colorField = myForm.elements.color;

  function getValues(ev) {
    ev.preventDefault();
    //debugger;
    userData = {
      name: nameField.value,
      secretAgentName: secretAgentNameField.value,
      quest: questField.value,
      color: colorField.value,
      friend: this.elements.friend.checked,
      useAgent: this.elements.use_agent.checked
    }
    //console.log(userData.friend);
    writeData();
  }

  function writeData() {
    var storyDiv = document.getElementById('story');
    var friendStory = '';
    if (userData.friend) {
      friendStory = ' Don\'t forget. Hey, I see you brought your friend!';
    }
    var nameToUse = userData.name;
    if (userData.useAgent) {
      nameToUse = userData.secretAgentName;
    }
    var story = nameToUse + ', in a quest to ' + userData.quest + ', shall ride a ' + userData.color + ' horse.' + friendStory;

    storyDiv.innerHTML = story;
  }

myForm.onsubmit = getValues;

}
questly();





// function concat(str1, str2) {
//   return str1 + ' ' + str2;
// }

// concat('Kermit', 'The Frog');
// will return 'Kermit The Frog'

// access values like this, once you've run getValues():
// userData.quest

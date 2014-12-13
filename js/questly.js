// var name = prompt('What is your name?');
//
// if (name && (name !=='null')) {
//     document.writeln('Go on, ');
//   }
//   else {
//     document.writeln('<p>Oops, start over</p>');
// }
// var quest = prompt('What is your quest?');
//
// if (quest && (quest !=='null')) {
//     document.writeln('proceed...');
//   }
//   else {
//     document.writeln('<p>Oops, start over</p>');
// }
// var color = prompt('What is your favorite color?');
//
// if (color && (color !=='null')) {
//     document.writeln('Very good my friend.');
//   }
//   else {
//     document.writeln('<p>Oops, start over</p>');
// }
// alert(name + ' is a knight and shall be granted a ' + color + ' horse. This be the quest of the knight: ' + quest + '.')
//






//Lab time!
//
// Go full Monty Python! Ask "What is your name?", "What is your quest?", and "What is your favorite color". Write something to the document using all three of the entered values.


var name = prompt('What is your name?');
if (!name || name === 'null') {
  name = 'Stupidhead';
}

var quest = prompt('What is your quest?');
if (!quest || quest === 'null') {
  quest = 'To become more cooperative';
}

var color = prompt('What is your favorite color?')
if (!color || color === 'null') {
  color = 'clear';
}

document.writeln('<p>There once was a warrior named ' + name + ' on a mighty quest indeed: ' + quest + '. Luckily, ' + name + ' was wearing lucky socks&mdash;colored ' + color + '<p>');

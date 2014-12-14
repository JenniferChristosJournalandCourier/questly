var myForm, myStr1, myStr2;

myForm = document.querySelector('form');

function refreshFormValues() {
  myStr1 = myForm.elements.str1.value;
  myStr2 = myForm.elements.str2.value;
}

function concat(str1, str2) {
  return str1 + ' ' + str2;
}

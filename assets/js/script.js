// Optional: Add JavaScript if you want to perform additional actions on click
document.getElementById('customCheckbox').addEventListener('change', function() {
  if (this.checked) {
      // Do something when checked
      console.log('Checkbox is checked');
  } else {
      // Do something when unchecked
      console.log('Checkbox is unchecked');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var select = document.getElementById('sel1');
  var options = select.options;

  for (var i = 0; i < options.length; i++) {
      options[i].addEventListener('mouseover', function() {
          this.style.backgroundColor = '#add8e6'; // Light blue background
          this.style.color = '#fff'; // White text color
      });

      options[i].addEventListener('mouseout', function() {
          this.style.backgroundColor = ''; // Reset to default
          this.style.color = ''; // Reset to default
      });
  }
});

function toggleDivs() {
  var firstButton = document.getElementById('first');

  var secondDiv = document.getElementById('second');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
function secondHidden() {
  var firstButton = document.getElementById('second');
  
  var secondDiv = document.getElementById('third');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
function thirdHidden() {
  var firstButton = document.getElementById('third');
  
  var secondDiv = document.getElementById('four');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
function fourHidden() {
  var firstButton = document.getElementById('four');
  
  var secondDiv = document.getElementById('five');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
function fiveHidden() {
  var firstButton = document.getElementById('five');
  
  var secondDiv = document.getElementById('six');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
function sixHidden() {
  var firstButton = document.getElementById('six');
  
  var secondDiv = document.getElementById('seven');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
function sevenHidden() {
  var firstButton = document.getElementById('seven');
  
  var secondDiv = document.getElementById('last');

  // Hide the first button
  firstButton.style.display = 'none';

  // Display the second div
  secondDiv.style.display = 'block';
}
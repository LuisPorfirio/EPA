const tButton = document.getElementById('t-button');
const tLabel = document.getElementById('t-label');
const tButton2 = document.getElementById('t-button2');
const tLabel2 = document.getElementById('t-label2');
var i =0;
tButton.addEventListener('change', function() {
  if (tButton.checked) {
    tLabel.classList.add('checked');
    i = i+1;
    console.log(i);
  } else {
    tLabel.classList.remove('checked');
    i = i-1;
    console.log(i);
  }
});
tButton.addEventListener('change', function() {
    if (tButton2.checked) {
      tLabel2.classList.add('checked');
      i = i+1;
      console.log(i);
    } else {
      tLabel2.classList.remove('checked');
      i = i-1;
      console.log(i);
    }
  });

/**********
* DATA *
**********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
* HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  
  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }
  
  return arr.slice().sort(byNumber);
}

/*******************
* YOUR Images BELOW *
*******************/
d6R = document.getElementById('d6-roll');
d6R.src = '/images/start/d6.png'
dD6R1R = document.getElementById('double-d6-roll-1');
dD6R1R.src = '/images/start/d6.png'
dD6R2R = document.getElementById('double-d6-roll-2');
dD6R2R.src ='/images/start/d6.png'
d12R = document.getElementById('d12-roll');
d12R.src ='/images/start/d12.jpeg'
d20R = document.getElementById('d20-roll');
d20R.src ='/images/start/d20.jpg'

document.getElementById("d6-rolls-mean").innerText = "NA";
document.getElementById("d6-rolls-median").innerText = "NA";
document.getElementById("d6-rolls-mode").innerText = "NA";
//double sixes
document.getElementById("double-d6-rolls-mean").innerText = "NA";
document.getElementById("double-d6-rolls-median").innerText = "NA";
document.getElementById("double-d6-rolls-mode").innerText = "NA";
//twelves
document.getElementById("d12-rolls-mean").innerText = "NA";
document.getElementById("d12-rolls-median").innerText = "NA";
document.getElementById("d12-rolls-mode").innerText = "NA";
//twenties
document.getElementById("d20-rolls-mean").innerText = "NA";
document.getElementById("d20-rolls-median").innerText = "NA";
document.getElementById("d20-rolls-mode").innerText = "NA";





/*******************
* EVENT LISTENERS *
*******************/
const die = document.getElementById('d6-roll');
die.addEventListener('click', function(){
  sixes.push(getRandomNumber(6));
  dieNum =getRandomNumber(6);
  document.getElementById('d6-rolls-mean').innerText = avg(sixes);
  document.getElementById('d6-rolls-median').innerText = median(sixes);
  d6R.src = `/images/d6/${dieNum}.png`;
  // console.log(sortByNumber(sixes))
  // console.log("average:",avg(sixes))
  // console.log("median:", median(sixes))
});




// ================================================
const dice = document.getElementById('double-d6');
dice.addEventListener('click', function(){
  doubleSixes.push(getRandomNumber(6),getRandomNumber(6));
  dieNum1 = getRandomNumber(6);
  dieNum2 = getRandomNumber(6);
  document.getElementById('double-d6-rolls-mean').innerText = avg(doubleSixes);
  document.getElementById('double-d6-rolls-median').innerText = median(doubleSixes);
  dD6R1R.src = `/images/d6/${dieNum1}.png`;
  dD6R2R.src = `/images/d6/${dieNum2}.png`;
  // console.log(sortByNumber(doubleSixes))
  // console.log("average:",avg(doubleSixes))
  // console.log("median:", median(doubleSixes))
});




// ===============================================
const die12 = document.getElementById('d12');
die12.addEventListener('click',function(){
  twelves.push(getRandomNumber(12));
  dieNum12 = getRandomNumber(12);
  document.getElementById('d12-rolls-mean').innerText = avg(twelves);
  document.getElementById('d12-rolls-median').innerText = median(twelves);
  d12R.src = `/images/numbers/${dieNum12}.png`;
  // console.log(sortByNumber(twelves))
  // console.log("average:",avg(twelves))
  // console.log("median:", median(twelves))
});




// ================================================
const die20 = document.getElementById('d20');
die20.addEventListener('click', function(){
  twenties.push(getRandomNumber(20));
  dieNum20 = getRandomNumber(20);
  document.getElementById('d20-rolls-mean').innerText = avg(twenties);
  document.getElementById('d20-rolls-median').innerText = median(twenties);
  d20R.src = `/images/numbers/${dieNum20}.png`;
  // console.log("average:",avg(twenties))
  // console.log("median:", median(twenties))
  // console.log(sortByNumber(twenties))
});

/******************
* RESET FUNCTION *
******************/
function resetImg(){
  d6R = document.getElementById('d6-roll');
  d6R.src = '/images/start/d6.png'
  dD6R1R = document.getElementById('double-d6-roll-1');
  dD6R1R.src = '/images/start/d6.png'
  dD6R2R = document.getElementById('double-d6-roll-2');
  dD6R2R.src ='/images/start/d6.png'
  d12R = document.getElementById('d12-roll');
  d12R.src ='/images/start/d12.jpeg'
  d20R = document.getElementById('d20-roll');
  d20R.src ='/images/start/d20.jpg'
}

function resetAvg() {
  //sixes
  document.getElementById("d6-rolls-mean").innerText = "NA";
  document.getElementById("d6-rolls-median").innerText = "NA";
  document.getElementById("d6-rolls-mode").innerText = "NA";
  //double sixes
  document.getElementById("double-d6-rolls-mean").innerText = "NA";
  document.getElementById("double-d6-rolls-median").innerText = "NA";
  document.getElementById("double-d6-rolls-mode").innerText = "NA";
  //twelves
  document.getElementById("d12-rolls-mean").innerText = "NA";
  document.getElementById("d12-rolls-median").innerText = "NA";
  document.getElementById("d12-rolls-mode").innerText = "NA";
  //twenties
  document.getElementById("d20-rolls-mean").innerText = "NA";
  document.getElementById("d20-rolls-median").innerText = "NA";
  document.getElementById("d20-rolls-mode").innerText = "NA";
}

const restart = document.querySelector('button');
restart.addEventListener('click', function (){
  sixes.splice(0, sixes.length);
  doubleSixes.splice(0, doubleSixes.length);
  twenties.splice(0, twenties.length);
  twelves.splice(0, twelves.length);
  // console.log(sixes);
  // console.log(doubleSixes);
  // console.log(twelves);
  // console.log(twenties);
  resetAvg();
  resetImg();
});


/****************************
* CLICK HANDLING FUNCTIONS *
****************************/



/**********************************************************************
//                            * MATH SECTION *
*********************************************************************/
function avg(arr){
  for(let i = 0; i < arr.length; i ++){
    var sum = (arr[i] / arr.length) * arr.length  
  }
  return sum;
}
// ===========================================
function median(arr) {
  arr.sort( function(a,b) {return a - b;} );
  var half = Math.floor(arr.length/2);
  if(arr.length % 2)
  return arr[half];
  else
  return (arr[half-1] + arr[half]) / 2.0;
}
// ==========================================





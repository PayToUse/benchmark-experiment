var record = 2182741;

function displayRecord() {
  document.getElementById("record").innerHTML = "Benchmark Record: " + new Intl.NumberFormat().format(record);
}

function benchmark() {
  var result = Math.floor(Math.random() * 200) + 199799;
  var finalM = 1 + (dMulti() / 100);
  var fixedM = finalM.toFixed(2);
  var truncResult = Math.trunc(result * finalM);
  var formatResult = new Intl.NumberFormat().format(truncResult);
  var percent = truncResult / record;
  
  var addPercent = percent - 1;
  var finalAddPercent = addPercent.toFixed(2);
  var fixedPercent = percent * 100;
  var finalPercent = fixedPercent.toFixed(2);
  
  document.getElementById("result").innerHTML = formatResult;
  
  if (truncResult > 50000) {
    document.getElementById("thoughts").innerHTML = "goddamn that's weak as fuck";
  }
  if (truncResult > 100000) {
    document.getElementById("thoughts").innerHTML = "still weak but it's improving...";
  }
  if (truncResult > 150000) {
    document.getElementById("thoughts").innerHTML = "not so decent enough";
  }
  if (truncResult > 200000) {
    document.getElementById("thoughts").innerHTML = "the benchmark is hella complicated.";
  }
  if (truncResult > 250000) {
    document.getElementById("thoughts").innerHTML = "pretty decent, but atleast it improved";
  }
  if (truncResult > 300000) {
    document.getElementById("thoughts").innerHTML = "can now ai-generate basic stuff";
  }
  if (truncResult > 375000) {
    document.getElementById("thoughts").innerHTML = "near to being a mid-ranger phone";
  }
  if (truncResult > 400000) {
    document.getElementById("thoughts").innerHTML = "now 60fps in minecraft with 8 chunks render distance";
  }
  if (truncResult > 500000) {
    document.getElementById("thoughts").innerHTML = "the power of a mid-ranger";
  }
  if (truncResult > 750000) {
    document.getElementById("thoughts").innerHTML = "flagship moment";
  }
  if (truncResult > 1000000) {
    document.getElementById("thoughts").innerHTML = "based phone, which can run much heavier games";
  }
  if (truncResult > 1500000) {
    document.getElementById("thoughts").innerHTML = "the benchmark gets near the record";
  }
  if (truncResult > 2000000) {
    document.getElementById("thoughts").innerHTML = "now stronger than ever, but extremely near the record";
  }
  if (truncResult > record) {
    document.getElementById("thoughts").innerHTML = "past the record, ggs";
  }
  if (truncResult > 2500000) {
    document.getElementById("thoughts").innerHTML = "i can tell this phone is pretty godly as hell";
  }
  if (truncResult > 3000000) {
    document.getElementById("thoughts").innerHTML = "how well does this even perform???";
  }
  if (truncResult > 3500000) {
    document.getElementById("thoughts").innerHTML = "can now run grand theft auto five in max settings";
  }
  if (truncResult > 4000000) {
    document.getElementById("thoughts").innerHTML = "now this phone can now run minecraft bedrock with up to 128 chunks render distance with higher-end shaders";
  }
  if (truncResult > 5000000) {
    document.getElementById("thoughts").innerHTML = "how good is this phone?? was it even overheating while it's just..... overclocked or something???";
  }
  if (truncResult > 6000000) {
    document.getElementById("thoughts").innerHTML = "the phone this fast can run a heavier experience in roblox with max graphics";
  }
  if (truncResult > 7500000) {
    document.getElementById("thoughts").innerHTML = "holy shit man, now this breaks the limits of every game possible.";
  }
  if (truncResult > 8000000) {
    document.getElementById("thoughts").innerHTML = "this benchmark can now run minecraft bedrock with up to 2048 chunks render distance with high-end shaders";
  }
  if (truncResult > 9000000) {
    document.getElementById("thoughts").innerHTML = "bro now has a superphone.";
  }
  if (truncResult > 10000000) {
    document.getElementById("thoughts").innerHTML = "HOW THE FUCK IS THIS EVEN POSSIBLE????";
  }
  if (truncResult > 12500000) {
    document.getElementById("thoughts").innerHTML = "now can run osu lazer with over a million notes in a standard beatmap";
  }
  if (truncResult > 15000000) {
    document.getElementById("thoughts").innerHTML = "okay fuck this, it can now handle all games in one run.";
  }
  if (truncResult > 17500000) {
    document.getElementById("thoughts").innerHTML = "okay i'm outta here, not gonna come back to commentate this bullshit";
  }
  
  if (truncResult > record) {
    document.getElementById("multi").innerHTML = "Multiplier: " + fixedM + "x, currently beaten the benchmark record, which is equivalent to " + finalAddPercent + " times more than it";
  } else {
    document.getElementById("multi").innerHTML = "Multiplier: " + fixedM + "x, equivalent to " + finalPercent + "% of the record";
  }
}

function dMulti() {
  var savedMultiValue = localStorage.getItem('savedMultiValue') || 0;

  var currentMultiValue = parseInt(savedMultiValue);

  var newMultiValue = currentMultiValue + 1;

  localStorage.setItem('savedMultiValue', newMultiValue); 
  
  return newMultiValue;
}

setInterval(benchmark, 1000);

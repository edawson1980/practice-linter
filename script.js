let filler ='Flannel meh palo santo 8-bit, hammock tumblr pok pok chicharrones bitters pop-up quinoa semiotics shabby chic. Food truck street art biodiesel, narwhal quinoa lumbersexual cray. Farm-to-table hexagon godard, prism seitan slow-carb migas chillwave readymade enamel pin cold-pressed selvage you probably haven\'t heard of them. Man braid retro austin church-key williamsburg gastropub plaid chia jean shorts single-origin coffee gentrify hell of. Pork belly tbh health goth dreamcatcher pop-up migas tote bag you probably haven\'t heard of them whatever. Keffiyeh vice schlitz whatever, iPhone edison bulb craft beer vaporware williamsburg irony fixie letterpress. Pinterest bespoke humblebrag shaman semiotics.'

let words = filler.split(' ');

let t = document.getElementById('total');
let d = document.getElementById('dupe');
let s = document.getElementById('sentence');

let totalWords = () => {

  t.innerHTML = `There are ${words.length} words in this paragraph.`
};

let toggle1 = () => {
  if(t.style.color != 'black'){
    t.style.color = 'black';
  }else{
    t.style.color = 'white';
  }
}



let todos1 = () => {
  totalWords();
  toggle1();
}

let todos2 = () => {
  duplicateWords();
  toggle2();
}

let todos3 = () => {
  sentCount();
  toggle3();
}

let dupes = 'art party tousled palo santo craft beer flannel pork belly shaman authentic mlkshk yr hexagon meh tumblr fixie street biodiesel gentrify tacos selvage pok bitters quinoa semiotics slow-carb migas chillwave you probably haven\'t heard of them williamsburg plaid tbh pop-up whatever'

let dWords = dupes.split(' ');

let duplicateWords = () => {
  d.innerHTML = `There are ${dWords.length} duplicated words in this paragraph.`;

}

let toggle2 = () => {
  if(d.style.color != 'black'){
    d.style.color = 'black';
  }else{
    d.style.color = 'white';
  }
}

let sentenceCount = 0;

let sentCount = () => {
  words.forEach(function(word){
    if(word.charAt(word.length-1) == '.'){
      sentenceCount++;
    }
  })
  s.innerHTML = `There are ${sentenceCount} sentences in this paragraph.`
}

let toggle3 = () => {
  if(s.style.color != 'black'){
    s.style.color = 'black';
  }else{
    s.style.color = 'white';
  }
}

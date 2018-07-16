let filler ='Flannel meh palo santo 8-bit, hammock tumblr pok pok chicharrones bitters pop-up quinoa semiotics shabby chic. Food truck street art biodiesel, narwhal quinoa lumbersexual cray. Farm-to-table hexagon godard, prism seitan slow-carb migas chillwave readymade enamel pin cold-pressed selvage you probably haven\'t heard of them. Man braid retro austin church-key williamsburg gastropub plaid chia jean shorts single-origin coffee gentrify hell of. Pork belly tbh health goth dreamcatcher pop-up migas tote bag you probably haven\'t heard of them whatever. Keffiyeh vice schlitz whatever, iPhone edison bulb craft beer vaporware williamsburg irony fixie letterpress. Pinterest bespoke humblebrag shaman semiotics.'

let words = filler.split(' ');

let totalWords = function(){
  document.getElementById('total').innerHTML = words.length;
};

let dupes = 'art party tousled palo santo craft beer flannel pork belly shaman authentic mlkshk yr hexagon meh tumblr fixie street biodiesel gentrify tacos selvage pok bitters quinoa semiotics slow-carb migas chillwave you probably haven\'t heard of them williamsburg plaid tbh pop-up whatever'

let dWords = dupes.split(' ');

let duplicateWords = () => {
  document.getElementById('dupe').innerHTML = `there are ${dWords.length} duplicate wordsssss`;
  console.log(dWords.length);
}

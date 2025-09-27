function eventhandlerkey(event) {
   const playpres = event.key
   const caretalfabetelement = document.getElementById('inner-tex')
   const caretalfabet = caretalfabetelement.innerText
   const expctedalfabet = caretalfabet.toLowerCase()
   // console.log(expctedalfabet)
   if (playpres === expctedalfabet
   ) {
      console.log('best parfarens')
      console.log('you have',expctedalfabet)
      removeBackgroundcolorByid(expctedalfabet)
      continuegame();

   }
   else {
      console.log('madercode')
   }
}
document.addEventListener('keyup', eventhandlerkey)

function getarandomalhabet() {
   const alfabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const alfabets = alfabet.split('');
   // console.log(alfabets)
   const random = Math.random() * 25
   const number = Math.round(random)
   const gemnumber = alfabets[number]
   return gemnumber;
}
function removeBackgroundcolorByid(elementid) {
   const element = document.getElementById(elementid)
   element.classList.add('bg-orange-400');
}

function continuegame() {
   const alfabet = getarandomalhabet()
   // console.log('your game number', alfabet)
   const text = document.getElementById('inner-tex')
   text.innerText = alfabet;
   removeBackgroundcolorByid(alfabet.toLowerCase());
}


function play() {
   const familysubce = document.getElementById('home-screen');
   familysubce.classList.add('hidden');
   const subcefamily = document.getElementById('play-ground')
   subcefamily.classList.remove('hidden')
   continuegame()
}
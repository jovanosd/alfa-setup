function eventhandlerkey(event) {
   const playpres = event.key
   const caretalfabetelement = document.getElementById('inner-tex')
   const caretalfabet = caretalfabetelement.innerText
   const expctedalfabet = caretalfabet.toLowerCase()
   
  
   if (playpres === expctedalfabet
   ) {
      const caritelife=getTextElementvaluebyId("curite-scor")
      const newscor=caritelife+1
      settextelementvaluebyid("curite-scor",newscor)

      console.log('best parfarens')
      console.log('you have',expctedalfabet)
      removeBackgroundcolorByid(expctedalfabet)
      continuegame();

   }
   else {
      console.log('madercode')
      const element=getTextElementvaluebyId("life-scor")
      const lifescor=element-1
      settextelementvaluebyid("life-scor",lifescor)
      if(lifescor===0){
         gameover()
      }
   }

}
document.addEventListener('keyup', eventhandlerkey)
 function  getTextElementvaluebyId(elementId){
      const element= document.getElementById(elementId)
      const text=element.innerText
      const intjer=parseInt(text)
      return intjer;
   }
   function settextelementvaluebyid(elementId,intjer){
      const element=document.getElementById(elementId)
      element.innerText=intjer
   }


function getarandomalhabet() {
   const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const alfabets = alfabet.split('');
   // console.log(alfabets)
   const random = Math.random() * 25
   const number = Math.round(random)
   const gemnumber = alfabets[number]
   return gemnumber;
}
function setbackgroundcolorbyid(elementid){
   const element=document.getElementById(elementid)
   element.classList.add('bg-orange-400');
}
function removeBackgroundcolorByid(elementid) {
   const element = document.getElementById(elementid)
   element.classList.remove('bg-orange-400');
}

function continuegame() {
   const alfabet = getarandomalhabet()
   
   const text = document.getElementById('inner-tex')
   text.innerText = alfabet;
   setbackgroundcolorbyid(alfabet.toLowerCase());
}

function hiddeelemintbyId(elementId){
   const element=document.getElementById(elementId)
   element.classList.add('hidden')
}
function slowelimentbyId(elementId){
   const element=document.getElementById(elementId)
   element.classList.remove('hidden')
}
function getpointelimentbyid(elementId){
     const element= document.getpointelimentbyid(elementId)
     const tex=element.innerText;
     return tex;
}
function play(){
   hiddeelemintbyId('home-screen')
   hiddeelemintbyId('scoor-swo')
   slowelimentbyId('play-ground')
   settextelementvaluebyid("life-scor",5)
   settextelementvaluebyid("curite-scor",0)

   
   continuegame()
}
function gameover(){
   hiddeelemintbyId('play-ground')
   slowelimentbyId('scoor-swo')
   const lastschor=getTextElementvaluebyId("curite-scor")
   console.log(lastschor)
   settextelementvaluebyid("final-schor",lastschor)
   const delet=gettextelimentbyid('life-scor')
   removeBackgroundcolorByid(delet)
   
}

const WHITE_KEYS = ['a', 's', 'd','f', 'g', 'h', 'j', 'k', 'l', ';', "'", '#'] 
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u', 'o', 'p', '[']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e =>{
    if(e.repeat) return
    // if we make a repeat call for holding down the button, we call return(don't do anything )
    const key = e.key
    // get the key that we pressed
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key) 

    if(whiteKeyIndex > -1) 
    // -1 is returned when it cant finde anything
    playNote(whiteKeys[whiteKeyIndex])
    //we finding index of the key that we pressed and then corresponding that to the index in the array
    if(blackKeyIndex > -1) playNote (blackKeys[blackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    //dataset.note = id of the sound

    noteAudio.currentTime = 0
    //restarting the audio file at the beginning and then replaying it

    noteAudio.play()
    key.classList.add('active')
    //the active class will change the color of the key so we know which key is pressed 

    noteAudio.addEventListener('ended', ()=>{
        key.classList.remove('active')
    // once the .mp3 is done playing, remove the active class 
    })
}
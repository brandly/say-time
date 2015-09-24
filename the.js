var fifteenMinutes = 1000 * 60 * 15

function createMessage(text) {
  var msg = new SpeechSynthesisUtterance()
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[10] // Note: some voices don't support altering params
  msg.voiceURI = 'native'
  msg.volume = 1 // 0 to 1
  msg.rate = 1 // 0.1 to 10
  msg.pitch = 1 //0 to 2
  msg.lang = 'en-US'

  msg.text = text
  return msg
}

function getCurrentTime() {
  return new Date().toString('hh:mm tt')
}

function sayCurrentTime() {
  var time = getCurrentTime()
  var msg = createMessage(time)
  msg.onend = function(e) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.')
  }

  speechSynthesis.speak(msg)
}

sayCurrentTime()
setInterval(sayCurrentTime, fifteenMinutes)

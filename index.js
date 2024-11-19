let utterance; // SpeechSynthesisUtterance instance
let isPlaying = false; // Track play state
const textContainer = document.getElementById('textContainer'); // Text container
console.log(speechSynthesis.getVoices());

// Function to toggle speech
function toggleSpeech() {
    if (isPlaying) {
        stopSpeech();
    } else {
        startSpeech();
    }
}

// Function to start speech
function startSpeech() {
    if (!utterance) {
        prepareSpeech();
    }
    playStopButton.textContent = 'Stop';
    isPlaying = true;
    speechSynthesis.speak(utterance);
}

function stopSpeech() {
    speechSynthesis.cancel();
    resetHighlight();
    playStopButton.textContent = 'Play';
    isPlaying = false;
}

// Function to restart speech
function restartSpeech() {
    stopSpeech();
    startSpeech();
}

function prepareSpeech() {
    // Get text content and split into words
    const text = textContainer.innerText;
    words = text.split(/\s+/);


    // Create SpeechSynthesisUtterance
    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1; // Adjust rate as needed
    utterance.lang = 'en'; // Set language to English (adjust as needed)

   return utterance;

    utterance.onend = stopSpeech;
}

// Highlight the current word
function highlightWord(index) {
    resetHighlight();
    if (wordElements[index]) {
        wordElements[index].classList.add('highlight');
    }
}

// Remove highlights from all words
function resetHighlight() {
    wordElements.forEach(el => el.classList.remove('highlight'));
}


"use client";

import { useState } from "react";

export default function Voice({ onTranscript }) {
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState("");

  function startVoice() {
    const SpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      setMessage("La reconnaissance vocale n'est pas disponible dans ce navigateur.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
      setMessage("Je vous écoute...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onTranscript) onTranscript(transcript);
      setMessage(transcript);
    };

    recognition.onerror = () => {
      setMessage("La reconnaissance vocale a échoué. Vérifiez l'autorisation du microphone.");
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  }

  return (
    <div>
      <button type="button" onClick={startVoice}>
        {listening ? "Écoute en cours..." : "🎙️ Parler"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

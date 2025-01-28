import React, { useState } from 'react';

export default function VoiceAI() {
  const [transcription, setTranscription] = useState('');
  const [response, setResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    const audioChunks = [];
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const formData = new FormData();
      formData.append('audio', audioBlob);

      // Send audio to backend
      const result = await fetch('https://your-backend-url.onrender.com/stt', {
        method: 'POST',
        body: formData,
      });
      const { text } = await result.json();
      setTranscription(text);

      // Get TTS response from backend
      const ttsResult = await fetch('https://your-backend-url.onrender.com/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const ttsBlob = await ttsResult.blob();
      const audioURL = URL.createObjectURL(ttsBlob);
      const audio = new Audio(audioURL);
      audio.play();
      setResponse(text);
    };

    mediaRecorder.start();
    setTimeout(() => {
      mediaRecorder.stop();
      stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }, 5000); // Record for 5 seconds
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Voice AI Agent</h1>
      <button
        onClick={startRecording}
        disabled={isRecording}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {isRecording ? 'Recording...' : 'Start Recording'}
      </button>
      {transcription && <p className="mt-4">You said: {transcription}</p>}
      {response && <p className="mt-2">Response: {response}</p>}
    </div>
  );
}

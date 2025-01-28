from flask import Flask, request, jsonify, send_file
import requests
import os
from io import BytesIO

app = Flask(__name__)

# Environment Variables
DEEPGRAM_API_KEY = os.getenv("c0c5f178b2168f9270b22efd20d01e7f82fe99e7")
DEEPGRAM_URL = "https://api.deepgram.com/v1"

# Speech-to-Text Endpoint
@app.route('/stt', methods=['POST'])
def stt():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file uploaded"}), 400

    audio = request.files['audio']
    headers = {
        'Authorization': f'Token {DEEPGRAM_API_KEY}'
    }
    response = requests.post(
        f"{DEEPGRAM_URL}/listen",
        headers=headers,
        files={"file": audio}
    )
    data = response.json()
    transcription = data.get('results', {}).get('channels', [])[0].get('alternatives', [])[0].get('transcript', '')
    return jsonify({"text": transcription})

# Text-to-Speech Endpoint
@app.route('/tts', methods=['POST'])
def tts():
    data = request.get_json()
    text = data.get('text')
    headers = {
        'Authorization': f'Token {DEEPGRAM_API_KEY}',
        'Content-Type': 'application/json'
    }
    response = requests.post(
        f"{DEEPGRAM_URL}/tts",
        headers=headers,
        json={"text": text, "voice": "en-US-MorganNeural"}
    )
    audio_data = BytesIO(response.content)
    return send_file(audio_data, mimetype='audio/mpeg')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


#deepkey: c0c5f178b2168f9270b22efd20d01e7f82fe99e7
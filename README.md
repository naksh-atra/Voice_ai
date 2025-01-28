# Voice AI Agent Project

## Overview
This project aims to develop a Voice AI agent with a two-phase approach:

- **Phase 1**: Development with frontend, backend, and an offline speech recognition library running locally.
- **Phase 2**: Integration of frontend, backend, Deepgram API for online speech-to-text (STT), Langchain, and LlamaIndex, with hosting on a free platform.

## Phases

### Phase 1: Local Speech Recognition Setup

1. **Frontend**: Built using react with voice interaction capabilities.
2. **Backend**: Built using Node,js and python, communicating with the speech recognition module.
3. **Offline Speech Recognition**: Utilized an existing library like `SpeechRecognition` to convert speech to text without requiring an internet connection. This was hosted on the local PC.

   **Steps**:
   - Install the speech recognition library: `pip install SpeechRecognition`.
   - Implemented a local server to handle requests from the frontend.
   - Speech input was processed using a microphone and converted into text via the library.

   **Challenges**:
   - Local speech recognition occasionally had accuracy issues, requiring optimization through tuning library parameters.
   - Some unexpected audio processing delays led to an inconsistent user experience.

### Phase 2: Online Speech Recognition and Hosting

1. **Frontend**: Same as Phase 1, but enhanced with capabilities to handle both local and online recognition.
2. **Backend**: Integrated with the Deepgram API for online STT, Langchain for advanced processing, and LlamaIndex for organizing and indexing data from speech input.
3. **Deepgram API Integration**: Used for converting speech to text in real-time through API calls.
4. **Langchain & LlamaIndex**: Integrated for querying, processing, and indexing the speech input for more advanced voice agent capabilities.

   **Steps**:
   - Implemented Deepgram API for online speech recognition.
   - Set up Langchain and LlamaIndex for intelligent processing and data management.
   - Hosted the backend to a cloud platform and linked it with the frontend for seamless operation.

   **Challenges**:
   - Deepgram API setup faced a few authentication and API quota issues.
   - Integration with Langchain and LlamaIndex required careful adjustment to ensure smooth communication between services.

## Hosting

### Azure and Heroku Attempts
- **Azure**: Attempted deployment on Azure; however, the platform was costly beyond the free tier limits, making it unsuitable for a budget-friendly solution.

   **Challenges**:
   - The pricing model for Azure services exceeded project budget requirements.
   - Managed resources in Azure were costly and difficult to manage within the available free tier.

- **Heroku**: Tried deploying the app on Heroku, but again encountered limitations with their free tier.

   **Challenges**:
   - Application deployment on Heroku required a paid plan for adequate resource allocation.
   - Free tier limitations on Heroku caused performance issues.

### Cost-Efficient Solution
After the Azure and Heroku attempts, we shifted to using [alternative free hosting solutions like Render, Railway, or Vercel], which provided a more viable approach to meet our cost-efficient goals.

## Key Issues and Errors

1. **Speech Recognition Errors**:
   - In Phase 1, the offline recognition library failed to process certain accents or unclear speech, leading to significant inaccuracies in the transcription. This issue required custom error handling and fallback mechanisms.

2. **Deepgram API Errors**:
   - The Deepgram API key was sometimes invalid, leading to failed requests and issues in the backend server.
   - The API rate limits and request quota were quickly reached, requiring careful management of requests to avoid interruptions in service.

3. **Langchain and LlamaIndex Integration**:
   - Initially, Langchain and LlamaIndex did not properly communicate, resulting in misalignment of data structures between the two services.
   - Addressed by refactoring parts of the integration to ensure correct handling of data pipelines.

4. **Hosting Platform Errors**:
   - Both Azure and Heroku did not meet the budget criteria, as their free tiers had limitations that resulted in insufficient resources for smooth hosting.

5. **Backend Deployment**:
   - Challenges in deploying the backend securely to ensure user data privacy while maintaining optimal performance.

## Conclusion
This project successfully transitioned from a locally hosted offline speech recognition system to a more robust online solution using Deepgram and Langchain. The key challenges were centered around cost management for hosting and the integration of various AI tools, but with careful troubleshooting, these issues were resolved.

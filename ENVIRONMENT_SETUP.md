# Environment Setup for RAG Implementation

## Required API Keys

### 1. Google API Key (for text-embedding-004)
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create or select a project
3. Enable the "Generative Language API"
4. Create credentials (API Key)
5. Copy the API key

### 2. Groq API Key (for Llama 3)
1. Go to [Groq Console](https://console.groq.com/keys)
2. Sign up/log in to your account
3. Create a new API key
4. Copy the API key

## Environment File Setup

Create a `.env.local` file in the root directory with the following content:

```env
# RAG Implementation Environment Variables
GOOGLE_API_KEY=your_actual_google_api_key_here
GROQ_API_KEY=your_actual_groq_api_key_here
NODE_ENV=development
```

## Verification

After setting up the environment variables, you can verify they're working by running:

```bash
npm run dev
```

The RAG system will automatically validate the API keys on startup. 
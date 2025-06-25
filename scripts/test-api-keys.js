#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' });

console.log('🔧 API Keys Validation Test\n');

// Check if environment variables exist
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

console.log('📋 Environment Variables Check:');
console.log(`Google API Key: ${GOOGLE_API_KEY ? '✅ Present' : '❌ Missing'}`);
console.log(`Groq API Key: ${GROQ_API_KEY ? '✅ Present' : '❌ Missing'}\n`);

if (!GOOGLE_API_KEY || !GROQ_API_KEY) {
  console.log('❌ Error: Missing API keys in .env.local file');
  console.log('Please add both GOOGLE_API_KEY and GROQ_API_KEY to your .env.local file\n');
  process.exit(1);
}

// Test Google API Key
async function testGoogleAPI() {
  console.log('🔍 Testing Google API Key...');
  
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + GOOGLE_API_KEY);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Google API Key is VALID');
      console.log(`   Available models: ${data.models?.length || 0} models found`);
      
      // Check if text-embedding-004 is available
      const hasEmbedding = data.models?.some(model => model.name.includes('text-embedding-004'));
      console.log(`   Embedding model: ${hasEmbedding ? '✅ Available' : '⚠️  Check permissions'}`);
      
    } else {
      console.log('❌ Google API Key is INVALID');
      console.log(`   Status: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.log(`   Error: ${errorText.substring(0, 200)}...`);
    }
  } catch (error) {
    console.log('❌ Google API Test Failed');
    console.log(`   Error: ${error.message}`);
  }
  
  console.log('');
}

// Test Groq API Key  
async function testGroqAPI() {
  console.log('🔍 Testing Groq API Key...');
  
  try {
    const response = await fetch('https://api.groq.com/openai/v1/models', {
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Groq API Key is VALID');
      console.log(`   Available models: ${data.data?.length || 0} models found`);
      
      // Check if Llama 3.1 70B is available
      const hasLlama = data.data?.some(model => model.id.includes('llama-3.1-70b'));
      console.log(`   Llama 3.1 70B: ${hasLlama ? '✅ Available' : '⚠️  Check permissions'}`);
      
    } else {
      console.log('❌ Groq API Key is INVALID');
      console.log(`   Status: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.log(`   Error: ${errorText.substring(0, 200)}...`);
    }
  } catch (error) {
    console.log('❌ Groq API Test Failed');
    console.log(`   Error: ${error.message}`);
  }
  
  console.log('');
}

// Test complete RAG system
async function testRAGSystem() {
  console.log('🚀 Testing Complete RAG System...');
  
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'What is GIS?' }
        ],
        userContext: { currentLab: 'general', difficulty: 'beginner' }
      })
    });

    if (response.ok) {
      console.log('✅ RAG API Endpoint is WORKING');
      console.log('   Local server is running and responding correctly');
    } else {
      console.log('⚠️  RAG API Endpoint issue');
      console.log(`   Status: ${response.status} - Make sure dev server is running`);
    }
    
  } catch (error) {
    console.log('⚠️  RAG API Test skipped');
    console.log('   Run "npm run dev" in another terminal to test local API');
  }
  
  console.log('');
}

// Run all tests
async function runAllTests() {
  await testGoogleAPI();
  await testGroqAPI();
  await testRAGSystem();
  
  console.log('🎯 Validation Complete!');
  console.log('');
  console.log('📝 Next Steps:');
  console.log('1. If both API keys are valid ✅ - You\'re ready for deployment!');
  console.log('2. If any API key is invalid ❌ - Check the setup instructions below');
  console.log('3. Add these same keys to Vercel environment variables');
  console.log('');
  console.log('🔗 Get API Keys:');
  console.log('• Google: https://makersuite.google.com/app/apikey');
  console.log('• Groq: https://console.groq.com/keys');
}

// Execute tests
runAllTests().catch(console.error); 
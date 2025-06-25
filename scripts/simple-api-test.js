const fetch = require('node:fetch');

async function testAPI() {
  console.log('🧪 Testing RAG API...\n');
  
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'How do I load a shapefile in QGIS?' }
        ],
        userContext: { currentLab: 'lab1', difficulty: 'beginner' }
      })
    });

    console.log(`Status: ${response.status}`);
    console.log(`Headers:`, Object.fromEntries(response.headers.entries()));
    
    const text = await response.text();
    console.log(`Response:`, text.substring(0, 500));
    
  } catch (error) {
    console.log('Error:', error.message);
  }
}

testAPI(); 
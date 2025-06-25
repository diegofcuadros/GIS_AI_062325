#!/usr/bin/env node
/**
 * Test RAG System
 * Verifies that the RAG API endpoint is working correctly
 */

async function testRAGSystem() {
  console.log('🧪 Testing RAG System...\n')

  const testQueries = [
    {
      query: "How do I load a shapefile in QGIS?",
      context: { currentLab: "lab1", difficulty: "beginner" }
    },
    {
      query: "What is buffer analysis and how do I use it?",
      context: { currentLab: "lab2", difficulty: "intermediate" }
    },
    {
      query: "How do I fix coordinate system problems?",
      context: { currentLab: "general", difficulty: "beginner" }
    }
  ]

  for (let i = 0; i < testQueries.length; i++) {
    const { query, context } = testQueries[i]
    console.log(`📝 Test ${i + 1}: "${query}"`)
    console.log(`📍 Context: Lab ${context.currentLab}, ${context.difficulty} level`)
    
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: query }
          ],
          userContext: context
        })
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.log(`❌ Error: ${response.status} - ${errorData}`)
        continue
      }

      console.log(`✅ Status: ${response.status}`)
      console.log(`📋 Content-Type: ${response.headers.get('content-type')}`)
      
      // Check if it's a streaming response
      if (response.headers.get('content-type')?.includes('text/plain')) {
        const reader = response.body?.getReader()
        let responseText = ''
        
        if (reader) {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            
            const chunk = new TextDecoder().decode(value)
            responseText += chunk
          }
        }
        
        console.log(`📄 Response Preview: ${responseText.substring(0, 200)}...`)
      } else {
        const text = await response.text()
        console.log(`📄 Response: ${text.substring(0, 200)}...`)
      }
      
    } catch (error) {
      console.log(`❌ Network Error: ${error}`)
    }
    
    console.log('─'.repeat(60))
  }

  console.log('\n🎯 RAG System Test Complete!')
  console.log('\n💡 If all tests show ✅ status and meaningful responses, your RAG system is working!')
  console.log('🚀 Ready to integrate with your existing chatbot component!')
}

// Run the test
testRAGSystem().catch(console.error) 
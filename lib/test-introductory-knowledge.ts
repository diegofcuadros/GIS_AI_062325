/**
 * Test file to demonstrate the Introductory Knowledge Base functionality
 * Run this to see how the knowledge base responds to common questions
 */

import { introductoryKnowledge } from './introductory-knowledge'

// Test queries that students commonly ask
const testQueries = [
  "What is GIS?",
  "Vector vs raster data",
  "What is Google Earth Engine?",
  "What is point data?",
  "What is area data?",
  "Understanding coordinate systems",
  "What is spatial analysis?",
  "How does Google Earth Engine work?",
  "Data types in GIS",
  "Geographic information systems"
]

console.log("🎓 Testing Introductory GIS Knowledge Base\n")
console.log("=" .repeat(60))

testQueries.forEach((query, index) => {
  console.log(`\n${index + 1}. Testing query: "${query}"`)
  console.log("-".repeat(50))
  
  const response = introductoryKnowledge.generateResponse(query)
  console.log(response)
  console.log("\n" + "=".repeat(60))
})

// Test search functionality
console.log("\n🔍 Testing Search Functionality")
console.log("=".repeat(60))

const searchResults = introductoryKnowledge.search("GIS fundamentals")
console.log(`\nSearch results for "GIS fundamentals":`)
searchResults.forEach((result, index) => {
  console.log(`${index + 1}. ${result.title} (Score: ${result.score})`)
})

console.log("\n✅ Knowledge base testing complete!")

// Export for potential use in other files
export { testQueries } 
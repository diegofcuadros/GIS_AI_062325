# Google API Key Setup for RAG Implementation

## 🔑 **Required: Google API Key for Text Embeddings**

To generate vector embeddings, we need access to Google's `text-embedding-004` model. Here's how to get your API key:

---

## 📋 **Step-by-Step Instructions**

### **Step 1: Visit Google AI Studio**
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. If you don't have an account, create one (it's free)

### **Step 2: Create API Key**
1. Click "Create API key" button
2. Select "Create API key in new project" (recommended)
3. Copy the generated API key (starts with `AIza...`)
4. **Important**: Save this key securely - you won't see it again!

### **Step 3: Enable Required APIs**
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/library)
2. Search for "Generative Language API"
3. Click on it and press "Enable"
4. This may require setting up billing (but embeddings are very cheap)

### **Step 4: Set Environment Variable**

**For Windows PowerShell** (current session):
```powershell
$env:GOOGLE_API_KEY="your_actual_api_key_here"
```

**For Windows Command Prompt**:
```cmd
set GOOGLE_API_KEY=your_actual_api_key_here
```

**For permanent setup**, create `.env.local` file in project root:
```bash
GOOGLE_API_KEY=your_actual_api_key_here
```

---

## 💰 **Cost Information**

**Google Text Embeddings Pricing** (as of 2025):
- **text-embedding-004**: ~$0.00001 per 1,000 characters
- **Our usage**: ~49KB of content = ~$0.0005 total cost
- **Very affordable**: Less than $0.001 for complete embeddings

---

## 🧪 **Test API Key**

After setting the API key, test it:

```powershell
# Check if API key is set
echo $env:GOOGLE_API_KEY

# Should show your API key (starting with AIza...)
```

---

## 🚀 **Ready to Generate Embeddings**

Once you have the API key set, run:

```bash
npx tsx scripts/generate-embeddings.ts
```

This will:
- Process all 26 documents from our knowledge base
- Generate 768-dimensional embeddings for each
- Create a FAISS vector database for semantic search
- Take approximately 2-3 minutes to complete

---

## 🔧 **Troubleshooting**

### **API Key Not Working**
- Verify the key starts with `AIza`
- Check that Generative Language API is enabled
- Ensure billing is set up in Google Cloud Console

### **Quota Exceeded**
- Google provides generous free quotas
- If exceeded, check your Google Cloud Console for limits

### **Permission Errors**
- Verify the API key has access to Generative Language API
- Try creating a new API key if issues persist

---

## 📞 **Need Help?**

If you encounter issues:
1. Double-check the API key is correctly set
2. Verify the Generative Language API is enabled
3. Check Google Cloud Console for any error messages
4. The embeddings generation script includes detailed error logging

**Once you have your API key, we can proceed with generating the vector embeddings!** 🚀 
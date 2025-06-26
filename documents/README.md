# Documents Directory - PDF Support

## 📄 Add PDF Files Here

This directory is where you place PDF files that you want to include in the RAG knowledge base.

### 🎯 Supported PDF Types

**✅ Recommended PDFs for GIS Workshop:**
- QGIS User Manual
- GIS for Public Health textbooks
- Spatial analysis research papers
- Google Earth Engine documentation
- Health geography methodologies

### 📋 How to Add PDFs

1. **Download or copy** your PDF files to this directory
2. **Run the migration**: `npm run migrate-knowledge-with-pdfs`
3. **Regenerate embeddings**: `npm run generate-embeddings`
4. **Test with chatbot**: Ask questions about the PDF content

### 📁 Example Structure

```
documents/
├── qgis_user_manual.pdf
├── gis_public_health_textbook.pdf
├── google_earth_engine_guide.pdf
├── spatial_analysis_methods.pdf
└── malaria_mapping_handbook.pdf
```

### 🤖 What Happens to PDFs

1. **Text Extraction**: AI extracts all readable text
2. **Topic Detection**: Identifies GIS/health-related topics
3. **Categorization**: Assigns to appropriate knowledge categories
4. **Markdown Conversion**: Creates searchable text files
5. **RAG Integration**: AI can now reference PDF content in answers

### 💡 Tips for Best Results

- **Text-based PDFs** work better than scanned images
- **Official documentation** provides most authoritative answers
- **Recent publications** ensure current best practices
- **English content** is optimized for topic detection

### 🚀 Installation Required

First install the PDF processing library:
```bash
npm install pdf-parse
```

Then you can add PDFs and run the migration! 
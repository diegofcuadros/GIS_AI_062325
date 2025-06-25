# Test RAG API Endpoint
Write-Host "🧪 Testing RAG API Endpoint..." -ForegroundColor Cyan

$body = @{
    messages = @(
        @{
            role = "user"
            content = "How do I load a shapefile in QGIS?"
        }
    )
    userContext = @{
        currentLab = "lab1"
        difficulty = "beginner"
    }
} | ConvertTo-Json -Depth 3

$headers = @{
    "Content-Type" = "application/json"
}

try {
    Write-Host "📤 Sending request to http://localhost:3000/api/chat" -ForegroundColor Yellow
    
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/chat" -Method POST -Body $body -Headers $headers -TimeoutSec 30
    
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "📋 Content-Type: $($response.Headers.'Content-Type')" -ForegroundColor Blue
    Write-Host "📄 Response Preview:" -ForegroundColor Blue
    Write-Host $response.Content.Substring(0, [Math]::Min(500, $response.Content.Length)) -ForegroundColor White
    
    Write-Host "🎉 API is working!" -ForegroundColor Green
    
} catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        Write-Host "Status Code: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
        Write-Host "Status Description: $($_.Exception.Response.StatusDescription)" -ForegroundColor Red
    }
} 
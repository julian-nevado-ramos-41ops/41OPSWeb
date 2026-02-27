
import re

file_path = '/home/juli/41OPSWeb/public/llms.txt'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for city line starts: Lat Long City, Country
# Example: 37.7749 -122.4194 San Francisco, United States
pattern = r'(\d+\.\d+\s+-?\d+\.\d+\s+[A-Z][^/\n,]+(?:,\s+[A-Z][^/\n]+)?)'

# Find all matches and their indices
matches = list(re.finditer(pattern, content))

results = []
for i in range(len(matches)):
    start_pos = matches[i].start()
    end_pos = matches[i+1].start() if i + 1 < len(matches) else len(content)
    
    city_info = matches[i].group(1)
    full_block = content[start_pos:end_pos].strip()
    
    # Try to clean up the block to get just the text after UUID and Image path
    # Example block: 37.7749 -122.4194 San Francisco, United States b1f0e1ac... /media/... VERDICT...
    # We want everything after the image path (.jpeg, .png, .svg)
    
    text_match = re.search(r'/(?:media|img)/[^\s]+\.(?:jpeg|jpg|png|svg|webp)\s+(.*)', full_block, re.DOTALL)
    if text_match:
        text = text_match.group(1).strip()
    else:
        # Fallback: remove city_info and generic UUID search
        text = re.sub(r'^[^\s]+\s+[^\s]+\s+[^a-z]+[a-z0-9-]{36}\s+', '', full_block, flags=re.IGNORECASE)
        # Also remove image path if exists
        text = re.sub(r'/[^\s]+\.(?:jpeg|jpg|png|svg|webp)\s*', '', text)

    # Further cleanup for common HTML-like tokens or sections
    text = text.split('components/')[0] # The next section often starts with components/
    text = text.split('dimension Dimension')[0] # Specific to this file
    
    results.append({
        "city": city_info,
        "text": text
    })

for res in results:
    print(f"--- CITY: {res['city']} ---")
    print(res['text'])
    print("\n")

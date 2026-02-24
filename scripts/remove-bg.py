from rembg import remove
from PIL import Image
import io

input_path = "/vercel/share/v0-project/public/hero.png"
output_path = "/vercel/share/v0-project/public/hero-nobg.png"

with open(input_path, "rb") as f:
    input_data = f.read()

output_data = remove(input_data)

img = Image.open(io.BytesIO(output_data)).convert("RGBA")
img.save(output_path, "PNG")
print(f"Background removed. Saved to {output_path}")
print(f"Image size: {img.size}")

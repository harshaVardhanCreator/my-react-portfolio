from PIL import Image, ImageFilter
import numpy as np
import os

# Try multiple candidate paths
candidates = [
    "/vercel/share/v0-project/public/hero.png",
    os.path.join(os.getcwd(), "public", "hero.png"),
    "./public/hero.png",
]

input_path = None
for c in candidates:
    print(f"Trying: {c} -> exists={os.path.exists(c)}")
    if os.path.exists(c):
        input_path = c
        break

if input_path is None:
    # Debug: list current working directory
    print(f"CWD: {os.getcwd()}")
    print(f"CWD contents: {os.listdir(os.getcwd())}")
    raise FileNotFoundError("Could not find hero.png in any expected location")

output_path = input_path.replace("hero.png", "hero-nobg.png")
print(f"Processing: {input_path}")

img = Image.open(input_path).convert("RGBA")
data = np.array(img)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Detect light/white-ish background pixels (the halo glow)
# Pixels where all RGB channels are high (close to white) become transparent
brightness = (r.astype(float) + g.astype(float) + b.astype(float)) / 3.0
saturation = np.max(data[:,:,:3], axis=2).astype(float) - np.min(data[:,:,:3], axis=2).astype(float)

# Make bright, low-saturation pixels (white/light gray halo) transparent
# Use a gradient so transition is smooth
mask = np.ones_like(brightness) * 255

# Very bright and low saturation = background/halo -> make transparent
halo_mask = (brightness > 200) & (saturation < 60)
mask[halo_mask] = 0

# Semi-bright = partial transparency for smooth edge blending
semi_bright = (brightness > 160) & (brightness <= 200) & (saturation < 80)
mask[semi_bright] = ((brightness[semi_bright] - 160) / 40 * (-255) + 255).clip(0, 255)

# Also handle already-transparent pixels
mask = np.minimum(mask, a.astype(float))

data[:,:,3] = mask.astype(np.uint8)

result = Image.fromarray(data)

# Slight blur on alpha channel to smooth edges
alpha = result.split()[3]
alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.8))
result.putalpha(alpha)

result.save(output_path, "PNG")
print(f"Background removed. Saved to {output_path}")
print(f"Image size: {result.size}")

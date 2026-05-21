import os
import re

css_file = "/Users/t.nissy/Desktop/AI Web Site/yamamoto-kaikei/style/style.css"
html_dir = "/Users/t.nissy/Desktop/AI Web Site/yamamoto-kaikei/"

# Update HTML files
html_files = [f for f in os.listdir(html_dir) if f.endswith('.html')]
for file in html_files:
    filepath = os.path.join(html_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace("000-0000-0000", "06-XXXX-XXXX")
    content = content.replace("〒000-0000 東京都〇〇区〇〇1-2-3 〇〇ビル3F", "〒530-0001 大阪府大阪市北区梅田3-1-1")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update CSS file
with open(css_file, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Excluded classes from font-size update
exclusions = [
    ".logo-en",
    ".site-nav a .nav-ja",
    ".hero-label",
    ".page-hero-en",
    ".sec-head .sec-en",
    ".strength-badge",
    ".footer-logo-en"
]

def replacer(match):
    size = int(match.group(1))
    if size < 16:
        return "16px"
    return match.group(0)

# We need to parse CSS rule by rule to know if we are inside an excluded class
new_css_lines = []
current_selectors = ""
for line in css_content.splitlines():
    if "{" in line:
        current_selectors = line.split("{")[0].strip()
    
    # Check if any exclusion is in the current selector
    excluded = False
    for ex in exclusions:
        if ex in current_selectors:
            excluded = True
            break
            
    if not excluded and "font-size:" in line:
        # replace font-size: Xpx with font-size: 16px if X < 16
        line = re.sub(r'font-size:\s*(\d+)px', lambda m: "font-size: " + ("16" if int(m.group(1)) < 16 else m.group(1)) + "px", line)
    
    new_css_lines.append(line)

new_css = "\n".join(new_css_lines)

# Update background images to be darker
new_css = new_css.replace(
    "background-image: url('../img/hero-bg.jpg');",
    "background-image: linear-gradient(rgba(15, 35, 56, 0.5), rgba(15, 35, 56, 0.5)), url('../img/hero-bg.jpg');"
)
new_css = new_css.replace(
    "background-image: url('../img/page-hero.jpg');",
    "background-image: linear-gradient(rgba(15, 35, 56, 0.5), rgba(15, 35, 56, 0.5)), url('../img/page-hero.jpg');"
)

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(new_css)

print("Done")

# Portfolio Website User Guide

## How to Add Your CV PDF

1. **Prepare your CV file**:
   - Save your CV as a PDF file
   - Name it something simple like `Mikdam_CV.pdf` (avoid spaces in the filename)

2. **Upload the CV file**:
   - Place your CV PDF file in the same folder as your index.html file

3. **Link the CV in the HTML**:
   - Open the `index.html` file
   - Find the CV download button section (around line 85):
   ```html
   <div class="cv-download">
       <a href="#" class="cv-btn"><i class="fas fa-file-pdf"></i> Download CV</a>
   </div>
   ```
   - Replace the `#` with the name of your CV file:
   ```html
   <div class="cv-download">
       <a href="Mikdam_CV.pdf" class="cv-btn"><i class="fas fa-file-pdf"></i> Download CV</a>
   </div>
   ```

## How to Edit Content

### Updating Text Content

1. **Open the `index.html` file** in any text editor (like Notepad, VS Code, etc.)

2. **Find the section you want to edit**:
   - The HTML is organized by sections with clear IDs like `about`, `education`, `research-experience`, etc.
   - Each section starts with `<section id="section-name" class="section-box">`

3. **Edit the text** within the appropriate tags:
   - Regular paragraphs are within `<p>...</p>` tags
   - Lists are within `<ul>...</ul>` tags with each item in `<li>...</li>` tags
   - Headings use `<h2>...</h2>` or `<h3>...</h3>` tags

### Updating Profile Image

1. **Prepare your profile image**:
   - Ideally use a square image (1:1 ratio)
   - Recommended size: 400x400 pixels or larger
   - Save in JPG or PNG format

2. **Replace the placeholder image**:
   - Place your image in the `images` folder
   - Open `index.html`
   - Find the profile image section (around line 83):
   ```html
   <img src="images/profile-placeholder.jpg" alt="Mikdam-Al-Maad Ronoue" id="profile-img">
   ```
   - Change the `src` attribute to point to your image:
   ```html
   <img src="images/your-image-name.jpg" alt="Mikdam-Al-Maad Ronoue" id="profile-img">
   ```

### Adding/Removing Project or Research Images

Each project and research experience can have multiple images with captions. Here's how to manage them:

1. **Adding images**:
   - Place your images in the `images` folder
   - In the HTML, find the project or research item you want to add images to
   - Look for the `project-gallery` or `experience-gallery` div
   - Add a new gallery item using this template:

   ```html
   <div class="gallery-item">
       <div class="image-container">
           <img src="images/your-image-name.jpg" alt="Image Description">
       </div>
       <div class="image-caption">
           <p>Your Image Title</p>
           <ul>
               <li>First bullet point about this image</li>
               <li>Second bullet point about this image</li>
           </ul>
       </div>
   </div>
   ```

2. **Using the placeholder** (if you don't have an image yet):
   ```html
   <div class="gallery-item">
       <div class="image-placeholder">
           <i class="fas fa-image"></i>
           <p>Image Title</p>
       </div>
       <div class="image-caption">
           <ul>
               <li>First bullet point about this image</li>
               <li>Second bullet point about this image</li>
           </ul>
       </div>
   </div>
   ```

3. **Removing images**:
   - Simply delete the entire `<div class="gallery-item">...</div>` block for any image you don't want to include

## Updating Skills Section

The skills section is divided into four columns. To edit:

1. **Find the skills section** in the HTML (search for `<section id="technical-skills"`)

2. **Edit the skills** by modifying the list items:
   ```html
   <div class="skills-column">
       <h3>Technical Skills</h3>
       <ul class="skills-list">
           <li>Python</li>
           <li>C/C++</li>
           <!-- Add or remove skills by adding or removing <li> tags -->
       </ul>
   </div>
   ```

## Tips for Editing

- Always make a backup of your files before editing
- Use a code editor like Visual Studio Code for easier HTML editing
- Test your changes by opening the HTML file in a web browser
- Be careful with HTML tags - each opening tag `<tag>` needs a closing tag `</tag>`
- When adding new content, follow the existing structure and formatting

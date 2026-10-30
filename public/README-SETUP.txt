PORTFOLIO SETUP — START HERE

1. Install Node.js (LTS) if it is not already installed:
   https://nodejs.org/

2. Unzip the project folder.

3. Open a terminal in the developer-portfolio folder and run:
   npm install
   npm run dev

4. Open the local URL Vite prints in your terminal.

5. Personalize src/App.jsx:
   - Name and primary contact details have been personalized.
   - Confirm the email address and LinkedIn URL before publishing.
   - Update the LinkedIn and GitHub URLs.
   - Replace the Relay link if you have a public URL.
   - Update project descriptions and skills to reflect what you can confidently discuss.

6. Add your resume:
   - Export your resume as a PDF.
   - Name it resume.pdf.
   - Put it in the public/ folder.
   - Your professional headshot is included as public/headshot.jpg.
   - The "View resume" and "Open resume" buttons will then work.

7. Test a production build:
   npm run build
   This creates a dist/ folder.

FREE DEPLOYMENT WITH NETLIFY
A. Create a free account at https://www.netlify.com/
B. Run npm run build.
C. Drag the dist folder into Netlify's manual deploy area at:
   https://app.netlify.com/drop
D. Netlify will give you a public URL ending in netlify.app.

IMPORTANT
- The site imports Google Fonts from fonts.googleapis.com. If you want no external font request, remove the @import line from src/styles.css; the page will use fallback fonts.
- Netlify's free plan and limits can change; check the current plan before deployment.
- Don't publish private contact details or confidential company information.
- The project descriptions are starter copy. Keep claims accurate and do not present Relay as a finished product.


PERSONALIZATION TO FINISH
- Replace the placeholder GitHub profile URL in src/App.jsx if you have a GitHub account you want to share, or remove that link.
- Confirm your contact details and preview the cropped headshot.
- The uploaded resume is included in public/. Review its file format and replace with a PDF if desired.

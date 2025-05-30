**Project Description:**
This project aims to create a comprehensive and user-friendly "Bangladesh Business Trip Guide" webpage. The guide is specifically for a trip scheduled from June 18, 2025, to July 15, 2025. It integrates information about national overview, visa, business culture, health, transport, important safety reminders, a detailed packing checklist, and pre-departure confirmations. The design follows a professional business style with subtle Bangladeshi cultural influences, emphasizing clarity, readability, and high-quality visuals.

**File Structure:**

-   `index.html`: The main landing page. It includes an overview of the business trip, the common site header, navigation, and footer. It loads its main content from `content/overview_content.md`.
-   `visa_entry.html`: A page detailing visa and entry requirements for Bangladesh. Content is directly embedded.
-   `culture_etiquette.html`: This page focuses on business culture and etiquette in Bangladesh. It dynamically loads and displays content from `content/culture_etiquette_content.md`.
-   `health_medical.html`: Provides information on health precautions and medical emergencies. Content is loaded from `content/health_medical_content.md`.
-   `transport_communication.html`: Covers domestic transportation and communication tips. Content is loaded from `content/transport_communication_content.md`.
-   `pitfalls_guide.html`: Contains the detailed "Important Reminders and Pitfall Guide". Content is loaded from `content/pitfalls_guide_content.md`.
-   `packing_checklist.html`: Displays the business trip packing checklist and pre-departure final confirmations. Content is loaded from `content/packing_checklist_content.md`.
-   `style.css`: Contains minimal global CSS styles, typography enhancements for markdown content, and any custom styles not covered by Tailwind CSS.
-   `script.js`: Handles client-side logic, including mobile navigation toggle, active link highlighting in the navigation, and dynamically loading markdown content into relevant pages using `marked.js`.
-   `content/overview_content.md`: Markdown file for the main overview section on `index.html`.
-   `content/culture_etiquette_content.md`: Markdown content detailing business culture and social etiquette.
-   `content/health_medical_content.md`: Markdown content for health and medical advice.
-   `content/transport_communication_content.md`: Markdown content for transport and communication guidance.
-   `content/pitfalls_guide_content.md`: Markdown content for the comprehensive "Important Reminders and Pitfall Guide". This is derived from the provided `Bangladesh Business Travel Safety And Cultural Guide.md`.
-   `content/packing_checklist_content.md`: Markdown file containing the packing checklist and pre-departure checklist. This is based on the provided `Bangladesh Business Trip Packing Checklist 2025.md`.
-   `assets/`: A folder intended for local assets. Currently, it might contain a favicon or other small static assets if needed.
    -   `assets/bangladesh_icon.svg`: A simple SVG icon for Bangladesh, used as a favicon.

All HTML pages share a common structure (header, sidebar navigation for desktop, top navigation for mobile, main content area, and footer) to ensure a consistent user experience.

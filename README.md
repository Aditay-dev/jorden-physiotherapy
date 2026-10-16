# Jorden Physiotherapy — starter website

## Run locally
Open `index.html` in a modern browser. For best results, use VS Code + Live Server.

## Included
- Responsive, Apple-inspired editorial design and smooth scrolling animations
- Three main scroll sections/pages: approach, care, booking + closing credits
- Appointment request form with practitioner selection (Dr. Prince Negi, Dr. Mehak, Dr. Supreet Kaur, Dr. Diksha Thakur)
- Scroll-triggered reveal animations and practitioner cards
- Dark midnight-green and emerald visual theme, responsive treatment imagery, and animated illustrated practitioner avatars
- Local demo admin dashboard at `admin.html`: review, filter, confirm, delete and export CSV
- Advance-payment choice shown as a demo (no payment is collected)

## Important before real launch
This is a front-end prototype. `localStorage` only stores requests in the same browser/device; it does NOT send requests to Dr. Prince Negi or sync between patient and clinic devices. The advance payment is not real. For production, connect a backend/database (for example Firebase or Supabase), secure admin authentication, and a verified payment gateway such as Razorpay. Create server-side booking confirmation and payment verification, configure clinic contact details and availability, add a privacy notice/consent, and test thoroughly. Do not store real patient information in this demo.

## Publish
Upload the files to Netlify Drop, GitHub Pages, or another static host. If deploying as a static demo, clearly label it as a demo until backend and payment integrations are complete.

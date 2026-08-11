# Setup Notes — Portfolio Update

Is update me kya-kya naya/change hua hai, aur aapko kya karna hai:

## 1. Resume (zaroori)

<<<<<<< HEAD

- `public/resume.pdf` abhi ek **placeholder** hai (auto-generated).
- Apna asli resume PDF isi jagah, isi naam (`resume.pdf`) se replace kar do.
- Website automatically naya resume View/Download karne dega — koi code change nahi chahiye.

## 2. Project Links

- File: `src/data/projects.js`
- Har project ke `github` aur `live` field me apna real URL daalo.
- `live: ""` rakhoge to us project pe "Live" button nahi dikhega, sirf "Code" (GitHub) button dikhega.
- Maine kuch placeholder GitHub URLs likhe hain (jaise `github.com/ShubhamKumar-25/amazon-clone`) — inhe apne real repo links se replace zaroor karo.

## 3. what new think is add.

- **Resume section** — PDF preview + View/Download buttons (Home hero aur Navbar me bhi Download button hai)
- **Project cards** — hover karne pe GitHub/Live buttons dikhte hain
- **Scroll-to-top button** — floating button, page scroll karne pe dikhta hai
- **"Open to opportunities" badge** — hero section me, HR ko turant signal
- **Poore site me consistent color palette** (`src/index.css` ke CSS variables se control hota hai — `--color-primary`, `--color-accent` change karke pura theme badal sakte ho)
- Mobile responsiveness har section me improve/add ki gayi (750px aur 480px breakpoints)

## 4. Fix the Bugs

- Footer me duplicate "About" link → "Home" kar diya
- Contact.css ka ek broken media query fix kiya (missing `px`)
- Mobile hamburger menu — link click karne pe ab menu apne aap band ho jata hai

## 5. For app running

```bash
npm install
npm run dev       # local preview
npm run build     # production build (dist/ folder banega)
```

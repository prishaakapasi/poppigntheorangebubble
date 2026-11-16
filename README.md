# pop · Popping the Orange Bubble

An unofficial, student-written guide to Princeton: clubs, eating clubs, classes and deadlines, explained by the people in them.

**Problem:** Some students arrive at Princeton with a head start. Through family, summer programs or teams, they already know how things work. Everyone else spends freshman year figuring it out.

**Idea:** Make that insider knowledge available to every freshman, in short, interactive pieces instead of long pages.

> This is a **prototype** for user testing. Club names, quotes and numbers are sample content and are labeled as such.
> Not affiliated with Princeton University.

## Pages

| Page | File | What it tests |
| --- | --- | --- |
| Home | `index.html` | First impression, brand, does the search box invite a first step? |
| FAQ | `faq.html` | Do short answers to common questions cover what students want to know? |
| Club page | `clubs.html` | Is one-card-at-a-time easier than a long page? What's missing? |
| Find your clubs | `quiz.html` | Is a 4-tap quiz a useful way to discover clubs? |

Classes and Timeline show a “coming soon” page (`soon.html`). The Ask Pop chatbot was removed in favor of the FAQ.

## Run it

No build step and no dependencies. Either:

- open `index.html` in a browser, or
- serve the folder locally: `npx serve .` (or `python3 -m http.server`) and open the URL it prints.

## Put it on GitHub Pages

1. Create a new repository on GitHub and push this folder:
   ```bash
   git init
   git add .
   git commit -m "pop prototype"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`. Share that link with testers.

## Editing content

All prototype content is in **`js/data.js`**: the FAQ, club pages, quiz questions and quiz results. Edit text there; layouts pick it up automatically.

To change the FAQ, edit the `faq` list in `js/data.js`.

## Structure

```
index.html        Home
faq.html          FAQ
clubs.html        Sample club page
quiz.html         Find your clubs quiz
css/styles.css    All styles (design tokens at the top)
js/shared.js      Nav, footer, icons, bubble illustration
js/data.js        All prototype content
js/home.js        Home bubbles
js/faq.js         FAQ page
js/soon.js        Coming soon pages (Classes, Timeline)
js/club.js        Club cards
js/quiz.js        Quiz
js/orgs.js        All student groups (name, letter, category) for search and filters
js/add.js         Add what you know (filtered questions)
js/admin.js       Team review page
add.html          Add what you know
admin.html        Team review page
api/              Backend routes (Vercel)
assets/bubble.svg Favicon
```

## Design

- Colors: cream ground `#F6F1E8`, near-black ink `#1D1B18`, orange accent `#EE8A3A` used sparingly.
- Type: Fraunces (headlines) and Inter (everything else), from Google Fonts.
- Signature: the illustrated "sticker" bubble that pops.
- Accessible by default: real buttons and links, visible focus states, 44px touch targets, reduced-motion support.

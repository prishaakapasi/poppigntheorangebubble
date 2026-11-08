# pop · Popping the Orange Bubble

An unofficial, student-written guide to Princeton: clubs, eating clubs, classes and deadlines, explained by the people in them.

**Problem:** Some students arrive at Princeton with a head start. Through family, summer programs or teams, they already know how things work. Everyone else spends freshman year figuring it out.

**Idea:** Make that insider knowledge available to every freshman, in short, interactive pieces instead of long pages.

> This is a **prototype** for user testing. Club names, quotes and numbers are sample content and are labeled as such.
> Not affiliated with Princeton University.

## Pages

| Page | File | What it tests |
| --- | --- | --- |
| Home | `index.html` | First impression, brand, does "Ask Pop" invite a question? |
| Ask Pop | `ask.html` | Do students want short answers to insider questions? Do they trust them? |
| Club page | `clubs.html` | Is one-card-at-a-time easier than a long page? What's missing? |
| Find your clubs | `quiz.html` | Is a 4-tap quiz a useful way to discover clubs? |

Explore the Street, Classes and Timeline are in the nav but not built yet.

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

All prototype content is in **`js/data.js`**: Ask Pop answers, the club page, quiz questions and quiz results. Edit text there; layouts pick it up automatically.

To add an Ask Pop answer, add an entry to `answers` with a question (`q`), a few `keywords`, a short answer (`a`), and optional `more`, `quote` and `sources`. Typed questions that match a keyword get that answer; anything else gets the `fallback` message.

## Running a "Wizard of Oz" test

You don't need a real AI behind Ask Pop to learn whether people want it:

1. Have the tester ask questions out loud or type them.
2. A teammate answers live (in person, or by quickly adding the answer to `data.js` before the session).
3. Afterward ask: Was this more useful than asking a friend? Would you trust it? What would make you trust it more?

## Structure

```
index.html        Home
ask.html          Ask Pop
clubs.html        Sample club page
quiz.html         Find your clubs quiz
css/styles.css    All styles (design tokens at the top)
js/shared.js      Nav, footer, icons, bubble illustration
js/data.js        All prototype content
js/home.js        Home bubbles
js/ask.js         Ask Pop chat
js/club.js        Club cards
js/quiz.js        Quiz
assets/bubble.svg Favicon
```

## Design

- Colors: cream ground `#F6F1E8`, near-black ink `#1D1B18`, orange accent `#EE8A3A` used sparingly.
- Type: Fraunces (headlines) and Inter (everything else), from Google Fonts.
- Signature: the illustrated "sticker" bubble that pops.
- Accessible by default: real buttons and links, visible focus states, 44px touch targets, reduced-motion support.

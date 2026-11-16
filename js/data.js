/* All prototype content lives here so the team can edit it without touching layout code.
   Everything marked "Sample" is placeholder content for user testing. Replace it with real
   student input as you collect it. */
window.POP_DATA = {

  // Frequently asked questions (faq.html). Edit, add or remove freely.
  // Each item: q, a, and optionally link: [label, href].
  faq: [
    { title: 'Eating clubs', items: [
      { q: 'What’s the difference between bicker and sign-in?', a: 'Bicker clubs pick their members after a few days of events and conversations. Sign-in clubs let you join by signing up, with a lottery if they fill up.' },
      { q: 'Which clubs are bicker and which are sign-in?', a: 'As of the 2025–26 year, the bicker clubs are Cannon Dial Elm, Cap and Gown, Cottage, Ivy, Tiger Inn and Tower. Charter, Colonial, Quadrangle and Terrace are sign-in. Cloister has paused operations for renovations. This can change, so check with the clubs.', link: ['See all eating clubs', 'clubs.html?view=street'] },
      { q: 'When do I actually join an eating club?', a: 'Most students join in the spring of sophomore year. As a freshman, you can visit clubs for meals and open events in the meantime.' },
      { q: 'What’s Cottage bicker like?', a: 'It’s two days of quick, 5-minute conversations with lots of different members. One member’s biggest tip: talk to people you don’t know, including people from different backgrounds than you.', link: ['Cottage', 'clubs.html?club=cottage'] }
    ] },
    { title: 'Clubs and groups', items: [
      { q: 'How do I find a club that fits me?', a: 'Search or filter all the student groups on the Clubs page, or take the short quiz if you don’t know where to start.', link: ['Browse clubs', 'clubs.html'] },
      { q: 'Do I need dance experience for Naacho or Bhangra?', a: 'No. Auditions are skill-based, but students say you really don’t need prior experience. You just need to dance somewhat decently and show potential.', link: ['Naacho & Princeton Bhangra', 'clubs.html?club=dance'] },
      { q: 'Which a cappella group is right for me?', a: 'There are eight Acaprez groups. Low voice: Nassoons and Tigertones (both currently all men) and Footnotes (mixed gender). All-female: Tigerlilies, Tigressions and Wildcats. Mixed: Roaring 20 and Katzenjammers. Outside Acaprez, Old NasSoul sings R&B and soul, and Shere Khan does indie and alternative.', link: ['All singing groups', 'clubs.html?club=acappella'] }
    ] },
    { title: 'About this site', items: [
      { q: 'Who writes this?', a: 'Students. Everything here comes from current Princeton students sharing what they know. The site is not affiliated with Princeton University.' },
      { q: 'How do I know it’s accurate?', a: 'Every answer is labeled Fact or Student take, and the team reviews submissions before they go up. A student take is one person’s experience, and clubs change from year to year, so use this alongside talking to people.' },
      { q: 'A club I care about has no info. What can I do?', a: 'If you know the club, add what you know. It takes about two minutes and is anonymous. If you don’t, check back: pages fill in as students contribute.', link: ['Add what you know', 'add.html'] },
      { q: 'Something here is wrong or unfair. How do I fix it?', a: 'Use “Add what you know” on that club’s page to send a correction. The team reviews it and updates the page.', link: ['Add what you know', 'add.html'] }
    ] }
  ],

  // Club pages: one card at a time. Open a club with clubs.html?club=<id>.
  clubs: {
    consulting: {
      category: 'Consulting · sample club',
      name: 'Strategy & Consulting Group',
      vibe: '“Driven, but more collaborative than people expect.”',
      facts: [['gauge', 'Very selective'], ['clock', '4–6 hrs a week'], ['cal', 'Apps open early Sep']],
      cards: [
        { icon: 'key', label: 'Getting in', text: 'A short application, then a case interview. No experience expected.' },
        { icon: 'cal', label: 'When', text: 'Info session in early September. Offers by mid-October.' },
        { icon: 'user', label: 'From a member', quote: '“I wasn’t a finance person and it didn’t matter.”', by: 'Sample quote · Class of ’27' },
        { icon: 'eye', label: 'From the outside', quote: '“Pre-professional reputation, but friendlier than you’d think.”', by: 'Sample quote · non-member, Class of ’27' }
      ]
    },
    acappella: {
      category: 'Singing · auditions',
      name: 'A cappella & singing groups',
      vibe: 'Eight Acaprez groups, plus Old NasSoul and Shere Khan. Tap through to find your sound.',
      facts: [['music', '10 groups'], ['users', 'Low voice, mixed & all-female'], ['key', 'Auditions']],
      updated: 'Nov 2026',
      cards: [
        { icon: 'music', label: 'Low voice', title: 'Nassoons', text: 'Low voice, currently all men. The oldest group, mostly Cap, and known for a very strong alumni network.' },
        { icon: 'music', label: 'Low voice', title: 'Footnotes', text: 'Low voice, mixed gender. Fun, upbeat music with a wide range of repertoire. Members are a mix of TI, Cap and Terrace.' },
        { icon: 'music', label: 'Low voice', title: 'Tigertones', text: 'Low voice, currently all men. Eating club ties: not sure yet.' },
        { icon: 'music', label: 'Mixed voice', title: 'Roaring 20', text: 'Co-ed, mixed voice and mixed gender. Eating club ties: not sure yet.' },
        { icon: 'music', label: 'All-female', title: 'Tigerlilies', text: 'The oldest all-female group. Eating club ties: not sure yet.' },
        { icon: 'music', label: 'All-female', title: 'Tigressions', text: 'All-female, and also one of the older groups. Eating club ties: not sure yet.' },
        { icon: 'music', label: 'Mixed gender', title: 'Katzenjammers', text: 'Jazzy sound, mixed gender. Not known for a particular eating club.' },
        { icon: 'music', label: 'All-female', title: 'Wildcats', text: 'All-female. Know them? Add what you know.' },
        { icon: 'sparkle', label: 'R&B and soul', title: 'Old NasSoul', text: 'Not part of Acaprez. Low voice, mixed gender, singing R&B and soul.' },
        { icon: 'sparkle', label: 'Indie and alternative', title: 'Shere Khan', text: 'Not part of Acaprez. Mixed voice and mixed gender, with a more indie and alternative repertoire.' }
      ]
    },
    dance: {
      category: 'Dance · auditions',
      name: 'Naacho & Princeton Bhangra',
      vibe: 'Skill-based auditions, but no experience required. Both groups are pretty laid back, and dance groups can be a great community.',
      facts: [['music', 'Audition'], ['sparkle', 'No experience needed'], ['users', 'Laid back']],
      updated: 'Nov 2026',
      cards: [
        { icon: 'key', kind: 'fact', label: 'Getting in', text: 'Auditions are skill-based, but they mean it when they say you don’t need prior experience. Dance somewhat decently and show potential.' },
        { icon: 'users', kind: 'take', label: 'The vibe', text: 'Both groups are pretty laid back. PB (Princeton Bhangra) is a bit more tight-knit than Naacho.' },
        { icon: 'pin', kind: 'take', label: 'Eating clubs', text: 'One student’s view: these two groups don’t lean strongly toward any eating club right now. Lately PB has had more Tower members and Naacho more Charter, but that shifts from year to year.' },
        { icon: 'sparkle', kind: 'take', label: 'From a student', quote: '“Dance groups can be a good community!”', by: 'From a student · details can change year to year' }
      ]
    },
    cottage: {
      category: 'Eating club · bicker',
      name: 'Cottage',
      vibe: 'Two days of quick conversations, a mixed crowd, and one of the best outdoor spaces on the Street.',
      facts: [['key', 'Bicker club'], ['clock', '2-day bicker'], ['pin', 'Big outdoor space']],
      updated: 'Nov 2026',
      cards: [
        { icon: 'key', kind: 'fact', label: 'How bicker works', text: 'Two days of quick, 5-minute conversations with lots of different members.' },
        { icon: 'users', kind: 'take', label: 'Who’s there', text: 'One member described it as roughly half athletes and half non-athletes. Membership changes a lot from class to class, so the best way to know is to visit and meet people yourself.' },
        { icon: 'sparkle', kind: 'take', label: 'Biggest tip', quote: '“Don’t be afraid to talk to people you don’t know, or who come from a different background than you. Having people from different groups in your corner really helps.”', by: 'From a Cottage member' },
        { icon: 'pin', kind: 'fact', label: 'The club', text: 'Beautiful, especially outside: volleyball, pickleball, cornhole and a big turf field.' }
      ]
    }
  },

  // The eleven eating clubs. Clubs without a hand-written page still get one,
  // built from approved "Add what you know" submissions.
  eatingClubs: [
    { id: 'cannon-dial-elm', name: 'Cannon Dial Elm' },
    { id: 'cap-and-gown', name: 'Cap and Gown' },
    { id: 'charter', name: 'Charter' },
    { id: 'cloister', name: 'Cloister' },
    { id: 'colonial', name: 'Colonial' },
    { id: 'cottage', name: 'Cottage' },
    { id: 'ivy', name: 'Ivy' },
    { id: 'quadrangle', name: 'Quadrangle' },
    { id: 'terrace', name: 'Terrace' },
    { id: 'tiger-inn', name: 'Tiger Inn' },
    { id: 'tower', name: 'Tower' }
  ],

  // Where the backend lives. Same site on Vercel; GitHub Pages calls the Vercel copy.
  apiBase: location.hostname.endsWith('github.io') ? 'https://poppigntheorangebubble.vercel.app' : '',

  // Quiz: four questions, then a short list.
  quiz: [
    { q: 'What are you into?', opts: [
      { t: 'Business & consulting', d: 'Cases, markets, startups', k: 'biz' },
      { t: 'Tech & building', d: 'Code, robots, hackathons', k: 'tech' },
      { t: 'Arts & performance', d: 'Stage, film, music', k: 'arts' },
      { t: 'Service & advocacy', d: 'Tutoring, policy, causes', k: 'serve' }] },
    { q: 'How much time do you want to give a club each week?', opts: [
      { t: '1–2 hrs', d: 'Just dipping in', k: '1–2 hrs' },
      { t: '3–5 hrs', d: 'A real commitment', k: '3–5 hrs' },
      { t: '6–10 hrs', d: 'It’s my thing', k: '6–10 hrs' },
      { t: 'Whatever it takes', d: 'All in', k: 'lots of time' }] },
    { q: 'How do you feel about applying?', opts: [
      { t: 'Bring on the interviews', d: 'Selective is fine', k: 'selective' },
      { t: 'I’d rather just show up', d: 'Open to everyone', k: 'open' },
      { t: 'Either works', d: 'Depends on the club', k: 'either' },
      { t: 'Not sure yet', d: 'Show me both', k: 'either' }] },
    { q: 'What kind of group feels right?', opts: [
      { t: 'Small and tight-knit', d: 'Everyone knows everyone', k: 'small' },
      { t: 'Big community', d: 'Lots of new people', k: 'big' },
      { t: 'Somewhere in between', d: 'A bit of both', k: 'mid' },
      { t: 'Don’t mind', d: 'The work matters more', k: 'mid' }] }
  ],
  quizResults: {
    biz: [['Strategy & Consulting Group', 'clubs.html'], ['Investment Society', '#'], ['Startup Studio', '#']],
    tech: [['Hackers Guild', '#'], ['Robotics Team', '#'], ['App Studio', '#']],
    arts: [['Naacho', 'clubs.html?club=dance', false, 'Dance · audition, no experience needed · laid back'], ['Princeton Bhangra', 'clubs.html?club=dance', false, 'Dance · audition, no experience needed · tight-knit'], ['A cappella & singing groups', 'clubs.html?club=acappella', false, 'Singing · 8 Acaprez groups plus Old NasSoul and Shere Khan']],
    serve: [['Tutoring Collective', '#'], ['Debate Union', '#'], ['Environmental Action', '#']]
  }
};

/* All prototype content lives here so the team can edit it without touching layout code.
   Everything marked "Sample" is placeholder content for user testing. Replace it with real
   student input as you collect it. */
window.POP_DATA = {

  // Ask Pop: canned answers for the prototype. In a "Wizard of Oz" test a teammate can
  // answer live instead (see README).
  answers: {
    bicker: {
      q: 'What’s the difference between bicker and sign-in?',
      keywords: ['bicker', 'sign-in', 'sign in'],
      a: 'Bicker clubs pick their members after a few days of events and conversations. Sign-in clubs let you join by signing up, with a lottery if they fill up.',
      more: 'Most students join an eating club in the spring of sophomore year, so freshmen have plenty of time to visit clubs for meals and events first.',
      quote: '“Go to a few meals at different clubs first. The vibe tells you more than the reputation.”',
      quoteBy: 'Sample quote · Class of ’27',
      sources: [{ title: 'Cottage bicker, from a member', href: 'clubs.html?club=cottage' }]
    },
    cottage: {
      q: 'What’s Cottage bicker like?',
      keywords: ['cottage'],
      a: 'It’s two days of quick, 5-minute conversations with lots of different members. One member’s biggest tip: talk to people you don’t know, including people from different backgrounds than you.',
      more: 'One member described it as a mix of athletes and non-athletes, though who’s in a club changes a lot from class to class. The club is also beautiful, especially outside: volleyball, pickleball, cornhole and a big turf field.',
      quote: '“Don’t be afraid to talk to people you don’t know, or who come from a different background than you. Having people from different groups in your corner really helps.”',
      quoteBy: 'From a Cottage member',
      sources: [{ title: 'Cottage', href: 'clubs.html?club=cottage' }]
    },
    acappella: {
      q: 'Which a cappella group is right for me?',
      keywords: ['cappella', 'capella', 'acaprez', 'sing', 'nassoon', 'footnote', 'tigertone', 'tigerlil', 'tigression', 'katzenjammer', 'wildcat', 'roaring', 'nassoul', 'shere khan'],
      a: 'There are eight Acaprez groups. Low voice: Nassoons and Tigertones (both currently all men) and Footnotes (mixed gender). All-female: Tigerlilies, Tigressions and Wildcats. Mixed: Roaring 20 and Katzenjammers.',
      more: 'Outside Acaprez, Old NasSoul sings R&B and soul, and Shere Khan does indie and alternative. Nassoons are the oldest group and known for a strong alumni network, Footnotes sing upbeat music with a wide repertoire, and Katzenjammers have a jazzy sound.',
      quote: '',
      quoteBy: '',
      sources: [{ title: 'All singing groups', href: 'clubs.html?club=acappella' }]
    },
    dance: {
      q: 'Do I need dance experience for Naacho or Bhangra?',
      keywords: ['dance', 'naacho', 'bhangra', 'audition'],
      a: 'No. Auditions are skill-based, but students say you really don’t need prior experience. You just need to dance somewhat decently and show potential.',
      more: 'Both groups are pretty laid back, and PB (Princeton Bhangra) is a bit more tight-knit. PB has a lot of Tower members, and Naacho now has a lot of Charter.',
      quote: '“Dance groups can be a good community!”',
      quoteBy: 'From a student',
      sources: [{ title: 'Naacho & Princeton Bhangra', href: 'clubs.html?club=dance' }]
    },
    when: {
      q: 'When do I actually join an eating club?',
      keywords: ['when', 'join', 'eating club'],
      a: 'Most students join in the spring of sophomore year. As a freshman, you can visit clubs for meals and open events in the meantime.',
      more: '',
      quote: '',
      quoteBy: '',
      sources: [{ title: 'Sophomore spring timeline', href: '#' }]
    },
    consult: {
      q: 'Which clubs should I look at if I like consulting?',
      keywords: ['consult', 'business', 'finance'],
      a: 'There are a few consulting-focused groups, and most recruit early in the fall with an application and interviews.',
      more: 'The quickest way to compare them is the club quiz: tell it how much time you have, and it short-lists the ones that fit.',
      quote: '“I wasn’t a finance person and it didn’t matter. They teach you the case stuff.”',
      quoteBy: 'Sample quote · Class of ’27',
      sources: [{ title: 'Find your clubs quiz', href: 'quiz.html' }, { title: 'Sample consulting club', href: 'clubs.html' }]
    },
    intro: {
      q: 'Which intro classes are worth taking freshman year?',
      keywords: ['class', 'course', 'intro'],
      a: 'Students usually point to classes that count toward a likely major and are known for great teaching. Ratings and workload for every class will live on the Classes page.',
      more: '',
      quote: '',
      quoteBy: '',
      sources: [{ title: 'Classes, ranked by students', href: '#' }]
    }
  },
  fallback: 'Pop doesn’t have student info on that yet. We’ve noted it as something upperclassmen should answer.',

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

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
      a: 'It’s two days of quick, 5-minute conversations with lots of different members. The club is roughly half athletes and half non-athletes, with a lot of KA and Pi Phi members.',
      more: 'The club is also beautiful, especially outside: volleyball, pickleball, cornhole and a big turf field.',
      quote: '“Don’t be afraid to talk to people you don’t know, or who come from a different background than you. Having people from different groups in your corner really helps.”',
      quoteBy: 'From a Cottage member',
      sources: [{ title: 'Cottage', href: 'clubs.html?club=cottage' }]
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
  fallback: 'Good question. In the full app, Pop answers this from pages students have written. For this prototype, try one of the suggestions.',

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
    cottage: {
      category: 'Eating club · bicker',
      name: 'Cottage',
      vibe: 'Two days of quick conversations, a mixed crowd, and one of the best outdoor spaces on the Street.',
      facts: [['key', 'Bicker club'], ['clock', '2-day bicker'], ['users', 'About half athletes']],
      cards: [
        { icon: 'key', label: 'How bicker works', text: 'Two days of quick, 5-minute conversations with lots of different members.' },
        { icon: 'users', label: 'Who’s there', text: 'Roughly half athletes, half non-athletes. A big chunk of members are in KA (Kappa Alpha) and Pi Phi, so you’ll see a lot of them around.' },
        { icon: 'sparkle', label: 'Biggest tip', quote: '“Don’t be afraid to talk to people you don’t know, or who come from a different background than you. Having people from different groups in your corner really helps.”', by: 'From a Cottage member' },
        { icon: 'pin', label: 'The club', text: 'Beautiful, especially outside: volleyball, pickleball, cornhole and a big turf field.' }
      ]
    }
  },

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
    arts: [['Improv Troupe', '#'], ['Student Film Society', '#'], ['A Cappella Group', '#']],
    serve: [['Tutoring Collective', '#'], ['Debate Union', '#'], ['Environmental Action', '#']]
  }
};

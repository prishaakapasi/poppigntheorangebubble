/* All prototype content lives here so the team can edit it without touching layout code.
   Everything marked "Sample" is placeholder content for user testing. Replace it with real
   student input as you collect it. */
window.POP_DATA = {

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
        { icon: 'music', label: 'Low voice', title: 'Nassoons', text: 'Low voice, currently all men. The oldest group, known for a very strong alumni network.' },
        { icon: 'music', label: 'Low voice', title: 'Footnotes', text: 'Low voice, mixed gender. Fun, upbeat music with a wide range of repertoire.' },
        { icon: 'music', label: 'Low voice', title: 'Tigertones', text: 'Low voice, currently all men.' },
        { icon: 'music', label: 'Mixed voice', title: 'Roaring 20', text: 'Co-ed, mixed voice and mixed gender.' },
        { icon: 'music', label: 'All-female', title: 'Tigerlilies', text: 'The oldest all-female group.' },
        { icon: 'music', label: 'All-female', title: 'Tigressions', text: 'All-female, and also one of the older groups.' },
        { icon: 'music', label: 'Mixed gender', title: 'Katzenjammers', text: 'Jazzy sound, mixed gender.' },
        { icon: 'music', label: 'All-female', title: 'Wildcats', text: 'All-female. Know them? Add what you know.' },
        { icon: 'sparkle', label: 'R&B and soul', title: 'Old NasSoul', text: 'Not part of Acaprez. A low-voice group singing R&B and soul, about 6 to 8 hours a week, with gigs, arch sings and travel. A member reports 5 of 65 were accepted last fall, describes it as caring, familial and high-energy, and says to love R&B and soul and be willing to learn.' },
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
    },

    // ---- Added from the Nov 2026 club and eating club forms (no names, emails or positions) ----
    "bodyhype": {
      category: "Dance · auditions",
      name: "BodyHype",
      vibe: "A student-run dance company that puts on five sold-out shows every semester and raises money for a nonprofit at each one.",
      facts: [["clock", "About 6 hrs a week"], ["key", "Audition"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "music", "kind": "fact", "label": "What it does", "text": "Five sold-out shows every semester. Each run includes a live auction, and all proceeds go to a nonprofit the company picks."},
        {"icon": "clock", "kind": "fact", "label": "Time", "text": "About 8 hours of rehearsal over the semester for each piece you choose to be in, plus 2 hours of company rehearsal every week."},
        {"icon": "key", "kind": "fact", "label": "Getting in", "text": "By audition. A member reports 13 dancers were accepted in the most recent fall cycle."},
        {"icon": "sparkle", "kind": "take", "label": "Advice", "quote": "“Try your best at auditions, ask questions to the choreographer, and have FUN.”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "Collaborative, fun and creative.", "by": "From a member"}
      ]
    },
    "disiac-dance-company": {
      category: "Dance · auditions",
      name: "diSiac Dance Company",
      vibe: "Precise, disciplined dancing, with a culture built on laughter and cutting loose.",
      facts: [["clock", "3–9 hrs a week"], ["key", "Audition"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "clock", "kind": "fact", "label": "Time", "text": "3 to 9 hours a week, depending on how many pieces you’re in."},
        {"icon": "key", "kind": "fact", "label": "Getting in", "text": "A member reports 13 dancers were accepted last fall, and about 5 of roughly 30 in the spring."},
        {"icon": "sparkle", "kind": "take", "label": "Who it’s for", "text": "People who enjoy dancing at a high level and want to challenge themselves and expand their abilities.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "A community of students dedicated to dancing together and enjoying each other’s company each week.", "by": "From a member"},
        {"icon": "quote", "kind": "take", "label": "From a member", "quote": "“I’ve had nothing but the best of experiences in this company, and it has been fundamental to my Princeton experience.”", "by": "From a member"}
      ]
    },
    "expressions-dance-company": {
      category: "Dance · auditions",
      name: "Expressions Dance Company",
      vibe: "A student-choreographed dance company with one show each semester.",
      facts: [["clock", "6+ hrs a week"], ["key", "Audition"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "music", "kind": "fact", "label": "What it does", "text": "Two shows a year, one per semester, choreographed and designed by students."},
        {"icon": "clock", "kind": "fact", "label": "Time", "text": "Rehearsals come in two-hour blocks, and each block is a weekly commitment. The whole company rehearses together on Sundays at 10am, and social events often happen on weekends."},
        {"icon": "key", "kind": "fact", "label": "Getting in", "text": "A member reports 10 dancers were accepted in the most recent fall cycle."},
        {"icon": "sparkle", "kind": "take", "label": "What they look for", "quote": "“We are looking for passionate dancers who are willing to commit to our company culture, weekly rehearsals and share their creativity.”", "by": "From a member"},
        {"icon": "quote", "kind": "take", "label": "From a member", "quote": "“It is a space where I get to choreograph and share my love of dance with people who have become some of my best friends on campus.”", "by": "From a member"}
      ]
    },
    "princeton-university-glee-club": {
      category: "Singing · auditions",
      name: "Princeton University Glee Club",
      vibe: "A faculty-led choir of about 80 to 90 singers performing choral repertoire.",
      facts: [["clock", "5.5 hrs a week"], ["key", "Auditions in the first week of fall"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "music", "kind": "fact", "label": "What it does", "text": "A couple of concerts each year, plus collaborations with other universities and performing artists. Student officers also run social events and mini-trips."},
        {"icon": "clock", "kind": "fact", "label": "Time", "text": "Rehearsals are 2 hours on Monday and Wednesday and an hour and a half on Friday."},
        {"icon": "key", "kind": "fact", "label": "Getting in", "text": "Auditions are held in the first week of the fall semester. If you miss them, you can reach out to the directors. A member reports about 25 people were accepted last fall, and there’s no spring recruitment."},
        {"icon": "users", "kind": "take", "label": "The culture", "quote": "“A smorgasbord of different people interested in singing, putting time aside to make music together.”", "by": "From a member"},
        {"icon": "music", "kind": "take", "label": "Overlap", "text": "One member says there’s a lot of overlap with a cappella groups.", "by": "From a member"}
      ]
    },
    "sinfonia": {
      category: "Orchestra · auditions",
      name: "Sinfonia",
      vibe: "An orchestra that rehearses twice a week and performs in Richardson.",
      facts: [["clock", "About 3 hrs a week"], ["key", "Audition"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "music", "kind": "fact", "label": "What it does", "text": "Rehearsals twice a week, and concerts with a chance to perform in Richardson."},
        {"icon": "sparkle", "kind": "take", "label": "Advice", "quote": "“Practice before auditions.”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "Chill and fun.", "by": "From a member"}
      ]
    },
    "princeton-pictures": {
      category: "Film",
      name: "Princeton Pictures",
      vibe: "Members work on student film sets during the semester.",
      facts: [["clock", "4–6 hrs a week"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "music", "kind": "fact", "label": "What members do", "text": "Members work on sets during the semester. One member is a creative consultant on a set this term."},
        {"icon": "sparkle", "kind": "take", "label": "Advice", "quote": "“Have fun, be authentic.”", "by": "From a member"}
      ]
    },
    "scholars-of-finance": {
      category: "Finance · application",
      name: "Scholars of Finance",
      vibe: "A Leadership Development Program and Recruitment Bootcamp that help underclassmen prepare for finance recruiting.",
      facts: [["clock", "2–6 hrs a week"], ["key", "Essays and a video"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "briefcase", "kind": "fact", "label": "What it does", "text": "Runs a Leadership Development Program and a Recruitment Bootcamp. Members say it prepares underclassmen for recruiting and teaches general finance knowledge."},
        {"icon": "clock", "kind": "fact", "label": "Time", "text": "Members report 2 to 6 hours a week for meetings, plus pre-work for the boot camp. One calls the workload high."},
        {"icon": "sparkle", "kind": "take", "label": "Advice for applying", "text": "Put real effort into the essays and the video. Show leadership and values as well as interest in finance, since those are at the core of the club. Be yourself, be personable, and talk to members.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "Members describe it as easygoing and super friendly.", "by": "From a member"},
        {"icon": "quote", "kind": "take", "label": "From a member", "quote": "“I’ve gotten to meet a lot of different people, and have also gotten to think more about my own personal values through the Leadership Development Program.”", "by": "From a member"}
      ]
    },
    "princeton-student-ventures": {
      category: "Entrepreneurship · application",
      name: "Princeton Student Ventures",
      vibe: "A community of people interested in building out Princeton’s entrepreneurial ecosystem.",
      facts: [["clock", "About 4 hrs a week"], ["key", "Application"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "briefcase", "kind": "fact", "label": "What it does", "text": "Supports student founders by investing in them."},
        {"icon": "key", "kind": "fact", "label": "Getting in", "text": "A member reports 15 students were accepted in the most recent fall cycle."},
        {"icon": "sparkle", "kind": "take", "label": "Advice", "quote": "“Be genuine and thoughtful.”", "by": "From a member"}
      ]
    },
    "moral-ambition-princeton": {
      category: "Social impact",
      name: "Moral Ambition @ Princeton",
      vibe: "The first university chapter of moralambition.org, for students who care about socially impactful work.",
      facts: [["clock", "About 2 hrs a week"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "heart", "kind": "fact", "label": "What it is", "text": "The first-ever university chapter of moralambition.org. A member reports more than 250 people filled out the interest form and more than 125 are in the GroupMe."},
        {"icon": "sparkle", "kind": "take", "label": "Advice", "text": "Show passion for social impact and public service.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "quote": "“Frickin’ electric. You bond and develop with peers who value living socially impactful lives.”", "by": "From a member"},
        {"icon": "arrow", "kind": "take", "label": "Where it leads", "text": "One member says it points toward public service.", "by": "From a member"}
      ]
    },
    "club-flag-football": {
      category: "Club sport · open to all",
      name: "Club Flag Football",
      vibe: "A way to keep playing competitively, with no application.",
      facts: [["clock", "About 4 hrs a week"], ["door", "No application"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "users", "kind": "fact", "label": "How it works", "text": "You go to practice, and if you go to enough, you travel with the team for tournaments. There’s no need to apply."},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "Friendly, fun and energetic. A member calls it a super inviting atmosphere.", "by": "From a member"},
        {"icon": "quote", "kind": "take", "label": "From a member", "quote": "“This was a great way to keep my competitive edge from playing football in high school while giving me some of the best friends I’ve had at this school.”", "by": "From a member"}
      ]
    },
    "club-tennis": {
      category: "Club sport · tryouts",
      name: "Club Tennis",
      vibe: "A selective travel team with a rotating roster of about 12, out of roughly 60 players in total.",
      facts: [["clock", "0–8 hrs a week"], ["key", "Tryouts"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "users", "kind": "fact", "label": "What it does", "text": "Two-hour practices three nights a week, optional weekend tournaments, and team dinners."},
        {"icon": "key", "kind": "take", "label": "Getting in", "text": "A member estimates about 10 of 100 made it in the fall and about 3 in the spring, and calls it “95% merit-based.” Their advice: be good at tennis.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "Very eclectic. Most people are there for the tennis, with a more engaged core group.", "by": "From a member"}
      ]
    },
    "men-s-rugby": {
      category: "Club sport · open to all",
      name: "Men’s Rugby",
      vibe: "Anyone can join, and there’s a strong social side.",
      facts: [["clock", "4 hrs off-season, 11 in season"], ["door", "Open to all"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "users", "kind": "fact", "label": "What it does", "text": "Practice three times a week almost year-round, lifts twice a week, and usually one game a week in the fall and spring. There are frequent social events too."},
        {"icon": "key", "kind": "take", "label": "Getting playing time", "text": "Anybody can join. To get playing time, be consistent at practice and at lifts, including in the off-season.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "Generally welcoming, with its own groups like any team. A member says upperclassmen are friendly and willing to talk to younger players, and describes the team as “a little fratty.”", "by": "From a member"},
        {"icon": "quote", "kind": "take", "label": "From a member", "quote": "“Probably one of the coolest things I’ve ever done. Great social community, felt right at home as soon as I joined.”", "by": "From a member"},
        {"icon": "arrow", "kind": "take", "label": "Where it leads", "text": "One member has seen a lot of teammates go into investment banking and finance. That’s one person’s view and changes from year to year.", "by": "From a member"}
      ]
    },
    "men-s-club-soccer": {
      category: "Club sport · tryouts",
      name: "Men’s Club Soccer",
      vibe: "Two or three trainings a week, weekend games, and frequent social events.",
      facts: [["clock", "4–8 hrs a week, not compulsory"], ["key", "Tryouts"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "users", "kind": "fact", "label": "What it does", "text": "2 to 3 training sessions a week plus a game on the weekend. Occasional tournaments last 2 to 3 days and are paid for."},
        {"icon": "clock", "kind": "take", "label": "Time", "text": "Nothing is compulsory, but you usually need to be going to practice to play in weekend games and tournaments.", "by": "From a member"},
        {"icon": "key", "kind": "take", "label": "Getting in", "text": "Tryouts are competitive because a lot of people try out. One member says decent high school experience is enough to have a shot, and estimates 10 to 15 made it last fall.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The culture", "text": "A supportive group with good leadership and frequent social events. One member says there’s no hazing.", "by": "From a member"}
      ]
    },
    "cap-and-gown": {
      category: "Eating club · bicker",
      name: "Cap and Gown",
      vibe: "Bicker is two days of conversations, and a member says the community shows up for each other.",
      facts: [["key", "Bicker club"], ["clock", "2-day bicker"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "key", "kind": "fact", "label": "How bicker works", "text": "Two days of conversations in 1.5-hour blocks. A member calls it “super chill.” Bicker happens in both the fall and the spring."},
        {"icon": "sparkle", "kind": "take", "label": "Biggest tip", "quote": "“Be genuine and patient and believe in yourself! People are turned off by bickerees who seem so anxious they say insensitive or rude things.”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The environment", "text": "During bicker: energized, nervous and curious.", "by": "From a member"},
        {"icon": "gauge", "kind": "take", "label": "How many get in", "text": "A member guesses about 100 people are accepted in the spring and about 10 in the fall.", "by": "From a member"},
        {"icon": "heart", "kind": "take", "label": "Favorite part", "quote": "“The community! People show up for each other!”", "by": "From a member"}
      ]
    },
    "terrace": {
      category: "Eating club · sign-in",
      name: "Terrace",
      vibe: "A sign-in club a member calls super open and welcoming.",
      facts: [["door", "Sign-in club"], ["music", "Live bands"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "door", "kind": "fact", "label": "How sign-in works", "text": "You sign in by ranking Terrace as your top choice."},
        {"icon": "sparkle", "kind": "take", "label": "Biggest tip", "quote": "“Be yourself and have fun with it!”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The environment", "quote": "“Super open and welcoming with some of the nicest people on campus.”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "Who’s there", "quote": "“Honestly there’s a little bit of everything. I feel like every person I’ve met has a different involvement on campus.”", "by": "From a member"},
        {"icon": "heart", "kind": "take", "label": "Favorite parts", "text": "A member’s favorite part is the food. Their favorite events are the live bands, especially Battle of the Bands.", "by": "From a member"}
      ]
    },
    "quadrangle": {
      category: "Eating club · sign-in",
      name: "Quadrangle",
      vibe: "A member describes Quad as very chill and welcoming.",
      facts: [["door", "Sign-in club"], ["cal", "Two social events to join"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "door", "kind": "fact", "label": "How getting in works", "text": "You have to attend two social events."},
        {"icon": "sparkle", "kind": "take", "label": "Biggest tip", "quote": "“Be yourself and try and get to know the vibe of each club.”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The environment", "text": "Very chill and welcoming.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "Who’s there", "text": "One member has seen a lot of dance people, some a cappella people, and a lot of members in pre-professional clubs. That’s one person’s view and changes from year to year.", "by": "From a member"},
        {"icon": "heart", "kind": "take", "label": "Favorite parts", "text": "The people. A favorite event: Quad STG.", "by": "From a member"}
      ]
    },
    "cannon-dial-elm": {
      category: "Eating club · bicker",
      name: "Cannon Dial Elm",
      vibe: "A bicker club where, according to one member, a lot of members play varsity sports.",
      facts: [["key", "Bicker club"]],
      updated: "Nov 2026",
      cards: [
        {"icon": "key", "kind": "take", "label": "How bicker works", "quote": "“Basically rated speed dating.”", "by": "From a member"},
        {"icon": "sparkle", "kind": "take", "label": "Biggest tip", "quote": "“Be your authentic self and make it obvious you are on a sports team.”", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "The environment", "text": "One member describes the club as very divided by sports team, and calls nights out “mid.” That’s one person’s view and changes from year to year.", "by": "From a member"},
        {"icon": "users", "kind": "take", "label": "Who’s there", "text": "One member says many members play varsity sports.", "by": "From a member"},
        {"icon": "gauge", "kind": "take", "label": "How many get in", "text": "A member guesses about 450 people bickered last cycle and about 200 were accepted.", "by": "From a member"},
        {"icon": "heart", "kind": "take", "label": "Favorite parts", "text": "The food. A favorite event: fight night.", "by": "From a member"}
      ]
    }
  },

  // Links to each group's own website. Every link here was checked in Nov 2026.
  // Format: page id -> [[label, url], ...]. Groups not listed get a web search link instead.
  sites: {
    'cannon-dial-elm': [['Visit their website', 'http://www.cannonclub.com']],
    'cap-and-gown': [['Visit their website', 'https://www.capandgownclub.org/']],
    charter: [['Visit their website', 'https://charterclub.org']],
    colonial: [['Visit their website', 'http://www.colonialclub.com']],
    cottage: [['Visit their website', 'https://cottageclub.net/about-folder']],
    ivy: [['Visit their website', 'https://theivyclub.org']],
    quadrangle: [['Visit their website', 'https://www.quadrangleclub.org/students.html']],
    terrace: [['Visit their website', 'https://princetonterraceclub.org/about']],
    'tiger-inn': [['Visit their website', 'http://www.tigerinn.net']],
    tower: [['Visit their website', 'https://princetontowerclub.com/']],
    bodyhype: [['Visit their website', 'https://www.bodyhypedance.com']],
    'disiac-dance-company': [['Their Instagram', 'https://www.instagram.com/disiacdance/']],
    dance: [['Naacho’s website', 'https://naacho.princeton.edu/'], ['Princeton Bhangra on Instagram', 'https://www.instagram.com/princetonbhangra/']],
    'princeton-university-glee-club': [['Visit their website', 'https://princetongleeclub.com/glee-club']],
    sinfonia: [['Visit their website', 'https://sinfonia.princeton.edu']],
    'princeton-pictures': [['Visit their website', 'https://film.princeton.edu']],
    'princeton-student-ventures': [['Visit their website', 'https://psv.vc']],
    'moral-ambition-princeton': [['Moral Ambition’s Princeton page', 'https://www.moralambition.org/fellowships/university-fellowship-at-princeton']],
    'men-s-rugby': [['Visit their website', 'https://princetonrugby.com']]
  },
  // For pages that cover several groups: card title -> [label, url].
  cardSites: {
    'Nassoons': ['Website', 'http://www.nassoons.com'],
    'Footnotes': ['Website', 'https://www.princetonfootnotes.com'],
    'Tigertones': ['Website', 'http://www.tigertones.com'],
    'Roaring 20': ['Website', 'https://www.princetonroaring20.com'],
    'Tigerlilies': ['Website', 'https://www.putigerlilies.com'],
    'Tigressions': ['Website', 'http://www.theprincetontigressions.com'],
    'Katzenjammers': ['Website', 'http://www.theprincetonkatzenjammers.com'],
    'Wildcats': ['Website', 'https://www.princetonwildcats.com'],
    'Old NasSoul': ['Website', 'https://www.nassoul.com'],
    'Shere Khan': ['Website', 'https://sherekhanprinceton.wixsite.com/sherekhan']
  },

  // The ten active eating clubs. Clubs without a hand-written page still get one,
  // built from approved "Add what you know" submissions.
  eatingClubs: [
    { id: 'cannon-dial-elm', name: 'Cannon Dial Elm' },
    { id: 'cap-and-gown', name: 'Cap and Gown' },
    { id: 'charter', name: 'Charter' },
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
  // Find your clubs quiz. It matches against every group in js/orgs.js.
  // Step 1 picks categories, step 2 (when present) narrows by words in the group's name,
  // and the last three steps rank groups that have student info (see quizMeta).
  quiz: {
    interests: [
      { k: 'arts', t: 'Performing & arts', d: 'Dance, music, theater, film', icon: 'music', cats: ['arts'],
        follow: { q: 'What kind of arts?', opts: [
          { t: 'Dance', d: 'Any style', icon: 'sparkle', re: 'danc|ballet|bhangra|naacho|bodyhype|disiac|sympoh|raqs|raas|triple 8|high steppers|mas flow|koko pops|six14|black arts|tango|aerial|kalaa' },
          { t: 'Singing & music', d: 'A cappella, choirs, bands', icon: 'music', re: 'nassoons|footnotes|tigertones|roaring 20|tigerlilies|tigressions|katzenjammers|wildcats|nassoul|shere khan|acapellago|glee|gospel|music|band|ensemble|sinfonia|opera|camerata|chamber|cello|pianist|guitar|saxophone|beatbox|mariachi|taiko|composers|dj club|electronica|jam sessions|koleinu|swara|tarana|vtone' },
          { t: 'Theater & comedy', d: 'Plays, improv, stand-up', icon: 'users', re: 'theat|players|triangle|intime|playwright|improv|comedy|quipfire|fuzzy dice|lobster|basement|funny|cjl play' },
          { t: 'Film & visual arts', d: 'Film, fashion, making things', icon: 'eye', re: 'film|pictures|hollywood|sketchbook|fashion|off-rack|architecture|crochet|woodcarving|blacksmith|ebru|green creatives|p pop up' }] } },
      { k: 'business', t: 'Business & finance', d: 'Markets, consulting, startups', icon: 'briefcase', cats: ['business'],
        follow: { q: 'Which side of business?', opts: [
          { t: 'Finance & investing', d: 'Markets, funds, trading', icon: 'gauge', re: 'financ|capital|invest|equity|trader|quant|real estate|emerging markets' },
          { t: 'Consulting', d: 'Cases and client projects', icon: 'briefcase', re: 'consult' },
          { t: 'Startups', d: 'Building and funding ideas', icon: 'sparkle', re: 'entrepreneur|e-club|ventures|founded|vc|tamid' },
          { t: 'Not sure yet', d: 'Show me a mix', icon: 'help', re: '' }] } },
      { k: 'tech', t: 'Tech & engineering', d: 'Code, robots, rockets', icon: 'code', cats: ['tech'],
        follow: { q: 'What do you want to build?', opts: [
          { t: 'Software & AI', d: 'Apps, data, security', icon: 'code', re: 'acm|ai at|ai alignment|code|developer|computer|hoagie|tigerapps|data science|cyber|all tech|keyboard' },
          { t: 'Robots, rockets & cars', d: 'Things that move', icon: 'compass', re: 'robot|rocket|rover|racing|speedboat|autonomous|neurotech|first@' },
          { t: 'Engineering societies', d: 'Community and careers', icon: 'users', re: 'engineer|tau beta|quantum|resinde|envision' },
          { t: 'Not sure yet', d: 'Show me a mix', icon: 'help', re: '' }] } },
      { k: 'science', t: 'Science & academics', d: 'Pre-med, research, societies', icon: 'book', cats: ['science'],
        follow: { q: 'Which area?', opts: [
          { t: 'Medicine & health', d: 'Pre-med, public health', icon: 'heart', re: 'medic|medlife|health|dental|veterinar|msf|operation smile|hosa|blood cancer|resq|nightline|alzheimer|factual' },
          { t: 'Physics, math & more', d: 'Physical sciences', icon: 'compass', re: 'physics|physicists|math|chem|astronom|geoscience|materials|science olympiad' },
          { t: 'Bio, brain & mind', d: 'Biology, neuroscience, psychology', icon: 'leaf', re: 'bio|neuro|psycholog|mycology|soma' },
          { t: 'Not sure yet', d: 'Show me a mix', icon: 'help', re: '' }] } },
      { k: 'politics', t: 'Politics, law & advocacy', d: 'Debate, policy, causes', icon: 'flame', cats: ['politics'],
        follow: { q: 'What draws you in?', opts: [
          { t: 'Politics & debate', d: 'Parties, debate, policy', icon: 'users', re: 'democrat|republican|libertarian|socialist|debate|whig|model congress|political|policy|election|usg|international relations|hamilton' },
          { t: 'Law', d: 'Mock trial, moot court', icon: 'key', re: 'law|legal|moot|mock trial|federalist|arguendo|ethics bowl' },
          { t: 'Climate & environment', d: 'Energy, sustainability', icon: 'leaf', re: 'sunrise|conservation|energy|sustainab|net-zero|decarbonized|greening' },
          { t: 'Not sure yet', d: 'Show me a mix', icon: 'help', re: '' }] } },
      { k: 'media', t: 'Writing & media', d: 'News, magazines, radio', icon: 'quote', cats: ['media'],
        follow: { q: 'What kind of writing or media?', opts: [
          { t: 'News & opinion', d: 'Papers and political magazines', icon: 'book', re: 'daily princetonian|nassau weekly|tory|progressive|press club|tiger report|business today|policy punchline' },
          { t: 'Creative & literary', d: 'Fiction, poetry, humor', icon: 'sparkle', re: 'nassau literary|tiger magazine|figments|glossa|moon press|ellipses|forword|fanfiction|arch and arrow|rah-rah|positions|seabird|manuscripts' },
          { t: 'Radio & video', d: 'On air and on screen', icon: 'music', re: 'wprb|tiger media|tigertale|tedx|all-nighter|perspective' },
          { t: 'Not sure yet', d: 'Show me a mix', icon: 'help', re: '' }] } },
      { k: 'culture', t: 'Culture & community', d: 'Cultural, faith and identity groups', icon: 'heart', cats: ['culture'] },
      { k: 'play', t: 'Sports & hobbies', d: 'Club sports, games, food', icon: 'compass', cats: ['sports', 'hobbies'],
        follow: { q: 'What sounds fun?', opts: [
          { t: 'Club sports', d: 'Practices and games', icon: 'flame', re: 'club flag|club tennis|rugby|club soccer|boxing|muay|aikido|pickleball|fitness' },
          { t: 'Games', d: 'Board games, cards, gaming', icon: 'sparkle', re: 'chess|bridge|poker|scrabble|quiz bowl|puzzles|cube|lego|minecraft|magic|d&d|esports|simulation|mahjong|billiards' },
          { t: 'Food & outdoors', d: 'Cooking, gardens, nature', icon: 'leaf', re: 'cook|baking|food|co-op|society of tea|chocolate|cheese|garden|farmers|birding|fishing' },
          { t: 'Not sure yet', d: 'Show me a mix', icon: 'help', re: '' }] } }
    ],
    time: { q: 'How much time do you want to give it each week?', opts: [
      { t: '1–2 hrs', d: 'Just dipping in', icon: 'leaf', range: [0, 2] },
      { t: '3–5 hrs', d: 'A real commitment', icon: 'clock', range: [3, 5] },
      { t: '6–10 hrs', d: 'It’s my thing', icon: 'flame', range: [6, 10] },
      { t: 'Whatever it takes', d: 'All in', icon: 'sparkle', range: null }] },
    apply: { q: 'How do you feel about applying or auditioning?', opts: [
      { t: 'Bring it on', d: 'Selective is fine', icon: 'key', k: 'selective' },
      { t: 'I’d rather just show up', d: 'Open to everyone', icon: 'door', k: 'open' },
      { t: 'Either works', d: 'Depends on the group', icon: 'shuffle', k: 'either' },
      { t: 'Not sure yet', d: 'Show me both', icon: 'help', k: 'either' }] },
    goal: { q: 'What do you want most out of it?', opts: [
      { t: 'Friends & community', d: 'People to belong with', icon: 'users', k: 'friends' },
      { t: 'Skills & career', d: 'Something that leads somewhere', icon: 'briefcase', k: 'career' },
      { t: 'A creative outlet', d: 'Make and express', icon: 'sparkle', k: 'creative' },
      { t: 'To compete or perform', d: 'Shows, games, results', icon: 'flame', k: 'compete' }] }
  },

  // What the quiz knows about pages with student info: hours a week [min, max],
  // how you get in ('audition', 'application', 'tryout' or 'open'), and what people get out of it.
  // Leave a field out if students haven't told us.
  quizMeta: {
    dance: { entry: 'audition', goals: ['friends', 'compete'] },
    acappella: { entry: 'audition', goals: ['friends', 'compete', 'creative'] },
    bodyhype: { hours: [6, 6], entry: 'audition', goals: ['compete', 'creative', 'friends'] },
    'disiac-dance-company': { hours: [3, 9], entry: 'audition', goals: ['compete', 'friends'] },
    'expressions-dance-company': { hours: [6, 8], entry: 'audition', goals: ['creative', 'friends', 'compete'] },
    'princeton-university-glee-club': { hours: [5, 6], entry: 'audition', goals: ['compete', 'friends'] },
    sinfonia: { hours: [3, 3], entry: 'audition', goals: ['compete'] },
    'princeton-pictures': { hours: [4, 6], goals: ['creative'] },
    'scholars-of-finance': { hours: [2, 6], entry: 'application', goals: ['career'] },
    'princeton-student-ventures': { hours: [4, 4], entry: 'application', goals: ['career'] },
    'moral-ambition-princeton': { hours: [2, 2], goals: ['friends', 'career'] },
    'club-flag-football': { hours: [4, 4], entry: 'open', goals: ['friends', 'compete'] },
    'club-tennis': { hours: [0, 8], entry: 'tryout', goals: ['compete'] },
    'men-s-rugby': { hours: [4, 11], entry: 'open', goals: ['friends', 'compete'] },
    'men-s-club-soccer': { hours: [4, 8], entry: 'tryout', goals: ['friends', 'compete'] }
  }
};

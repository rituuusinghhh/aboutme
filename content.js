/* =====================================================================
   RITURAJ SINGH — WEBSITE CONTENT FILE   (content.js)
   =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR WEBSITE.

   QUICK RULES (very important — they keep the website from breaking):
   1. Only change the text that is INSIDE "double quotes".
   2. Never delete a quote mark ("), a comma (,), a bracket [ ]  or a brace { }.
   3. Every item in a list is separated by a comma — including the
      last-but-one item. (A comma after the very last item is also fine.)
   4. If you need a quote mark inside your text, write it like this:  \"
   5. Anything shown as  [EDIT: ...]  is a placeholder. Replace the WHOLE
      thing, including the square brackets, with your real information.
      (Placeholders are highlighted on the live site so you can spot them.
       Turn the highlight off with  highlightPlaceholders: false  below.)
   6. To REMOVE an item (a project, skill, photo...) delete its whole
      { ... }, block including the comma after it.
   7. To ADD an item, copy a whole { ... }, block, paste it right after
      another one, then change the text.

   After editing, click "Commit changes" on GitHub. Your site updates in
   about 1 minute. Full instructions are in README.md.
   ===================================================================== */

window.SITE = {

  /* ------------------------------------------------------------------
     SETTINGS
     ------------------------------------------------------------------ */
  settings: {
    highlightPlaceholders: true,   // true = show [EDIT: ...] text with a dotted highlight. Set false when you are done.
    showSkillLevels: false,        // true = show a progress bar on each skill (uses "level" below, 0-100)
    defaultTheme: "dark",          // "dark" or "light" (visitors can switch with the sun/moon button)
    accentColor: "#d4af6a"         // main accent colour (gold). Try electric blue: "#4f8cff"
  },

  /* ------------------------------------------------------------------
     SEARCH ENGINE / SHARING INFORMATION (SEO)
     ------------------------------------------------------------------ */
  seo: {
    title: "Rituraj Singh — Content Creator, Creative Designer, Educator & Entrepreneur",
    description: "Rituraj Singh — content creator, creative designer, educator and entrepreneur from Surat, Gujarat. Graphic design, accounting software, digital marketing, AI-powered content and practical teaching."
  },

  /* ------------------------------------------------------------------
     HERO (top of the page)  +  BRAND
     ------------------------------------------------------------------ */
  brand: {
    name: "Rituraj Singh",
    logoText: "RS",                                  // 2 letters shown in the top-left logo
    badge: "Exploring Ideas. Creating Possibilities",
    roles: ["Content Creator", "Creative Designer", "Educator", "Entrepreneur"],   // animated typing text
    tagline: "Learn Continuously. Create Fearlessly. Grow Professionally.",   // <- your personal tagline
    intro: "From Bihar, based in Surat, Gujarat — a technology enthusiast and creative thinker working across graphic design, accounting, digital marketing and AI-powered content creation. Associated with VIJAY SHREE POP & PVC and A.S. Computer & Coaching Classes.",
    buttons: {
      journey: "Explore My Journey",
      work: "View My Skills",
      contact: "Contact Me"
    },
    // PROFILE PHOTO: upload a photo named  profile.jpg  into assets/images/  and it appears automatically.
    // (Using a different file name or type, e.g. .png / .webp? Change the name here.)
    photo: "assets/images/profile.jpg",
    // Small floating cards next to your photo (max 3). Icons: pen-tool, video, book-open, briefcase, camera, layers, star, award, zap, users
    heroChips: [
      { icon: "cpu",       label: "Technology",       sub: "AI & digital tools" },
      { icon: "layers",    label: "Creative Design",  sub: "Canva & CorelDRAW" },
      { icon: "book-open", label: "Teaching",         sub: "Practical learning" }
    ],
    // Scrolling keyword strip under the hero
    marquee: ["Graphic Design", "Accounting Software", "Digital Marketing", "AI-Powered Content", "Teaching & Training", "Tally Prime", "Canva & CorelDRAW"]
  },

  /* ------------------------------------------------------------------
     SECTION HEADINGS (small label, big title, short intro under it)
     ------------------------------------------------------------------ */
  sections: {
    about:        { eyebrow: "About Me",                   title: "Creativity, education and enterprise — one story.", intro: "" },
    journey:      { eyebrow: "My Journey",                 title: "The path so far",                                   intro: "My education and professional experience — tap “More” on a card for details." },
    skills:       { eyebrow: "My Skills",                  title: "What I bring to every project",                     intro: "Software, design, marketing, teaching and languages — a practical, multi-skilled toolkit." },
    projects:     { eyebrow: "My Projects",                title: "Selected work",                                     intro: "A look at the creative, business and educational projects I've worked on." },
    gallery:      { eyebrow: "Photo Gallery",              title: "Moments & frames",                                  intro: "Tap any photo to view it full-size." },
    achievements: { eyebrow: "Experience & Achievements",  title: "Milestones that matter",                            intro: "" },
    interests:    { eyebrow: "My Interests",               title: "What drives me",                                    intro: "" },
    contact:      { eyebrow: "Contact",                    title: "Let's create something together",                   intro: "" }
  },

  /* ------------------------------------------------------------------
     ABOUT ME
     ------------------------------------------------------------------ */
  about: {
    photo: "assets/images/about.jpg",   // leave empty to reuse your profile photo, or give another one, e.g. "assets/images/about.jpg"
    photoCaption: "Rituraj Singh",
    lead: "I'm Rituraj Singh, originally from Bihar and currently based in Surat, Gujarat.",
    paragraphs: [
      "A technology enthusiast and creative thinker, I have explored diverse fields including graphic design, accounting, digital marketing, and AI-powered content creation.",
      "With hands-on industry experience and a passion for continuous learning, I also have approximately one year of teaching experience at A.S. Computer & Coaching Classes, where I train students in accounting, computer applications, and creative software.",
      "I believe in practical learning, helping students understand concepts from the basics, solve real-world problems, and develop professional skills through hands-on practice.",
      "My philosophy: Learn Continuously. Create Fearlessly. Grow Professionally."
    ],
    facts: [
      { label: "Based in",  value: "Surat, Gujarat (from Bihar)" },
      { label: "Languages", value: "Maithili, Bhojpuri, Hindi, English, Marwari" },
      { label: "Focus",     value: "Design · Accounting · Marketing · Teaching" }
    ],
    traits: [
      { title: "Personality & Mindset", text: "Positive-minded, punctual and curious — I enjoy exploring new ideas, learning different subjects and researching new technologies. I believe in gaining practical knowledge, creating meaningful memories and making the most of every experience." },
      { title: "Life Principle",        text: "Life is a once-in-a-lifetime opportunity — follow your dreams and interests, explore possibilities, take chances, learn through experiences and create a journey that truly reflects who you are." },
      { title: "Ambition",              text: "To build a business of my own that brings personal satisfaction, lets me work on my interests, and keeps expanding my knowledge and practical experience — exploring opportunities and learning along the way." }
    ],
    venturesTitle: "Associated with",
    ventures: [
      { name: "VIJAY SHREE POP & PVC",          type: "Business",  text: "Account management, stock flow, finance and digital marketing for the business.", url: "" },
      { name: "A.S. Computer & Coaching Classes", type: "Education", text: "Teaching accounting, computer applications and creative software to students.", url: "" }
    ]
  },

  /* ------------------------------------------------------------------
     MY JOURNEY — interactive timeline
     type must be one of:  education | experience | milestone | achievement
     "points" is optional: extra bullet points shown when the visitor taps "More".
     ------------------------------------------------------------------ */
  journey: {
    typeLabels: { education: "Education", experience: "Experience", milestone: "Milestone", achievement: "Achievement" },
    items: [
      {
        type: "education",
        period: "Passed 2025",
        title: "B.Com",
        org: "Lalit Narayan Mithila University",
        text: "Bachelor of Commerce, completed in 2025."
      },
      {
        type: "experience",
        period: "",
        title: "Account Manager",
        org: "VIJAY SHREE POP & PVC",
        text: "Managing the accounts, stock and finances of the business, and building its digital presence.",
        points: [
          "Account management",
          "Stock flow management",
          "Financial management",
          "Digital marketing",
          "IndiaMART and Justdial listing and product management",
          "Product management on Instagram, Facebook and YouTube"
        ]
      },
      {
        type: "experience",
        period: "Approx. 1 year",
        title: "Teacher & Trainer",
        org: "A.S. Computer & Coaching Classes",
        text: "Training students in accounting, computer applications and creative software, with a focus on practical, professional-level skills.",
        points: [
          "Teaching accounting and computer applications",
          "Basic Computer Skills and CCC",
          "Tally Prime, Empire and Tripta",
          "Canva and CorelDRAW",
          "Introduction to ChatGPT and AI tools",
          "Practical assignments, real-world questions and doubt-solving"
        ]
      },
    ]
  },

  /* ------------------------------------------------------------------
     MY SKILLS
     icon options: layers, video, bar-chart, zap, book-open, briefcase, pen-tool, camera, cpu, users, send, star, award, target
     level: 0-100 (only shown if settings.showSkillLevels is true)
     ------------------------------------------------------------------ */
  skills: [
    { icon: "briefcase", name: "Accounting & Business Software", text: "Hands-on accounting and business operations.",
      tags: ["Tally Prime", "Vyapar", "Genesys Web", "Empire", "Tripta", "Financial Accounting & Business Operations"], level: 80 },
    { icon: "layers",    name: "Graphic Design & Creativity", text: "Visual design and creative content.",
      tags: ["Canva", "CorelDRAW", "Graphic Designing", "Creative Design & Visual Content Creation"], level: 80 },
    { icon: "video",     name: "Digital Marketing & Content Creation", text: "Growing brands and businesses online.",
      tags: ["AI-Powered Image & Video Generation", "Social Media Management", "Instagram, YouTube & Facebook Management", "Product Listing & Catalogue Management", "IndiaMART & Justdial Management", "Customer Inquiry Handling"], level: 80 },
    { icon: "book-open", name: "Teaching & Training", text: "Practical, concept-first learning.",
      tags: ["Computer Fundamentals & CCC", "Accounting Software Training", "Practical-Based Teaching", "Student Mentoring & Doubt Solving", "ChatGPT & AI Tools Training"], level: 80 },
    { icon: "zap",       name: "Professional Skills", text: "How I work.",
      tags: ["Quick Learning & Research", "Adaptability", "Time Management & Punctuality", "Creative Problem Solving", "Communication & Multilingual Skills", "Continuous Learning"], level: 80 },
    { icon: "globe",     name: "Languages", text: "Comfortable working across communities.",
      tags: ["Maithili – Native", "Bhojpuri – Fluent", "Hindi – Fluent", "English – Proficient", "Marwari – Fluent"], level: 80 }
  ],

  /* ------------------------------------------------------------------
     MY PROJECTS
     category must match one of the names in "categories" (spelled exactly the same).
     image: put pictures in assets/images/projects/ and write the file name here.
     link:  leave "" if you do not want a "View project" button.
     ------------------------------------------------------------------ */
  projects: {
    categories: ["Graphic Design", "Branding & Logo Design", "Social Media Content", "Business Projects", "Educational Projects", "Creative Experiments"],
    items: [
      // Add projects here (see README). While this list is empty, the Projects section stays hidden.
    ]
  },

  /* ------------------------------------------------------------------
     PHOTO GALLERY
     Upload photos into assets/images/gallery/ , then add a line here.
     Tip: keep each photo under ~300 KB (see README → "Prepare your photos").
     ------------------------------------------------------------------ */
  gallery: [
    { src: "assets/images/gallery/formal-look.jpg",     caption: "Formal look",       category: "Portraits" },
    { src: "assets/images/gallery/golden-light.jpg",    caption: "Golden light",      category: "Portraits" },
    { src: "assets/images/gallery/lake-walk.jpg",       caption: "By the lake",       category: "Moments" },
    { src: "assets/images/gallery/night-sea.jpg",       caption: "Night by the sea",  category: "Moments" },
    { src: "assets/images/gallery/festive-evening.jpg", caption: "Festive evening",   category: "Moments" },
    { src: "assets/images/gallery/event-day.jpg",       caption: "Event day",         category: "Portraits" },
    { src: "assets/images/gallery/sea-sunglasses.jpg",  caption: "Sea breeze",        category: "Moments" }
  ],

  /* ------------------------------------------------------------------
     EXPERIENCE & ACHIEVEMENTS
     Each group is a card. Add / remove groups and items freely.
     icon options: award, check, briefcase, star, book-open, target
     ------------------------------------------------------------------ */
  achievements: {
    stats: [
      // Optional big numbers. Example (remove the // to use):
      // { value: "100+", label: "Completed projects" }
    ],
    groups: [
      // Example (remove the // to use). While there are no items, this section stays hidden:
      // { icon: "award", title: "Certifications", items: [ { title: "Certificate name", text: "Issued by", year: "2025" } ] }
    ]
  },

  /* ------------------------------------------------------------------
     MY INTERESTS, HOBBIES & FUTURE GOALS
     ------------------------------------------------------------------ */
  interests: {
    items: [
      { icon: "pen-tool",  title: "Creative Work",       text: "Turning ideas into visuals, stories and experiences." },
      { icon: "cpu",       title: "Technology",          text: "Exploring tools and technology that make creating easier." },
      { icon: "layers",    title: "Designing",           text: "Shaping layouts, brands and visuals with care for detail." },
      { icon: "camera",    title: "Photography",         text: "Capturing moments and framing the world creatively." },
      { icon: "book-open", title: "Learning & Teaching", text: "Learning something new every day and sharing it with others." }
    ],
    hobbiesTitle: "Hobbies",
    hobbies: [],   // e.g. ["Reading", "Travel"]  (hidden while empty)
    goalsTitle: "Future goals",
    goals: []      // e.g. [ { title: "Goal", text: "Why it matters." } ]  (hidden while empty)
  },

  /* ------------------------------------------------------------------
     CONTACT & SOCIAL LINKS
     WhatsApp number: digits only, with country code, NO + or spaces.
        India example:  919876543210   (91 = India, then your 10-digit number)
     icon options: instagram, linkedin, facebook, youtube, twitter, github, globe, phone, mail, whatsapp
     Links that still contain YOUR_ or example.com are shown but will not open
     (the visitor sees a friendly note) until you replace them.
     ------------------------------------------------------------------ */
  contact: {
    text: "Have an idea, a project or a collaboration in mind? Reach out — I'd love to hear from you.",
    whatsapp: {
      number: "918160519550",
      message: "Hello Rituraj, I found your website and would like to connect."
    },
    email: "ritusingh8aug@gmail.com",
    links: [
      { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/rituraj._.singhhh/", handle: "@rituraj._.singhhh" }
      // Add more like this (don't forget the comma on the line above):
      // { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/YOUR_USERNAME", handle: "Rituraj Singh" }
    ]
  },

  /* ------------------------------------------------------------------
     FOOTER  (the year updates automatically)
     ------------------------------------------------------------------ */
  footer: {
    tagline: "Learn Continuously. Create Fearlessly. Grow Professionally.",
    note: "All rights reserved."
  }
};

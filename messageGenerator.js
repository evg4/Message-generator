const adjectives = [
  "wary",
  "happy",
  "brave",
  "cautious",
  "friendly",
  "strategic",
  "optimistic",
];
const verbPhrases1 = [
  "excel",
  "find love",
  "keep your friends",
  "have adventures",
  "achieve your dreams",
  "find inner peace",
  "reach your goals",
  "avoid drama",
  "make money",
  "find out who your true friends are",
  "remove the toxic people from your life",
];
const verbPhrases2 = [
  "always be one step ahead",
  "embrace opportunites",
  "be wise",
  "avoid taking on too much",
  "trust the universe",
  "repay kindness",
  "come up with a plan",
];

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let verbPhrase1 = verbPhrases1[Math.floor(Math.random() * verbPhrases1.length)];
let verbPhrase2 = verbPhrases2[Math.floor(Math.random() * verbPhrases2.length)];

let sentence = `Be ${adjective}. If you want to ${verbPhrase1}, you must ${verbPhrase2}.`;

console.log(sentence);

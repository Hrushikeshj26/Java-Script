// Spread Oprator && Destructuring
const developer = {
  name: "Hrushikesh",
  level: 10,
  skills: ["HTML", "CSS"],
  equipment: {
    laptop: "Old Windows PC",
    mouse: "Logitech",
    keyboard: "ANT Esport",
  },
};

// new things to add:
const newSkills = ["JavaScript", "React"];

let upgradedDeveloper = {
  ...developer,
  skills: [...developer.skills, ...newSkills],
  level: 99,
  equipment: {
    ...developer.equipment,
    laptop: "Asus Tuf A15",
    monitor: "Acer 180hz",
  },
};

console.log(upgradedDeveloper);


//destucturing...
const {
  name,
  equipment: { laptop, monitor },
} = upgradedDeveloper;

console.log(`Pro Dev ${name} uses ${laptop} and ${monitor}!`);

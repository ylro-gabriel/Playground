const drills = [
  {
    name: "Wall Spike",
    skill: "spiking",
    duration: 10,
  },
  {
    name: "Mirror Blocking",
    skill: "blocking",
    duration: 5,
  },
  {
    name: "Toss Up",
    skill: "setting",
    duration: 15,
  },
  {
    name: "Dig-Set-Hit",
    skill: "digging/receiving",
    duration: 15,
  },
];

function getRandomDrill(arrayDrills) {
  let min = 0;
  let max = arrayDrills.length - 1;

  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return arrayDrills[randomNumber];
}

console.log(getRandomDrill(drills));

function getDrillMessage(drillSelected) {
  return `Today's drill is ${drillSelected.name}. It trains ${drillSelected.skill} for ${drillSelected.duration} minutes.`;
}

let randomDrill = getRandomDrill(drills);
console.log(getDrillMessage(randomDrill));

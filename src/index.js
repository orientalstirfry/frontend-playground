import css from './index.css';  // ignore this line for now

// array containing all Bond films
const allBondFilms = [
  {
    'title': 'Dr No',
    'actor': 'Sean Connery'
  },
  {
    'title': 'From Russia With Love',
    'actor': 'Sean Connery'
  },
  {
    'title': 'Goldfinger',
    'actor': 'Sean Connery'
  },
  {
    'title': 'Thunderball',
    'actor': 'Sean Connery'
  },
  {
    'title': 'You Only Live Twice',
    'actor': 'Sean Connery'
  },
  {
    'title': 'On Her Majesty\'s Secret Service',
    'actor': 'George Lazenby'
  },
  {
    'title': 'Diamonds Are Forever',
    'actor': 'Sean Connery'
  },
  {
    'title': 'Never Say Never Again',
    'actor': 'Sean Connery'
  },
  {
    'title': 'Live And Let Die',
    'actor': 'Roger Moore'
  },
  {
    'title': 'The Man with the Golden Gun',
    'actor': 'Roger Moore'
  },
  {
    'title': 'The Spy Who Loved Me',
    'actor': 'Roger Moore'
  },
  {
    'title': 'Moonraker',
    'actor': 'Roger Moore'
  },
  {
    'title': 'For Your Eyes Only',
    'actor': 'Roger Moore'
  },
  {
    'title': 'Octopussy',
    'actor': 'Roger Moore'
  },
  {
    'title': 'A View to a Kill',
    'actor': 'Roger Moore'
  },
  {
    'title': 'The Living Daylights',
    'actor': 'Timothy Dalton'
  },
  {
    'title': 'Licence to Kill',
    'actor': 'Timothy Dalton'
  },
  {
    'title': 'GoldenEye',
    'actor': 'Pierce Brosnan'
  },
  {
    'title': 'Tomorrow Never Dies',
    'actor': 'Pierce Brosnan'
  },
  {
    'title': 'The World Is Not Enough',
    'actor': 'Pierce Brosnan'
  },
  {
    'title': 'Die Another Day',
    'actor': 'Pierce Brosnan'
  },
  {
    'title': 'Casino Royale',
    'actor': 'Daniel Craig'
  },
  {
    'title': 'Quantum of Solace',
    'actor': 'Daniel Craig'
  },
  {
    'title': 'Skyfall',
    'actor': 'Daniel Craig'
  },
  {
    'title': 'Spectre',
    'actor': 'Daniel Craig'
  },
];

// create empty array containing bond films grouped by actor
let groupedByActorBondFilms = [];

// loop through all bond films
for(let i = 0; i < allBondFilms.length; i++) {

  // find group in groupedByActorBondFilms with actor the same as allBondFilms[i].actor
  const existingGroup = groupedByActorBondFilms.find(function(film) { return film.actor === allBondFilms[i].actor });

  // if group exists then push allBondFilms[i] into the existingGroup.films array
  if (existingGroup !== undefined) {
    existingGroup.films.push(allBondFilms[i]);
  } else {
    // otherwise create a newGroup object with the actor name and a films array containing the current allBondFilms[i]
    const newGroup = {
      actor: allBondFilms[i].actor,
      films: [
        allBondFilms[i]
      ]  
    };
    // add newGroup to groupedByActorBondFilms 
    groupedByActorBondFilms.push(newGroup);
  }
}

// Sort groupedByActorBondFilms in ascending order by number of films
groupedByActorBondFilms.sort(function(leftGroup, rightGroup) { return leftGroup.films.length - rightGroup.films.length; });



// CODE to display result on page
const body = document.getElementsByTagName('body')[0];
const pre = document.createElement('pre');
const code = document.createElement('code');
code.innerText = JSON.stringify(groupedByActorBondFilms, null, 4);
pre.appendChild(code)
body.appendChild(pre);

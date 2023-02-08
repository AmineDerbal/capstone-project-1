const hamburgerButton = document.querySelector('#hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu-modal');
const mobileMenuLink = document.querySelectorAll('.mobile-menu a');

const mentorsData = [
  {
    name: 'Kyle cook',
    title: 'Owner of web dev simplified youtube channel',
    description: 'Learn how to think like a developer and build any project you can dream of by taking action instead of just following along with tutorials.',
    image: './assets/images/KyleCook.webp',
  },
  {
    name: 'kevin powell',
    title: 'Css Mentor',
    description: 'Whether you\'re trying to learn what you need to tweak your small business\' website or you\'re looking to jump start a new career, I\'m here to help.',
    image: './assets/images/zibgmk12_400x400.jpg',
  },
  {
    name: 'Ania Kubów',
    title: 'Software Developer',
    description: 'Software Engineer (ex-Eurostar) and now Course Creator for FreeCodeCamp.org',
    image: './assets/images/Ania-kubow.jpg',
  },
  {
    name: 'Stefan Mischook',
    title: 'President at StudioWeb',
    description: 'I started building websites in 1994 and have been teaching web design and programming for over 10yrs!',
    image: './assets/images/Stefan-Mischook.jpg',
  },
  {
    name: 'Jesse Showalter',
    title: 'front end developer',
    description: 'shares Digital Design & Web Development videos focusing on tools, techniques, projects, and more to help creative people make amazing things',
    image: './assets/images/Jesse-Showalter.jpeg',
  },
  {
    name: 'Derek Banas',
    title: 'Udemy instructor',
    description: 'has a passion for educating people! He has worked in the technology field on a professional level for 26 years',
    image: './assets/images/derek_banas.jpg',
  },
];

const generateCard = (cardData) => {
  const markup = document.createElement('div');
  markup.classList.add('mentor-card');
  markup.innerHTML = `  <div class="image-container">
    <img src=${cardData.image} alt="${cardData.name}-picture">
  </div>
  <div class="mentor-detail">
    <p class ="mentor-name">${cardData.name}</p>
    <p class="mentor-title">${cardData.title}</p>
    <div class="mentor-separator"></div>
    <p class="mentor-description">${cardData.description}</p>
  </div>`;
  return markup;
};

const generateMentorCard = () => {
  if (document.querySelector('.mentors-container')) {
    const mentorsContainer = document.querySelector('.mentors-container');
    for (let i = 0; i < mentorsData.length; i += 1) {
      mentorsContainer.appendChild(generateCard(mentorsData[i]));
    }
  }
};

generateMentorCard();

const toggleMenuDisplay = () => {
  document.body.classList.toggle('toggle-modal-body');
  hamburgerButton.classList.toggle('change');
  mobileMenu.classList.toggle('toogleModalDisplay');
};

hamburgerButton.addEventListener('click', toggleMenuDisplay);

mobileMenuLink.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});
// questions.js
import placeholderImage from '../assets/images/placeholder.png'; // Import the image directly
import intense1 from '../assets/music/intense1.ogg';
import intense2 from '../assets/music/intense2.ogg';

const questions = [
  {
    text: "You awaken next to your friends in a new world. What do you do first?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: 'Immediately set out to find breathtaking sights.', values: [0, -1, 1, 0, 0, 0, 1, 1] },
      { text: 'Discuss further actions as a group.', values: [1, 1, -1, 1, 0, 1, -1, 0] },
      { text: 'Seek or build immediate shelter, who knows what dangers lurk?', values: [0, 1, 0, 0, 1, 0, -1, 1] },
      { text: 'Take charge and start delegating tasks.', values: [1, 0, 1, -1, 0, -1, 1, 0] },
    ],
  },
  {
    text: "Night approaches, and two members of your group disagree on whether or not to gather more supplies first. What do you do?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Step in and resolve it, there's no time for this!", values: [1, 0, 1, -1, 0, -1, 0, 0] },
      { text: 'Analyze the situation and offer a compromise.', values: [1, 1, -1, 1, 0, 1, -1, 0] },
      { text: "Lighten the mood with a silly joke.", values: [0, 1, 0, 0, 0, 1, -1, 1] },
      { text: "They're their own people, let them handle it.", values: [-1, 0, 0, -1, 1, -1, 1, 0] },
    ],
  },
  {
    text: "A wild animal crosses your path. What's your reaction?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Approach it cautiously to study it.", values: [0, 1, 0, 0, 0, -1, 1, 0] },
      { text: 'Proceed with extreme caution, it may be dangerous.', values: [1, 1, 0, 0, 1, -1, 0, 0] },
      { text: "Well, the group does need food...", values: [0, -1, 1, 0, 0, 0, 1, -1] },
      { text: 'Attempt to tame it, it may benefit the group.', values: [1, 1, 0, 1, -1, 1, 0, 1] },
    ],
  },
  {
    text: "You realize that your group is running low on a vital resource. What do you do?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Distribute it equally, even if someone argues that they need it more.", values: [0, 0, 0, 1, 0, -1, 0, 0] },
      { text: "Keep it and decide yourself when to use it for the group.", values: [0, -1, 1, -1, 1, 0, 0, 0] },
      { text: "Immediately set out to gather more for the group.", values: [-1, 0, 1, 0, 0, 1, 1, 0] },
      { text: 'Hold a vote on who needs it most.', values: [1, 0, -1, 1, 0, 1, 0, 0] },
    ],
  },
  {
    text: "Your group is attacked by thieves! What is your plan?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Round up your group and delegate roles to stop the thieves.", values: [1, 0, -1, 0, 0, 0, 0, 0] },
      { text: "Charge in to attack!", values: [0, -1, 1, -1, 0, -1, 1, 0] },
      { text: "Keep the thieves busy while your friends escape.", values: [0, 0, 1, -1, 1, -1, 0, 0] },
      { text: "Persuade the thieves to agree to a trade instead.", values: [0, 1, -1, 1, 0, 1, -1, 1] },
    ],
  },
  {
    text: "You discover that your friend has kept serious secrets from you. What do you do?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Question why they did what they did.", values: [1, 0, -1, 1, 0, 0, 0, 1] },
      { text: "Forgive them immediately, I'm sure they had their reasons.", values: [-1, 0, -1, 0, -1, 1, 0, 0] },
      { text: "Push for them to be exiled, they can't be trusted.", values: [-1, 0, 1, -1, 0, 0, 0, -1] },
      { text: "Cautiously discuss what to do in private.", values: [0, 1, 0, -1, 1, 0, 0, 1] },
    ],
  },
  {
    text: "Your settlement is being threatened by a mysterious company. How do you defend yourself?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Set up defenses in case of an attack.", values: [0, 0, 1, -1, 1, 0, 0, 1] },
      { text: "Evacuate the area and find a new place to live.", values: [-1, -1, -1, 0, -1, 1, 1, 0] },
      { text: "Dig around to gather intelligence on the group.", values: [0, 1, 0, 1, 1, 0, 1, 0] },
      { text: "Rally the community to push against the company's oppression.", values: [1, 0, 1, -1, 0, 1, 1, 0] },
    ],
  },
  {
    text: "One of your friends insists on setting out alone to find information your enemy. You feel...",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Skeptical", values: [0, -1, 1, 0, 1, -1, 0, 0] },
      { text: "Hopeful", values: [1, 1, 0, 0, -1, 1, 1, 0] },
      { text: "Worried", values: [-1, 0, 0, 1, 1, -1, 0, 1] },
      { text: "Curious", values: [0, 1, -1, 0, 0, 1, -1, 1] },
    ],
  },
  {
    text: "You and your friends find yourself imprisoned by the enemy. How do you approach this?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Retaliate! No one holds me back!", values: [-1, -1, 1, -1, 0, -1, 1, -1] },
      { text: "Keep your friends safe no matter what.", values: [1, 0, -1, 1, 1, 0, 1, 0] },
      { text: "Wait for the perfect time to strike.", values: [1, 1, 0, 0, 0, 0, -1, 1] },
      { text: "Comply for the meantime and figure things out later.", values: [0, -1, -1, 1, 0, 1, -1, 0] },
    ],
  },
  {
    text: "A former enemy is turning over a new leaf and wants to join the group. How do you respond?",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Everyone deserves a second chance.", values: [0, 0, -1, 1, -1, 1, 0, 1] },
      { text: "Agree, but with some conditions.", values: [1, 1, 0, 1, 0, 0, 1, 1] },
      { text: "This person could never be trusted.", values: [0, -1, 1, -1, 1, -1, 0, 0] },
      { text: "Allow your group to decide.", values: [-1, 0, -1, 1, 0, 1, 0, 1] },
    ],
  },
  {
    text: "An enemy settlement is being attacked, but there are innocent people there too. What do you do?",
    image: placeholderImage,
    music: { source: intense1, loop: true },
    answers: [
      { text: "Let the past die. Kill it, if you have to.", values: [-1, -1, 1, 0, 0, -1, 0, 0] },
      { text: "Try to evacuate any remaining citizens, even if it's dangerous.", values: [1, -1, 0, -1, 1, 1, 0, 0] },
      { text: "Prepare a safehouse to protect any escaping citizens.", values: [0, 1, -1, 1, 1, 0, -1, 1] },
      { text: "Charge the attackers, even if it means helping the enemy.", values: [0, -1, -1, 0, 1, -1, 1, 0] },
    ],
  },
  {
    text: "Template",
    image: placeholderImage,
    music: { source: '', loop: true },
    answers: [
      { text: "Template", values: [0, 0, 0, 0, 0, 0, 0, 0] },
      { text: "Template", values: [0, 0, 0, 0, 0, 0, 0, 0] },
      { text: "Template", values: [0, 0, 0, 0, 0, 0, 0, 0] },
      { text: "Template", values: [0, 0, 0, 0, 0, 0, 0, 0] },
    ],
  },
];

export default questions;

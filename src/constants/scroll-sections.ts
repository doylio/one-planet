export type ScrollSection = {
  title: string;
  emoji: string[];
  killRate: number;
  killEmoji?: string;
  description: string;
  numberSource: string;
  speed: number;
};

export default [
  {
    title: "Cows",
    emoji: ["🐮"],
    killRate: 10,
    speed: 2,
    numberSource:
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    description:
      "Cows are very social animals and exhibit complex emotional behaviors. They will exhibit joy [when released from captivity by running or jumping](https://www.youtube.com/watch?v=KfPfDHYyAYM). Mother cows [grieve when their calves are taken from them](https://www.kensingtonbooks.com/fun-cow-facts-by-mollie-cox-bryan/), crying and bellowing for hours or days. Additionally, cow farming contributes [10 to 20% of the world's greenhouse gas emissions](https://thebreakthrough.org/issues/food-agriculture-environment/livestock-dont-contribute-14-5-of-global-greenhouse-gas-emissions).",
  },
  {
    title: "Goats",
    emoji: ["🐐"],
    killRate: 16,
    speed: 2,
    numberSource:
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    description:
      "Goats are intelligent animals with rich social lives. They give each other [names](https://www.four-paws.org/campaigns-topics/topics/farm-animals/10-amazing-facts-about-goats) and can learn to recognize names humans give them. To maximize milk production, goats are often kept in a constant cycle of [impregnation and lactation](https://viva.org.uk/animals/goats/). Kids are separated from their mothers shortly after birth for the same reason.",
  },
  {
    title: "Sheep",
    emoji: ["🐑"],
    killRate: 20,
    speed: 3,
    numberSource:
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    description:
      "Sheep are deeply empathic creatures, and form close friendships. They will [stick up for their friends](https://www.fourpawsusa.org/our-stories/blog-news/five-cool-facts-sheep) during fights and grieve their loss. Most sheep meat comes from lambs, who are slaughtered [before they are 14 months old](https://www.ers.usda.gov/topics/animal-products/sheep-lamb-mutton/sector-at-a-glance), the equivalent of a 4 year old human.",
  },
  {
    title: "Turkeys",
    emoji: ["🦃"],
    killRate: 16,
    speed: 3,
    numberSource:
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    description:
      "Turkeys have been around for nearly [10 million years](https://bestlifeonline.com/amazing-facts-about-turkeys/), and have been roaming the earth long before the Woolly Mammoth. In today's factory farms however, Turkeys are crowded often having [less than 2.5 square feet](https://www.newrootsinstitute.org/articles/birth-life-and-death-of-a-factory-farmed-turkey) of space for each animal.",
  },
  {
    title: "Pigs",
    emoji: ["🐷"],
    killRate: 47,
    speed: 4,
    numberSource:
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    description:
      "Pigs are incredibly intelligent, on par with dogs and primates. They can understand human instructions, use tools, and even [play video games](https://www.youtube.com/watch?v=0dFwx95ufEk)! In addition to being cruel, pork farming poses a huge [biomedical risk to humans](https://news.mongabay.com/2020/10/research-links-industrial-pig-farming-and-virus-outbreaks), as pigs are often a bridge between bird flus and humans, and the practice of using large quantities of antibiotics in livestock is causing the creation of antibiotic-resistant bacteria.",
  },
  {
    title: "Ducks",
    emoji: ["🦆"],
    killRate: 101,
    speed: 5,
    numberSource:
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    description:
      "Ducks have some remarkably human qualities. They seem to have a [favorite color](https://pangovet.com/pet-lifestyle/birds/duck-facts/), and even have accents! Ducks from the city are louder than country ducks. Despite being waterfowl, they are often not given much more than a trickle to drink in the factory farms. This can cause them to pluck their own feathers, so they will may have their sensitive beaks [clipped without anesthetia](tps://www.piedmontrefuge.org/factory-farming-ducks-and-geese).",
  },
  {
    title: "Chickens",
    emoji: ["🐔"],
    killRate: 2338,
    speed: 8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatibus.",
    sources: [
      "https://ourworldindata.org/grapher/animals-slaughtered-for-meat",
    ],
  },
  {
    title: "Wild Species",
    emoji: [
      "🐒",
      "🦍",
      "🐢",
      "🦝",
      "🦅",
      "🐍",
      "🐅",
      "🐦‍⬛",
      "🐆",
      "🫏",
      "🦓",
      "🦌",
      "🦜",
      "🐜",
      "🦬",
      "🐂",
      "🐃",
      "🦒",
      "🐘",
      "🐝",
      "🦏",
      "🦛",
      "🦫",
      "🦔",
      "🦇",
      "🦥",
      "🦘",
      "🦡",
    ],
    sources: [
      "https://wwf.panda.org/discover/our_focus/biodiversity/biodiversity/",
    ],
    killRate: 0.0003,
    speed: 1,
    description:
      "An entire species goes extinct every 52 minutes. TODO add more here",
  },
] satisfies ScrollSection[];

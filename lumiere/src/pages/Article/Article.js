import styles from "./Article.module.sass";
import React, { Component } from "react";
import ButtonCarousel from "./../../widgets/ButtonCarousel/ButtonCarousel";

class Article extends Component {
  state = {
    isLight: true,
    isSerif: false,
  };

  toggleThemeHandler = () => {
    const currentTheme = this.state.isLight;
    this.setState({
      isLight: !currentTheme,
    });
  };

  toggleFontHandler = () => {
    const currentFont = this.state.isSerif;
    this.setState({
      isSerif: !currentFont,
    });
  };

  article = {
    title: "The Story behind the iconic Karaikal Mango Festival",
    author: { name: "Vishnuprasadh", roll: "CS18B1068" },
    section: "Riviera",
    contents: [
      {
        type: "img",
        url:
          "https://images.unsplash.com/photo-1501746877-14782df58970?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      },
      {
        type: "p",
        content: `Every year, during the Tamil month of Aani which falls within
        the Gregorian months of June and July, there is a fascinating
        festival celebrated in the coastal enclave of Karaikal, a
        festival where mangoes are thrown from rooftops to be caught by
        the throngs that line the streets below. This peculiar tradition
        is observed every year in honour of a local deity with a temple
        to her name at the centre of the town. Our readers might be
        familiar with the pond adjacent to the temple. It is a
        destination for the elderly who have their daily walks there and
        for kids who frolic around under the watch of the elders and
        enjoy feeding puffed rice to the plethora of fish that teem the
        pond.`,
      },
      {
        type: "p",
        content: `Throughout Aani, Bharathiyar Street, which houses the Karaikal
        Ammaiyar temple and an assortment of other temples close by,
        lights up in celebrations. The temple packs a ton of classical
        music and dance performances and the streets surrounding the
        temple play host to small shops selling all sorts of interesting
        trinkets, pots and pans, toys, mobile accessories, ice cream,
        popcorn, and cotton candy. For our freshers looking to make a
        fully featured home out of their hostel rooms, the timing cannot
        be more apt to go splurging for provisions and utensils. The
        month-long extravaganza commemorating Karaikal Ammaiyar
        (Karaikal Mother) features the iconic Maangani Thiruvizha (Mango
        Festival) wherein a few thousand people from Karaikal and the
        nearby towns and villages gather in the four streets of
        Bharathiyar Street, French Teacher Street, Church Street and La
        Mer street (means the sea in French, a reminder of Karaikal’s
        colonial days) to grab the mangoes tossed from the rooftops on
        either side of these streets, following the procession that
        starts from the temple, loops the four streets in the
        aforementioned order and culminates at the temple again. It is
        believed that catching and eating a mango is to be blessed by
        Lord Shiva himself. As to why, we will get there in a moment.
        The crowd gets into such a frenzy that a significant police
        presence becomes mandatory every year to control the mob. Not
        only that, NCC and NSS volunteers from schools and colleges in
        Karaikal, including ours, supplement the police force to handle
        the surplus influx that squeeze into the four narrow streets.
        Here is an excerpt from an official announcement from the local
        administration to give you an idea of what it is like: “In view
        of the Mangani Festival elaborate arrangements were made in all
        the three important days from 26/06/2018 to 28/06/2018 during
        which around 400 Police personnel including 120 Recruit Police
        Constables and 80 Head Constables were deployed for bandobust
        duties along with 200 Police personnel of Karaikal.`,
      },
      {
        type: "p",
        content: `Now that we have an idea of what the festival is like, let us get to what we came here for: the fable behind the fiesta. This lore is from the heydays of the Chola dynasty. Karaikal, a bustling maritime trade hub of the kingdom and home to Punitavati, the daughter of a wealthy merchant. Young Punitavati was an ardent devotee of Lord Shiva and continued to be so even after her marriage to her atheist husband, Paramathathan. One day, Paramathathan sends two mangoes to his wife to be kept for his dessert after lunch. Shortly after, a hungry ascetic comes to her doors looking for food. Punitavati, having not cooked lunch by then, gives the hermit, who goes by the name Bikshantar, one of the two mangoes. After his lunch, Paramathathan, finishing the first mango, asks for the second one to be brought. A worried Punitavati walks into the kitchen, contemplating what to tell her hungry husband who, when told the truth, might react angrily to her earlier deed. Faced with such a catch, she closes her eyes in prayer to her beloved Lord Shiva and instantaneously, a mango appears in her palms. An overjoyed Punitavati returns to her husband and serves him the second mango. Paramathathan, tasting the second mango finds it infinitely sweeter than the first one, owing to its divine origins. Suspicious, he demands as to how this mango came to be. Punitavati, not wanting to lie to her husband, tells him the truth and is met with laughter from her husband, who beckons her to perform the trick again. Punitavati closes her eyes in prayer and yet again, a mango appears in her palms. A shocked Paramathathan reaches for the mango and on his touch, the mango disappears in the same fashion it came. Realising his wife’s divine nature, he decides that she is not meant for an ordinary life, titles her Ammaiyar and then leaves her. Punitavati, now alone and bereft of her husband, decides to pursue an ascetic life. Years later, coming to know that her husband has wed another and settled in another kingdom, she goes to confront him. Ammaiyar meets them to find the pair and their daughter Punitavati, named in her honour, praying to her as a Goddess. Devasted at this action of her husband, Ammaiyar prays to Shiva for a form of a disembodied wraith, abandoning her beauty and the material world to seek ethereal and eternal peace. She journeys to Mount Kailash, walking upside down on her hands. Don’t ask me why though. It is beyond the realm of my understanding as well. Perhaps it is a sign of her staunch devotion. Thus, concludes the story behind the iconic Karaikal Mango Festival.`,
      },
      {
        type: "p",
        content: `I have a confession to make, dear readers. I, like the most of you, have not seen the festival. Whatever I have written, I have done so with the images and information that my friends shared with me. I thank Bhuvan Sundar, Barath, Vedapuriswar and Heartwin for sharing with me their experiences of being a part of the gala. A special thanks to Arun Karthik and Swetha from Karaikal, and their families, for taking the time to explain the traditions and the lore behind this beautiful fete. This article, like the remainder of the section Riviera, is part of an effort to open our oblivious eyes to the unique quirks and stories of Karaikal. The town has a lot to offer us in our four years there and like many of you, I have failed to see it. The pandemic changed our feelings about what that place means to us. We do not realise the significance of anything until we lose it. The pandemic is a taste of that. So, I invite you all to join me in celebrating Maangani Thiruvizha 2021 and make the most of whatever time we have left in beloved Karaikal.`,
      },
    ],
  };

  render() {
    let content = null;
    content = this.article.contents.map((item, index) => {
      if (item.type === "img") return <img src={item.url}></img>;
      else if (item.type === "p") return <p>{item.content}</p>;
      else return null;
    });
    return (
      <div className={this.state.isLight ? styles.Light : styles.Dark}>
        <div className={styles.Header}>
          <h1 className={styles.SectionTitle}>{this.article.section}</h1>
          <h1 className={styles.SectionTitleSupplement}>by Lumiere</h1>
        </div>
        <div
          className={`${styles.Article} ${
            this.state.isSerif ? styles.Serif : styles.Sans
          }`}
        >
          <div className={styles.Doc}>
            <h1>{this.article.title}</h1>
            <h3>{this.article.author.name}</h3>
            <h4>{this.article.author.roll}</h4>
            <ButtonCarousel
              toggleTheme={this.toggleThemeHandler}
              toggleFont={this.toggleFontHandler}
              isSerif={this.state.isSerif}
              isLight={this.state.isLight}
            />
            <div className={styles.ArticleBody}>{content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

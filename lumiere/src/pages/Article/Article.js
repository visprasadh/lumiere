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

  render() {
    return (
      <div className={this.state.isLight ? styles.Light : styles.Dark}>
        <div className={styles.Header}>
          <h1 className={styles.SectionTitle}>Riviera</h1>
          <h1 className={styles.SectionTitleSupplement}>by Lumiere</h1>
        </div>
        <div
          className={`${styles.Article} ${
            this.state.isSerif ? styles.Serif : styles.Sans
          }`}
        >
          <div className={styles.Doc}>
            <h1>The Story behind the iconic Karaikal Mango Festival</h1>
            <h3>Vishnuprasadh</h3>
            <h4>CS18B1068</h4>
            <ButtonCarousel
              toggleTheme={this.toggleThemeHandler}
              toggleFont={this.toggleFontHandler}
              isSerif={this.state.isSerif}
              isLight={this.state.isLight}
            />
            <div className={styles.ArticleBody}>
              <img src="https://images.unsplash.com/photo-1554554497-0095c34db3ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80"></img>
              <p>
                Every year, during the Tamil month of Aani which falls within
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
                pond.
              </p>
              <p>
                Throughout Aani, Bharathiyar Street, which houses the Karaikal
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
                duties along with 200 Police personnel of Karaikal.”
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

import styles from "./Article.module.sass";
import React, { Component } from "react";
import ButtonCarousel from "./../../widgets/ButtonCarousel/ButtonCarousel";

import {ReactComponent as Logo} from './../../LanternLogo.svg';

import article from "./../../data/riviera/R001.json";

class Article extends Component {
  state = {
    isLight: true,
    isSerif: false,
    data: {},
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

  articleID = "R001";

  // constructor() {
  //   super();
  //   this.dynamicImport();
  // }
  
  // dynamicImport = async () => {
  //   const article = await import(`./../../data/riviera/${this.articleID}.json`);
  //   this.setState({data: article});
  // }

  render(){
    const content = article.contents.map((item, index) => {
      if (item.type === "img") return <img src={item.url}></img>;
      else if (item.type === "p") return <p>{item.content}</p>;
      else if (item.type === "quote") return <h4 className={styles.Quote}>{item.content}</h4>
      else return null;
    });
    return (
      <div className={this.state.isLight ? styles.Light : styles.Dark}>
        <div className={styles.Header}>
          <h1 className={styles.SectionTitle}>{article.section}</h1>
          <h1 className={styles.SectionTitleSupplement}>by Lumiere</h1>
          <Logo className={styles.Logo}/>
        </div>
        <div
          className={`${styles.Article} ${
            this.state.isSerif ? styles.Serif : styles.Sans
          }`}
        >
          <div className={styles.Doc}>
            <h1>{article.title}</h1>
            <h3>{article.author.name}</h3>
            <h4>{article.author.roll}</h4>
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

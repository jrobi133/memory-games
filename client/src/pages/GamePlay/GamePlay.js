import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header'
import Wrapper from '../../components/Wrapper';
import { Col, Row, Container, SectionRow } from '../../components/Grid';
import Hero from '../../components/Hero';
import { getPosts } from '../../actions/posts';

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      clickedHeroes: [],
      score: 0,
      highScore: 0,
      pageTitle: "Clicky Game",
      game_message: "Click any image to start"
    };
  }

  // pulls in resources passed into props
  loadResources = () => {
    console.log('==========[ BEFORE ]======================');
    console.log({ props: this.props, state: this.state });

    this.setState((state, props) => ({
      heroes: props?.heroes ?? state.heroes,
      clickedHeroes: props?.clickedHeroes ?? state.clickedHeroes,
      score: props?.score ?? state.score,
      highScore: props?.highScore ?? state.highScore,
      pageTitle: props?.pageTitle ?? state.pageTitle,
      game_message: props?.game_message ?? state.game_message
    }));

    this.reloadHeroes();
    console.log('==========[ AFTER ]======================');
    console.log({ props: this.props, state: this.state });
  }

  componentDidMount() {
    this.loadResources();
  }

  // shuffles state of heroes 
  reloadHeroes = () => {
    if(this.state.heroes.length > 0) {
      this.setState( prevState => ({heroes: this.shuffleArray(prevState.heroes)}));
    }

    // axios.get('./heroes.json')
    //   .then(res => this.setState({ heroes: this.shuffleArray(res.data) }))
    //   .catch(err => console.log(err));
    // }else{
    //   this.setState( prevState => ({heroes: this.shuffleArray(prevState.heroes)}));
  };

  // Decides if scores goes up or down and reloadHeroes
  handleHeroClick = id => {
    if(!this.state.clickedHeroes.includes(id)){
      this.setState( prevState => ({
        game_message: "Good Job",
        clickedHeroes: [...prevState.clickedHeroes, id],
        score: prevState.score + 1
      }));

    }else{
      this.setState( prevState => ({
        game_message: "You Lose!",
        clickedHeroes: [],
        score: 0,
        highScore: (prevState.score > prevState.highScore) ? prevState.score : prevState.highScore 
      }));
    }

    this.reloadHeroes();
    return;
  };

  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    return (
      <>
        <Header 
          game_message={this.state.game_message}
          score={this.state.score}
          highScore={this.state.highScore}
          pageTitle={this.state.pageTitle}
        />
        <Wrapper id="main-container">
          <SectionRow elementID="main-section">
            {this.state.heroes.length ? (
              this.state.heroes.map(({_id, title, selectedFile }, index) => {
                return (
                  <Hero 
                    key={`${_id}-${index}`}
                    id={_id}
                    heading={title}
                    src={selectedFile}
                    handleHeroClick={this.handleHeroClick}
                  />
                );
              })
            ) : (
              <h3>No Heroes to Display</h3>
            )}
          </SectionRow>
        </Wrapper>
      </>
    );
  }
}

export default GamePlay;

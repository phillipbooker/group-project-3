import React, { Component } from "react";

import Character from "../../components/Character";

import characters from "../../characters";

import "./style.css";

export default class CharacterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCharacters() {
    return (
      <ul>
        {characters.map((value, index) => {
          return (
            <Character
              key={index}
              id={value.id}
              name={value.name}
              image={value.image}
              health={value.health}
              attack={value.attack}
              defense={value.defense}
              agility={value.agility}
              clicked={this.props.clicked}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="character-selection">
        <h1>Characters</h1>
        {this.renderCharacters()}
      </div>
    );
  }
}

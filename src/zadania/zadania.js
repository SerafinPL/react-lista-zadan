
import React, {Component} from "react";
import "./zadania.css";
import FlipMove from 'react-flip-move';

class Zadania extends Component {
  constructor(props) {
    super(props);

    this.noweZadanie = this.noweZadanie.bind(this);
    this.usunZad = this.usunZad.bind(this);
  }

  noweZadanie(element){
    return(
      <li
        key={element.klucz}>{element.text}
        <span onClick={() => this.usunZad(element.klucz)}>X</span></li>
    );
  }

  usunZad(klucz) {
    this.props.delete(klucz);
  }

  render() {
      var wpisy = this.props.elementy ;
      var elementyLisy = wpisy.map(this.noweZadanie);

      return(
        <ul className="lista">
          <FlipMove duration={250} easing="ease-out">
            {elementyLisy}
          </FlipMove>
        </ul>
      );
  }
};

export default Zadania;

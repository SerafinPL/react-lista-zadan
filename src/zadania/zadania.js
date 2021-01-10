
import React, {Component} from "react";


class Zadania extends Component {
  constructor(props) {
    super(props);

    this.noweZadanie = this.noweZadanie.bind(this);
    this.usunZad = this.usunZad.bind(this);
  }

  noweZadanie(element){
    return(
      <li onClick={() => this.usunZad(element.klucz)}
        key={element.klucz}>{element.text}</li>
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
          {elementyLisy}
        </ul>
      );
  }
};

export default Zadania;

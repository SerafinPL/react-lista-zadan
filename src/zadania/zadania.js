
import React, {Component} from "react";


class Zadania extends Component {
  constructor(props) {
    super(props);

    this.noweZadanie = this.noweZadanie.bind(this);
    this.delete = this.delete.bind(this);
  }

  noweZadanie(element){
    return(
      <li onClick={() => this.delete(element.klucz)}
        key={element.klucz}>{element.text}</li>
    );
  }

  delete(klucz) {
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

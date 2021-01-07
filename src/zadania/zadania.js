
import React, {Component} from "react";


class Zadania extends Component {
  constructor(props) {
    super(props);

    this.noweZadanie = this.noweZadanie.bind(this);
  }

  noweZadanie(element){
    return(
      <li klucz={element.klucz}>{element.text}</li>
    )
  }

  render() {
      var wpisy = this.props.elementy ;
      var elementyLisy = wpisy.map(this.noweZadanie);

      return(
        <ul className>
          {elementyLisy}
        </ul>
      );
  }
};

export default Zadania;
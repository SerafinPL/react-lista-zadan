

import React, {Component} from "react";


class Lista extends Component {
  constructor(props){
    super(props);

    this.state = {
      zadania : []
    }

    this.dodajZadanie = this.dodajZadanie.bind(this);
  }

  dodajZadanie(event){
    event.preventDefault();

    var tablicaZadan = this.state.zadania;

    if (this.refInput.value !== "") {
      tablicaZadan.unshift({
          text: this.refInput.value,
          klucz: Date.now()
      });
    }

    this.setState({
      zadania: tablicaZadan
    });

    this.refInput.value = "";

    console.log(tablicaZadan);
    console.log(this.state.zadania);
  }

  render() {
    return(
      <div className="listaZadan">
        <div className="naglowek">
          <form onSubmit={this.dodajZadanie}>
            <input ref={(a) => this.refInput = a}
              placeholder="Wpisz zadanie"></input>
            <button type="submit">Dodaj</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Lista;

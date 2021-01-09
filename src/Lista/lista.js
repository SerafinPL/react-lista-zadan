
import React, {Component} from "react";

import Zadania from "../zadania/zadania";
import "./lista.css";

class Lista extends Component {
  constructor(props){
    super(props);

    this.state = {
      zadania : []
    }

    this.dodajZadanie = this.dodajZadanie.bind(this);
    this.usunZadanie = this.usunZadanie.bind(this);
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

  usunZadanie(kluczyk){
    var filtrowanie = this.state.zadania.filter(function(item){
      return (item.klucz !== kluczyk)
    });

    this.setState({
      zadania: filtrowanie
    });
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
        <Zadania elementy={this.state.zadania}
                  delete={this.usunZadanie}/>
      </div>
    );
  }
} // class Lista

export default Lista;

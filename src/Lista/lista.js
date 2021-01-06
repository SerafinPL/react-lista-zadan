

import React, {Component} from "react";


class Lista extends Component {
  constructor(props){
    super(props);

    this.state{
      zadania : []
    }

    this.dodajZadanie = this.dodajZadanie.bind(this);
  }

  dodajZadanie(event){

  }

  render() {
    return(
      <div className="listaZadan">
        <div className="naglowek">
          <form onSubmit={this.dodajZadanie}>
            <input placeholder="Wpisz zadanie"></input>
            <button type="submit">Dodaj</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Lista;

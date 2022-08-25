import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    filterName: '',
    filterRare: '',
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }), () => {
      const max = 91;
      const min = -1;
      const sum = 211;
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const greaterThanOne = cardAttr1 > min && cardAttr2 > min && cardAttr3 > min;
      const max90 = cardAttr1 < max && cardAttr2 < max && cardAttr3 < max;
      const sumAttributes = (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)) < sum;
      if (cardName && cardDescription && cardImage
        && greaterThanOne && max90 && sumAttributes) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = (objInfo) => {
    this.setState((before) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      data: [...before.data, objInfo],
    }), () => {
      const { cardTrunfo } = this.state;
      if (cardTrunfo) {
        this.setState({ hasTrunfo: true });
      }
      this.setState({ cardTrunfo: false });
    });
  };

  onDeleteCard = ({ target }) => {
    const { data } = this.state;
    const card = target.parentNode;
    const cardValue = card.children[0].children[0].innerText;
    this.setState(() => ({
      data: data.filter((e) => e.cardName !== cardValue) }), () => {
      const { cardTrunfo } = this.state;
      if (!cardTrunfo) {
        this.setState({ hasTrunfo: false });
        card.remove();
      }
    });
  };

  filterName = ({ target }) => {
    this.setState({ filterName: target.value });
  };

  filterRare = ({ target }) => {
    this.setState({ filterRare: target.value });
  };

  render() {
    const { data, filterName, filterRare } = this.state;
    return (
      <div className="flex">
        <h1>Adicionar Nova Carta</h1>
        <div className="column">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
        <div>
          <h2>Todas as cartas</h2>
          <form>
            <input
              data-testid="name-filter"
              type="text"
              onChange={ this.filterName }
            />
            <select
              data-testid="rare-filter"
              onChange={ this.filterRare }
            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </form>
          {data
          // card.cardRare.includes(filterRare)
            .filter((card) => card.cardName.includes(filterName))
            .filter((card) => {
              let answer;
              if (filterRare === 'raro' && filterRare !== '') {
                answer = card.cardRare === filterRare;
              } else {
                answer = card.cardRare.includes(filterRare);
              }
              return answer;
            })
            .map((card) => (
              <div
                key={ card.cardName }
              >
                <Card key={ card.cardName } { ...card } />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ this.onDeleteCard }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;

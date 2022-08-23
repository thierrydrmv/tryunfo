import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  }

  onInputChange = () => {

  }

  onSaveButtonClick = () => {

  }

  render() {
    return (
      <div className="flex">
        <h1>Tryunfo</h1>
        <Form ObjectState={{ cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled}} onInputChange={this.onInputChange} onSaveButtonClick={this.onSaveButtonClick}/>
      </div>
    );
  }
}

export default App;

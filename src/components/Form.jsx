import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="flex">
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name=""
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          >
            aa
          </textarea>
        </label>
        <label htmlFor="attribute1">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            name=""
            id=""
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super">
          Super Trunfo
          <input
            type="checkbox"
            name=""
            id=""
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form className="flex">
        <label htmlFor="nome">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name=""
            cols="30"
            rows="10"
            data-testid="description-input"
          >
            aa
          </textarea>
        </label>
        <label htmlFor="attribute1">
          Atributo 1:
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attribute2">
          Atributo 2:
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attribute3">
          Atributo 3:
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select name="" id="" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super">
          Super Trunfo
          <input type="checkbox" name="" id="" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

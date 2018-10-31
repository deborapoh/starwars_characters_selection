import React, { Component } from 'react';

class Personagem extends Component {

    render() {
        return (
            <div>
                <p>Nome: {this.props.item.name}</p>
                <p>Gênero: {this.props.item.gender}</p>
                <p>Altura: {this.props.item.height} cm</p>
                <p>Peso: {this.props.item.mass} kg</p>
            </div>


        );
    }
}

export default Personagem;

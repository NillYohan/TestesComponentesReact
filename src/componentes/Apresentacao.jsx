import '../App.css'
import React, { Component } from 'react';

class Apresentacao extends Component {
    render() {
        return (
            <div className="ModoEscuro">
                <h2>Aplicação de "Locadora"</h2>
                <img src={"https://static.wixstatic.com/media/9a7dec_7f6f7c02086a46b1bcaf8862a8efb49b~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90/9a7dec_7f6f7c02086a46b1bcaf8862a8efb49b~mv2.webp"}/>
            </div>
        );
    }
}

export default Apresentacao;
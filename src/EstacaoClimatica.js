import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//irmd para importar o "ReactDom"

export default class EstacaoClimatica extends Component {
    
    timer = null

    state = {
        data: null
    }
    
componentDidMount() {
    console.log("EC: componentDidMount")
    this.timer = setInterval(() => {
        this.setState({data: new Date().toLocaleTimeString()})
    }, 1000)
}

componentDidUpdate(){
    console.log("EC: componentDidUpdate")
}

componentWillUnmount(){
    console.log("EC: componentWillUnmount")
    clearInterval(this.timer)
}

    render() {
        console.log("EC: render")
        return (
            //* .card>.card-body
            <div className="card">
                <div className="card-body">
                    {/* .d-flex.align-items-center.border.rounded.mb-2 */}
                    <div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
                        <i className={`fas fa-5x ${this.props.icone}`}></i>
                        <p className="w-75 ms-3 text-center fs-1" >
                            {this.props.estacao}
                        </p>
                    </div>
                    <div>
                        <p className="text-center">
                            {
                                this.props.latitude ?
                                        `Coordenadas: ${this.props.latitude}, ${this.props.longitude}.  
                                        Data: ${this.state.data}.`
                                    :
                                    'Clique no botão para saber a sua estação climática'
                            }
                        </p>
                    </div>
                    <button onClick={this.props.obterLocalizacao}
                        className="btn btn-outline-primary w-100 mt-2">
                        Qual a minha estação?
                    </button>

                    <button className="btn btn-outline-danger w-100 mt-2"
                        onClick={() => {
                            ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
                        }}>
                        Perigo!!
                    </button>

                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

class Add extends Component {

    constructor(){
        super()
    
        this.state = {
    
            name: "",
            price: 1,

        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
    }

    handleNameChange (e) {
        let target = e.target.value
        this.setState({
            name : target
        })
    }

    handlePriceChange (e) {
        let target = e.target.value
        this.setState({
            price : target
        })
    }

    render() {
        const {addItems} = this.props
        const {name,price} = this.state
        return (
            <div className='my-3'>
                <div className="row mb-3">
                    <div className="col-9 ">
                        <input type="text" className="form-control" onChange={this.handleNameChange}/>
                    </div>
                    <button 
                    value={this.state.name} 
                    type="button" 
                    className='btn btn-primary col-2' 
                    disabled={this.state.name ? false : true}
                    onClick={() => addItems(name,price)}
                    >Add
                    </button>
                </div>
                <div className="d-flex justify-content-between">
                    <input value={this.state.price} 
                    type="range" 
                    className='col-9' 
                    max='10' 
                    min='1' 
                    onChange={this.handlePriceChange}/>
                    <span className='col-2 d-flex justify-content-center'>{this.state.price} €</span>
                </div>
            </div>
        );
    }
}

export default Add;
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
        this.reset = this.reset.bind(this)
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

    reset (e){

        e.preventDefault();

        this.setState({
            name: "",
            price : 1
        })
    }

    render() {
        
        const {addItems} = this.props
        const {name,price} = this.state

        console.log(name);
        console.log(price);

        return (
            <div className='my-3'>

                <div className="row mb-3">

                    <div className="col-9 ">

                        <input
                         type="text" 
                         value={name} 
                         className="form-control" 
                         onChange={this.handleNameChange}
                         />
                    </div>

                    <form action="submit"className='col-2' onSubmit={this.reset}>

                        <button 
                        type="submit" 
                        className='btn btn-primary' 
                        disabled={name ? false : true}
                        onClick={() => addItems(name,price)}
                        >Add
                        </button>
                        
                    </form>
                </div>
                <div className="d-flex justify-content-between">
                    <input value={price} 
                    type="range" 
                    className='col-9' 
                    max='10' 
                    min='1' 
                    onChange={this.handlePriceChange}/>
                    <span className='col-2 d-flex justify-content-center'>{price} €</span>
                </div>
            </div>
        );
    }
}

export default Add;
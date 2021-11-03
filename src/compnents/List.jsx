import React, { Component } from 'react';

class List extends Component {

    render() {
        const {items, deleteItem} = this.props
        return (
            <div className='my-3'>
                {items.map( (e, i) => (
                    <div className="d-flex justify-content-between align-items-center list-group-item " key={i}>
                    <span>{e.name}</span>

                    <span className='d-flex align-items-center rounded-pill bg-primary px-3 py-1' 
                    style={{ color : 'white', fontSize : '13px'}}
                    >{e.price}€
                    </span>

                    <button 
                    type="button" 
                    className='btn btn-danger d-flex align-items-center'
                    style={{height : '30px', fontSize : '15px'}} 
                    onClick={() => deleteItem(i)}
                    >Supprimer
                    </button>
                 </div>
                ))}
            </div>
        );
    }
}

export default List;
import React, { Component } from 'react';

class Buttons extends Component {


    render() {
        const {name, handleClick,isSelected} = this.props
        return (
            <div className='col-3'>
                <button type="button" onClick={ () => handleClick(name)} className={isSelected ? 'btn btn-primary' : 'btn btn-outline-primary'}>{name}</button>
            </div>
        );
    }
}

export default Buttons;
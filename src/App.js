import React from "react"

import Buttons from "./compnents/Buttons"
import Add from './compnents/Add'
import List from './compnents/List'
import Pay from './compnents/Pay'

class App extends React.Component {
  constructor(){
    super()

    this.state = {

      activeTab: "add",
    	items: [],
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItems = this.addItems.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  
  handleButtonClick (e){
    // console.log(e);
    this.setState({
      activeTab : e
    })
  }

  addItems (n,p){
    const newArray = {
      name : n,
      price : p
    }
    this.setState({
      items : [newArray,...this.state.items]
    })
  }

  deleteItem (index) {
    const newItems = this.state.items.filter((e, i) => i !== index)

    this.setState({ items: newItems })
  }

  render() {
    return (
      <div>
        <div className="container">
        <h1>Bakery</h1>
          <div className="row col-6 my-4">

            <Buttons name='Add' 
            handleClick = {this.handleButtonClick}
            isSelected = {this.state.activeTab === 'Add'}
            />

            <Buttons name='List' 
            handleClick ={this.handleButtonClick}
            isSelected = {this.state.activeTab === 'List'}
            />

            <Buttons name='Pay' 
            handleClick ={this.handleButtonClick}
            isSelected = {this.state.activeTab === 'Pay'}
            />

            {this.state.activeTab === 'Add' && <Add addItems={this.addItems}/>}
            {this.state.activeTab === 'List' && <List items={this.state.items} deleteItem={this.deleteItem}/>}
            {this.state.activeTab === 'Pay' && <Pay/>}

          </div>
        </div>
      </div>
    )
  }
}

export default App
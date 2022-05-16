import React, { Component } from 'react';
import FormPart from '../../components/FormPart/FormPart';
import InforPart from '../../components/InfoPart/InfoPart';

let dataObj = [];
let sendObj = [];

class ContactBuilder extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : null,
      surname : null,
      number : null,
      relation : "family"
    };
  }

  inputNameHandler = (event) => {
    const data = {
      ...this.state
    }
    data.name = event.target.value;
    this.setState({
      name : event.target.value
    });
  }

  inputSurnameHandler = (event) => {
    const data = {
      ...this.state
    }
    data.surname = event.target.value;
    this.setState({
      surname : event.target.value
    })
  }

  inputPhoneHandler = (event) => {
    const data = {
      ...this.state
    }
    data.number = event.target.value;
    this.setState({
      number : event.target.value
    })
  }

  inputRelationHandler = (event) => {
    const data = {
      ...this.state
    }
    data.relation = event.target.value;
    this.setState({
      relation : event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();

    dataObj[dataObj.length] = this.state;
    sendObj = dataObj;
    this.setState({
      name : null,
      surname : null,
      number : null,
      relation : "family",
      isClicked : false
    })
    event.target.reset();
  }

  btnTypeHandlder = (event) => {
    if(event.target.textContent === "Friends"){
      sendObj = dataObj.filter(item => {
        return item.relation === "friend";
      })
    } else if(event.target.textContent === "Family"){
      sendObj = dataObj.filter(item => {
        return item.relation === "family";
      })
    } if(event.target.textContent === "Colleagues"){
      sendObj = dataObj.filter(item => {
        return item.relation === "colleague";
      })
    } if(event.target.textContent === "All"){
      sendObj = dataObj.map(item => {
        return item;
      })
    }
    this.setState({
      name : null,
      surname : null,
      number : null,
      relation : "family",
      isClicked : false
    });
    
  }

  closeBtnHandler = (num) => {
    this.setState({
      name : null,
      surname : null,
      number : null,
      relation : "family",
      isClicked : false
    })
    dataObj = dataObj.filter((_, index) => {
      return num !== index;
    });
    sendObj = dataObj;
    return sendObj;
  }
  
  render() {  
    return (
      <>
        <FormPart 
          inputNameHandler={this.inputNameHandler}
          inputSurnameHandler={this.inputSurnameHandler}
          inputPhoneHandler={this.inputPhoneHandler}
          inputRelationHandler={this.inputRelationHandler}
          submitHandler={this.submitHandler}
          data={this.state}
        />
        <InforPart 
          data={sendObj} 
          btnTypeHandlder={this.btnTypeHandlder}
          closeBtnHandler={this.closeBtnHandler}
        />
      </>
    )
  }
}

export default ContactBuilder;

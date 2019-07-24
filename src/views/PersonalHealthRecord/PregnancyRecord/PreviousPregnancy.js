import React from  'react';
import {ListGroup} from "reactstrap";
import PreviousAccordion from './PreviousAccordion'
// import {ClipLoader} from "react-spinners";
// import { css } from "@emotion/core";
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

class PreviousPregnancy extends React.Component {

  state ={
    pregnancyRecord: [],
    successmsg: '',
    errormsg:'',
    loading:false,
    collapse:''
  }


  toggleCollapse = (id) => {
    if(this.state.collapse === id){
      this.setState({collapse:null})
    }
    else{
      this.setState({collapse: id})
    }
  }




  render(){
    const { pregnancyRecord} = this.props;
    return (
      <React.Fragment>
        <ListGroup>
          {pregnancyRecord.map((data, i) => {
            return (
              <PreviousAccordion
                data={data}
                key={i}
                index={i}
                toggle={() => this.toggleCollapse(i)}
                isActive = {this.state.collapse === i  ? true : false}/>
            )
          })
          }
        </ListGroup>
      </React.Fragment>
    )
  }
}


export default PreviousPregnancy

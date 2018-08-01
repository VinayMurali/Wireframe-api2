import React, { Component,Fragment } from 'react';
import './Form.css';
import Tickets from '../Tickets/Tickets';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import UserData from '../Tickets/Tickets'
import request from 'superagent';

class EditForm extends Component {

     constructor(props){
        super(props);
        this.state={
            id:this.props.value.id,

            additionalFieldName:this.props.value.additionalFieldName,
            updatedAt:this.props.value.updatedAt,
            nexudusResourceTypeId:this.props.value.nexudusResourceTypeId,
            uiType:this.props.value.uiType,
            uiTypeOptions:this.props.value.uiTypeOptions,
            navigateTo:'',
            formPage:'',
            name:'',
            list:[]
      };
      this.additionalFieldName=this.additionalFieldName.bind(this);
      this.description=this.description.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);

      this.uiTypeOptions=this.uiTypeOptions.bind(this);
      this.uiType=this.uiType.bind(this);
      this.uiTypeTextArea=this.uiTypeTextArea.bind(this);
      this.uiTypeRadio=this.uiTypeRadio.bind(this);
      this.uiCheckBox=this.uiCheckBox.bind(this);
  }

  additionalFieldName=(event)=>{

          this.setState({additionalFieldName:event.target.value})

  }

  description=(event)=>{
          this.setState({nexudusResourceTypeId:event.target.value})
          {/*console.log("description",this.state.description)*/}

  }
   uiTypeOptions=(event)=>{
          this.setState({uiTypeOptions:event.target.value})
          {/*console.log("uiTypeOptions",this.state.uiTypeOptions)*/}
 }
  uiType=(event)=>{
      this.setState({uiType:this.props.uiType})
}

    uiTypeTextArea=(event)=>{
          this.setState({uiType:'Text Area'})
        }

    uiTypeRadio=(event)=>{
          this.setState({uiType:'Radio'})
}
  uiCheckBox=(event)=>{
    this.setState({uiType:'CheckBox'})
  }

     handleSubmit=(event)=>{
        console.log('inside handleSubmit of EditForm')
        event.preventDefault();
        const params = {
        additionalFieldName:this.state.additionalFieldName,
        'nexudusResourceTypeId':this.state.nexudusResourceTypeId,
        'uiTypeOptions':this.state.uiTypeOptions,
        'uiType':this.state.uiType
    }
      this.props.onSubmitFunc(params);
      console.log('params:',params)
      let formJsonData = {
                'id':this.state.id,
                'additionalFieldName':this.state.additionalFieldName,
                'description':this.state.description,
                'uiTypeOptions':this.state.uiTypeOptions,
                'uiType':this.state.uiType,

      }
      console.log('formJsonData:',formJsonData)
      request
        .post('https://av0jf0xh63.execute-api.us-east-1.amazonaws.com/dev/augnexresource'+this.state.id)
        .set('x-api-key', '4RXjYYFCMr2sta7Nqa80raAWsRbgj56m73id9Eoc')
        .send(formJsonData)
        .then(function(res){
          console.log('Response:' + JSON.stringify(res.body));
          window.location.reload();
        })
        .catch(function(err){
          console.log('error in request',err)
        });
  }



  render() {
     return (
        <Fragment>
          {

                      <form className="outer-form" onSubmit={this.handleSubmit}>

                            <label>
                                Field Name:
                                <input  type="text" onChange={this.additionalFieldName} name="fieldName" value={this.state.additionalFieldName}/>
                            </label><br />
                            <label>
                                  Description:
                                  <textarea type="text"  onChange={this.description} name="description" value={this.state.nexudusResourceTypeId}/>
                            </label><br />
                            <label>
                                  UI type:
                                  <input type="text"  onChange={this.uiTypeOptions} name="ui options" value={this.state.uiType}/>
                            </label><br />
                             <label>
                                  UI Type Options:
                                  <input type="radio"  onChange={this.uiType} name="inputbox" />inputbox
                                  <input type="radio"  onChange={this.uiTypeTextArea} name="textarea" />textarea
                                  <input type="radio"  onChange={this.uiTypeRadio} name="textarea" />Radio
                                  <input type="radio"  onChange={this.uiCheckBox} name="textarea" />CheckBox
                            </label><br />
                          <label>
                           <div className="button">
                            <button className="cancel">Cancel</button>
                           </div>
                           <div className="button">
                            <button className="submit">Submit</button>
                           </div>
                         </label>

                     </form>

             }

        </Fragment>
              //   {
              //      this.state.navigateTo==='listpage'?<Tickets fieldName={this.state.fieldName} description={this.state.description} />:''

              // }


    );
  }
}

export default EditForm ;

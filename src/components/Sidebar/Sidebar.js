import React, { Component } from 'react';
import './Sidebar.css';
import Tickets from '../Tickets/Tickets';
import Booking from '../Booking/Booking';
import request from 'superagent';
import superagent from 'superagent';
import FormNList from './FormNList';


class Sidebar extends Component {

  constructor(props){
        super(props)
        this.state = {
         view: '',
         name:'',
         list:[]

        }
       this.fetchData();
        this.booking=this.booking.bind(this);
      //  this.content=[];
      }

    booking = () => {
      console.log('sdsdsd')
             return (
                this.setState({view : 'book'})
                  )
        }

    tickets = () => {
          return (
                this.setState({view:'ticket'})
            )
    }

  // componentWillMount(a){
  //     superagent
  //       .get('https://44bwm57ha5.execute-api.us-east-1.amazonaws.com/dev/nexresource')
  //       .set('Content-Type', 'application/json')
  //       .end(function(err, res) {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           console.log('respo:',JSON.stringify(res.body));
  //         }
  //     });
  //   }



    fetchData(){

      var that=this;
      superagent
        .get('https://44bwm57ha5.execute-api.us-east-1.amazonaws.com/dev/nexresource')
        .set('x-api-key', 'cKYrj1HC5H3nJo75Vk5yf4POO7pKkysy1DES7p12')
        .end(function(err, res) {
          if (err) {
            console.log(err);
          } else {
            {/* console.log('respo:',JSON.stringify(res.body));*/}
          }
          {/*console.log('res:',res);*/}
          that.setState({list:res.body})
          return res.body;
      });
}

    hello=()=>{
      return(<div>
                   {this.state.list.map(item => {
                      {/*console.log('item:',item);*/}
                    return <div className="sidebar-data"  key={item.nexudusResourceTypeId}>
                             <div key={item.nexudusResourceTypeId}>
                                {item.nexudusResourceTypeName}
                              </div>
                          </div>
                  })}
      </div>)
    }

  render() {

      return (
          <div>
            <div className="sidenav">
               <div className="inner-resources-div">
                  <h2>Resources</h2>
                </div>
                {this.hello()}
          </div>
          <FormNList />
              {
                this.state.view === 'book' ? <Booking /> : ''
              }
              {
                this.state.view === 'ticket'? <Tickets />:''
              }
            <div>
          </div>
      </div>
    );
  }
}

export default Sidebar;

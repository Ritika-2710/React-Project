import React, { Component } from 'react';
class Fetchdata extends Component
{
    constructor()
    {
        super();
        this.state={
            users:null
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>
            {
                console.warn(result)
            })
        })
    }
       render()
       {
           return(
            <div>
                <h1>Hello ritika</h1>
            </div>
           )
       }
}
export default Fetchdata
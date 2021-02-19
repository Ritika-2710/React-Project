import { buildQueries } from "@testing-library/react";
import { React,Component } from "react";

class Indentlogin extends Component
{
    constructor()
    {
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((findresponse)=> {
          this.setState({
            data:findresponse
          })
        })
    }
   render()
   {
       const style={
           marginLeft:'40px',
           color:'#3838ff'
       }
       const para={
           color:'#9393f0',
           width:'70%',
           padding:'15px',
           backgroundColor:'#fbfbfb',
           marginTop:'10px'
       }
       const items = this.state.data
       return(
           <div>
               <h1 style={style}>Fetch api</h1>
               <ul>
                   {items.map(item => <p key={item.id} style={para}>Id:{item.id}&nbsp;&nbsp;Name:{item.name}&nbsp;&nbsp;&nbsp;&nbsp;Username:{item.username}&nbsp;&nbsp;&nbsp;&nbsp;email:{item.email}</p>)} </ul>
           </div>
       )
   }
}
export default Indentlogin;
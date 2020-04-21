import React, { Component } from 'react';
import axios from 'axios';
class NewFile extends Component {
  constructor(){
        super()
        this.state = { 
            name:'',
            content:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

 }
        handleChange(e){
            this.setState({[e.target.name]:e.target.value.trim()})
        }
        handleSubmit(e){
            e.preventDefault();
     
            if(this.state.name != ''){
                if(this.state.content != ''){
                    axios({
                        method:"POST",
                        url:'http://localhost:1200/files/',
                        data:this.state
                    }).then(res => {
                        alert('added new file')
                        this.props.history.push('/');
                    })
                      .catch(err =>alert('please name is alrady taken') )
        
                }else{
                    alert('valid content is required')
                }
            }else{
                alert('valid name is required')
            }
        }

     style =  {
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        height: "calc(100vh - 200px)",
        overflow: "auto",
       
        
      }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
            <div style={this.style}>
                <label>
                    fileName:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <label>
                    content:
                    <input type="text" name="content"  onChange={this.handleChange}/>
                </label>
                <input type="submit" value="crate file"/>
            </div>
            </form>
         ); 
    }
}
 
export default NewFile;
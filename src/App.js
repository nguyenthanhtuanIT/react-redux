import React, { Component } from 'react';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      'username':'',
      'password':'',
      'gender':0,
      'langue': 'vi',
      'checkbox': true
    };
  }
  getData = event =>{
   var target = event.target;
   var name = target.name;
   var value = target.type === 'checkbox' ? target.checked : target.value;
   this.setState({
     [name]:value
   }) ; 
  }

  onHandleSubmit= event=>{
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
     
     <div className="row">
       <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
         <div className="panel panel-primary">
             <div className="panel-heading">
               <h3 className="panel-title">form learn</h3>
             </div>
             <div className="panel-body">
               <form onSubmit={this.onHandleSubmit}>
                 <div className="form-group">
                   <label>Username</label>
                   <input type="text" className="form-control" onChange={this.getData} name='username'/>
                 </div>

                 <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" onChange={this.getData} name='password'/>
                 </div>
                 <label>gender</label>
                 
                 <select name="gender" className="form-control" onChange={this.getData}>
                   <option value={0}>Nam</option>
                   <option value={1}>Nu</option>
                 </select>
                 
                 <div className="radio">
                   <label>
                     <input 
                     type="radio" 
                     name="langue" 
                     value="en" 
                     checked={this.state.langue === 'en'}
                     onChange={this.getData}
                      />
                     english
                   </label>
                   <br></br>
                   <label>
                     <input 
                     type="radio"
                      name="langue" 
                      value="vi" 
                      checked={this.state.langue === 'vi'}
                      onChange={this.getData}
                      />
                     vietnamese
                   </label>
                 </div>
                 
                 <div className="checkbox">
                   <label>
                     <input 
                     type="checkbox" 
                     value={true}
                     onChange={this.getData}
                     name='checkbox'
                     checked = {this.state.checkbox === true}
                     />
                     Checkbox
                   </label>
                 </div>
                 
                 
                 <button type="submit" className="btn btn-success">Save</button>
                 <button type="reset" className="btn btn-primary">Reset</button>
               </form>
               
             </div>
         </div>
         
       </div>
     </div>
     
   </div>
    );
  }
}

export default App;

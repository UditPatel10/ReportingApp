import React, { Component } from 'react';
import './workFlow.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import  {formatDate} from 'react-day-picker/moment';
import { CountryDropdown } from 'react-country-region-selector';
import {Table} from './Table';
import axios from 'axios';

const initialState = {
  PrimaryObjective: '',
          CountsDueDate : formatDate(new Date()),
          RequestedDate : formatDate(new Date()),
          LaunchDate : formatDate(new Date()),
          Recurrence: '',
          
          selectedOption: 'Yes',
          selectedOptions: 'Yes',
          selectedOptionss: 'Yes',
          selectedOptionsss: 'Yes',
          AudName: '',
          country: 'Country',
          language: "Language",
          target: '',
          control: '',
          definition: "",
          supressions: "",
          addInfo: '',
          file:null,
          items: [],
          program:"",
          campaignType: "",
          subProgarm: "",
          collectionName:"",
          channel:"",
          campaignCadence:"",
          campaignFrequency:"",
          response: "",
          PrimaryObjectiveError:""

}

export class WorkFlow extends Component{
    
        
        
        state = initialState;
          
        
       /* this.change = this.change.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleChangess = this.handleChangess.bind(this);
        this.handleOption = this.handleOption.bind(this);
        this.handleOptions = this.handleOptions.bind(this);
        this.handleLanguage = this.handleLanguage.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.handleOptionss = this.handleOptionss.bind(this);
        this.handleOptionsss = this.handleOptionsss.bind(this);
        this.handleSegmentSubmit = this.handleSegmentSubmit.bind(this);*/
    
    componentDidMount(){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
     // myHeaders.append("Cookie", "VstsSession=%7B%22PersistentSessionId%22%3A%224670c686-aa78-4a86-a91a-6c7fdf1c8090%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D");
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/9a393685-77a8-43b4-96fe-a46622ff694b?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      /*.then(result => {
          this.setState({ 'url':(JSON.parse(result)).fields.CustomProgram });
      })*/
      
     
      .then(result => {this.setState({program : result.items});})
      .catch(error => console.log('error', error));
      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/ad2ea5c9-9702-4c7b-9dd5-848203ed488b?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      .then(result => {this.setState({campaignType : result.items});})
      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/b118f328-621e-42c4-a819-625e1fb0ff53?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      .then(result => {this.setState({subProgarm : result.items});})
      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/703b4f55-73cc-48fb-aab5-80dbd15d5910?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      .then(result => {this.setState({collectionName : result.items});})
      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/bce0169e-9e43-47f4-ad38-247a8202b5a4?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      .then(result => {this.setState({channel : result.items});})
      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/dcd68067-b4cd-41de-9ef1-9ec71539586a?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      .then(result => {this.setState({campaignCadence : result.items});})
      fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/73385a41-b542-49f0-8650-3c7da9c76178?api-version=6.0-preview.1", requestOptions)
      .then(response => response.json())
      .then(result => {this.setState({campaignFrequency : result.items});})


      
  }
    change  = e => {
    
      this.setState({[e.target.name]: e.target.value})
     
  }
    onChange(e) {
      this.setState({file:e.target.files[0]})
    }
     handleChange(date){
       this.setState({CountsDueDate: date})
     } 

     handleChanges(date){
      this.setState({RequestedDate: date})
    }
    handleChangess(date){
      this.setState({LaunchDate: date})
    }
     handleOption(opt){
       this.setState({selectedOption: opt.target.value});
     }
    
     handleOptions(opt){
      this.setState({selectedOptions: opt.target.value});
    }
    selectCountry(val){
      this.setState({country:val});
    }
    handleLanguage(val){
      this.setState({language :val.target.value});
    }
    handleOptionss(opt){
      this.setState({selectedOptionss: opt.target.value});
    }
    handleOptionsss(opt){
      this.setState({selectedOptionsss: opt.target.value});
    }
    handleSegmentSubmit = e => {
     
      e.preventDefault();
  
      let items = [...this.state.items];
  
      items.push({target: this.state.target, control: this.state.control, definition: this.state.definition, supressions: this.state.supressions});
  
      this.setState({
        items,
        target: '',
        control: '',
        definition: '',
        supressions: ''
      });
    };
    validate =  e =>{
      let PrimaryObjectiveError="";
      if(!this.state.PrimaryObjective) {
        PrimaryObjectiveError = "Title is empty";
      }
        if( PrimaryObjectiveError ) {
          this.setState({PrimaryObjectiveError})
          return false;
      }
      return true;
    }
   

  
    onHandle =  e => {
      e.preventDefault();
      const valid = this.validate();
      if(valid){
         
          this.setState(initialState);
          var raw = 
       [
          {
              "op": "add",
              "path": "/fields/System.Title",
              "from": null,
              "value": this.state.PrimaryObjective&&this.state.PrimaryObjective
          },
          {   
              "op": "add",
              "path": "/fields/DataServicesScrum.Category",
              "from": null,
              "value": "Deployment"
          },
          {    
              "op": "add",
              "path": "/fields/DataServicesScrum.Brand",
              "from": null,
              "value": "Band"
          },
          {
              "op": "add",
              "path": "/fields/DataServicesScrum.Complexity",
              "from": null,
              "value": "Low"
          }     
        ]
       
        var authOptions = {
					method: 'post',
					url: 'https://cdmapps.visualstudio.com/Automation Reporting/_apis/wit/workitems/$Task?api-version=6.0',
					data: JSON.stringify(raw),
					headers: {
					'Authorization': 'Basic ' + btoa("" + ":" + 'be2ah3m5wzgibejgff6uhlcmqjuev2yb6aszkb3bnof3b3kovmwq'), 
					'Content-Type': 'application/json-patch+json'
				},
				json: true
				};
				axios(authOptions)
				.then((response) => {
          this.setState({response : response.data.id});
          alert(`Your task is created, TaskId : ${this.state.response}`)
        })
        
				.catch((error) => {
				alert(error)
        })
        .then(()=> {window.location.reload(false);})
        
      /*fetch('https://cdmapps.visualstudio.com/Automation Reporting/_apis/wit/workitems/$Task?api-version=6.0', { 
          method: 'POST', 
          headers: new Headers({
            'Authorization': 'Basic ' + btoa("" + ":" + "be2ah3m5wzgibejgff6uhlcmqjuev2yb6aszkb3bnof3b3kovmwq"), 
            'Content-Type': 'application/json-patch+json'
          }), 
          body:JSON.stringify(raw)
        })  
         .then(response=> 
          {
              console.log(response)
          })
          .catch(error => 

          console.log('error', error)
          );  */
       
         
       //  window.location.reload(false);
          
          

      }
     
     
   }
        
     /* handleSubmit =e=> {
        
      
       // var a = this.state.PrimaryObjective;
        //console.log(a)
     
       var raw = 
       [
          {
              "op": "add",
              "path": "/fields/System.Title",
              "from": null,
              "value": this.state.PrimaryObjective&&this.state.PrimaryObjective
          },
          {   
              "op": "add",
              "path": "/fields/DataServicesScrum.Category",
              "from": null,
              "value": "Deployment"
          },
          {    
              "op": "add",
              "path": "/fields/DataServicesScrum.Brand",
              "from": null,
              "value": "Band"
          },
          {
              "op": "add",
              "path": "/fields/DataServicesScrum.Complexity",
              "from": null,
              "value": "Low"
          }     
        ]
       
        var authOptions = {
					method: 'post',
					url: 'https://cdmapps.visualstudio.com/Automation Reporting/_apis/wit/workitems/$Task?api-version=6.0',
					data: JSON.stringify(raw),
					headers: {
					'Authorization': 'Basic ' + btoa("" + ":" + 'be2ah3m5wzgibejgff6uhlcmqjuev2yb6aszkb3bnof3b3kovmwq'), 
					'Content-Type': 'application/json-patch+json'
				},
				json: true
				};
				axios(authOptions)
				.then((response) => {
          this.setState({response : response.data.id});
          alert(`Your task is created, TaskId : ${this.state.response}`)
        })
        
				.catch((error) => {
				alert(error)
        })
        .then(()=> {window.location.reload(false);})
        
      /*fetch('https://cdmapps.visualstudio.com/Automation Reporting/_apis/wit/workitems/$Task?api-version=6.0', { 
          method: 'POST', 
          headers: new Headers({
            'Authorization': 'Basic ' + btoa("" + ":" + "be2ah3m5wzgibejgff6uhlcmqjuev2yb6aszkb3bnof3b3kovmwq"), 
            'Content-Type': 'application/json-patch+json'
          }), 
          body:JSON.stringify(raw)
        })  
         .then(response=> 
          {
              console.log(response)
          })
          .catch(error => 

          console.log('error', error)
          );  */
       
         
       //  window.location.reload(false);
      
     
  

render(){
  
  return (
    <div className="form">
      <h1>WorkFlow V2</h1>
      <form onSubmit={this.onHandle}>
        <h2>Welcome to Xbox Email List Delivery WorkFlow!</h2>
        <p> You are setting up an Xbox Email List Delivery request. This is a two-step process. On this page. you will provide some data to track the
          request; later, you will receive a notification to approve counts. </p>
          <lable><span><b>Title</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
            <input className="input"
            
             type= "text"
             name="PrimaryObjective"  
             placeholder = "Xbox Game Pass Welcome & Onboarding "
             value={this.state.PrimaryObjective}
             onChange={e=> this.change(e)}
            
            />
             <div style={{color: "red", fontSize:14}}>{this.state.PrimaryObjectiveError}</div>
            
          <lable><span><b>Counts Due Date</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          
          <div className="date">
          <DayPickerInput 
            formatDate={formatDate}
            value={this.state.CountsDueDate}
            onDayChange={this.handleChange}
          />
          </div>
           
          <lable><span><b>Requested list delivery Date</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
           
           <div className="date">
           <DayPickerInput 
            formatDate={formatDate}
            value={this.state.RequestedDate}
            onDayChange={this.handleChanges}
          />
          </div>
           <div>
          <lable><b>Program - LaunchDate</b></lable>
          <div className="date">
           <DayPickerInput 
            formatDate={formatDate}
            value={this.state.LaunchDate}
            onDayChange={this.handleChangess}
          />
          </div>
          </div>
          
          <div>
          <lable><b>Program - Recurrence</b></lable>
          <input className="input"
             type= "text"
             name="Recurrence"  
             placeholder = "Every month on the 2nd ending 12-31-2025"
             value={this.state.Recurrence}
             onChange={e=> this.change(e)}
            
            />
          </div>
          
          <lable className="lable"><span><b>Campaign Type:</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Program Type:</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Sub Program:</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <br/>
          <select onChange={e=>this.change(e)} className="inputs">{
                this.state.campaignType&& this.state.campaignType.map(item => <option key={item}>{item}</option>)
                
            }
            </select>&nbsp;&nbsp;&nbsp;&nbsp;
          <select onChange={e=>this.change(e)} className="inputs" >{
                this.state.program&& this.state.program.map(item => <option key={item}>{item}</option>)
                
            }
             </select>&nbsp;&nbsp;&nbsp;&nbsp;
          <select onChange={e=>this.change(e)} className="inputs">{
                this.state.subProgarm&& this.state.subProgarm.map(item => <option key={item}>{item}</option>)
                
            }
             </select>
          
          <br/>
          <lable className="lable"><span><b>Collection Name:</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Campaign Cadence:</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Campaign Frequency:</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <select onChange={e=>this.change(e)} className="inputs">{
                this.state.collectionName&& this.state.collectionName.map(item => <option key={item}>{item}</option>)
                
            }

             </select>&nbsp;&nbsp;&nbsp;&nbsp;
            
             <select onChange={e=>this.change(e)}  className="inputs" >{
                this.state.campaignCadence&& this.state.campaignCadence.map(item => <option key={item}>{item}</option>)
                
            }
             </select>&nbsp;&nbsp;&nbsp;&nbsp;
             <select onChange={e=>this.change(e)} className="inputs">{
                this.state.campaignFrequency&& this.state.campaignFrequency.map(item => <option key={item}>{item}</option>)
                
            }
             </select>

          <br/>
          <lable className="lable"><span><b>Channel                                                                                                                                                                                                                                                                                                                                                                          :</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <br/>
          <select onChange={e=>this.change(e)} multiple className="inputs">{
             this.state.channel&& this.state.channel.map(item => <option key={item}>{item}</option>)}
             </select>
            <br/>
          <lable><span><b>Xbox Standard Inclusion</b><span class="required" style ={{color :"red"}}>*</span></span></lable>                                                                                                                                     
          <p>Responded in past 13 months</p>          
          <div className="radio">
             <label>
              <input type="radio" value="No" checked={this.state.selectedOption=== 'No'} onChange={this.handleOption} />
              No
            </label>
          </div>
          <div className="radio">
             <label>
             <input type="radio" value="Yes" checked={this.state.selectedOption === 'Yes'} onChange={this.handleOption} />
             Yes
            </label>
          </div>
          <lable><span><b>Xbox Standard Exclusion</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <p>Part of life cycle series (Days is &le; 35 Days)</p> 
          <div className="radio">
             <label>
              <input type="radio" value="No" checked={this.state.selectedOptions === 'No'} onChange={this.handleOptions} />
              No
            </label>
          </div>
          <div className="radio">
             <label>
             <input type="radio" value="Yes" checked={this.state.selectedOptions === 'Yes'} onChange={this.handleOptions} />
             Yes
            </label>
          </div>
          
          <lable className="lable"><span><b>Audience Name</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Country</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Language</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <input className="inputs"                 
          
             type= "text"
             name="AudName"  
             placeholder = "Target Name"
             value={this.state.username}
             onChange={e=> this.change(e)}
            
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <CountryDropdown className="inputs"
              value={this.state.country}
              onChange={this.selectCountry}
            
            
            />&nbsp;&nbsp;&nbsp;&nbsp;
             <select className="inputs"
             id="language" 
             name="language"
             value={this.state.language}
             onChange={this.handleLanguage}
             >
             <option value="English">English</option>
             <option value="Hindi">Hindi</option>
          </select>
          <br/>
          

          <lable className="lables"><b>Target %</b></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lables"><b>Control %</b></lable><br/>
          <input className="inputss"                 
          
          type= "text"
          name="target"  
          placeholder="Target %"
          value={this.state.target}
          onChange={e=> this.change(e)}
         
         />&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="inputss"                 
          
          type= "text"
          name="control"  
          placeholder="Control %"         
          value={this.state.control}   
         
          onChange={e=> this.change(e)}
         
         />
         <br/>
         <lable><b>Definition</b></lable>
         <textarea
          name="definition" 
          placeholder="Definition"
          value={this.state.definition}
          onChange={e=>this.change(e)}
            />
           <lable><b>Supressions</b></lable>
         <textarea
          name="supressions" 
          placeholder="Supressions"
          value={this.state.supressions}
          onChange={e=>this.change(e)}
            />
            <br/>
            

          <div className="div"><button className="button" onClick={e=> this.handleSegmentSubmit(e)}>Save Segment</button></div>
          <br/>
          <Table items={ this.state.items } />
          <lable><b>Need Data Science Model?</b></lable>
          <p></p>
          <div className="radio">
             <label>
              <input type="radio" value="No" checked={this.state.selectedOptionss === 'No'} onChange={this.handleOptionss} />
              No
            </label>
          </div>
          <div className="radio">
             <label>
             <input type="radio" value="Yes" checked={this.state.selectedOptionss === 'Yes'} onChange={this.handleOptionss} />
             Yes
            </label>
          </div>
          <lable><b>Analysis Required?</b></lable>
          <p></p>
          <div className="radio">
             <label>
              <input type="radio" value="No" checked={this.state.selectedOptionsss === 'No'} onChange={this.handleOptionsss} />
              No
            </label>
          </div>
          <div className="radio">
             <label>
             <input type="radio" value="Yes" checked={this.state.selectedOptionsss === 'Yes'} onChange={this.handleOptionsss} />
             Yes
            </label>
          </div>
          <lable><b>Additional Information</b></lable>
          <textarea className="textarea"
          name="addInfo" 
          placeholder="Enter Additional Details"
          value={this.state.addInfo}
          onChange={e=>this.change(e)}
          rows="5"
            />
            <br/>
            
              <lable><b>Upload Planning Document</b></lable>
              <br />
              <label className="labless">
                 <input className="in"
               type="file" 
               onChange={this.onChange}
              
              /></label>
                 <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .3,
                        borderColor : '#000000'
                   }}/>
              <br/>
                  <p style={{float: "right"}}> <button className="closee">Close</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className="closeee" /*onClick={e=> this.handleSubmit(e)}*/>&#10003; Save</button></p>
             <br/>
             <br/> 
            


           
      </form>
     
    </div>
  );
}
}

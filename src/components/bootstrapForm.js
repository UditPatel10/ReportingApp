import React, { Component } from 'react';
import * as ReactBootstrap from "react-bootstrap";
import axios from 'axios';


import './workFlow.css';
let cust_program= ""
  let cust_subProgram= "" 
  let cust_campaignType=""
  let cust_campaignCadence=""
  let cust_campaignFrequency=""
  let cust_iteration=""
  let cust_reqDate=""
  let cust_deliveryDate=""
  let cust_rmDate=""
const initialState = {
     
  TitleError: "",
  iterationError:"",
  campaignTypeError:"",
  programError:"",
 
  campaigncadenceError:"",
  
  campaignFrequencyError:"",
  channelError:"", 
  sponsorError:"",  
  reqDateError:"",    
  deliveryDateError:"",
  
  rmDateError:"",
  

  response: "",
 
  audienceError:"",
  
  languageError:"",
  marketsError:"",
  targetError:"",
  controlError:"",
 
 
  auddefError:"",
  
  controldefError:"",
  AddComments: "",
     
  
  
}


export class bootstrapform extends Component {
  state = initialState;
    constructor(props){
        super(props);
        this.state={
          Title: "",
          iteration:"",
          Sponsor:"",
          campaignType:"",
          program:"",
          subProgarm:"",
          campaignCadence:"",
          campaignFrequency:"",
          Channels:[""],
          Markets:[],
          RequestedDate: new Date(),
          DeliveryDate: new Date(),
          RmDate : new Date(), 
          items: [],
          Audience:"",
          Language:"",
          target:"",
          control:"",
          AudDef:"",
          ControlDef:"",
          selectedOption:'false',
          PromProducts:"",
          disabled: false,
}
}
handleChange= e => {
  this.setState({[e.target.name]:e.target.value})
}
handlePrivacyReview=e=>{
  this.setState({selectedOption: e.target.value})
}
handleIerations  = e => {
  this.setState({iteration: e.target.value})
  cust_iteration=e.target.value
   }
   handleCampType = e => {
    this.setState({campaignType: e.target.value})
     cust_campaignType=e.target.value;  
    }
    handleProgram  = e => {
      this.setState({program: e.target.value})
      cust_program=e.target.value;
     
  }
  handleSubProgram  = e => {
    this.setState({subProgarm: e.target.value})
    cust_subProgram=e.target.value;  
   }
   handleCampCadence = e => { 
    this.setState({campaignCadence: e.target.value})
    cust_campaignCadence=e.target.value;
   
   }
   handleCampFrequency = e => {
    this.setState({campaignFrequency: e.target.value})
    cust_campaignFrequency=e.target.value;
   
   }
   handleSponsor  = e => {  
    this.setState({Sponsor: e.target.value})  
     }
 handleDateChange = e => {
    this.setState({RequestedDate: e.target.value});
    cust_reqDate=e.target.value
  };
  handleDelDateChange = e  => {
    this.setState({DeliveryDate: e.target.value});
    cust_deliveryDate=e.target.value
  };
  handleRMDateChange =e => {
    this.setState({RmDate: e.target.value});
    cust_rmDate=e.target.value
  };
  handleChannel =e=> {
    
    this.setState({Channels: Array.from(e.target.selectedOptions, (item)=> item.value)})
    
   
   }


  handleMarkets = e => {
    this.setState({ Markets: Array.from(e.target.selectedOptions, (item)=> item.value)})
  }
  handlePrivacyReview=e=>{
    this.setState({selectedOption: e.target.value})
  }
  validates =e =>{
    let audienceError=""
    if(!(this.state.Audience && this.state.Markets && this.state.Language && this.state.target && this.state.control && this.state.AudDef && this.state.ControlDef)) {
     audienceError = "* Please fill all the mandatory fields in segmentation for one time";
   }
   
   if(audienceError  ) {
     this.setState({audienceError })
     return false;
 }
 return true;
}
  handleSegmentSubmit = e => {
     
 e.preventDefault();
        const valid= this.validates();
        let items = [...this.state.items];
        if(valid){
       
          if( items.length<=3){
        items.push(  {Audience: this.state.Audience, Markets: this.state.Markets, Language: this.state.Language, Target : this.state.target , Control : this.state.control, AudDef : this.state.AudDef, ControlDef: this.state.ControlDef});
    
        this.setState( 
        {
          items,
          Audience: '',
          Markets: '',
          Language: '',
          target: '',
          control: '',
          AudDef: '',
          ControlDef: '',
        }
       );
        
      }
      else{
        this.setState({
          items,
          Audience: '',
          Markets: '',
          Language: '',
          target: '',
          control: '',
          AudDef: '',
          ControlDef: '',
          disabled: true,
        })
      }
    }
  console.log(this.state.items)
  };
  validate =  e =>{
    let TitleError="";
    let sponsorError=""
   let campaignTypeError=""
   let programError=""
   let iterationError=""
   let campaigncadenceError=""
    
   let campaignFrequencyError=""

    let channelError=""
   
    
    let reqDateError=""
    let deliveryDateError=""
    
    let rmDateError=""
    let audienceError=""
   
   
    if(!this.state.Title) {
      TitleError = "Title is empty";
    }
    if(!this.state.iteration){
      iterationError = "Please select month";
    }
    if(!this.state.Channels) {
      channelError= "Please select Channel";
    }
    if(!this.state.Sponsor){
      sponsorError= "Please select Sponsor"
    }
    if(!cust_reqDate) {
      reqDateError= "Please select RequestDate";
    }
    if(!cust_campaignType) {
      campaignTypeError="Please select campaignType"
    }
    if(!cust_program){
      programError= "Please select program"
    }
    if(!cust_campaignCadence){
      campaigncadenceError= "Please select campCadence"
    }
    if(!cust_campaignFrequency){
      campaignFrequencyError="Please select Frequency"
    }
   // if(!cust_handOffDate) {
     // handoffDateError= "Please select Asset's handoffdate";
  //  }
  //  if(!cust_previewDate) {
    //  previewDateError= "Please select Preview date";
   // }
    if(!cust_deliveryDate) {
      deliveryDateError= "Please select Delivery Due date";
    }
   // if(!cust_listDate) {
     // listDateError= "Please select List Due date";
  // }
    if(!cust_rmDate) {
      rmDateError= "Please select RM Approval Date";
    }
    if(!((this.state.items[0] && this.state.items[0].Audience)&& (this.state.items[0] &&this.state.items[0].Markets)&& (this.state.items[0] &&this.state.items[0].Language)&&(this.state.items[0] && this.state.items[0].Target)&& (this.state.items[0] && this.state.items[0].Control)&& (this.state.items[0] && this.state.items[0].AudDef)&&(this.state.items[0] && this.state.items[0].ControlDef))) {
      audienceError = "* Please fill all the mandatory fields in segmentation for one time";
    }
   // if(!this.state.Language) {
     // languageError = "please Specify language";
  //  }
   /* if(!cust_markets) {
      marketsError= "Please select markets";
    }
    if(!this.state.target) {
      targetError = "please Specify target%";
    }
    if(!this.state.control) {
      controlError = "please Specify control%";
    }
    if(!this.state.AudDef) {
      auddefError = "please Specify Audience Definition";
    }
    if(!this.state.ControlDef) {
      controldefError = "please Specify Supression Definition";
    }*/
   
   
      if( TitleError || channelError  ||reqDateError|| deliveryDateError  || rmDateError || audienceError || campaignTypeError ||programError||sponsorError || campaignFrequencyError || campaigncadenceError|| iterationError  ) {
        this.setState({TitleError, channelError,reqDateError, deliveryDateError, rmDateError , audienceError,campaignTypeError ,programError, sponsorError, campaignFrequencyError , campaigncadenceError, iterationError })
        return false;
    }
    return true;
  }

  onHandle =  e => {
    e.preventDefault();
    const valid = this.validate();
 if(valid)
    {
  /*  var raw = 
     [
        {
            "op": "add",
            "path": "/fields/System.Title",
            "from": null,
            "value": "udit"
        },
        {
          "op": "add",
          "path": "/fields/Custom.Sponsor",
          "from": null,
          "value": this.state.Sponsor
      },
        
        {
          "op": "add",
          "path": "/fields/Custom.CampaignType",
          "from": null,
          "value": cust_campaignType
        },
        {
          "op": "add",
          "path": "/fields/Custom.Program",
          "from": null,
          "value": cust_program
        },
       
        
        {
          "op": "add",
          "path": "/fields/Custom.CampaignCadence",
          "from": null,
          "value": cust_campaignCadence
         },
         {
          "op": "add",
          "path": "/fields/Custom.CampaignFrequency",
          "from": null,
          "value":cust_campaignFrequency
         },
         {
          "op": "add",
          "path": "/fields/Custom.RequestLaunchDate",
          "from": null,
          "value": cust_reqDate
         },
         {
          "op": "add",
          "path": "/fields/Custom.CountsDeliveryDueDate",
          "from": null,
          "value":  cust_deliveryDate
         },
         {
          "op": "add",
          "path": "/fields/Custom.AudienceName1",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].Audience)? this.state.items[0].Audience:""
         },
        
         {
          "op": "add",
          "path": "/fields/Custom.Language1",
          "from": null,
          "value": (this.state.items[0] &&this.state.items[0].Language)?this.state.items[0].Language:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.TargetPercentage1",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].Target)?this.state.items[0].Target:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.ControlPercentage1",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].Control)?this.state.items[0].Control:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Audience1Definition",
          "from": null,
          "value":(this.state.items[0] && this.state.items[0].AudDef)?this.state.items[0].AudDef:""
         },
        ]
       */
        this.setState(initialState);
        var raw = 
     [
        {
            "op": "add",
            "path": "/fields/System.Title",
            "from": null,
            "value": this.state.Title
        },
        {
          "op": "add",
          "path": "/fields/Custom.Sponsor",
          "from": null,
          "value": this.state.Sponsor
      },
        {
          "op": "add",
          "path": "/fields/System.IterationPath",
          "from": null,
          "value": cust_iteration
      },
        {
          "op": "add",
          "path": "/fields/Custom.CampaignType",
          "from": null,
          "value": cust_campaignType
        },
        {
          "op": "add",
          "path": "/fields/Custom.Program",
          "from": null,
          "value": cust_program
        },
        {
          "op": "add",
          "path": "/fields/Custom.SubProgram",
          "from": null,
          "value": cust_subProgram
         },  
        
        {
          "op": "add",
          "path": "/fields/Custom.CampaignCadence",
          "from": null,
          "value": cust_campaignCadence
         },
         {
          "op": "add",
          "path": "/fields/Custom.CampaignFrequency",
          "from": null,
          "value": cust_campaignFrequency
         },
         {
          "op": "add",
          "path": "/fields/Custom.Channel_New",
          "from": null,
          "value": this.state.Channels
         },
         {
          "op": "add",
          "path": "/fields/Custom.RequestLaunchDate",
          "from": null,
          "value": cust_reqDate
         },
         
         {
          "op": "add",
          "path": "/fields/Custom.CountsDeliveryDueDate",
          "from": null,
          "value": cust_deliveryDate
         },
         
         {
          "op": "add",
          "path": "/fields/Custom.RMFinalApprovalDueDate",
          "from": null,
          "value": cust_rmDate
         },
         {
          "op": "add",
          "path": "/fields/Custom.AudienceName1",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].Audience)? this.state.items[0].Audience:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Markets1",
          "from": null,
          "value": (this.state.items[0] &&this.state.items[0].Markets)?this.state.items[0].Markets:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Language1",
          "from": null,
          "value": (this.state.items[0] &&this.state.items[0].Language)?this.state.items[0].Language:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.TargetPercentage1",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].Target)?this.state.items[0].Target:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.ControlPercentage1",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].Control)?this.state.items[0].Control:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Audience1Definition",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].AudDef)?this.state.items[0].AudDef:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Suppression1Definition",
          "from": null,
          "value": (this.state.items[0] && this.state.items[0].ControlDef)? this.state.items[0].ControlDef:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.PromotedProducts",
          "from": null,
          "value": this.state.PromProducts
         },
         {
          "op": "add",
          "path": "/fields/Custom.PrivacyReviewRequired",
          "from": null,
          "value": this.state.selectedOption
         },
         {
          "op": "add",
          "path": "/fields/Custom.AudienceName2",
          "from": null,
          "value":(this.state.items[1] && this.state.items[1].Audience)? this.state.items[1].Audience:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Markets2",
          "from": null,
          "value": (this.state.items[1] && this.state.items[1].Markets)?this.state.items[1].Markets:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Language2",
          "from": null,
          "value": (this.state.items[1] && this.state.items[1].Language)?this.state.items[1].Language:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.TargetPercentage2",
          "from": null,
          "value":(this.state.items[1] && this.state.items[1].Target)?this.state.items[1].Target:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.ControlPercentage2",
          "from": null,
          "value":(this.state.items[1] && this.state.items[1].Control)?this.state.items[1].Control:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Audience2Definition",
          "from": null,
          "value":(this.state.items[1] && this.state.items[1].AudDef)?this.state.items[1].AudDef:''
         },
         {
          "op": "add",
          "path": "/fields/Custom.Suppression2Definition",
          "from": null,
          "value":(this.state.items[1] && this.state.items[1].ControlDef)?this.state.items[1].ControlDef:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.AudienceName3",
          "from": null,
          "value":(this.state.items[2] && this.state.items[2].Audience)? this.state.items[2].Audience:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Markets3",
          "from": null,
          "value": (this.state.items[2] && this.state.items[2].Markets)?this.state.items[2].Markets:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Language3",
          "from": null,
          "value": (this.state.items[2] && this.state.items[2].Language)?this.state.items[2].Language:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.TargetPercentage3",
          "from": null,
          "value":(this.state.items[2] && this.state.items[2].Target)?this.state.items[2].Target:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.ControlPercentage3",
          "from": null,
          "value":(this.state.items[2] && this.state.items[2].Control)?this.state.items[2].Control:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Audience3Definition",
          "from": null,
          "value":(this.state.items[2] && this.state.items[2].AudDef)?this.state.items[2].AudDef:''
         },
         {
          "op": "add",
          "path": "/fields/Custom.Suppression3Definition",
          "from": null,
          "value":(this.state.items[2] && this.state.items[2].ControlDef)?this.state.items[2].ControlDef:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.AudienceName4",
          "from": null,
          "value":(this.state.items[3] && this.state.items[3].Audience)? this.state.items[3].Audience:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Markets4",
          "from": null,
          "value": (this.state.items[3] && this.state.items[3].Markets)?this.state.items[3].Markets:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Language4",
          "from": null,
          "value": (this.state.items[3] && this.state.items[3].Language)?this.state.items[3].Language:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.TargetPercentage4",
          "from": null,
          "value":(this.state.items[3] && this.state.items[3].Target)?this.state.items[3].Target:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.ControlPercentage4",
          "from": null,
          "value":(this.state.items[3] && this.state.items[3].Control)?this.state.items[3].Control:""
         },
         {
          "op": "add",
          "path": "/fields/Custom.Audience4Definition",
          "from": null,
          "value":(this.state.items[3] && this.state.items[3].AudDef)?this.state.items[3].AudDef:''
         },
         {
          "op": "add",
          "path": "/fields/Custom.Suppression4Definition",
          "from": null,
          "value":(this.state.items[3] && this.state.items[3].ControlDef)?this.state.items[3].ControlDef:""
         },
         
      ]
     
      var authOptions = {
                  method: 'post',
                  url: 'https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/$Campaign?api-version=6.0',
                  data: JSON.stringify(raw),
                  headers: {
                  'Authorization': 'Basic ' + btoa("" + ":" + 'rzx2ucjkxjbvbu3pp2m3jjahvskvrsqny2ndnddjz55az4cisoya'), 
                  'Content-Type': 'application/json-patch+json'
              },
              json: true
              };
              axios(authOptions)
              .then((response) => {
              this.setState({response : response.data.id});
              alert(`Your Campaign is created, CampaignId : ${this.state.response}`)
              })
      
              .catch((error) => {
              console.log(error)
              })
            // .then(()=> {window.location.reload();})
           }
           
       }
render()
{
  const items = this.state.items;
    return(
        <ReactBootstrap.Grid fluid >
        <div className="form" >
             <h1> ADO Form</h1>
            
    
      <ReactBootstrap.Form >
      <h4>Campaign Details</h4>
                <hr  style={{
                        color: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        height: .3,
                        borderColor : '#4CAF50'
                   }}/>
      <ReactBootstrap.Row  >
      <ReactBootstrap.Col sm={12}>
      <ReactBootstrap.FormGroup >
      <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Title<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
      <ReactBootstrap.FormControl type="text" 
                 name="Title"  
                 placeholder = "Please Provide Title"
                 value={this.state.Title}
                 onChange={ this.handleChange}/>
      </ReactBootstrap.FormGroup>
      <lable style={{color: "red", }}>{this.state.TitleError}</lable>
      </ReactBootstrap.Col>
      
      
       <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Iteration Path<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.iteration} onChange={this.handleIerations} >
               <option value="" disabled selected hidden>Choose a IterationPath</option>
               <option value="Marketing_Ops\FY21\July">July</option>
                <option value="Marketing_Ops\FY21\Aug">August</option>
               <option value="Marketing_Ops\FY21\Sep">September</option>
             <option value="Marketing_Ops\FY21\Oct">October</option>
             <option value="Marketing_Ops\FY21\Nov">November</option>
             <option value="Marketing_Ops\FY21\Dec">December</option>
             <option value="Marketing_Ops\FY21\Jan">January</option>
             <option value="Marketing_Ops\FY21\Feb">February</option>
             <option value="Marketing_Ops\FY21\Mar">March</option>
             <option value="Marketing_Ops\FY21\Apr">April</option>
             <option value="Marketing_Ops\FY21\May">May</option>
             <option value="Marketing_Ops\FY21\Jun">June</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.iterationError}</lable>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Campaign Type<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.campaignType} onChange={this.handleCampType}>
               <option value="" disabled selected hidden>Choose a CampaignType</option>
              <option value="Counts Only">Counts Only</option>
              <option value="Deploy">Deploy</option>
              <option value="File Extract">File Extract</option>
              <option value="List + Deploy">List + Deploy</option>
              <option value="Survey">Survey</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.campaignTypeError}</lable>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Program Type<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.program} onChange={this.handleProgram}>
               <option value="" disabled selected hidden>Choose a Program</option>
              <option value="AAM">AAM</option>
              <option value="Adobe Analytics">Adobe Analytics</option>
              <option value="All Programs">All Programs</option>
              <option value="Console Message">Console Message</option>
              <option value="Counts Only">Counts Only</option>
              <option value="Data Pipeline">Data Pipeline</option>
              <option value="Data File">Data File</option>
              <option value="Email">Email</option>
              <option value="File Extract">File Extract</option>
              <option value="Indash">Indash</option>
              <option value="Minecraft">Minecraft</option>
              <option value="Mobile Push">Mobile Push</option>
              <option value="Survey">Survey</option>
              <option value="Sweepstakes">Sweepstakes</option>
               </ReactBootstrap.FormControl>

             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.programError}</lable>
             
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Sub Program </ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.subProgarm} onChange={this.handleSubProgram} >
               <option value="" disabled selected hidden>Choose a SubProgram</option>
              <option value="1PP Titles">1PP Titles</option>
              <option value="3PP Titles">3PP Titles</option>
              <option value="AAM">AAM</option>
              <option value="Accessories">Accessories</option>
              <option value="All Programs">All Programs</option>
              <option value="Console Message">Console Message</option>
              <option value="Data Pipeline">Data Pipeline</option>
              <option value="DLC & Add-On Alert">DLC & Add-On Alert</option>
              <option value="Engagements">Engagements</option>
              <option value="Events">Events</option>
              <option value="Experimentation">Experimentation</option>
              <option value="Fulfillment">Fulfillment</option>
              <option value="Games with Gold">Games with Gold</option>
              <option value="GEMS">GEMS</option>
              <option value="Lifecycle">Lifecycle</option>
              <option value="Minecraft">Minecraft</option>
              
              <option value="Module Level Reporting">Module Level Reporting</option>
              <option value="Newsletters">Newsletters</option>
              <option value="Other">Other</option>
              <option value="Platform">Platform</option>
              <option value="Process Improvement">Process Improvement</option>
              <option value="Retention">Retention</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Survey">Survey</option>
              <option value="Sweepstakes">Sweepstakes</option>
              <option value="Welcome and Onboarding">Welcome and Onboarding</option>
              <option value="Xbox Game Pass">Xbox Game Pass</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Campaign Cadence<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.campaignCadence} onChange={this.handleCampCadence} >
               <option value="" disabled selected hidden>Choose a campaignCadence</option>
                <option value="One-time">One-time</option>
                <option value="Recurring">Recurring</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.campaigncadenceError}</lable>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Campaign Frequency<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.campaignFrequency} onChange={this.handleCampFrequency} >
               <option value="" disabled selected hidden>Choose a CampaignFrequency</option>
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="One-Time">One-time</option>
                <option value="Weekly">Weekly</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.campaignFrequencyError}</lable>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Sponsor<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" value={this.state.Sponsor} onChange={this.handleSponsor}>
               <option value="" disabled selected hidden>Choose a Sponsor</option>
                       <option value="Lisa Cole <licole@microsoft.com>">Lisa Cole</option>
                       <option value="Henry Liu <henryliu@microsoft.com>">Henry Liu</option>
                       <option value="Sara Shone <smoyal@microsoft.com>">Sara Shone</option>
                       <option value="Blake Hamamoto <blhamamo@microsoft.com>">Blake Hamamoto</option>
                       
                       <option value="Giae Im <v-gii@microsoft.com>">Giae Im</option>
                       <option value="Jasmine Ong-Grazulis <v-jaongg@microsoft.com>">Jasmine Ong</option>
                       <option value="Dave Kramer (PROJECTLINE SERVICES INC) <v-dakra@microsoft.com>">Dave Kramer</option>
                       <option value="Kim Estrampes <kimest@microsoft.com>">Kim Estrampes</option>
                       <option value="Osa Odiase <loodiase@microsoft.com>">Osa Odias</option>
                       <option value="Ashish Kumar <v-kuas@microsoft.com>">Ashish Kumar</option>
                       <option value="Rasmus Mortensen (Projectline Services) <ramorten@microsoft.com>">Rasmus Mortensen</option>
                       <option value="Boyd Peterson <bpeterso@microsoft.com>">Boyd Peterson</option>
                       <option value="Jesse Lopez <v-jesl@microsoft.com>">Jesse Lopez </option>
                       <option value="Nick Garbareno <v-nicgar@microsoft.com>">Nick Garbareno</option>
                       <option value="Daryl Costello <dacost@microsoft.com>">Daryl Costello</option>
                       <option value="Christine Hill <chil@microsoft.com>">Christine Hill</option>
                       <option value="Suchir Sen <v-susen@microsoft.com>">Suchir Sen</option>
                       <option value="Olli Rentola <olrento@microsoft.com>">Olli Rentola</option>
                       <option value="Manas Sahu (Tata Consultancy Services) <v-mansah@microsoft.com>">Manas Sahu</option>
                       <option value="Phantasia Mayner <v-phmay@microsoft.com>">Phantasia Mayner</option>
                       <option value="Alexa Powell <v-alpow@microsoft.com>">Alexa Powell </option>
                       <option value="Jake Reck <v-jareck@microsoft.com>">Jake Reck</option>
                       <option value="Jeffrey Tiefenthaler <v-jeftie@microsoft.com>">Jeffrey Tiefenthaler</option>
                       <option value="Kyle Thomas <v-kyth@microsoft.com>">Kyle Thomas</option>
                       <option value="Meredith Ingersoll <v-meinge@microsoft.com>">Meredith Ingersoll</option>
                       <option value="Sarah Kim <v-kisar@microsoft.com>">Sarah Kim</option>
                       <option value="Enrico Toro <entoro@microsoft.com">Enrico Toro</option>
                       <option value="Taylor Brackinreed <v-tabrac@microsoft.com>">Taylor Brackinreed</option>
                       <option value="Ana Bautista <anbautis@microsoft.com>">Ana Bautista </option>
                       <option value="Jen Barry <v-jenba@microsoft.com>">Jen Barry</option>
                       <option value="John Lowe (XBOX) <jlowe@microsoft.com>">John Lowe </option>
                       <option value="Miriam Vargas <mivarg@microsoft.com>">Miriam Vargas</option>
                       <option value="Rhett Stern <rhetts@jeffreym.com>">Rhett Stern</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.sponsorError}</lable>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Requested Launch Date<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl type="date"  value={this.state.RequestedDate} onChange={this.handleDateChange}/>
               
               
             </ReactBootstrap.FormGroup>
             <lable style={{color: "red", fontWeight:"normal"}}>{this.state.reqDateError}</lable>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Privacy Review Required</ReactBootstrap.ControlLabel>
               <ReactBootstrap.Radio name="selectedOption" checked={this.state.selectedOption=== 'false'} value="false" onChange={this.handlePrivacyReview}>No</ReactBootstrap.Radio>
               <ReactBootstrap.Radio name="selectedOption" checked={this.state.selectedOption === 'true'} value="true" onChange={this.handlePrivacyReview}>Yes</ReactBootstrap.Radio>
               
               
             </ReactBootstrap.FormGroup>
             </ReactBootstrap.Col>
             <ReactBootstrap.Col sm={4}>
             <ReactBootstrap.FormGroup >
               <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Channels</ReactBootstrap.ControlLabel>
               <ReactBootstrap.FormControl componentClass="select" multiple value={this.state.Channels} onChange={this.handleChannel}>
               <option value=""></option>
                 <option value="Email">Email</option>
                 <option value="Console_Message">Console_Message</option>
                 <option value="In_Dash">In_Dash</option>
                 <option value="AAM">AAM</option>
                 <option value="Web_Or_Social">Social</option>
                 <option value="In_Product">In_Product</option>
               </ReactBootstrap.FormControl>
             </ReactBootstrap.FormGroup>
             </ReactBootstrap.Col>
            
             
       </ReactBootstrap.Row>
       <h4>Workback Schedule</h4>
                <hr  style={{
                        color: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        height: .2,
                        borderColor : '#4CAF50'
                   }}/>
                   <ReactBootstrap.Row>
                       <ReactBootstrap.Col sm={4}>
                       <ReactBootstrap.FormGroup >
                       <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Counts Delivery Due Date<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                       <ReactBootstrap.FormControl type="date" value={this.state.DeliveryDate} onChange={this.handleDelDateChange}/>
               
               
                       </ReactBootstrap.FormGroup>
                       <lable style={{color: "red", fontWeight:"normal"}}>{this.state.deliveryDateError}</lable>
                       </ReactBootstrap.Col>
                       <ReactBootstrap.Col sm={4}>
                       <ReactBootstrap.FormGroup >
                       <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}> RM Final Approval Date<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                       <ReactBootstrap.FormControl type="date" value={this.state.RmDate} onChange={this.handleRMDateChange}/>
               
               
                       </ReactBootstrap.FormGroup>
                       <lable style={{color: "red", fontWeight:"normal"}}>{this.state.rmDateError}</lable>
                       </ReactBootstrap.Col>
                   </ReactBootstrap.Row>
                   <h4>Segmentation</h4>
                     <hr  style={{
                        color: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        height: .0,
                        borderColor : '#4CAF50'
                      }}/>
                      <ReactBootstrap.Row>
                      <ReactBootstrap.Col sm={12}>
                      <lable style={{color: "red", fontSize:14, }}>{this.state.audienceError}</lable>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col sm={4}>
                          <ReactBootstrap.FormGroup >
                          <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Audience Name<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                          <ReactBootstrap.FormControl type="text" name="Audience" placeholder="Audience" value={this.state.Audience} onChange={this.handleChange}/>
                          </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                          <ReactBootstrap.FormGroup >
                          <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Language<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                          <ReactBootstrap.FormControl type="text" name="Language" placeholder="Language" value={this.state.Language} onChange={this.handleChange}/>
                          </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                          <ReactBootstrap.FormGroup >
                          <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Target %<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                          <ReactBootstrap.FormControl type="number" name="target" placeholder="Target" value={this.state.target} onChange={this.handleChange}/>
                          </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                          <ReactBootstrap.FormGroup >
                          <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Control %<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                          <ReactBootstrap.FormControl type="number" name="control" placeholder="Control" value={this.state.control} onChange={this.handleChange}/>
                          </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                        <ReactBootstrap.FormGroup >
                         <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Markets<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                         <ReactBootstrap.FormControl componentClass="select" multiple value={this.state.Markets} onChange={this.handleMarkets}>
                         
                       <option value="en-Us">en-US</option>
                       <option value="en-GB">en-GB</option>
                       <option value="en-CA">en-CA</option>
                       <option value="en-IE">en-IE</option>
                        <option value="en-AU">en-AU</option>
                       <option value="en-NZ">en-NZ</option>
                       <option value="fr-CA">fr-CA</option>
                      <option value="es-MX">es-MX</option>
                     <option value="es-CO">es-CO</option>
                     <option value="pt-BR">pt-BR</option>
                     <option value="fr-FR">fr-FR</option>
                     <option value="de-DE">de-DE</option>
                     <option value="it-IT">it-IT</option>
                     <option value="es-ES">es-ES</option>
                     <option value="nl-NL">nl-NL</option>
                     <option value="sv-SE">sv-SE</option>
                     <option value="es-CL">es-CL</option>
                     <option value="es-AR">es-AR</option>
                     <option value="ja-jp">ja-jp</option>
                     
                     <option value="pl-PL">pl-PL</option>
                     <option value="All-Markets">All-Markets</option>
                        </ReactBootstrap.FormControl>
                        </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                        <ReactBootstrap.Col sm={4}>
                        <ReactBootstrap.FormGroup >
                         <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Audience Definition<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                         <ReactBootstrap.FormControl componentClass="textarea" rows={3} placeholder="Definition" name="AudDef" value={this.state.AudDef} onChange={this.handleChange} >
                         
                        </ReactBootstrap.FormControl>
                        </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                        <ReactBootstrap.FormGroup >
                         <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Supression Definition<span class="required" style ={{color :"red"}}>*</span></ReactBootstrap.ControlLabel>
                         <ReactBootstrap.FormControl componentClass="textarea" rows={3} placeholder="Definition" name="ControlDef" value={this.state.ControlDef} onChange={this.handleChange} >
                         
                        </ReactBootstrap.FormControl>
                        </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                        <ReactBootstrap.FormGroup >
                         <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Promoted Products</ReactBootstrap.ControlLabel>
                         <ReactBootstrap.FormControl componentClass="textarea" rows={3} placeholder="enter details"  name="PromProducts" value={this.state.PromProducts} onChange={this.handleChange} >
                         
                        </ReactBootstrap.FormControl>
                        </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={4}>
                        <ReactBootstrap.FormGroup >
                         <ReactBootstrap.ControlLabel style={{fontWeight:"normal"}}>Additional Comments</ReactBootstrap.ControlLabel>
                         <ReactBootstrap.FormControl componentClass="textarea" rows={3} placeholder="Comments" name="AddComments" value={this.state.AddComments} onChange={this.handleChange}  >
                         
                        </ReactBootstrap.FormControl>
                        </ReactBootstrap.FormGroup>
                        </ReactBootstrap.Col>
                        </ReactBootstrap.Row>

                        <div style={{backgroundColor: "#DCDCDC",textAlign: "right"}}>
                        <ReactBootstrap.Button bsStyle="success"  style={{fontSize:"14px",margin:"4px 2px",}} onClick={this.handleSegmentSubmit} disabled={this.state.disabled}>
                          SAVE SEGMENT
                        </ReactBootstrap.Button>
                   </div>
                   <br/>
                   <ReactBootstrap.Row>
                   <ReactBootstrap.Col sm={12}>
                   <ReactBootstrap.Table striped bordered condensed hover>
                   <thead style={{ backgroundColor:"#5cb85c"}}>
                    <tr>
                    <th style={{color:"#fff" }}>Audience Name</th>
                          <th style={{color:"#fff" }}> Markets </th>
                          <th style={{color:"#fff" }}> Language</th>
                          <th style={{color:"#fff" }}>Target %</th>
                          <th style={{color:"#fff" }}> Control % </th>
                          <th style={{color:"#fff" }}>Aud. Definition</th>
                          <th style={{color:"#fff" }}>Sup. Definition</th>
                   </tr>
                  </thead>
                  <tbody>
                   {items.map(item => {
                         return (
                         <tr>
                          <td> {item.Audience}</td>
                          <td >{item.Markets}</td>
                          <td >{item.Language}</td>
                          <td >{item.Target}</td>
                          <td >{item.Control}</td>
                          <td >{item.AudDef}</td>
                          <td >{item.ControlDef}</td>

                         </tr>
                         );
                         })}
                 

            </tbody>
          </ReactBootstrap.Table>
          </ReactBootstrap.Col>
           </ReactBootstrap.Row>
                   <div style={{float: "right"}}>
                   <ReactBootstrap.Button  bsStyle="primary"  style={{fontSize:"14px",margin:"4px 2px",}} onClick={this.onHandle} >
                      &#10003; SAVE 
                        </ReactBootstrap.Button>
                      </div>
    
                      <br/>
                <br/> 
      

       
      </ReactBootstrap.Form>
     
 
    
        </div>
        </ReactBootstrap.Grid>
    )
}
}
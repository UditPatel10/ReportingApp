import React ,{ Component } from 'react';
import './workFlow.css';
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import  {formatDate} from 'react-day-picker/moment';

//import ReactTooltip from "react-tooltip";


let cust_program= ""
let cust_subProgram= "" 
let cust_campaignType=""
let cust_campaignCadence=""
let cust_campaignFrequency=""

let cust_iteration=""
let cust_reqDate=""
let cust_deliveryDate=""
let cust_rmDate=""

let cust_sponsor=""



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

export class Form extends Component{

    state = initialState;
    constructor(props){
        super(props);
        this.state={
           Title: (this.props.location.state&&this.props.location.state.title)?this.props.location.state.title:"",
           iteration:(this.props.location.state&&this.props.location.state.iteration)?this.props.location.state.iteration:"", 
           Sponsor: (this.props.location.state&&this.props.location.state.sponsor)?this.props.location.state.sponsor:"",         
           campaignType: (this.props.location.state&&this.props.location.state.campType)?this.props.location.state.campType:"",
           program:(this.props.location.state&&this.props.location.state.progType)?this.props.location.state.progType:"",
           subProgarm: (this.props.location.state&&this.props.location.state.subpType)?this.props.location.state.subpType:"",
           campaignCadence:(this.props.location.state&&this.props.location.state.campCadence)?this.props.location.state.campCadence:"",
           campaignFrequency:(this.props.location.state&&this.props.location.state.campFreq)?this.props.location.state.campFreq:"", 
           Channels:(this.props.location.state&&this.props.location.state.channel)?this.props.location.state.channel:[""],
           Markets:(this.props.location.state&&this.props.location.state.markets)?this.props.location.state.markets:[""],
           RequestedDate :(this.props.location.state&&this.props.location.state.reqLaunchDate)?this.props.location.state.reqLaunchDate:formatDate(new Date()),
           id:(this.props.location.state&&this.props.location.state.id)?this.props.location.state.id:"",
           DeliveryDate : (this.props.location.state&&this.props.location.state.deliveryDue)?this.props.location.state.deliveryDue:formatDate(new Date()),
           RmDate : (this.props.location.state&&this.props.location.state.rmDate)?this.props.location.state.rmDate:formatDate(new Date()),
           Audience: (this.props.location.state&&this.props.location.state.audience)?this.props.location.state.audience:"",
           Language: (this.props.location.state&&this.props.location.state.lang)?this.props.location.state.lang:"",
           items: [],
           selectedOption:(this.props.location.state&&this.props.location.state.privReview)?this.props.location.state.privReview:'false',
           PromProducts: (this.props.location.state&&this.props.location.state.promPro)?this.props.location.state.promPro:"",
           target: (this.props.location.state&&this.props.location.state.target)?this.props.location.state.target:"0",
           control: (this.props.location.state&&this.props.location.state.control)?this.props.location.state.control:"0",
           AudDef:(this.props.location.state&&this.props.location.state.audDef)?this.props.location.state.audDef:"",
           ControlDef: (this.props.location.state&&this.props.location.state.supDef)?this.props.location.state.supDef:"",
           disabled: false,
           list: [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]
        }
        this.handleChange= this.handleChange.bind(this);
       
        this.handleChangesss= this.handleChangesss.bind(this);
       
        this.handleChangesssss= this.handleChangesssss.bind(this);

       
       
    }

    handleChange(date){
        this.setState({RequestedDate: date})
        cust_reqDate=date
        
      } 
    
     
      handleChangesss(date){
        this.setState({DeliveryDate: date})
        cust_deliveryDate=date
      } 
     
      handleChangesssss(date){
        this.setState({RmDate: date})
        cust_rmDate=date
      } 
      

    change  = e => {
    
        this.setState({[e.target.name]: e.target.value})
        
       
    }
    changeI  = e => {
    
      this.setState({[e.target.name]: e.target.value})
      cust_iteration=e.target.value
       
  }
  changeSp  = e => {
    
    this.setState({[e.target.name]: e.target.value})
    cust_sponsor=e.target.value
     
  }
    changeA =e=> {
      this.setState({[e.target.name]: e.target.value})
      
    }
    changep  = e => {
    
      this.setState({[e.target.name]: e.target.value})
      cust_program=e.target.value;
     
  }
    changeS  = e => {
    
    this.setState({[e.target.name]: e.target.value})
    cust_subProgram=e.target.value;
   
   }
   
   changet = e => {
    
    this.setState({[e.target.name]: e.target.value})
    cust_campaignType=e.target.value;
   
   }
   changeCC = e => {
    
    this.setState({[e.target.name]: e.target.value})
    cust_campaignCadence=e.target.value;
   
   }
   changeF = e => {
    
    this.setState({[e.target.name]: e.target.value})
    cust_campaignFrequency=e.target.value;
   
   }
  
   changeM = e => {
    
    this.setState({ Markets: Array.from(e.target.selectedOptions, (item)=> item.value)})
   
   
   }
   changeMs =e=> {
    
    this.setState({Channels: Array.from(e.target.selectedOptions, (item)=> item.value)})
    
   
   }
    
    handleOption=e=>{
        this.setState({selectedOption: e.target.value});
        
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
      
   /* componentDidMount(){
      
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
        
        
       
        .then(result => {this.setState({program : result.items,
                                      
                                        
        });})
        .catch(error => console.log('error', error));
        fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/ad2ea5c9-9702-4c7b-9dd5-848203ed488b?api-version=6.0-preview.1", requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({campaignType : result.items});})
        fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/b118f328-621e-42c4-a819-625e1fb0ff53?api-version=6.0-preview.1", requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({subProgarm : result.items});})
      //  fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/703b4f55-73cc-48fb-aab5-80dbd15d5910?api-version=6.0-preview.1", requestOptions)
       // .then(response => response.json())
        //.then(result => {this.setState({collectionName : result.items});})
        fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/bce0169e-9e43-47f4-ad38-247a8202b5a4?api-version=6.0-preview.1", requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({channel : result.items});})
        fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/dcd68067-b4cd-41de-9ef1-9ec71539586a?api-version=6.0-preview.1", requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({campaignCadence : result.items});})
        fetch("https://dev.azure.com/xboxgames/_apis/work/processes/lists/73385a41-b542-49f0-8650-3c7da9c76178?api-version=6.0-preview.1", requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({campaignFrequency : result.items});})
  
       
        
    }*/
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
          campaignTypeError="please select campaignType"
        }
        if(!cust_program){
          programError= "please select program"
        }
        if(!cust_campaignCadence){
          campaigncadenceError= "please select campCadence"
        }
        if(!cust_campaignFrequency){
          campaignFrequencyError="please select Frequency"
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


        onUpdate=e=>{
         const id=this.state.id;
          e.preventDefault();
          var raw = [
            {
              "op": "add",
              "path": "/fields/System.Title",
              "value": this.state.Title
            },
            {
              "op": "add",
              "path": "/fields/Custom.Sponsor",
              "value": this.state.Sponsor
            },
            {
              "op": "add",
              "path": "/fields/System.IterationPath",
              "value": this.state.iteration
            },
            {
              "op": "add",
              "path": "/fields/Custom.CampaignType",
            
              "value": this.state.campaignType
            },
            {
              "op": "add",
              "path": "/fields/Custom.Program",
              
              "value": this.state.program
            },
            {
              "op": "add",
              "path": "/fields/Custom.SubProgram",
              
              "value": this.state.subProgarm
             },  
            
            {
              "op": "add",
              "path": "/fields/Custom.CampaignCadence",
              
              "value": this.state.campaignCadence
             },
             {
              "op": "add",
              "path": "/fields/Custom.CampaignFrequency",
              
              "value": this.state.campaignFrequency
             },
             {
              "op": "add",
              "path": "/fields/Custom.Channel_New",
              
              "value": this.state.Channels
             },
             {
              "op": "add",
              "path": "/fields/Custom.RequestLaunchDate",
             
              "value": this.state.RequestedDate
             },
             
             {
              "op": "add",
              "path": "/fields/Custom.CountsDeliveryDueDate",
              
              "value": this.state.DeliveryDate
             },
             
             {
              "op": "add",
              "path": "/fields/Custom.RMFinalApprovalDueDate",
              
              "value": this.state.RmDate
             },
             {
              "op": "add",
              "path": "/fields/Custom.AudienceName1",
              
              "value": this.state.Audience
             },
             {
              "op": "add",
              "path": "/fields/Custom.Markets1",
              
              "value": this.state.Markets
             },
             {
              "op": "add",
              "path": "/fields/Custom.Language1",
              
              "value": this.state.Language
             },
             {
              "op": "add",
              "path": "/fields/Custom.TargetPercentage1",
            
              "value": this.state.target
             },
             {
              "op": "add",
              "path": "/fields/Custom.ControlPercentage1",
              
              "value": this.state.control
             },
             {
              "op": "add",
              "path": "/fields/Custom.Audience1Definition",
              
              "value": this.state.AudDef
             },
             {
              "op": "add",
              "path": "/fields/Custom.Suppression1Definition",
              
              "value": this.state.ControlDef
             },
             {
              "op": "add",
              "path": "/fields/Custom.PromotedProducts",
              
              "value": this.state.PromProducts
             },
             {
              "op": "add",
              "path": "/fields/Custom.PrivacyReviewRequired",
              
              "value": this.state.selectedOption
             },
          ]
          var authOptions = {
            method: 'patch',
            url: `https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`,
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
        alert(`Your Campaign is Updated, CampaignId : ${this.state.response}`)
        })
        
        .catch((error) => {
         
        alert(error)
        })
        
       .then(()=> {window.location.reload();})
     }



        


     render(){
      const items = this.state.items;
     // const title= (this.props.location.state&&this.props.location.state.title)?this.props.location.state.title:"";
      const id= (this.props.location.state&&this.props.location.state.id)?this.props.location.state.id:"";
     // const campaignTypes=(this.props.location.state&&this.props.location.state.campType)?this.props.location.state.campType:"";
      const isClicked=(this.props.location.state&&this.props.location.state.isClicked)?this.props.location.state.isClicked:false;
      let button
      //if(this.props.location.state.isClicked!== undefined){                                                                                           

      //  const isClicked= this.props.location.state.isClicked
      let ids
      let la
      if(isClicked){
          button=<button className="closeee" onClick={this.onUpdate}>Update</button>
          la=<label>Campaign Id:</label>
          ids=<p style={{font:'16px Arial, Helvetica, sans-serif'}}>{id}</p>
      }
     
   
        return (
            <div className="form">
                <h1>ADO Request Form</h1>
                <form >
                    <h4>Campaign Details</h4>
                <hr  style={{
                        color: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        height: .3,
                        borderColor : '#4CAF50'
                   }}/>
                   <br/>
                   {la}
                  {ids}
                <lable><span><b>Title</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
                <input className="input" data-tip="hello world" data-for="registerTip"
            
                 type= "text"
                 name="Title"  
                 placeholder = "Please Provide Title "
                 value={this.state.Title}
                 onChange={e=> this.change(e)}
            
               />
  
             <lable className="lable" style={{color: "red", fontSize:14}}>{this.state.TitleError}</lable><br/>

             <lable className="lable"><span><b>Iteration</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Campaign Type</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Program Type</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <br/>
          <select className="inputs"
             id="iteration" 
             name="iteration"
             value={this.state.iteration}
            
             onChange={e=> this.changeI(e)}
             >
             <option value="" disabled selected hidden>Choose an IterationPath</option>
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
          </select>&nbsp;&nbsp;&nbsp;&nbsp;
         
          
          <select 
             name="campaignType"
             value={this.state.campaignType}
             onChange={e=>this.changet(e)}  
             className="inputs">
              <option value="" disabled selected hidden>Choose a CampaignType</option>
              <option value="Counts Only">Counts Only</option>
              <option value="Deploy">Deploy</option>
              <option value="File Extract">File Extract</option>
              <option value="List + Deploy">List + Deploy</option>
              <option value="Survey">Survey</option>

            <select/>

            </select>&nbsp;&nbsp;&nbsp;&nbsp;
          <select
          name="program" 
          onChange={e=>this.changep(e)} 
          value={this.state.program} 
          className="inputs" >
            
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
           
             </select>
         
             <lable className="lable" style={{color: "red", fontSize:14}}>{this.state.iterationError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14}}>{this.state.campaignTypeError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14}}>{this.state.programError}</lable>
             <br/>
             <lable className="lable"><span><b>Sub Program</b><span class="required" style ={{color :"red"}}></span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Campaign Cadence</b><span class="required" style ={{color :"red"}}>*</span></span></lable> &nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Campaign Frequency</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
          <select 
              name="subProgarm"
              onChange={e=>this.changeS(e)} 
              value={this.state.subProgarm} 
             
              className="inputs">
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

             </select>&nbsp;&nbsp;&nbsp;&nbsp;
          
                 
             <select 
                name="campaignCadence"
                value={this.state.campaignCadence}
                onChange={e=>this.changeCC(e)}  
                className="inputs" >
                <option value="" disabled selected hidden>Choose a campaignCadence</option>
                <option value="One-time">One-time</option>
                <option value="Recurring">Recurring</option>
                    
             </select> &nbsp;&nbsp;&nbsp;&nbsp;
             <select 
                name="campaignFrequency"
                value={this.state.campaignFrequency}
                onChange={e=>this.changeF(e)}  
                className="inputs">
                <option value="" disabled selected hidden>Choose a CampaignFrequncy</option>
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="One-Time">One-time</option>
                <option value="Weekly">Weekly</option>
               
                
            
             </select>
            
             <lable className="lable" style={{color: "red", fontSize:14}}></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14}}>{this.state.campaigncadenceError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14}}>{this.state.campaignFrequencyError}</lable>
             <br/>
             <lable className="lable"><span><b>Channel</b><span class="required" style ={{color :"red"}}></span></span></lable>
             
           
            <br/>
             <select 
              name="Channels" 
              value={this.state.Channels}
               className="multi" 
               onChange={e=> this.changeMs(e)} 
               multiple={true} >
                 <option value=""></option>
                 <option value="Email">Email</option>
                 <option value="Console_Message">Console_Message</option>
                 <option value="In_Dash">In_Dash</option>
                 <option value="AAM">AAM</option>
                 <option value="Web_Or_Social">Social</option>
                 <option value="In_Product">In_Product</option>
                   
             </select>

             <br/>
             <lable className="lable" style={{color: "red", fontSize:14}}>{this.state.channelError}</lable><br/>
            
             <lable className="lable"><span><b>Privacy Review Required</b><span class="required" style ={{color :"red"}}></span></span></lable>
             <div className="radio">
             <label>
              <input type="radio" value="false" checked={this.state.selectedOption=== 'false'} onChange={e=>this.handleOption(e)} />
              No
            </label>
          </div>
          <div className="radio">
             <label>
             <input type="radio" value="true" checked={this.state.selectedOption === 'true'} onChange={e=>this.handleOption(e)} />
             Yes
            </label>
          </div>
          <lable className="lable"><span><b>Requested Launch Date</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Sponsor</b><span class="required" style ={{color :"red"}}>*</span></span></lable><lable className="lable"></lable>

          <span className="dates">
           <DayPickerInput 
            formatDate={formatDate}
            value={this.state.RequestedDate}
            onDayChange={ this.handleChange}
          />
          
         
          
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select 
          className="inputs" 
          name="Sponsor" 
          value={this.state.Sponsor} 
          onChange={e=> this.changeSp(e)} >
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
                     </select>
                     <br/>

                     <lable className="lable" style={{color: "red", fontSize:14}}>{this.state.reqDateError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14}}>{this.state.sponsorError}</lable><br/>
          <h4>Workback Schedule</h4>
                <hr  style={{
                        color: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        height: .3,
                        borderColor : '#4CAF50'
                   }}/>
                   <br/>
           
           
            <lable className="lable"><span><b>Counts Delivery Due Date</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>RM Final Approval Date</b><span class="required" style ={{color :"red"}}>*</span></span></lable><lable className="lable"></lable>
            <span className="dates">
            <DayPickerInput 
            formatDate={formatDate}
            value={this.state.DeliveryDate}
            onDayChange={this.handleChangesss}
            />
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <span className="dates">
            <DayPickerInput 
            formatDate={formatDate}
            value={this.state.RmDate}
            onDayChange={this.handleChangesssss}
            />
            </span>
            <br/>
            <lable className="lable" style={{color: "red", fontSize:14, }}>{this.state.deliveryDateError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14,  }}>{this.state.rmDateError}</lable>
            <h4>Segmentation</h4>
                <hr  style={{
                        color: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        height: .3,
                        borderColor : '#4CAF50'
                   }}/>
                   
                   <lable style={{color: "red", fontSize:14, }}>{this.state.audienceError}</lable><br/>
                   <lable className="lable"><span><b>Audience Name</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Markets</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Language</b><span class="required" style ={{color :"red"}}>*</span></span></lable>
                <input className="inputs"                 
          
                  type= "text"
                  name="Audience"  
                  placeholder = "Audience"
                  value={this.state.Audience}
                  onChange={e=> this.changeA(e)}
            
                />&nbsp;&nbsp;&nbsp;&nbsp;
                <select className="multi" 
                
                    
                    value={this.state.Markets}
                     onChange={e=> this.changeM(e)}
                     multiple
                 >
                       <option value=""></option>
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

                 </select>&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="inputs"                 
          
                  type= "text"
                  name="Language"  
                  placeholder = "Language"
                   value={this.state.Language}
                  onChange={e=> this.change(e)}
 
                   />
                  
                   <br/>
                   <lable className="lable"><span><b>Target %</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Control %</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"></lable>
                   <input className="inputs"                 
          
                      type= "number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                     name="target"  
                     placeholder = "Target"
                    value={this.state.target}
                    onChange={e=> this.change(e)}

                   />&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="inputs"                 
          
                      type= "number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      name="control"  
                       placeholder = "Control"
                      value={this.state.control}
                      onChange={e=> this.change(e)}
 
                      />
                      <br/>
                      <lable className="lable" style={{color: "red", fontSize:14, }}>{this.state.targetError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14,  }}>{this.state.controlError}</lable>&nbsp;&nbsp;&nbsp;&nbsp; <lable className="lable" style={{color: "red", fontSize:14,  }}></lable>
                      <lable className="lable"><span><b>Audience Definition</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><span><b>Supression Definition</b><span class="required" style ={{color :"red"}}>*</span></span></lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable"><b>Additional Comments</b></lable>
                      <textarea
                      className="inputs"
                       name="AudDef" 
                       placeholder="Definition"
                       value={this.state.AudDef}
                        onChange={e=>this.change(e)}
                     />&nbsp;&nbsp;&nbsp;&nbsp;

                     <textarea
                      className="inputs"
                       name="ControlDef" 
                       placeholder="Definition"
                      value={this.state.ControlDef}
                        onChange={e=>this.change(e)}
                     />&nbsp;&nbsp;&nbsp;&nbsp;

                     <textarea
                      className="inputs"
                       name="AddComments" 
                       placeholder="Comments"
                      
                        onChange={e=>this.change(e)}
                     />
                     <lable className="lable" style={{color: "red", fontSize:14, }}>{this.state.auddefError}</lable>&nbsp;&nbsp;&nbsp;&nbsp;<lable className="lable" style={{color: "red", fontSize:14,  }}>{this.state.controldefError}</lable>&nbsp;&nbsp;&nbsp;&nbsp; <lable className="lable" style={{color: "red", fontSize:14,  }}></lable>
                     <lable className="lable"><span><b>Promoted Products</b><span class="required" style ={{color :"red"}}></span></span></lable>
                     <br/>
                     <textarea className="inputs"                 
          
                        type= "text"
                         name="PromProducts"  
                         placeholder = "Promoted Products"
                         value={this.state.PromProducts}
                         onChange={e=> this.change(e)}

                         /><br/>
                        

                     <div className="div"><button className="button" disabled={this.state.disabled} onClick={e=> this.handleSegmentSubmit(e)}>Save Segment</button></div>
                     <br/>
                       
                    <div id="Table">
                      <table>
                        <tbody>
                         <tr>
                          <th>Audience Name</th>
                          <th> Markets </th>
                          <th> Language</th>
                          <th>Target %</th>
                          <th> Control % </th>
                          <th>Aud. Definition</th>
                          <th>Sup. Definition</th>
                         </tr>
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
                     </table>
                   </div>
                        
                       
                   
           
            <br/>
             <p style={{float: "right"}}>{button} &nbsp;&nbsp;&nbsp;&nbsp;<button className="closeee" onClick={this.onHandle}>&#10003; Save</button></p>
           
                </form>
                <br/>
                <br/> 
             
            </div>


)
}
}

 // <ReactTooltip id="registerTip" place="bottom" effect="float" type="info" eventOff="click"> Tooltip for Title </ReactTooltip>


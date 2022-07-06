import React, { Component } from 'react';
import axios from 'axios';
import './workFlow.css';
import history from './History';



export class ListForm extends Component{

    constructor(props){
        super(props);
        this.state={
            item:[],
            
            program:[],
            isClicked: false
        }
        
    }

   /* handleRadio=e=>{
      const {name, value} = e.target;
      this.setState({
        [name]: value
      });
    };*/
     async componentDidMount(){

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

    
       fetch("https://analytics.dev.azure.com/xboxgames/Marketing_Ops/_odata/v2.0/WorkItems?$select=WorkItemId,WorkItemType,Title,State,Custom_CampaignID,Custom_Sponsor,Custom_PromotedProducts,Custom_CampaignType,Custom_Program,Custom_SubProgram,Custom_CampaignCadence,Custom_CampaignFrequency,Custom_Channel,Custom_PrivacyReviewRequired,Custom_RequestLaunchDate,Custom_SponsorSK,Custom_CountsDeliveryDueDate,Custom_RMFinalApprovalDueDate,Custom_AudienceName1,Custom_Markets1,Custom_Language1,Custom_TargetPercentage1,Custom_ControlPercentage1&$filter=WorkItemType%20eq%20%27Campaign%27&&$top=10&$orderby=WorkItemId%20Desc", requestOptions)
      .then(async response => response.json())
      .then(result => {this.setState({program : result.value});})
      .catch(error => console.log('error', error));
     
      /* var data= {"query": "Select * From WorkItems Where ( [System.WorkItemType] = 'Campaign' And [System.Id]>='19295' )Order By [System.Id] DESC "};
              var authOptions = {
                method: 'post',
                url: "https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/wiql?api-version=6.0",
                data: JSON.stringify(data),
                headers: {
                'Authorization': 'Basic ' + btoa("" + ":" + '3vibk7neocxkbrdhydgt37to35lxhyl4qap6con5gpzvp3j456vq'), 
                'Content-Type': 'application/json'
            },
            json: true
            };
            axios(authOptions)
            .then((response) =>console.log(response)  )
    
            .catch((error) => {
            alert(error)
            })
            fetch("https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems?ids=203&api-version=6.0",requestOptions) 
            .then(response => response.json())
            .then(result => console.log(result.value[0].fields))*/

     }
   
     
     handleEdit1=e=>{
         e.preventDefault();
         
          const id= this.state.program[0].WorkItemId;
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
          var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
          };
    
        
            fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
          .then( response => response.json())
          .then(result =>{this.setState({item : result.fields});
          history.push({
            pathname:'/Form',
            state:{isClicked:true,
                   id:this.state.program[0].WorkItemId,
                   title: this.state.program[0].Title,
                   sponsor: result.fields["Custom.Sponsor"].displayName,
                   iteration: result.fields["System.IterationPath"],
                   campType: this.state.program[0].Custom_CampaignType,
                   progType: this.state.program[0].Custom_Program,
                   subpType: this.state.program[0].Custom_SubProgram, 
                   campCadence: this.state.program[0].Custom_CampaignCadence,
                   campFreq: this.state.program[0].Custom_CampaignFrequency,
                   channel: this.state.program[0].Custom_Channel_New?(this.state.program[0].Custom_Channel_New).split(";"):[""],
                   privReview: this.state.program[0].Custom_PrivacyReviewRequired.toString(),
                   reqLaunchDate: this.state.program[0].Custom_RequestLaunchDate,          
                   deliveryDue: this.state.program[0].Custom_CountsDeliveryDueDate,
                   rmDate: this.state.program[0].Custom_RMFinalApprovalDueDate,
                   audience: this.state.program[0].Custom_AudienceName1,
                   lang: this.state.program[0].Custom_Language1,
                   markets: this.state.program[0].Custom_Markets1?(this.state.program[0].Custom_Markets1).split(";"):[""],
                   target: this.state.program[0].Custom_TargetPercentage1,
                   control: this.state.program[0].Custom_ControlPercentage1,
                   promPro: this.state.program[0].Custom_PromotedProducts,
                   audDef: result.fields["Custom.Audience1Definition"],
                   supDef: result.fields["Custom.Suppression1Definition"],
           }
         }                    
        ) })
          .catch(error => console.log('error', error));
    
     }
     handleEdit2=e=>{
      e.preventDefault();
         
      const id= this.state.program[1].WorkItemId;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

    
        fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
      .then( response => response.json())
      .then(result =>{this.setState({item : result.fields});
      history.push({
        pathname:'/Form',
        state:{isClicked:true,
               id:this.state.program[1].WorkItemId,
               title: this.state.program[1].Title,
               sponsor: result.fields["Custom.Sponsor"].displayName,
               iteration: result.fields["System.IterationPath"],
               campType: this.state.program[1].Custom_CampaignType,
               progType: this.state.program[1].Custom_Program,
               subpType: this.state.program[1].Custom_SubProgram, 
               campCadence: this.state.program[1].Custom_CampaignCadence,
               campFreq: this.state.program[1].Custom_CampaignFrequency,
               channel: this.state.program[1].Custom_Channel_New?(this.state.program[1].Custom_Channel_New).split(";"):[""],
               privReview: this.state.program[1].Custom_PrivacyReviewRequired.toString(),
               reqLaunchDate: this.state.program[1].Custom_RequestLaunchDate,          
               deliveryDue: this.state.program[1].Custom_CountsDeliveryDueDate,
               rmDate: this.state.program[1].Custom_RMFinalApprovalDueDate,
               audience: this.state.program[1].Custom_AudienceName1,
               lang: this.state.program[1].Custom_Language1,
               markets: this.state.program[1].Custom_Markets1?(this.state.program[1].Custom_Markets1).split(";"):[""],
               target: this.state.program[1].Custom_TargetPercentage1,
               control: this.state.program[1].Custom_ControlPercentage1,
               promPro: this.state.program[1].Custom_PromotedProducts,
               audDef: result.fields["Custom.Audience1Definition"],
               supDef: result.fields["Custom.Suppression1Definition"],
       }
     }                    
    ) })
      .catch(error => console.log('error', error));
      
   
  }
  handleEdit3=e=>{
    e.preventDefault();
         
      const id= this.state.program[2].WorkItemId;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

    
        fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
      .then( response => response.json())
      .then(result =>{this.setState({item : result.fields});
      history.push({
        pathname:'/Form',
        state:{isClicked:true,
               id:this.state.program[2].WorkItemId,
               title: this.state.program[2].Title,
               sponsor: result.fields["Custom.Sponsor"].displayName,
               iteration: result.fields["System.IterationPath"],
               campType: this.state.program[2].Custom_CampaignType,
               progType: this.state.program[2].Custom_Program,
               subpType: this.state.program[2].Custom_SubProgram, 
               campCadence: this.state.program[2].Custom_CampaignCadence,
               campFreq: this.state.program[2].Custom_CampaignFrequency,
               channel: this.state.program[2].Custom_Channel_New?(this.state.program[2].Custom_Channel_New).split(";"):[""],
               privReview: this.state.program[2].Custom_PrivacyReviewRequired.toString(),
               reqLaunchDate: this.state.program[2].Custom_RequestLaunchDate,          
               deliveryDue: this.state.program[2].Custom_CountsDeliveryDueDate,
               rmDate: this.state.program[2].Custom_RMFinalApprovalDueDate,
               audience: this.state.program[2].Custom_AudienceName1,
               lang: this.state.program[2].Custom_Language1,
               markets: this.state.program[2].Custom_Markets1?(this.state.program[2].Custom_Markets1).split(";"):[""],
               target: this.state.program[2].Custom_TargetPercentage1,
               control: this.state.program[2].Custom_ControlPercentage1,
               promPro: this.state.program[2].Custom_PromotedProducts,
               audDef: result.fields["Custom.Audience1Definition"],
               supDef: result.fields["Custom.Suppression1Definition"],
       }
     }                    
    ) })
      .catch(error => console.log('error', error));
  
 
}
handleEdit4=e=>{
  e.preventDefault();
         
  const id= this.state.program[3].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[3].WorkItemId,
           title: this.state.program[3].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[3].Custom_CampaignType,
           progType: this.state.program[3].Custom_Program,
           subpType: this.state.program[3].Custom_SubProgram, 
           campCadence: this.state.program[3].Custom_CampaignCadence,
           campFreq: this.state.program[3].Custom_CampaignFrequency,
           channel: this.state.program[3].Custom_Channel_New?(this.state.program[3].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[3].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[3].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[3].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[3].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[3].Custom_AudienceName1,
           lang: this.state.program[3].Custom_Language1,
           markets: this.state.program[3].Custom_Markets1?(this.state.program[3].Custom_Markets1).split(";"):[""],
           target: this.state.program[3].Custom_TargetPercentage1,
           control: this.state.program[3].Custom_ControlPercentage1,
           promPro: this.state.program[3].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
 }
 handleEdit5=e=>{
  e.preventDefault();
         
  const id= this.state.program[4].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[4].WorkItemId,
           title: this.state.program[4].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[4].Custom_CampaignType,
           progType: this.state.program[4].Custom_Program,
           subpType: this.state.program[4].Custom_SubProgram, 
           campCadence: this.state.program[4].Custom_CampaignCadence,
           campFreq: this.state.program[4].Custom_CampaignFrequency,
           channel: this.state.program[4].Custom_Channel_New?(this.state.program[4].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[4].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[4].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[4].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[4].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[4].Custom_AudienceName1,
           lang: this.state.program[4].Custom_Language1,
           markets: this.state.program[4].Custom_Markets1?(this.state.program[4].Custom_Markets1).split(";"):[""],
           target: this.state.program[4].Custom_TargetPercentage1,
           control: this.state.program[4].Custom_ControlPercentage1,
           promPro: this.state.program[4].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
 }

 handleEdit6=e=>{
  e.preventDefault();
         
  const id= this.state.program[5].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[5].WorkItemId,
           title: this.state.program[5].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[5].Custom_CampaignType,
           progType: this.state.program[5].Custom_Program,
           subpType: this.state.program[5].Custom_SubProgram, 
           campCadence: this.state.program[5].Custom_CampaignCadence,
           campFreq: this.state.program[5].Custom_CampaignFrequency,
           channel: this.state.program[5].Custom_Channel_New?(this.state.program[5].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[5].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[5].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[5].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[5].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[5].Custom_AudienceName1,
           lang: this.state.program[5].Custom_Language1,
           markets: this.state.program[5].Custom_Markets1?(this.state.program[5].Custom_Markets1).split(";"):[""],
           target: this.state.program[5].Custom_TargetPercentage1,
           control: this.state.program[5].Custom_ControlPercentage1,
           promPro: this.state.program[5].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
 }
 handleEdit7=e=>{
  e.preventDefault();
         
  const id= this.state.program[6].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[6].WorkItemId,
           title: this.state.program[6].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[6].Custom_CampaignType,
           progType: this.state.program[6].Custom_Program,
           subpType: this.state.program[6].Custom_SubProgram, 
           campCadence: this.state.program[6].Custom_CampaignCadence,
           campFreq: this.state.program[6].Custom_CampaignFrequency,
           channel: this.state.program[6].Custom_Channel_New?(this.state.program[6].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[6].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[6].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[6].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[6].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[6].Custom_AudienceName1,
           lang: this.state.program[6].Custom_Language1,
           markets: this.state.program[6].Custom_Markets1?(this.state.program[6].Custom_Markets1).split(";"):[""],
           target: this.state.program[6].Custom_TargetPercentage1,
           control: this.state.program[6].Custom_ControlPercentage1,
           promPro: this.state.program[6].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
 }

 handleEdit8=e=>{
  e.preventDefault();
         
  const id= this.state.program[7].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[7].WorkItemId,
           title: this.state.program[7].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[7].Custom_CampaignType,
           progType: this.state.program[7].Custom_Program,
           subpType: this.state.program[7].Custom_SubProgram, 
           campCadence: this.state.program[7].Custom_CampaignCadence,
           campFreq: this.state.program[7].Custom_CampaignFrequency,
           channel: this.state.program[7].Custom_Channel_New?(this.state.program[7].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[7].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[7].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[7].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[7].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[7].Custom_AudienceName1,
           lang: this.state.program[7].Custom_Language1,
           markets: this.state.program[7].Custom_Markets1?(this.state.program[7].Custom_Markets1).split(";"):[""],
           target: this.state.program[7].Custom_TargetPercentage1,
           control: this.state.program[7].Custom_ControlPercentage1,
           promPro: this.state.program[7].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
  }

 handleEdit9=e=>{
  e.preventDefault();
         
  const id= this.state.program[8].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[8].WorkItemId,
           title: this.state.program[8].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[8].Custom_CampaignType,
           progType: this.state.program[8].Custom_Program,
           subpType: this.state.program[8].Custom_SubProgram, 
           campCadence: this.state.program[8].Custom_CampaignCadence,
           campFreq: this.state.program[8].Custom_CampaignFrequency,
           channel: this.state.program[8].Custom_Channel_New?(this.state.program[8].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[8].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[8].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[8].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[8].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[8].Custom_AudienceName1,
           lang: this.state.program[8].Custom_Language1,
           markets: this.state.program[8].Custom_Markets1?(this.state.program[8].Custom_Markets1).split(";"):[""],
           target: this.state.program[8].Custom_TargetPercentage1,
           control: this.state.program[8].Custom_ControlPercentage1,
           promPro: this.state.program[8].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
  }
 handleEdit10=e=>{
  e.preventDefault();
         
  const id= this.state.program[9].WorkItemId;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Om1vaGE1aDIya2Vlb2Jrb3V6dnVvN2x5ZmZhZ3FpdzZrZnc2cHEycDd2eHNjbGs0ZzM2eWE=");
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };


    fetch(`https://dev.azure.com/xboxgames/Marketing_Ops/_apis/wit/workitems/${id}?api-version=6.0`, requestOptions)
  .then( response => response.json())
  .then(result =>{this.setState({item : result.fields});
  history.push({
    pathname:'/Form',
    state:{isClicked:true,
           id:this.state.program[9].WorkItemId,
           title: this.state.program[9].Title,
           sponsor: result.fields["Custom.Sponsor"].displayName,
           iteration: result.fields["System.IterationPath"],
           campType: this.state.program[9].Custom_CampaignType,
           progType: this.state.program[9].Custom_Program,
           subpType: this.state.program[9].Custom_SubProgram, 
           campCadence: this.state.program[9].Custom_CampaignCadence,
           campFreq: this.state.program[9].Custom_CampaignFrequency,
           channel: this.state.program[9].Custom_Channel_New?(this.state.program[9].Custom_Channel_New).split(";"):[""],
           privReview: this.state.program[9].Custom_PrivacyReviewRequired.toString(),
           reqLaunchDate: this.state.program[9].Custom_RequestLaunchDate,          
           deliveryDue: this.state.program[9].Custom_CountsDeliveryDueDate,
           rmDate: this.state.program[9].Custom_RMFinalApprovalDueDate,
           audience: this.state.program[9].Custom_AudienceName1,
           lang: this.state.program[9].Custom_Language1,
           markets: this.state.program[9].Custom_Markets1?(this.state.program[9].Custom_Markets1).split(";"):[""],
           target: this.state.program[9].Custom_TargetPercentage1,
           control: this.state.program[9].Custom_ControlPercentage1,
           promPro: this.state.program[9].Custom_PromotedProducts,
           audDef: result.fields["Custom.Audience1Definition"],
           supDef: result.fields["Custom.Suppression1Definition"],
   }
 }                    
) })
  .catch(error => console.log('error', error));
  }


        render(){
          const item= this.state.program;
         
            return(
                <div  className="forms">
                  <h1>List Tracking Form</h1>
                    
                  
                    <div id="Table">
          <table style={{width :'90%',display:'inline-table',height:"496px"}}>
            <tbody>
              <tr  style={{height:"45px"}} >
                <th>ID</th>
                <th>Title</th>
                <th>WorkItemType</th>             
               
                
              </tr>
             
               
              {item.map(item => {
                         return (
                         <tr style={{height:"45px"}} >
                          <td> {item.WorkItemId}</td>
                          <td style={{width :'1000px'}}>{item.Title}</td>
                          <td >{item.WorkItemType}</td>
                          
                         

                         </tr>
                         );
                         })}
              
            </tbody>
          </table>
          <table style={{width :'5%',display:'inline-table',height:"496px"}}>
            <tbody >             
              <tr>
                <th> Edit</th>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit1}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit2}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit3}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit4}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit5}>edit</button></td>
                
              </tr>
              
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit6}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit7}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit8}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit9}>edit</button></td>
                
              </tr>
              <tr>
                <td>
                  
                <button className="closeeee"   onClick={this.handleEdit10}>edit</button></td>
                
              </tr>
            
               
              
            </tbody>
           
          </table>
         
      
        </div> 
       
        
                    
                    
                </div>


            )
        


    }
}
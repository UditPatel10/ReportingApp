import React, { Component } from 'react';
import './styles.css'

export class AnalyticsRequest extends Component {
    displayName = AnalyticsRequest.name

    constructor(props) {
        super(props)
        this.state = {
            sponsorEmailId: '',
            title: '',
            description: '',
            program: 'Engagement',
            taskId: '',
            lblRequestId: '',
            url: '',
            attachmentName : ''
        }
    }
    handleSponsorEmailIdChange = (event) => {
        this.setState({
            sponsorEmailId: event.target.value
        })
    }

    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value
        })
    }

    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleProgramChange = event => {
        this.setState({
            program: event.target.value
        })
    }

    handleAttachmentChange = event => {
        this.setState({ attachmentName: event.target.files[0] })
    }

    reset = e => {
        this.setState({
            sponsorEmailId: "",
            title: "",
            description: "",
            program: "Engagement",
            taskId: "",
            lblRequestId: ""
        });

    }

    //handleSubmit = event => {

    //    fetch('https://dev.azure.com/xboxgames/Reporting_Analytics/_apis/wit/workitems/$Task?api-version=5.1', {
    //        method: 'POST',

    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/json-patch+json',
    //            'Authorization': 'Basic di1uYXZrb3JAbWljcm9zb2Z0LmNvbTptb2hhNWgyMmtlZW9ia291enZ1bzdseWZmYWdxaXc2a2Z3NnBxMnA3dnhzY2xrNGczNnlh'
    //        },
    //        body:
    //            JSON.stringify([
    //                {
    //                    "op": "add",
    //                    "path": "/fields/System.Title",
    //                    "from": null,
    //                    "value": this.state.title
    //                },
    //                {
    //                    "op": "add",
    //                    "path": "/fields/System.Description",
    //                    "from": null,
    //                    "value": this.state.description
    //                },

    //                {
    //                    "op": "add",
    //                    "path": "/fields/Custom.Sponsor",
    //                    "from": null,
    //                    "value": this.state.sponsorEmailId
    //                },

    //                {
    //                    "op": "add",
    //                    "path": "/fields/Custom.Program",
    //                    "from": null,
    //                    "value": this.state.program
    //                },
    //                {
    //                    "op": "add",
    //                    "path": "/fields/System.History",
    //                    "from": null,
    //                    "value": "Test Comment"
    //                },
    //                {
    //                    "op": "add",
    //                    "path": "/fields/System.AssignedTo",
    //                    "from": null,
    //                    "value": "v-navkor@microsoft.com"
    //                },
    //                {
    //                    "op": "add",
    //                    "path": "/fields/System.AreaPath",
    //                    "from": null,
    //                    "value": "Reporting_Analytics\\Web and Social Analytics"
    //                },
    //                {
    //                    "op": "add",
    //                    "path": "/fields/Microsoft.VSTS.Common.Activity",
    //                    "from": null,
    //                    "value": "Testing"
    //                }

    //            ])
    //    })
    //        .then(response => response.text())
    //        .then(result => this.setState({ 'taskId': (JSON.parse(result)).id }))
    //        .catch(error => console.log('error', error));

    //    this.state.lblRequestId = "Thank you for raising the request! Your request Id#:";
    //}

    //uploadToADOandGetAttachmentURL = e => {

    //    const attachmentUrl = 'https://dev.azure.com/xboxgames/Reporting_Analytics/_apis/wit/attachments/' + this.state.attachmentName.name + '?fileName=' + this.state.attachmentName.name + '&api-version=5.1';

    //    fetch(attachmentUrl, {
    //        method: 'POST',

    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/octet-stream',
    //            'Authorization': 'Basic di1uYXZrb3JAbWljcm9zb2Z0LmNvbTptb2hhNWgyMmtlZW9ia291enZ1bzdseWZmYWdxaXc2a2Z3NnBxMnA3dnhzY2xrNGczNnlh'
    //        },
    //        body: this.state.attachmentName
                
    //    })
    //        .then(response => response.text())
    //        .then(result => {
    //            this.setState({ 'url': (JSON.parse(result)).url });
    //            this.patchAttachmentToTask();

    //        })
    //        .catch(error => console.log('error', error));
    // }

    //patchAttachmentToTask() {
    //    const attachmentPatchUrl = 'https://dev.azure.com/xboxgames/Reporting_Analytics/_apis/wit/workitems/' + this.state.taskId + '?api-version=5.0';

    //    fetch(attachmentPatchUrl, {
    //        method: 'PATCH',
    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/json-patch+json',
    //            'Authorization': 'Basic di1uYXZrb3JAbWljcm9zb2Z0LmNvbTptb2hhNWgyMmtlZW9ia291enZ1bzdseWZmYWdxaXc2a2Z3NnBxMnA3dnhzY2xrNGczNnlh'
    //        },
    //        body:
    //            JSON.stringify([
    //                {
    //                    "op": "add",
    //                    "path": "/fields/System.History",
    //                    "value": "Adding the necessary spec"
    //                },
    //                {
    //                    "op": "add",
    //                    "path": "/relations/-",
    //                    "value": {
    //                        "rel": "AttachedFile",
    //                        "url": this.state.url,
    //                        "attributes": {
    //                            "comment": "Please find the attachment, for more details"
    //                        }
    //                    }
    //                }
    //            ])
    //    })
    //        .then(response => response.text())
    //        .then(result => console.log(result))
    //        .catch(error => console.log('error', error));
    //}

    render() {
        return (
            <div className="form-style-8">
                <h1>New Analytics Request</h1>

                <div>
                    <label>Sponsor EmailId </label>
                    <input name="name"
                        placeholder="SponsorEmailId" value={this.state.sponsorEmailId} onChange={this.handleSponsorEmailIdChange} />
                </div>
                <div>
                    <label>Title </label>
                    <input name="name"
                        placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
                </div>
                <div>
                    <label>Description </label>
                    <textarea value={this.state.description} placeholder="Description" onChange={this.handleDescriptionChange} />
                </div>
                <div>
                    <label>Program </label>
                    <select value={this.state.program} onChange={this.handleProgramChange}>
                        <option value="Subscriptions">Subscriptions </option>
                        <option value="Accessories">Accessories </option>
                        <option value="Engagement">Engagement </option>
                        <option value="Events">Events </option>
                    </select>
                </div>
                <div class="custom-file">
                     <label class="custom-file-label" for="customFile">Attachment</label>
                    <input type="file" class="custom-file-input"  onChange={this.handleAttachmentChange} id="customFile" />
                </div>
         
                <div className="btnclass">
                    <button type="submit" onClick={this.uploadToADOandGetAttachmentURL} > Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.reset}>reset</button>
                </div>
                <div className="divRequestId">
                    {this.state.lblRequestId} {this.state.taskId}  {this.state.url} 
                </div>

             </div>
        );
    }
}
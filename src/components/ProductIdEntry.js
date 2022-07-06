import React, { Component } from 'react';
import './styles.css'

export class ProductIdEntry extends Component {
    displayName = ProductIdEntry.name

    constructor(props) {
        super(props)
        this.state = {
            campaignId: '',
            productIds: '',
            programCategory: '3PP Titles'
        }
    }
    handleCampaignIdChange = (event) => {
        this.setState({
            campaignId: event.target.value
        })
    }

    handleProductIdsChange = event => {
        this.setState({
            productIds: event.target.value
        })
    }

    handleProgramCategoryChange = event => {
        this.setState({
            programCategory: event.target.value
        })
    }

    handleSubmit = event => {
        //alert(this.state.campaignId)

        fetch('api/SampleData/PushCampaignData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CampaignId: this.state.campaignId,
                ProductIds: this.state.productIds,
                ProgramCategory: this.state.programCategory
            })
                .then(response => {
                    console.log(response);
                }
                )
        });

   // }).then(res => alert(res.status)

        //fetch('api/SampleData/FetchCampaignData')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ forecasts: data, loading: false });
        //    });

    }

    render() {
        return (
            <div className="form-style-8">
                <h1>Product Id Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>CampaignId </label>
                        <input name="name"
                            placeholder="CampaignId" value={this.state.campaignId} onChange={this.handleCampaignIdChange} />
                    </div>
                    <div>
                        <label>ProductIds </label>
                        <textarea value={this.state.productIds} placeholder="ProductIds" onChange={this.handleProductIdsChange} />
                    </div>
                    <div>
                        <label>ProgramCategory </label>
                        <select value={this.state.programCategory} onChange={this.handleProgramCategoryChange}>
                            <option value="3PP Titles">3PP Titles </option>
                            <option value="Subs">Subs </option>
                            <option value="Gold">Gold </option>
                            <option value="Silver">Silver </option>
                        </select>
                    </div>
                    <div className="btnclass">
                        <button type="submit" > Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
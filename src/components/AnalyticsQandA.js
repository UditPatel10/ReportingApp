﻿import React, { Component } from 'react';
import './styles.css'

export class AnalyticsQandA extends Component {
    displayName = AnalyticsQandA.name

    render() {
        return (
            <div>
                <iframe 
                    src="https://msit.powerbi.com/reportEmbed?reportId=c59466c5-cb75-4875-ac7a-6995a67247ce&autoAuth=true&ctid=72f988bf-86f1-41af-91ab-2d7cd011db47&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9kZi1tc2l0LXNjdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D&filterPaneEnabled=false&navContentPaneEnabled=false&allowFullScreen=true"
                    frameborder="0" class="powerBiframe" >
                </iframe>
            </div>
        );
    }
}


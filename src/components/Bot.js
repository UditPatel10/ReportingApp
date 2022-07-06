import React, { Component } from 'react';
import './styles.css'

export class Bot extends Component {
    displayName = Bot.name

render() {
    return (
        <div>
            <iframe src="https://powerva.microsoft.com/webchat/bots/06b61717-e66a-4e30-b1c6-a2dd7c907d51"
                class="botFrame" frameborder="0"  ></iframe>
            </div>
        );
    }
}
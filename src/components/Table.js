import React, { Component } from 'react';
import './workFlow.css';

export class Table extends Component{
    render() {
      const items = this.props.items;
      return (
        <div id="Table">
          <table>
            <tbody>
              <tr>
                <th>Target %</th>
                <th>Control %</th>
                <th>Definition</th>
                <th>Supressions</th>
              </tr>
              {items.map(item => {
                return (
                  <tr>
                    <td>{item.target}</td>
                    <td>{item.control}</td>
                    <td>{item.definition}</td>
                    <td>{item.supressions}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
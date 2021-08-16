import React, {useEffect, useState} from  'react';
import '.App/css'

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[
                {
                    name: 'Anil',
                    details: [
                        {info:'8888'},
                        {info:'anil@gmail.com'},
                        {info:'noida'}
                    ]
                },
                {
                    name: 'Sam',
                    details: [
                        {info:'7777'},
                        {info:'sam@gmail.com'},
                        {info:'delhi'}
                    ]
                },
                {
                    name: 'Peter',
                    details: [
                        {info:'6666'},
                        {info:'anil@gmail.com'},
                        {info:'gurugram'}
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>Handle Nested Object React</h1>
                {
                    this.state.data.map((item) => 
                    <React.Fragment>
                        <div>{item.name}</div>
                    <ul>
                        {item.details((sub) => {
                            <li>
                                {sub.info}
                            </li>
                        })}
                    </ul>
                    </React.Fragment>
                    )
                }
            </div>
        )
    }
}
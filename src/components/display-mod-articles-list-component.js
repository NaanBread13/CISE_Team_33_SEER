import React, { Component } from 'react';
import axios from 'axios';
import Table from './table-component.js';

export default class ModDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedArticles: []
        };
    }

    componentDidMount(){
        axios.get("http://localhost:5000/articles")
            .then(res => {
                this.setState({submittedArticles: res.data })
            })
            .catch((err) => { 
                console.log(err);
            })
    }

    render(){
        return(
            <Table submittedArticles = {this.state.submittedArticles}/>
        )
    }
}
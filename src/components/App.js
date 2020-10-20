import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../styles/index.css'

import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import MemeItem from './MemeItem'
import MyMemes from './MyMemes'


class App extends Component {
    constructor() {
        super();
        this.state ={
            limit: 10,
            text0: '',
            text1: ''
        }
    }
    render() {
        return (
            <div>
                <h1><u>Generate Funny Memes</u></h1>
                <h4><i>Write your Text</i></h4>
                <MyMemes />
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Top</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            onChange={e => this.setState({text0: e.target.value})}
                        ></FormControl>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <ControlLabel>Bottom</ControlLabel>
                        {' '}
                        <FormControl 
                            type="text"
                            onChange={e => this.setState({text1: e.target.value})}
                        ></FormControl>
                    </FormGroup>
                </Form>
            {
                this.props.memes.slice(0, this.state.limit).map((meme, index) => {
                    return (
                        <MemeItem 
                            key={index}
                            text0={this.state.text0}
                            text1={this.state.text1}
                            meme={meme} />
                    )
                })
            }
            <div className="meme-btn" onClick={() => this.setState({limit: this.state.limit + 10})}>Load 10 more </div>
            </div>
        )}
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App)
import React, { Component } from "react";
// import {loadableP5 as ReactP5Wrapper} from './loadable';
import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from './sketch';

export default class App extends Component{
  render() {
    return <ReactP5Wrapper sketch={sketch}/>
  }
}

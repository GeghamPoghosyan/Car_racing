import React, {Component} from 'react';
import {ReactComponent as Car1Svg} from "./Images/car1.svg";
import {ReactComponent as Car2Svg} from "./Images/car2.svg";
import {ReactComponent as Car3Svg} from "./Images/car3.svg";
const _= require("lodash")




class Racing extends Component {
    constructor(props) {
        super(props);
        this.state = {
             left:0
        }
    }
    start = ()=>{
        this.setState({left:"90%"});

        this.car1 = _.random(1000,6000);
        this.car2 = _.random(1000,6000);
        this.car3 = _.random(1000,6000);
        this.interval = setInterval(()=>{
            if (Math.min(this.car1,this.car2,this.car3)===this.car1) alert ("The winner is car1!!!");
            if (Math.min(this.car1,this.car2,this.car3)===this.car2) alert ("The winner is car2!!!");
            if (Math.min(this.car1,this.car2,this.car3)===this.car3) alert("The winner is car3!!!");
            clearInterval(this.interval)
        },Math.max(this.car1,this.car2,this.car3));
        }
        reset = ()=>{
        this.setState({
            left:0
        })
        }

    render() {
const {left} = this.state
        return (
            <div className={"container"}>
                <div className={"car_block1"}>
                    <Car1Svg className = {"car1"} style={{
                        transition:this.car1+"ms", left}}/>
                </div>
                <div className={"car_block2"}>
                    <Car2Svg className = {"car2"} style={{
                        transition:this.car2+"ms", left}}/>
                </div>
                <div className={"car_block3"}>
                    <Car3Svg className = {"car3"} style={{
                        transition:this.car3+"ms", left}}/>
                </div><br/>
                <center><button className={"btn1"} onClick={this.start}>Start</button></center><br/>
                <center><button className={"btn2"} onClick={this.reset} >Try again</button></center>
            </div>
        );
    }
}

export default Racing;


//
// import './App.css';
// import {ReactComponent as Car1Svg}  from "./assets/img/car1.svg"
// import {ReactComponent as Car2Svg}  from "./assets/img/car2.svg"
// import {ReactComponent as Car3Svg}  from "./assets/img/car3.svg"
// import React, { Component } from 'react'
// const _ = require("lodash");
//
//
// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             left:0
//         }
//     }
//
//     start = () => {
//         this.setState({left:"90%"});
//
//         this.car1 = _.random(1000, 6000);//2000
//         this.car2 = _.random(1000, 6000);//3000
//         this.car3 = _.random(1000, 6000);//1000
//
//         this.interval = setInterval(() => {
//             if (Math.min(2000,3000,1000)===2000)
//                 alert(`The Winner is Car1`);
//             if (Math.min(this.car1,this.car2,this.car3)===this.car2)
//                 alert(`The Winner is Car2`);
//             if (Math.min(this.car1,this.car2,this.car3)===this.car3)
//                 alert(`The Winner is Car3`);
//
//             clearInterval(this.interval);
//         }, Math.max(this.car1,this.car2,this.car3));
//     }
//     handleReset = ()=> {
//         this.setState({
//             left: 0
//         });
//     }
//
//     render() {
//         const {left} = this.state;
//         return (
//             <div className="app" >
//                 <div className="car__block">
//                     <Car1Svg className="car1" style={{
//                         transition:this.car1+"ms", left}}/>
//                 </div>
//                 <div className="car__block">
//                     <Car2Svg className="car2" style={{
//                         transition:this.car2+"ms", left}}/>
//                 </div>
//                 <div className="car__block">
//                     <Car3Svg className="car3" style={{
//                         transition:this.car3+"ms",
//
//                         left}}/>
//                 </div>
//                 <button className="btn" onClick={this.start} >start</button>
//                 <button onClick={this.handleReset}>restart</button>
//             </div>
//         )
//     }
// }
// export default App;







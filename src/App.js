import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={time:new Date().toLocaleTimeString()}
  }
  componentDidMount(){  //render()後會執行一次
    const updateTime = () => {
      this.setState({time: new Date().toLocaleTimeString()})
    }
    setInterval(updateTime,1000); //每秒執行
  }
  componentDidUpdate(){ //更新後的狀態
    const {time} = this.state;
    console.log({time})
  }
  componentWillUnmount() { //Component要被移除時執行
    const {time} = this.state;
    console.log(`移除組件的時間為:${time}`)
  }
  render(){
    const {time} = this.state
    return (
      <p className="clock">{time}</p>
    );
  }
}

const removeComponent = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root')) //移除Component
}

setInterval(removeComponent,5000) //5秒後移除Component


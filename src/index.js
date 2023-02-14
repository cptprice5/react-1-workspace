import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardList from './cardlist/CardList';
import FuncCard1 from './FuncCard1/FuncCard1';
import ReactHookCard from './reacthook/ReactHookCard';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server'

const containerForReact = document.getElementById('reactContainer1');
const root = ReactDOM.createRoot(containerForReact, ()=>{
  console.log("onRecoverableError called");
}, "root1");

var userList = [
   {
     "name": "Server1",
     "age": 25
   },
   {
     "name": "Server2",
     "age": 29
   },
   {
     "name": "Server3",
     "age": 22
   },
   {
     "name": "Server4",
     "age": 30
   },
   {
     "name": "Server5",
     "age": 28
   }
 ];

var rootElem =
<div>
  <ReactHookCard/>
  <FuncCard1/>
  <CardList sourceUrl="https://run.mocky.io/v3/3a1e1488-297f-4f3d-bd28-4d3ade8fba3f" 
            userList={userList}>
      <p> Dummy child </p>
  </CardList>
</div>
//<React.StrictMode>
//<Card name="Jhon2" age="25"/>
//    <Card name="Jhon3" age="25"/>
//    <Card name="Jhon4" age="25"/>
//    <Card name="Jhon5" age="25"/>
//    <Card name="Jhon6" age="25"/>
//    <Card name="Jhon7" age="25"/>
//<Card name="Jhon1" age="25"/>
root.render(rootElem);

const htmlString = ReactDOMServer.renderToString(rootElem)
console.log("htmlString of rootElem: " + htmlString);


/*setTimeout(()=>{
  root.unmount()
}, 5000)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

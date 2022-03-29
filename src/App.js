import React from 'react';
import './App.css';

class App extends React.Component {

        state = {
            name:"circle",
            chances : 10,
            coins:800
        }


        startRotation =() => {
            this.setState({
                name:"circle start-rotate",
                chances:this.state.chances - 1,
                coins:this.state.coins - 50
            });
            if(this.state.chances === 0) {
                this.setState({
                    chances : 0,
                })
            }
            
            setTimeout(()=>{
                this.setState({
                    name:"circle start-rotate stop-rotate"
                });
            }, Math.floor(Math.random() * 10000)+1);
            // 1+ Math.random() *10
        }
    render() {
        return(
            
    <div className='main-container'>
        <div className="header">
            <div className="headerBlock">
              <img
                src="https://img1.wsimg.com/isteam/ip/688b97a6-101c-4598-884b-91027c085d69/stack%20of%20poker%20chips.png/:/cr=t:9.68%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:1280"
                alt="coins"
              />
              <p>You have <b>{this.state.coins} Coins</b></p>
              
            </div>
            <div className="headerBlock">
              <img
                src="https://pngimg.com/uploads/dice/dice_PNG49.png"
                alt="dice"
              />
              <p><b>{this.state.chances}</b> Chances left</p>
            </div>
          </div>
        <div className='circle-row'>
        <ul className={this.state.name}>
      
      <li>
          <div className="text" spellcheck="false">-100</div>
      </li>
      <li>
          <div className="text" spellcheck="false">+100</div>
      </li>
      <li>
          <div className="text" spellcheck="false">+300</div>
      </li>
      <li>
          <div className="text" spellcheck="false">-500</div>
      </li>
      <li>
          <div className="text" spellcheck="false">-250</div>
      </li>
      <li>
          <div className="text" spellcheck="false">+500</div>
      </li>
      <li>
          <div className="text" spellcheck="false">0</div>
      </li>
      <li>
          <div className="text" spellcheck="false">+1000</div>
      </li>
      <li>
          <div className="text" spellcheck="false">+200</div>
      </li>
      <li>
          <div className="text" spellcheck="false">-1000</div>
      </li>
      <li>
          <div className="text" spellcheck="false">-2000</div>
      </li>
      <li>
          <div className="text" spellcheck="false">+250</div>
      </li>
  </ul>
  <span className="btn">
       <span>Play</span>
      </span>
        </div>   
        <div className='spinning-button'>  
        <button className='spin-button' onClick={this.startRotation}>Spin</button>
        <button className='btnRed' onClick={this.showParagraph}>Leave</button>
        </div>
        <div className='costs'>Costs <b>50</b> Coins</div>
    </div>
        )
    }
}

export default App;

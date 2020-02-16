import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

<script>
    function coladd(id) {
        var table = document.getElementById(id);
        // 行を行末に追加
        var row = table.insertRow(-1);
        //td分追加
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '行を追加しました';
        cell2.innerHTML = 'この行を削除しますか？<input type="button" value=削除" id="coladd" onclick="coldel(this)">';
    }
    
</script>
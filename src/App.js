import React, {Component} from "react"
import data from './data'
import store from './store';
import { changeData } from './action/actions';

class App extends Component {
  constructor({props}){
    super(props);
    this.state = {            
      data: []
    }
  }

  componentDidMount(){      
    this.getList()                 
  }

  async getList() {                  
    await store.dispatch(changeData(data))        
    var arr = store.getState().data
    var arrResult = []   
    for(let i = 0; i < arr.length; i++){              
        var arrTemp = []
        arrTemp.push("Baris"+(i+1));
        for(let j = 1; j < arr[i].length; j++){                    
            if(arr[i][j] === arr[i][j-1]){
                arrTemp.push("before");
            }else{
                arrTemp.push(arr[i][j]);
            }
        }
        arrResult.push(arrTemp);                    
    }
    this.setState({
      data : arrResult
    })
  }
  render(){                        
    return(
      <div>              
          {this.state.data.map((data, index) => {
            return(
              <div>
              <table class="table table-bordered">                      
                <tbody>                      
                  <tr>
                    {
                      data.map((kolom, i) => {
                        return(
                          <td>{kolom}</td>
                        )
                      })
                    }
                  </tr>
                </tbody>
              </table>                  
            </div>
            )
          })}
      </div>
    )
  }
}

export default App;

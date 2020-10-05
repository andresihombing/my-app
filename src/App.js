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
        this.setState({
          data : store.getState()
        })        
    }

    render(){            
        return(
            <div>              
                {this.state.data.data}
            </div>
        )
    }
}

export default App;

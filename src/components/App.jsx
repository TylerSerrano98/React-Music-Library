import React, {Component} from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySongs/DisplaySongs";

class App extends Component {
componentDidMount() {
    this.getSongs()
}

getSongs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
        songs: response.data
    })
}

render() {
    return (
        <div class='container'>
            <h1>myMusic Library</h1>
            <div class='child'>
                {this.state.songs.length > 0 &&
                <DisplaySongs songs={this.state.songs} />
                }
            </div>
        </div>
    )
}
}


export default App;
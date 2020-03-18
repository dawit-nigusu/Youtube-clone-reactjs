import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
// import  SeachBar  from "./components/SearchBar";
// import  VideoDetail  from "./components/VideoDetail";
// import {SeachBar} from './components/SearchBar'
import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends React.Component {

  state = {
    videos:[],
    selectedVideo:null,
  }

  componentDidMount(){
    this.handleSubmit('rap music')
  }
  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC0lRWaE7mzy5ZQqFhZXOMUpJ1rYmajCUI",
        q:searchTerm,
      }
    });

   this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
  };

  onVideoSelect = (video) =>{
    this.setState({selectedVideo:video})
  }
  render() {
    const {selectedVideo, videos} = this.state
    return (
      <div className="App">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                {<SearchBar onFormSubmit={this.handleSubmit} />}
              </Grid>
              <Grid item xs={8}>
                {<VideoDetail video = {selectedVideo}/>}
              </Grid>
              <Grid item xs={4}>{<VideoList videos = {videos}  onVideoSelect = {this.onVideoSelect}/>}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;

import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";
import VideoList from "./VideoList";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper onClick = {() =>onVideoSelect(video)} style={{ display: "flex", alignItems: "center", cursor:"pointer" }}>
        <img
          style={{ margin: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant = "subtitle1"><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;

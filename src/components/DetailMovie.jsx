import React from "react";
import { useMovieDetailQuery } from "../service/tmdbApi";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const DetailMovie = () => {
  const { id } = useParams();
  const urlImg = "https://image.tmdb.org/t/p/original";
  const { data, isLoading } = useMovieDetailQuery(id);
  const loadData = isLoading ? "Loading..." : data;

  return (
    <>
      <NavBar />
      <div className="jumbotron">
        <div className="jumbotron-inner">
          <div className="jumbotron-left">
            <div className="jumbotron-title">{loadData?.original_title}</div>
            <div className="jumbotron-overview">{loadData?.overview}</div>
            <div className="jumbotron-genres">
              <span>Genres: </span>
              <span>Genres: </span>
            </div>
            <Button
              variant="outlined"
              startIcon={<PlayArrowIcon />}
              sx={{
                maxWidth: "25%",
                margin: "10px 0px 0px 20px",
                backgroundColor: "rgb(255,255,255)",
              }}
            >
              Play
            </Button>
          </div>
          <div className="jumbotron-right">
            <img
              src={`${urlImg}${loadData?.backdrop_path}`}
              alt="Jumbotron"
              className="jumbotron-detail-img"
            />
          </div>
        </div>
      </div>
    </>
  );

  // <div>{loadData.original_title}</div>
  //     <div>{loadData.overview}</div>
  //     <img src={`${urlImg}${loadData?.backdrop_path}`} alt="poster" />
};

export default DetailMovie;

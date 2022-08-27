import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TourInfo.css";
import { Container, Paper, Grid } from "@mui/material";
import { fetchData, fetchAssets } from "./controller/content";
import Header from "./Header";
import Footer from "./Footer";
import img from "./port-said.jpg";

export default function TourInfo() {
  const [getInfo, setGetInfo] = useState("");
  const [assets, setAssets] = useState(false);
  const params = useParams();
  console.log(params);

  const myHost = "https://cdn.contentful.com";
  const tourInfoData = async () => {
    const response = await fetch(
      `${myHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${params.id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log(result);
    setGetInfo(result);
  };
  useEffect(() => {
    tourInfoData();
    fetchAssets().then((assets) => {
      setAssets(assets);
    });
  }, []);

  if (!getInfo || !assets) {
    return <div className="loading">Loading...</div>;
  }
  function getAssetUrl(assetId) {
    const found = assets.items.find((e) => e.sys.id === assetId);
    // console.log(found)
    if (!found) {
      //TODO: If not found, send back some placeholder picture url
      return "";
    }
    return "https:" + found.fields.file.url;
  }

  const backgroundUrl = getAssetUrl(getInfo.fields.image.sys.id);

  return (
    <div>
      <Header />
      <Container
        className="tour"
        sx={{
          background: "#fff",
        }}
      >
        <h1>
          {getInfo.fields.city} in {getInfo.fields.country}
        </h1>
        <img
          src={backgroundUrl}
          alt=""
          style={{
            width: "inherit",
          }}
        />
        <div className="locLang">
          <p>
            <h4>Location:</h4> {getInfo.fields.location}
          </p>
          <p className="lang">
            <h4>Language spoken:</h4> {getInfo.fields.language}
          </p>
        </div>
        <div className="contentWrap">
          <div className="wrap1">
            <div>
              <h2>A bit about {getInfo.fields.city}</h2>
              <p>{getInfo.fields.tourInfo}</p>
            </div>
            <div>
              <h2>A cool place to eat from</h2>
              <p>{getInfo.fields.placeToEat}</p>
            </div>
            <div>
              <h2>Feel free to shop all you need</h2>
              <p>{getInfo.fields.placeToShop}</p>
            </div>
          </div>
          <div className="wrap2">
            <div>
              <h2>Affordable hotels to choose from</h2>
              <p>{getInfo.fields.placeToSleep}</p>
            </div>
            <div>
              <h2>Just entertain yourself</h2>
              <p>{getInfo.fields.entertainmentCentre}</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Points of Interest</h2>
          <Grid container spacing={3} className="interest">
            {getInfo.fields.tourPlaces.map((place, id) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={id}
                  sx={{
                    marginY: 2,
                  }}
                >
                  <Paper
                    elevation={7}
                    sx={{
                      height: "250px",
                    }}
                    key={id}
                  >
                    <img src={img} alt="" width="100%" height="70%" />
                    <p>{place}</p>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

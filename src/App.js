import './App.css';
import {useState, useEffect} from 'react'
import { fetchData, fetchAssets } from './controller/content';
import Header from './Header';
import { Container, Grid } from '@mui/material';
import Destinations from './Destinations';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// const myHost = "https://cdn.contentful.com/";
function App() {
  const [tourData, setTourData] = useState("")
  const [assets, setAssets] = useState(false)
  const [destinations, setDestinations] = useState("")


  useEffect(()=>{
    fetchData().then((result)=>{
      const tourHeader = result.items.filter((e)=>e.sys.contentType.sys.id === 'travelBlog')
      const destination = result.items.filter((e)=>e.sys.contentType.sys.id === 'destinations')
      console.log("Head", tourHeader)
      setTourData(tourHeader)
      console.log("destination", destination)
      setDestinations(destination)
    })
    fetchAssets().then((assets)=> {setAssets(assets)})
  }, [])
  // useEffect(()=>{
  //   fetchAssets().then((result)=>{
  //     const tourAssets = result.items.filter((e)=>e.sys.contentType.sys.id === 'assets')
  //     console.log("Assets", tourAssets)
  //     setAssets(tourAssets)
  //   })
  // }, [])

  if (!tourData || !assets) {
    return (<div>Loading ...</div>)
}

function getAssetUrl(assetId) {
  const found = assets.items.find(e => e.sys.id === assetId)
  // console.log(found)
  if (!found) {
      //TODO: If not found, send back some placeholder picture url
      return '' 
  }
  return 'https:' + found.fields.file.url
}

// const destination = tourData.filter((e)=>e.sys.contentType.sys.id === 'destinations')

  return (
    <div className="App">
        <Header />
        <div className="App-wrap">
          <Container className='cont' sx={{
            minHeight: "100vh"
          }}>
              {tourData.map((data, id)=>(
              <div key={id} className="titleWrap">
                <div className='title'>{data.fields.title}</div>
                <div className='titleDescription'><i>{data.fields.description}</i></div>
              </div>
            ))}
            <Grid container sx={{}}>
              {destinations.map((destination, id)=>{
                return (
                    <Destinations destination={destination} key={id} getAssetUrl={getAssetUrl}/>
                )
            })}
            </Grid>
          </Container>
        </div>
            <Footer />
    </div>
  );
}

export default App;

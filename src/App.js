import './App.css';
import {useState, useEffect} from 'react'
import { fetchData } from './controller/content';
import Header from './Header';
import { Container, Grid } from '@mui/material';
import Destinations from './Destinations';
import Footer from './Footer';

// const myHost = "https://cdn.contentful.com/";
function App() {
  const [tourData, setTourData] = useState("")
//   const [assets, setAssets] = useState("")
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
  }, [])

  if (!tourData) {
    return (<div>Loading ...</div>)
}


// const destination = tourData.filter((e)=>e.sys.contentType.sys.id === 'destinations')

  return (
    <div className="App">
        <Header tourData={tourData} />
        <div className="App-wrap">
          <Container>
              {tourData.map((data, id)=>(
              <div key={id} className="titleWrap">
                <div className='title'>{data.fields.title}</div>
                <div className='titleDescription'><i>{data.fields.description}</i></div>
              </div>
            ))}
            <Grid container sx={{
                marginY: 5
            }}>
              {destinations.map((destination, id)=>{
                return (
                    <Destinations destination={destination} key={id}/>
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

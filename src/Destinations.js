import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import './Destinations.css'
import { Link } from 'react-router-dom'

export default function Destinations({destination, getAssetUrl}) {
  const backgroundUrl = getAssetUrl(destination.fields.image.sys.id)
  return (
    <Grid item xs={4}>
        <Paper elevation={5} sx={{
                height: "250px",
                margin: "10px",
                backgroundImage: `url("${backgroundUrl}")`,
                backgroundSize: "cover"
            }}>
            <div className='cardText'>
                <div className='cardTextWrap'>
                    <p><i>{destination.fields.country}</i></p> <br/>
                    <Link to={`/tour-info/${destination.sys.id}`}><button className='readMore'>Read More</button></Link>
                </div>
            </div>
        </Paper>
    </Grid>
  )
}

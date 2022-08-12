import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import img from './port-said.jpg'
import './Destinations.css'
import { Link } from 'react-router-dom'

export default function Destinations({destination}) {
  return (
    <Grid item xs={4}>
        <Paper elevation={5} sx={{
                height: "250px",
                margin: "10px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover"
            }}>
            <div className='cardText'>
                <div className='cardTextWrap'>
                    <i>{destination.fields.country}</i> <br/>
                    <Link to="#"><button className='readMore'>Read More</button></Link>
                </div>
            </div>
        </Paper>
    </Grid>
  )
}

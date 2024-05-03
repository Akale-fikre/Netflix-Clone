import React from 'react'
import Row from '../Row/Row'
import requests from '../../utils/request';
const RowList = () => {
  return (
    <div>
        <Row title = "NETFLEX ORIGINALS" fetchURL = {requests.fetchNetflexOriginals} isLargeRow/>
      <Row title = "Tranding Now" fetchURL = {requests.fetchTrading}/>
      <Row title = "Top Rated Movies" fetchURL = {requests.fetchTopRatedMovies}/>
      <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies}/>
      <Row title = "Comdy Movies" fetchURL = {requests.fetchComdyMovies}/>
      <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries Movies" fetchURL = {requests.fetchDocumentaries}/>
    </div>
  )
}

export default RowList
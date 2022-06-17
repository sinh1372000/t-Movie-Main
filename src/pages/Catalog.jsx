import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/pageHeader/PageHeader';
import { category as cate } from '../api/tmdbApi.js'
import { MovieGrid } from '../components/movieGrid/MovieGrid';
function Catalog() {

  const { category } = useParams()


  return (
    <>
      <PageHeader>
        {
          category === cate.movie ? 'Movies' : 'TV Series'
        }
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}/>
        </div>
      </div>
    </>
  )
}

export default Catalog
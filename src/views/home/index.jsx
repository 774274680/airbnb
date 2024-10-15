import React, { memo, useEffect, useState } from 'react'
import hyRequest from '@/services'
const home = memo(() => {
  const [highScore, setHighScore] = useState({})
  useEffect(() => {
    hyRequest
      .get({
        url: '/home/highscore',
      })
      .then((res) => {
        // console.log(res)
        setHighScore(res)
      })
  }, [])

  return (
    <div>
      home
      <h1>{highScore.title}</h1>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {highScore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default home

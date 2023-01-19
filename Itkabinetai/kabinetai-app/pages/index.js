import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Card from '../components/card';

export const getStaticProps = async () => {
  const day = ["sekmadienis", "pirmadienis", "antradienis", "treciadienis", "ketvirtadienis", "penktadienis", "sestadienis"]
  let d =   new Date().getDay() !==0  && new Date().getDay()!==6? new Date().getDay(): 5
  console.log("diena", d)
  const res = await fetch(`http://localhost:5000/api/v1?diena=${day[d]}`)
  const data = await res.json()
  return {
    props: {
      data: data.data,
      diena: d,
      dienaTiksli: day[d],
    }
  }
}

export default function Home({diena, data, dienaTiksli}) {
  console.log("hi")
  let arr = []
  for (let i = 1; i<10; i++) {
    arr.push(data[i])
  }
  return (
    <div>
      <h1 className="title">{`Šiandien yra ${dienaTiksli}`}</h1>
      <h1 className="title">{`Šiandienos laisvi kabinetai`}</h1>
      <div className='pamokos'>
    
      {arr.map((i, index)=> <Card link={true} num={3} kab={i} diena={diena} pamoka={index+1} /> )}

      </div>
    </div>
  )
}

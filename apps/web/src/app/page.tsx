// import { ResolvingMetadata } from 'next';
import { CTA, Discover, More, OneClic, Speak, Stats, Testimonial, Testimonials, Time, Tools } from '@/sections'
import BlackFriday from '@/sections/Home/BlackFriday'
import React from 'react'

const Home = () => {
  return (
    <div>
      <BlackFriday />
       <OneClic />
      <Discover />
      <Tools />
      <Testimonial />
      <Time />
      <Speak />
      <More />
      <Stats />
      <Testimonials />
      <CTA /> 
    </div>
  )
}

export default Home
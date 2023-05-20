import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Service from '../components/Service'
import MyWork from '../components/MyWork'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Index = () => {
  return (
   <>
    {/* <!-- home section --> */}
        <Home/>
    {/* <!-- end home section --> */}

    {/* <!-- about-me section --> */}
        <About/>
    {/* <!-- end about-me --> */}

    {/* <!-- start service --> */}
        <Service/>
    {/* <!-- end service --> */}

    {/* <!-- start my-work --> */}
        <MyWork/>
    {/* <!-- end my-work --> */}

    {/* <!-- start testimonial --> */}
        <Testimonial/>
    {/* <!-- end testimonial --> */}

    {/* <!-- start blog --> */}
        <Blog/>
    {/* <!-- end blog --> */}

    {/* <!-- start contact --> */}
        <Contact/>
    {/* <!-- end contact --> */}

   </>
  )
}

export default Index
import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from "/src/assets/newsLogo.png"
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-amber-50 py-10 px-5">
          <Container>
            <div className="md:flex justify-between border-b-1 py-5 text-center md:text-left">
              <div className="">
                <div className="w-25 m-auto md:m-0">
                  <Image imgSrc={Logo} />
                </div>
                <p className='font-playfairDisplay py-5 md:py-0'>Independent voices. Honest reporting</p>
              </div>
              <div className="">
                <ul className='font-merriweather'>
                  <li><Link>About Us</Link></li>
                  <li><Link>Contact Us</Link></li>
                  <li><Link>App</Link></li>
                  <li><Link>Policy</Link></li>
                </ul>
              </div>
              <div className="">
                <ul className='font-merriweather'>
                  <li><Link>Latest News</Link></li>
                  <li><Link>National</Link></li>
                  <li><Link>International</Link></li>
                  <li><Link>Sports</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:flex justify-between items-center text-center md:text-left">
              <p className='font-merriweather font-medium py-3'>&copy;2026 All Rights Reserved by News Portal</p>
              <div className="flex gap-x-6 justify-center">
                <Link><FaFacebook /></Link>
                <Link><FaTwitter /></Link>
                <Link><FaInstagram /></Link>
                <Link><FaYoutube /></Link>
                <Link><FaPinterest /></Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer

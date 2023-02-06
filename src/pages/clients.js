import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <Header />
    {/* <SEO title="Clients" /> */}
    <h1>Clients</h1>
    <h2>I have worked with:</h2> {/* check the punctuation at the end of this */}
    {/* // TODO make a supra */}

    <h3><Link to="/clicks">Clicks</Link></h3>

    <ul class="no-bullet">
      {/* Im not entirley convinced by the line break here */}
      <li><strong><a href="http://wineram.com">WINERAM Productions</a></strong><br />
        Wine Industry Media Company based in California.
      </li>

      <li><strong><a href="http://pacrav.com">PACRAV</a></strong><br />
        Physiotherapy Studio in Nevada.</li>

      <li><strong><a href="http://katerina.co.nz">Katerina</a></strong><br />
        Fashion Boutique in Christchurch, New Zealand.</li>

      <li><strong><a href="http://snowledge.co">Snowledge</a></strong><br />
        Ski and Snowboard App startup based in California and Oregon.</li>

      <li><strong><a href="https://facebook.com/QuakeCityRumblers/">Quake City Rumblers</a></strong><br />
        Moped "Gang" in Christchurch, New Zealand.</li>

      <li><strong><a href="http://priestsheetmetal.co.nz">Priest Sheet Metal</a></strong><br />
        Fabricator in Christchurch, New Zealand.</li>

      <li><strong><a href="https://jkbinstalls.co.nz">JKB Installs</a></strong><br />
        Construction company in Christchurch, New Zealand.</li>

      <li><strong><a href="http://rollestonsquare.co.nz">Rolleston Square</a></strong><br />
        Shopping center in New Zealand.</li>

      <li><strong><a href="http://chillout.co.nz">Chill Studios</a></strong><br />
        Marketing studio and Multi mountain ski pass in New Zealand.</li>

      <li><strong>The Vintage Peddler</strong><br />
        Rental Bike agency in Christchurch, New Zealand.</li>

      <li><strong><a href="http://edgeretailacademy.com">The Edge Retail Academy</a></strong><br />
        International Jewelry Business Consultants</li>

      <li><strong><a href="http://canterburyhomekill.co.nz">Canterbury Homekill</a></strong><br />
        Butchery Service in New Zealand.</li>

      <li><strong><a href="http://karakabay.co.nz">Karaka Bay</a></strong><br />
        Homestay accommodation in New Zealand.</li>

      <li><strong><s>Yeboi</s></strong><br />
        Clothing Company in New Zealand.</li>

      <li><strong>The Lost Duck</strong><br />
        Events guide in B.C. Canada.</li>

      <li><strong><a href="http://wakeboardingnz.co.nz">Wakeboard New Zealand</a></strong><br />
        National sporting organization in New Zealand.</li>

      <li><strong><a href="http://gardenclassics.co.nz">Garden Classics</a></strong><br />
        Outdoor furniture manufacturer and distributor in Christchurch, New Zealand.</li>

    </ul>
    {/* /wp:list */}

    <hr class="wp-block-separator is-style-mega-hr" />

    <h3><a href="https://rileybathurst.com/category/camera/">Camera</a></h3>

    {/* <!-- wp:list {"className":"no-bullet"} --> */}
    <ul class="no-bullet">
      <li><strong><a href="http://snowledge.co">Snowledge</a></strong><br />
        Ski and Snowboard App startup based in California and Oregon.</li>

      <li><strong><a href="https://www.facebook.com/QuakeCityRumblers/">Quake City Rumblers</a></strong><br />
        Moped "Gang" in Christchurch, New Zealand.</li>

      <li><strong><a href="https://www.sierrawatch.org">Sierra Watch / Keep Squaw True</a></strong><br />
        Environmental Non-profit in California.</li>

      <li><strong><a href="https://skimovie.com">Matchstick Productions</a></strong><br />
        Action sports media company.</li>

      <li><strong><a href="https://earnestco.com">Earnest</a></strong><br />
        Fashion focused workwear company based in New Zealand.</li>

      <li><strong><a href="https://www.facebook.com/stasaphengineers/">Engineers</a></strong><br />
        Restaurant and Bar in Christchurch, New Zealand.</li>

      <li><strong><a href="http://redbull.com">Red Bull</a></strong><br />
        International energy drink company.</li>

      <li><strong><a href="http://chillout.co.nz">Chill Studios</a></strong><br />
        Marketing studio and Multi mountain ski pass in New Zealand.</li>

      <li><strong><a href="http://nzsponsorship.co.nz">SPUR</a></strong><br />
        Marketing and events company in New Zealand.</li>

      <li><strong>NZSnowboard.com</strong><br />
        New Zealand snowboarding news and media website.</li>

      <li><strong><a href="http://www.raywhite.com">Ray White</a></strong><br />
        International real estate company.</li>

      {/* this is where I change to double list icons - i think the single items makes more sense for sementacis but possibly a p tag with a header above */}

      <li><strong><a href="http://snowledge.co">Snowledge</a></strong></li>
      <li>Ski and Snowboard App startup based in California and Oregon.</li>

      <li><strong><a href="http://wineram.com">WINERAM Productions</a></strong></li>
      <li>Wine Industry Media Company based in California.</li>

      <li><strong><a href="http://www.moonshineink.com">Moonshine Ink</a></strong></li>
      <li>Local newspaper in California.</li>

      <li><strong><a href="https://www.macpac.co.nz">Macpac</a></strong></li>
      <li>Wilderness equipment company based in New Zealand.</li>

      <li><strong><a href="http://thewireless.co.nz">The Wireless</a></strong></li>
      <li>New Zealand online magazine.</li>

      <li><strong><a href="https://www.facebook.com/QuakeCityRumblers/">Quake City Rumblers</a></strong></li>
      <li>Moped "Gang" in Christchurch, New Zealand.</li>

      <li><strong><a href="https://skimovie.com">Matchstick Productions</a></strong></li>
      <li>Action sports media company.</li>

      <li><strong><a href="https://www.monsterenergy.com">Monster Energy</a></strong></li>
      <li>International energy drink company.</li>

      <li><strong><a href="http://frontside.co.nz">Frontside Media</a></strong></li>
      <li>New Zealand marketing and media company.</li>

      <li><strong><a href="http://chillout.co.nz">Chill Studios</a></strong></li>
      <li>Marketing studio and Multi mountain ski pass in New Zealand.</li></ul>
    <Footer />
  </>
)

export default IndexPage

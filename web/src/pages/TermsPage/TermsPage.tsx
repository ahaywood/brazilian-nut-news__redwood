import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'

const TermsPage = () => {
  return (
    <div>
      <MetaTags title="Terms and Conditions" description="Terms page" />

      <h1 className="pt-6 text-[375px] leading-[295px] text-cinder">
        Terms <span className="outline">& Conditions</span>
      </h1>

      <div className="page-grid">
        <div className="col-span-6 col-start-4 mb-[100px]">
          <h2>Heading</h2>
          <p>
            Travelling the universe at this scale seems as important and amazing
            to me as travelling to a distant star. The igniting matchstick image
            has so much going on!
          </p>

          <p>
            One cringe though ... the images all seem excessively post-processed
            to me. Unrealistically saturated, contrasted, sharpened, etc. The
            colour, especially, just seems over the top and I feel like seeing
            these microscopic subjects enlarged is mind-blowing enough without
            the postprocessing distraction which makes it seem less real.
          </p>

          <p>Anyways, amazing images! Thanks!</p>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default TermsPage

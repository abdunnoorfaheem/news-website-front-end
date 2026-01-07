import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Featured from "/src/assets/featuredImg.avif"

const NewsDetails = () => {
  return (
    <>
      <section>
        <Container>
          <div className="">
            <h2 className='md:text-3xl text-xl font-playfairDisplay font-bold'>Man City's Gvardiol out with broken leg</h2>
            <div className="flex gap-x-2 py-2 font-medium font-merriweather">
              <h4>Sports </h4>
              <h5>jan 2, 2026</h5>
            </div>
            <div className="w-[100%]">
              <Image imgSrc={Featured} />
            </div>
            <div className="">
              <h3 className='md:text-2xl font-playfairDisplay font-bold md:w-[700px] py-3'>Manchester City have confirmed defender Josko Gvardiol suffered a broken leg in Sunday's 1-1 draw with Chelsea at the Etihad Stadium.</h3>
              <p className='w-[100%] md:text-xl text-sm font-merriweather py-5'>Gvardiol was one of two City centre-backs who went off injured in the second half, along with Ruben Dias, before Enzo Fernandez scored a stoppage-time equaliser for the visitors.

                Google News LinkFor all latest news, follow The Daily Star's Google News channel.
                The draw left second-placed City six points behind Premier League leaders Arsenal.

                City, announcing Gvardiol sustained a tibial fracture to his right leg, City added in a statement issued on Monday: "The defender will have surgery later this week and assessment remains ongoing to ascertain the full extent of the injury and expected prognosis."


                Before the extent of Croatia international Gvardiol's injury was confirmed, City manager Pep Guardiola said it "doesn't look good" for either player.

                The extent of Dias' injury has yet to be made public.

                Their absences add to City's problems in defence, with John Stones out for the past month with a thigh injury and Rayan Ait-Nouri away with Algeria at the Africa Cup of Nations.


                City midfielder Nico Gonzalez also missed the Chelsea game and Guardiola is also without Savinho, Oscar Bobb, Mateo Kovacic and Omar Marmoush for Wednesday's clash at home to Brighton.

                Better news for City came with the return of Rodri, who played the full 90 minutes against Chelsea in what was his first start since October.

                The influential midfielder suffered several setbacks, the latest a hamstring problem, while attempting to recover from the severe knee injury that ruled him out for much of last season.

                "It's been a terrible, terrible time for me," said the Spain international. "Everything that comes right now is a gift, every minute that I've been on the pitch, it's a joy for me.

                "Thank you to God for giving me this second opportunity and to enjoy my profession and recover my smile."</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NewsDetails

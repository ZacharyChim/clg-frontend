import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { fetchSingleLang, richTextReducer } from '../../../lib/utils'
import contactTop from '../../../public/contact-top.png'
import caseTop from '../../../public/case-top.png'
import Contact from '../../../components/Contact'
import ImageArticle from '../../../components/ImageArticle'
import curve from '/public/small-curve.png'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  const curveWidth = 33
  const curveHeight = 10
  const hrm = await fetchSingleLang('hrm', lng)
  let hrmText = hrm

  const cloud =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.cloud_solutions.data.attributes.url
  const cloudWidth = hrm.cloud_solutions.data.attributes.width
  const cloudHeight = hrm.cloud_solutions.data.attributes.height

  const video = hrm.video_url

  const aboutTitle = hrmText.about_title

  const solution1Title = hrmText.solution1_title
  const solution1Content = richTextReducer(hrmText.solution1_content)
  const solution1Obj = {
    title: solution1Title,
    text: solution1Content,
  }
  const solution1Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    hrm.solution1_number.data.attributes.url
  const solution1NumberWidth = hrm.solution1_number.data.attributes.width
  const solution1NumberHeight = hrm.solution1_number.data.attributes.height
  const solution1NumberObj = {
    url: solution1Number,
    width: solution1NumberWidth,
    height: solution1NumberHeight,
  }
  const solution1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.solution1_image.data.attributes.url
  const solution1ImageWidth = hrm.solution1_image.data.attributes.width
  const solution1ImageHeight = hrm.solution1_image.data.attributes.height
  const solution1ImageObj = {
    url: solution1Image,
    width: solution1ImageWidth,
    height: solution1ImageHeight,
  }

  const solution2Title = hrmText.solution2_title
  const solution2Content = richTextReducer(hrmText.solution2_content)
  const solution2Obj = {
    title: solution2Title,
    text: solution2Content,
  }
  const solution2Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    hrm.solution2_number.data.attributes.url
  const solution2NumberWidth = hrm.solution2_number.data.attributes.width
  const solution2NumberHeight = hrm.solution2_number.data.attributes.height
  const solution2NumberObj = {
    url: solution2Number,
    width: solution2NumberWidth,
    height: solution2NumberHeight,
  }
  const solution2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.solution2_image.data.attributes.url
  const solution2ImageWidth = hrm.solution2_image.data.attributes.width
  const solution2ImageHeight = hrm.solution2_image.data.attributes.height
  const solution2ImageObj = {
    url: solution2Image,
    width: solution2ImageWidth,
    height: solution2ImageHeight,
  }

  const solution3Title = hrmText.solution3_title
  const solution3Content = richTextReducer(hrmText.solution3_content)
  const solution3Obj = {
    title: solution3Title,
    text: solution3Content,
  }
  const solution3Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    hrm.solution3_number.data.attributes.url
  const solution3NumberWidth = hrm.solution3_number.data.attributes.width
  const solution3NumberHeight = hrm.solution3_number.data.attributes.height
  const solution3NumberObj = {
    url: solution3Number,
    width: solution3NumberWidth,
    height: solution3NumberHeight,
  }
  const solution3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.solution3_image.data.attributes.url
  const solution3ImageWidth = hrm.solution3_image.data.attributes.width
  const solution3ImageHeight = hrm.solution3_image.data.attributes.height
  const solution3ImageObj = {
    url: solution3Image,
    width: solution3ImageWidth,
    height: solution3ImageHeight,
  }

  const solution4Title = hrmText.solution4_title
  const solution4Content = richTextReducer(hrmText.solution4_content)
  const solution4Obj = {
    title: solution4Title,
    text: solution4Content,
  }
  const solution4Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    hrm.solution4_number.data.attributes.url
  const solution4NumberWidth = hrm.solution4_number.data.attributes.width
  const solution4NumberHeight = hrm.solution4_number.data.attributes.height
  const solution4NumberObj = {
    url: solution4Number,
    width: solution4NumberWidth,
    height: solution4NumberHeight,
  }
  const solution4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.solution4_image.data.attributes.url
  const solution4ImageWidth = hrm.solution4_image.data.attributes.width
  const solution4ImageHeight = hrm.solution4_image.data.attributes.height
  const solution4ImageObj = {
    url: solution4Image,
    width: solution4ImageWidth,
    height: solution4ImageHeight,
  }

  const solution5Title = hrmText.solution5_title
  const solution5Content = richTextReducer(hrmText.solution5_content)
  const solution5Obj = {
    title: solution5Title,
    text: solution5Content,
  }
  const solution5Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    hrm.solution5_number.data.attributes.url
  const solution5NumberWidth = hrm.solution5_number.data.attributes.width
  const solution5NumberHeight = hrm.solution5_number.data.attributes.height
  const solution5NumberObj = {
    url: solution5Number,
    width: solution5NumberWidth,
    height: solution5NumberHeight,
  }
  const solution5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.solution5_image.data.attributes.url
  const solution5ImageWidth = hrm.solution5_image.data.attributes.width
  const solution5ImageHeight = hrm.solution5_image.data.attributes.height
  const solution5ImageObj = {
    url: solution5Image,
    width: solution5ImageWidth,
    height: solution5ImageHeight,
  }

  const solution6Title = hrmText.solution6_title
  const solution6Content = richTextReducer(hrmText.solution6_content)
  const solution6Obj = {
    title: solution6Title,
    text: solution6Content,
  }
  const solution6Number =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    hrm.solution6_number.data.attributes.url
  const solution6NumberWidth = hrm.solution6_number.data.attributes.width
  const solution6NumberHeight = hrm.solution6_number.data.attributes.height
  const solution6NumberObj = {
    url: solution6Number,
    width: solution6NumberWidth,
    height: solution6NumberHeight,
  }
  const solution6Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.solution6_image.data.attributes.url
  const solution6ImageWidth = hrm.solution6_image.data.attributes.width
  const solution6ImageHeight = hrm.solution6_image.data.attributes.height
  const solution6ImageObj = {
    url: solution6Image,
    width: solution6ImageWidth,
    height: solution6ImageHeight,
  }

  const functions = hrmText.functions

  const function1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function1_image.data.attributes.url
  const function1ImageWidth = hrm.function1_image.data.attributes.width
  const function1ImageHeight = hrm.function1_image.data.attributes.height
  const function1Title = hrmText.function1_title
  const function1Desc = hrmText.function1_desc

  const function2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function2_image.data.attributes.url
  const function2ImageWidth = hrm.function2_image.data.attributes.width
  const function2ImageHeight = hrm.function2_image.data.attributes.height
  const function2Title = hrmText.function2_title
  const function2Desc = hrmText.function2_desc

  const function3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function3_image.data.attributes.url
  const function3ImageWidth = hrm.function3_image.data.attributes.width
  const function3ImageHeight = hrm.function3_image.data.attributes.height
  const function3Title = hrmText.function3_title
  const function3Desc = hrmText.function3_desc

  const function4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function4_image.data.attributes.url
  const function4ImageWidth = hrm.function4_image.data.attributes.width
  const function4ImageHeight = hrm.function4_image.data.attributes.height
  const function4Title = hrmText.function4_title
  const function4Desc = hrmText.function4_desc

  const function5Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function5_image.data.attributes.url
  const function5ImageWidth = hrm.function5_image.data.attributes.width
  const function5ImageHeight = hrm.function5_image.data.attributes.height
  const function5Title = hrmText.function5_title
  const function5Desc = hrmText.function5_desc

  const function6Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function6_image.data.attributes.url
  const function6ImageWidth = hrm.function6_image.data.attributes.width
  const function6ImageHeight = hrm.function6_image.data.attributes.height
  const function6Title = hrmText.function6_title
  const function6Desc = hrmText.function6_desc
  const function7Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function7_image.data.attributes.url
  const function7ImageWidth = hrm.function7_image.data.attributes.width
  const function7ImageHeight = hrm.function7_image.data.attributes.height
  const function7Title = hrmText.function7_title
  const function7Desc = hrmText.function7_desc
  const function8Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.function8_image.data.attributes.url
  const function8ImageWidth = hrm.function8_image.data.attributes.width
  const function8ImageHeight = hrm.function8_image.data.attributes.height
  const function8Title = hrmText.function8_title
  const function8Desc = hrmText.function8_desc

  const tasks = hrmText.tasks

  const task1Content = richTextReducer(hrmText.task1_content)
  const task1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.task1_image.data.attributes.url
  const task1ImageWidth = hrm.task1_image.data.attributes.width
  const task1ImageHeight = hrm.task1_image.data.attributes.height

  const task2Content = richTextReducer(hrmText.task2_content)
  const task2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.task2_image.data.attributes.url
  const task2ImageWidth = hrm.task2_image.data.attributes.width
  const task2ImageHeight = hrm.task2_image.data.attributes.height

  const why = hrmText.why

  var whyImage =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.why_image.data.attributes.url
  var whyImageWidth = hrm.why_image.data.attributes.width
  var whyImageHeight = hrm.why_image.data.attributes.height

  const reason1 = hrmText.reason1
  const reason1Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.reason1_image.data.attributes.url
  const reason1ImageWidth = hrm.reason1_image.data.attributes.width
  const reason1ImageHeight = hrm.reason1_image.data.attributes.height

  const reason2 = hrmText.reason2
  const reason2Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.reason2_image.data.attributes.url
  const reason2ImageWidth = hrm.reason2_image.data.attributes.width
  const reason2ImageHeight = hrm.reason2_image.data.attributes.height

  const reason3 = hrmText.reason3
  const reason3Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.reason3_image.data.attributes.url
  const reason3ImageWidth = hrm.reason3_image.data.attributes.width
  const reason3ImageHeight = hrm.reason3_image.data.attributes.height

  const reason4 = hrmText.reason4
  const reason4Image =
    process.env.NEXT_PUBLIC_STRAPI_URL + hrm.reason4_image.data.attributes.url
  const reason4ImageWidth = hrm.reason4_image.data.attributes.width
  const reason4ImageHeight = hrm.reason4_image.data.attributes.height

  const contactUs = hrmText.contact_us

  return (
    <>
      <section className='items-left mx-auto mb-20 mt-10 flex max-w-4xl flex-col'>
        <Image src={cloud} alt='' width={cloudWidth} height={cloudHeight} />
        <h3 className='my-4 text-left text-2xl font-bold text-darkBlue'>
          {aboutTitle}
        </h3>
        <iframe
          id='ytplayer'
          width='100%'
          height='560'
          src={`https://www.youtube.com/embed/${video}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>

        <ImageArticle
          aboutImage={solution1ImageObj}
          aboutArticle={solution1Obj}
          tagImage={solution1NumberObj}
          imageLeft={true}
        />
        <ImageArticle
          aboutImage={solution2ImageObj}
          aboutArticle={solution2Obj}
          tagImage={solution2NumberObj}
          imageLeft={false}
        />
        <ImageArticle
          aboutImage={solution3ImageObj}
          aboutArticle={solution3Obj}
          tagImage={solution3NumberObj}
          imageLeft={true}
        />
        <ImageArticle
          aboutImage={solution4ImageObj}
          aboutArticle={solution4Obj}
          tagImage={solution4NumberObj}
          imageLeft={false}
        />
        <ImageArticle
          aboutImage={solution5ImageObj}
          aboutArticle={solution5Obj}
          tagImage={solution5NumberObj}
          imageLeft={true}
        />
        <ImageArticle
          aboutImage={solution6ImageObj}
          aboutArticle={solution6Obj}
          tagImage={solution6NumberObj}
          imageLeft={false}
        />
      </section>

      <section className='w-full bg-veryLightBlue'>
        <Image src={caseTop} alt='' />
        <div className='mx-auto max-w-6xl px-5 pb-20 text-left'>
          <h3 className='mt-20 text-center text-4xl font-bold text-darkBlue'>
            {functions}
          </h3>
          <div className='grid grid-cols-1 gap-8 text-center md:grid-cols-4'>
            <div className='mt-4 flex flex-col space-y-4 p-4'>
              <div className='mt-4 self-center pb-2'>
                <Image
                  src={function1Image}
                  alt=''
                  width={function1ImageWidth}
                  height={function1ImageHeight}
                  className='w-36 object-contain md:mt-12'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function1Title}</h5>
              <p className='text-sm'>{function1Desc}</p>
            </div>
            <div className='flex flex-col space-y-4 p-4'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={function2Image}
                  alt=''
                  width={function2ImageWidth}
                  height={function2ImageHeight}
                  className='w-36 object-contain md:mt-12'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function2Title}</h5>
              <p className='text-sm'>{function2Desc}</p>
            </div>
            <div className='flex flex-col space-y-4 p-4'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={function3Image}
                  alt=''
                  width={function3ImageWidth}
                  height={function3ImageHeight}
                  className='w-36 object-contain md:mt-12'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function3Title}</h5>
              <p className='text-sm'>{function3Desc}</p>
            </div>
            <div className='flex flex-col space-y-4 p-4'>
              <div className='mt-7 self-center pb-2'>
                <Image
                  src={function4Image}
                  alt=''
                  width={function4ImageWidth}
                  height={function4ImageHeight}
                  className='w-32 object-fill'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function4Title}</h5>
              <p className='text-sm'>{function4Desc}</p>
            </div>
            <div className='flex flex-col space-y-4 p-4'>
              <div className='self-center pb-2'>
                <Image
                  src={function5Image}
                  alt=''
                  width={function5ImageWidth}
                  height={function5ImageHeight}
                  className='w-36 object-contain'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function5Title}</h5>
              <p className='text-sm'>{function5Desc}</p>
            </div>
            <div className='flex flex-col space-y-4 p-4'>
              <div className='self-center pb-4'>
                <Image
                  src={function6Image}
                  alt=''
                  width={function6ImageWidth}
                  height={function6ImageHeight}
                  className='w-40 object-contain'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function6Title}</h5>
              <p className='text-sm'>{function6Desc}</p>
            </div>
            <div className='flex flex-col space-y-4 p-4'>
              <div className='self-center pb-2'>
                <Image
                  src={function7Image}
                  alt=''
                  width={function7ImageWidth}
                  height={function7ImageHeight}
                  className='w-36 object-contain'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function7Title}</h5>
              <p className='text-sm'>{function7Desc}</p>
            </div>
            <div className='flex flex-col space-y-2 p-4'>
              <div className='self-center pb-2'>
                <Image
                  src={function8Image}
                  alt=''
                  width={function8ImageWidth}
                  height={function8ImageHeight}
                  className='w-36 object-contain'
                />
              </div>

              <h5 className='text-md text-darkBlue'>{function8Title}</h5>
              <p className='text-sm'>{function8Desc}</p>
            </div>
          </div>
        </div>
      </section>
      <Image src={contactTop} alt='' />

      <section className='mx-auto flex flex-col items-center bg-curveLine bg-contain bg-[center_top_12rem]  bg-no-repeat'>
        <h3 className='mt-20 max-w-lg text-center text-4xl font-bold text-darkBlue'>
          {tasks}
        </h3>
        <div className='max-w-5xl'>
          <div className='mx-auto text-center'>
            <div className='flex flex-col items-center gap-8 py-10 md:flex-row'>
              <div className='px-10 md:w-1/2'>
                <Image
                  alt=''
                  src={task1Image}
                  width={task1ImageWidth}
                  height={task1ImageHeight}
                />
              </div>
              <div className='mx-4 text-left md:w-1/2'>
                <article
                  className='space-y-4 leading-7 text-darkBrown'
                  dangerouslySetInnerHTML={{ __html: task1Content }}
                ></article>
              </div>
            </div>

            <div className='mt-14 flex flex-col items-center gap-8 py-10 md:flex-row'>
              <div className='mx-4 text-left md:w-1/2'>
                <article
                  className='space-y-4 leading-7 text-darkBrown'
                  dangerouslySetInnerHTML={{ __html: task2Content }}
                ></article>
              </div>
              <div className='px-10 md:w-1/2'>
                <Image
                  alt=''
                  src={task2Image}
                  width={task2ImageWidth}
                  height={task2ImageHeight}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto mb-20 flex max-w-6xl flex-col items-center'>
        <h3 className='my-20 text-center text-4xl font-bold text-darkBlue'>
          {why}
        </h3>
        <Image
          src={whyImage}
          alt=''
          width={whyImageWidth}
          height={whyImageHeight}
          quality='100'
          className='max-w-5xl pb-2'
        />
        <div className='flex max-w-5xl flex-col md:flex-row'>
          <div className='mt-10 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason1Image}
                alt=''
                width={reason1ImageWidth}
                height={reason1ImageHeight}
                quality='100'
                className='w-20 pb-2'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <p className='text-center text-sm text-darkBrown'>{reason1}</p>
            </div>
          </div>

          <div className='mt-10 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason2Image}
                alt=''
                width={reason2ImageWidth}
                height={reason2ImageHeight}
                quality='100'
                className='mb-2 w-20'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <article
                className='text-center text-sm text-darkBrown'
                dangerouslySetInnerHTML={{ __html: reason2 }}
              ></article>
            </div>
          </div>

          <div className='mt-12 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason3Image}
                alt=''
                width={reason3ImageWidth}
                height={reason3ImageHeight}
                quality='100'
                className='w-20 pb-2'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <p className='text-center text-sm text-darkBrown'>{reason3}</p>
            </div>
          </div>

          <div className='mt-12 flex flex-col p-4 md:w-1/4'>
            <div className='mt-7 flex flex-col items-center pb-2'>
              <Image
                src={reason4Image}
                alt=''
                width={reason4ImageWidth}
                height={reason4ImageHeight}
                quality='100'
                className='mb-2 w-20'
              />
              <Image
                alt=''
                src={curve}
                width={curveWidth}
                height={curveHeight}
                className='mx-auto my-6'
              />
              <Link href='/xero' className='flex items-center'>
                <p className='text-center text-sm text-darkBrown'>{reason4}</p>
              </Link>
            </div>
          </div>
        </div>
        <Contact contactUs={contactUs} lng={lng} />
      </section>
    </>
  )
}

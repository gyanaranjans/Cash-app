import Image from 'next/image'
import Phone from '../assets/images/intro-phone 1.png'
import Cube from '../assets/images/intro-cube 1.png'
import Cubes from '../assets/images/intro-cubes 1.png'
import Pillar from '../assets/images/intro-pillar 1.png'
import Stairs from '../assets/images/intro-stairs 1.png'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-black bg-hero-pattern bg-no-repeat bg-center bg-cover h-screen overflow-hidden font-extrabold text-white text-[30vw] md:text-[193px] text-center tracking-[0.5px] leading-[166px]">
    <div className=' h-screen overflow-hidden '>
        <div className=' flex justify-between xl:pl-[240px] xl:pr-[175px] 2xl:pr-[240px] lg:px-[100px] md:px-[20px] px-10'>
<Image src={Cube} className=' md:w-[100px] md:h-[100px] w-[80px] h-[80px] md:mt-0 mt-5 animate-slideleft' alt="" />
<Image src={Stairs} className=' md:w-[230px] md:h-[260px] md:mt-0 mt-10  w-[170px] h-[170px] animate-slideright' alt="" />
        </div>
        <div className=' absolute bottom-0 w-screen'>
        <div className='mt-[90px] md:pl-5 pl-7 flex justify-between xl:pl-[240px] lg:pr-[30px] xl:pr-[100px] 2xl:pr-[240px] 2xl:pl-[240px] lg:px-[100px] md:px-[20px] px-0'>
<Image src={Cubes} className='md:mt-4 mt-[180px]  md:w-[270px] md:h-[240px]  w-[170px] h-[150px] animate-slideleft' alt="" />
<div className=' animate-slideright overflow-hidden'>
<Image src={Pillar} className='rotate-[290deg] md:rotate-0 md:mr-[40px] lg:mr-[90px] mr-[-100px] md:ml-0 ml-[100px]  md:mt-0 mt-[55px] lg:w-[350px] lg:h-[290px] md:w-[320px] md:h-[250px] w-[300px] h-[250px]' alt="" />
</div>

        </div>
        </div>

        <div style={{transform:'translate(-50%,-50%)',zIndex:99}} className=' w-1/4 mt-6 absolute md:ml-0 ml-[-20px] left-[50%] top-[50%]'>
        <Image className=' min-w-[200px] md:mt-0 mt-4' src={Phone} alt="" />
        </div>
        <div style={{transform:'translate(-50%,-50%)',zIndex:9}} className='absolute left-[50%] top-[50%] text-center cash'>
       <p style={{fontWeight:800}} className=' cursor-pointer font-bold  xl:text-[180px] lg:text-[150px] md:text-[100px] text-[90px] xl:mt-[-200px] lg:mt-[-125px] md:mt-[-80px] mt-[-50px] text-white animate-slideleft hover:scale-110 transition-all duration-200'>CASH</p>
        </div>
        <div style={{transform:'translate(-50%,-50%)',zIndex:999}} className='absolute left-[50%] top-[50%] text-center'>
        <p  style={{zIndex:9,fontWeight:800}} className='app cursor-pointer font-bold xl:text-[180px] lg:text-[150px] md:text-[100px] text-[90px] md:mt-[130px] mt-[110px] text-white animate-slideright hover:scale-110 transition-all duration-200'>APP</p>
        </div>
        
      
    </div>
    </section>
  )
}

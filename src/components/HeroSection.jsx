import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-6 lg:mt-20'>
                <h1 className='text-4xl lg:text-6xl font-bold text-center'>VirtualR build tools for developers   <br />
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        myjobb.ai
                    </span>
                </h1>
                <p className='text-lg lg:text-2xl text-center mt-4 lg:mt-6'>The best virtual reality experience</p>
                <p className='text-lg lg:text-2xl text-center mt-4 lg:mt-6'></p>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a
                        href="#"
                        className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                    >
                        Start for free
                    </a>
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Documentation
                    </a>

                </div>

                <div className="mt-10 flex justify-center">

                    
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
                        <source src={video1} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
                        <source src={video2} type="video/mp4" />
                    </video>

                </div>

            </div>
        </>
    )
}

export default HeroSection
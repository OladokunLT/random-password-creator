import React, { useState } from 'react'

// Card - learning Props
export const Card = ({username = "username", country="Libya", profileImg}) => (
  <>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={profileImg} alt="" width="384" height="512" />
      <div className="pt-6 md:p-8  text-white text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {username}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            {country}
          </div>
        </figcaption>
      </div>
    </figure>
  </>
)

// Color changer app - learning states
export const BgColorChanger = () => {
  const [color, setColor] = useState("olive")
  // the function changeColor works but not neccessary
  // function changeColor(color){
  //     setColor(color)
  // }
  return (
    <>
    <p className=''>Learn State - Color changer app</p>
    <div className='relative h-32 w-screen flex justify-center' style={{backgroundColor: color}}>
      <div className="absolute bottom-4 p-2 bg-white rounded-xl flex gap-4">
        <button onClick={() => setColor("blue")} className='bg-blue-300 px-4 rounded'>Blue</button>
        <button onClick={() => setColor('purple')} className='bg-purple-500 px-4 rounded'>Purple</button>
        <button onClick={() => setColor('green')} className='bg-green-500 px-4 rounded'>Green</button>
      </div>
    </div>
    </>
  )
}


export const PasswordGenerator = () => {
  return (
    <div>Password generator</div>
  )
}




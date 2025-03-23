import React from 'react'

const ButtonComponents = ({text}) => {
  return (
    <>
        <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            {text}
        </button>
    </>
  )
}

export default ButtonComponents
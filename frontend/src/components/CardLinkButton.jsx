import React from 'react'
const CardLinkButton = ({text, card}) => {
  return (
    <>
        <a
                href={card.link}
                className="inline-flex items-center px-8 py-3 text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                {text}
              </a>
    </>
  )
}

export default CardLinkButton
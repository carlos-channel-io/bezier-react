import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgGifIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 8.5a.5.5 0 0 1-.5.5H16v2h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H16v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1Zm-7 8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v9Zm-3-8a.5.5 0 0 1-.5.5H6v6h2v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 .5.5v1ZM20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
      />
    </svg>
  )
}

export default createIcon(SvgGifIcon)

import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgChannelBtnIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.998 17.561c.918 0 1.811-.225 2.622-.66.335-.18.737-.19 1.09-.04l1.594.684c.07.03.148.015.203-.039a.178.178 0 0 0 .038-.201l-.681-1.591a1.254 1.254 0 0 1 .036-1.094 5.533 5.533 0 0 0 .618-3.319c-.307-2.485-2.338-4.518-4.816-4.82a5.552 5.552 0 0 0-4.634 1.586 5.55 5.55 0 0 0-1.586 4.635c.301 2.477 2.334 4.51 4.82 4.816.23.029.462.043.696.043Zm-2.779-5.56c0 .95.254 1.393.863 1.393.608 0 .861-.443.861-1.394 0-.95-.253-1.394-.861-1.394-.61 0-.863.443-.863 1.394Zm4.7 1.393c-.61 0-.862-.443-.862-1.394 0-.95.253-1.394.862-1.394s.862.443.862 1.394c0 .952-.253 1.394-.862 1.394Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11.9C1.054 5.872 5.959 1 12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11C5.959 23 1.054 18.128 1 12.1v-.2Zm10.998 7.25c-.299 0-.596-.018-.891-.055-3.21-.396-5.813-2.998-6.203-6.201a7.139 7.139 0 0 1 2.04-5.95 7.14 7.14 0 0 1 5.95-2.04c3.203.39 5.805 2.994 6.2 6.203a7.122 7.122 0 0 1-.714 4.112l.625 1.459c.288.668.14 1.437-.375 1.952a1.77 1.77 0 0 1-1.952.376l-1.459-.626a7.105 7.105 0 0 1-3.221.77Z"
      />
    </svg>
  )
}

export default createIcon(SvgChannelBtnIcon)

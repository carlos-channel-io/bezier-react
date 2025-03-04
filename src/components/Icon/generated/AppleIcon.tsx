import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgAppleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.832 1s.272 1.628-1.033 3.197c-1.394 1.675-2.979 1.4-2.979 1.4s-.297-1.317.872-2.857C14.006 1.01 15.832 1 15.832 1Zm3.637 6.81s-2.163 1.105-2.163 3.789c0 3.027 2.694 4.07 2.694 4.07s-1.883 5.302-4.427 5.302c-.577 0-1.09-.192-1.611-.387-.534-.2-1.075-.401-1.698-.401-.695 0-1.388.25-2.005.475-.497.18-.945.342-1.306.342-2.322 0-5.257-5.03-5.257-9.071 0-3.977 2.484-6.063 4.814-6.063.88 0 1.646.295 2.288.542.462.178.86.33 1.19.33.264 0 .618-.142 1.047-.315.669-.27 1.522-.613 2.517-.613 2.81 0 3.917 2 3.917 2Z"
      />
    </svg>
  )
}

export default createIcon(SvgAppleIcon)

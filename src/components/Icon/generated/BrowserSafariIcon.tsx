import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgBrowserSafariIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM9.286 14.716l3.63-1.8.007-.014-1.438-1.458-.386-.366-.013.007-1.8 3.631Zm1.194-4.586 6.124-3.036c.193-.096.399.11.303.302l-3.035 6.124a.78.78 0 0 1-.35.35l-6.123 3.036a.226.226 0 0 1-.303-.303l3.035-6.124a.78.78 0 0 1 .349-.349Z"
      />
    </svg>
  )
}

export default createIcon(SvgBrowserSafariIcon)

import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgIosIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.716c.295.112.553.2.773.2.205 0 .48-.111.814-.246.52-.21 1.183-.476 1.955-.476 2.185 0 3.045 1.554 3.045 1.554s-1.681.86-1.681 2.946c0 2.353 2.094 3.162 2.094 3.162s-1.464 4.121-3.441 4.121c-.448 0-.847-.149-1.251-.3-.415-.154-.835-.311-1.32-.311-.541 0-1.08.195-1.56.369-.385.14-.733.265-1.014.265-.062 0-.123-.004-.186-.013A2.022 2.022 0 0 1 13 22H5a2 2 0 0 1-2-2V4Zm10 6.237c-1.79.041-3.673 1.661-3.673 4.713 0 1.33.41 2.799 1.019 4.05H5V5h8v5.237Zm4.957-1.296c1.015-1.22.804-2.485.804-2.485s-1.42.006-2.442 1.352c-.908 1.197-.676 2.222-.676 2.222s1.231.213 2.314-1.09Z"
      />
    </svg>
  )
}

export default createIcon(SvgIosIcon)

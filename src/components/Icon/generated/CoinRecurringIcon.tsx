import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCoinRecurringIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M21.5 9.25h-5.627a.5.5 0 0 1-.353-.854l2.093-2.093A7.948 7.948 0 0 0 12 4c-4.411 0-8 3.589-8 8H2C2 6.486 6.486 2 12 2a9.933 9.933 0 0 1 7.027 2.889l2.119-2.119a.5.5 0 0 1 .854.353V8.75a.5.5 0 0 1-.5.5Zm-19 5.5h5.627a.5.5 0 0 1 .353.854l-2.093 2.093A7.946 7.946 0 0 0 12 20c4.411 0 8-3.589 8-8h2c0 5.514-4.486 10-10 10a9.93 9.93 0 0 1-7.027-2.889L2.854 21.23A.5.5 0 0 1 2 20.877V15.25a.5.5 0 0 1 .5-.5Zm9.992-3.806 1.115.444c1.104.444 1.763 1.187 1.763 2.447 0 1.227-.86 2.32-2.37 2.668V18h-2v-1.474c-.856-.17-1.7-.56-2.37-1.18l1.21-1.476c.637.54 1.464.912 2.172.912.792 0 1.163-.3 1.163-.779 0-.48-.427-.66-1.107-.944l-.152-.064-1.14-.48c-.935-.37-1.81-1.15-1.81-2.446 0-1.155.802-2.126 2.034-2.514V6h2v1.45c.773.15 1.526.515 2.107 1.096L14.039 9.89c-.588-.444-1.14-.684-1.835-.684-.66 0-1.068.264-1.068.744 0 .466.504.662 1.229.946l.127.05Z"
      />
    </svg>
  )
}

export default createIcon(SvgCoinRecurringIcon)

/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import { LayoutStateContext } from 'Layout/LayoutContext'

function useLayoutState() {
  const state = useContext(LayoutStateContext)

  if (!state) {
    throw new Error('Cannot find LayoutState')
  }
  return state
}

export default useLayoutState

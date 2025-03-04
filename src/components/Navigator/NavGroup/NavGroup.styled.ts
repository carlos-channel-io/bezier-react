/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import type { InterpolationProps } from 'Types/Foundation'
import { Text } from 'Components/Text'

interface WrapperProps extends InterpolationProps {
  open: boolean
  active: boolean
}

export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 20px;
  max-width: 20px;
  margin-right: 8px;
`

export const ContentWrapper = styled(Text)`
  ${ellipsis()}
`

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
`

export const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const closedItemStyle = css`
  ${ChevronWrapper} {
    visibility: hidden;
  }

  &:hover,
  &:focus-visible {
    ${ChevronWrapper} {
      visibility: visible;
    }
  }
`

const activeItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

const nonActiveItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};

  &:hover,
  &:focus-visible {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

export const Item = styled.button<WrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  padding: 0 6px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  ${({ foundation }) => foundation?.rounding?.round6}

  ${({ active }) => (active ? activeItemStyle : nonActiveItemStyle)}
  ${({ open }) => (open ? null : closedItemStyle)}

  ${({ interpolation }) => interpolation}
`

export const ChildrenWrapper = styled.ul`
  padding: 0 0 8px;
  margin: 0;
`

export const Wrapper = styled.li`
  display: block;
`

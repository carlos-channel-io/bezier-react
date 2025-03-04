/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Icon, IconSize } from 'Components/Icon'
import NavItem from './NavItem'
import type NavItemProps from './NavItem.types'

export default {
  title: getTitle(base),
  component: NavItem,
} as Meta

const Template: Story<NavItemProps> = (args) => (
  <div style={{ width: '240px', padding: '6px' }}>
    <NavItem {...args} />
  </div>
)

export const Primary: Story<NavItemProps> = Template.bind({})

Primary.args = {
  active: false,
  name: 'general',
  content: '일반 설정',
  href: 'https://google.com',
  leftIcon: undefined,
  leftIconColor: 'txt-black-dark',
  rightContent: <Icon name="error-filled" size={IconSize.XS} color="bgtxt-orange-normal" />,
}

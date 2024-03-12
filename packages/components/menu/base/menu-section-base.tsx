import type { MenuSectionSlots } from '../theme'

import { BaseSection, SectionProps } from '@nextui-org/aria-utils'

import { MenuItemProps } from '../menu-item'
import type { SlotsToClasses } from '../../utils'

export interface MenuSectionBaseProps<T extends object = {}>
  extends SectionProps<'ul', T> {
  /**
   * The menu section classNames.
   */
  classNames?: SlotsToClasses<MenuSectionSlots>
  /**
   * The menu items classNames.
   */
  itemClasses?: MenuItemProps['classNames']
  /**
   * Shows a divider between sections
   * @default false
   */
  showDivider?: boolean
  /**
   * Whether to hide the check icon when the items are selected.
   * @default false
   */
  hideSelectedIcon?: boolean
}

const MenuSectionBase = BaseSection as <T extends object>(
  props: MenuSectionBaseProps<T>,
) => JSX.Element

export default MenuSectionBase
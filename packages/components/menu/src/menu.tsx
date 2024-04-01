import {forwardRef} from "@tw-material/system";
import {ForwardedRef, ReactElement, Ref} from "react";
import {mergeProps} from "@react-aria/utils";

import {UseMenuProps, useMenu} from "./use-menu";
import MenuSection from "./menu-section";
import MenuItem from "./menu-item";

interface Props<T> extends UseMenuProps<T> {}

function Menu<T extends object>(props: Props<T>, ref: ForwardedRef<HTMLUListElement>) {
  const {
    Component,
    state,
    closeOnSelect,
    disableAnimation,
    hideSelectedIcon,
    hideEmptyContent,
    onClose,
    onAction,
    topContent,
    bottomContent,
    itemClasses,
    getBaseProps,
    getListProps,
    getEmptyContentProps,
  } = useMenu<T>({...props, ref});

  const content = (
    <Component {...getListProps()}>
      {!state.collection.size && !hideEmptyContent && (
        <li>
          <div {...getEmptyContentProps()} />
        </li>
      )}
      {[...state.collection].map((item) => {
        const itemProps = {
          closeOnSelect,
          disableAnimation,
          item,
          state,
          onClose,
          onAction,
          hideSelectedIcon,
          ...item.props,
        };

        if (item.type === "section") {
          return <MenuSection key={item.key} {...itemProps} itemClasses={itemClasses} />;
        }
        let menuItem = (
          <MenuItem
            key={item.key}
            {...itemProps}
            classNames={mergeProps(itemClasses, item.props?.classNames)}
          />
        );

        if (item.wrapper) {
          menuItem = item.wrapper(menuItem);
        }

        return menuItem;
      })}
    </Component>
  );

  return (
    <div {...getBaseProps()}>
      {topContent}
      {content}
      {bottomContent}
    </div>
  );
}

export type MenuProps<T = object> = Props<T> & {ref?: Ref<HTMLElement>};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
export default forwardRef(Menu) as unknown as <T = object>(props: MenuProps<T>) => ReactElement;

Menu.displayName = "Menu";

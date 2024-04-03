import {
  DOMAttributes,
  FocusableElement,
  PointerType,
  PressEvents,
  PressEvent as PressEventBase,
} from "@react-types/shared";
import {RefObject} from "react";

export interface PressEvent extends PressEventBase {
  clientX?: number;

  clientY?: number;
}

export interface PressProps extends PressEvents {
  /** Handler that is called when the press is released over the target. */
  onPress?: (e: PressEvent) => void;
  /** Handler that is called when a press interaction starts. */
  onPressStart?: (e: PressEvent) => void;
  /**
   * Handler that is called when a press interaction ends, either
   * over the target or when the pointer leaves the target.
   */
  onPressEnd?: (e: PressEvent) => void;
  /** Handler that is called when the press state changes. */
  onPressChange?: (isPressed: boolean) => void;
  /**
   * Handler that is called when a press is released over the target, regardless of
   * whether it started on the target or not.
   */
  onPressUp?: (e: PressEvent) => void;
  /** Whether the target is in a controlled press state (e.g. an overlay it triggers is open). */
  isPressed?: boolean;
  /** Whether the press events should be disabled. */
  isDisabled?: boolean;
  /** Whether the target should not receive focus on press. */
  preventFocusOnPress?: boolean;
  /**
   * Whether press events should be canceled when the pointer leaves the target while pressed.
   * By default, this is `false`, which means if the pointer returns back over the target while
   * still pressed, onPressStart will be fired again. If set to `true`, the press is canceled
   * when the pointer leaves the target and onPressStart will not be fired if the pointer returns.
   */
  shouldCancelOnPointerExit?: boolean;
  /** Whether text selection should be enabled on the pressable element. */
  allowTextSelectionOnPress?: boolean;
}

export interface PressHookProps extends PressProps {
  /** A ref to the target element. */
  ref?: RefObject<Element>;
}

export interface PressState {
  isPressed: boolean;
  ignoreEmulatedMouseEvents: boolean;
  ignoreClickAfterPress: boolean;
  didFirePressStart: boolean;
  isTriggeringEvent: boolean;
  activePointerId: any;
  target: FocusableElement | null;
  isOverTarget: boolean;
  pointerType: PointerType | null;
  userSelect?: string;
  metaKeyEvents?: Map<string, KeyboardEvent> | null;
}

export interface EventBase {
  currentTarget: EventTarget;
  shiftKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
  clientX?: number;
  clientY?: number;
}

export interface PressResult {
  /** Whether the target is currently pressed. */
  isPressed: boolean;
  /** Props to spread on the target element. */
  pressProps: DOMAttributes;
}

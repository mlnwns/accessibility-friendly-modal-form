import { useLayoutEffect, type RefObject } from "react";

export const useFocusTrap = (
  isActive: boolean,
  containerRef: RefObject<HTMLElement | null>,
  initialFocusRef?: RefObject<HTMLElement | null>,
  returnFocusRef?: RefObject<HTMLElement | null>
) => {
  useLayoutEffect(() => {
    if (!isActive || !containerRef.current) return;

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ];

    const focusableEls: HTMLElement[] = Array.prototype.slice.call(
      containerRef.current.querySelectorAll(focusableSelectors.join(","))
    );

    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else if (focusableEls.length) {
      focusableEls[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusRef?.current?.focus();
    };
  }, [isActive, containerRef, initialFocusRef, returnFocusRef]);
};

import { TouchEventHandler, useCallback, useState } from "react";

export function useTouchTwiceAsClick<T>() {
  const [touchedKey, setTouchedKey] = useState<null | T>(null);

  const onTouchStart = useCallback(
    (key: T, handler?: TouchEventHandler) => {
      return (e: Parameters<TouchEventHandler>[0]) => {
        if (touchedKey !== key) {
          e.preventDefault();
          return handler !== undefined ? handler(e) : undefined;
        }
      };
    },
    [touchedKey],
  );
  const onTouchEnd = useCallback(
    (key: T, handler?: TouchEventHandler) => {
      return (e: Parameters<TouchEventHandler>[0]) => {
        if (touchedKey !== key) {
          e.preventDefault();
          setTouchedKey(key);
          return handler !== undefined ? handler(e) : undefined;
        }
      };
    },
    [touchedKey],
  );

  return { onTouchStart, onTouchEnd };
}

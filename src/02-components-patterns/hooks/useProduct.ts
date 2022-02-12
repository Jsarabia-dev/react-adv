import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

export interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs): {
  counter: number;
  isMaxCountReached: boolean;
  increaseBy: (value: number) => void;
  maxCount?: number;
  reset: () => void;
} => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const isController = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isController.current && onChange) {
      return onChange({ count: value, product });
    }

    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount)
      newValue = Math.min(newValue, initialValues.maxCount);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    reset,
  };
};

import {
  ImgHTMLAttributes, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
}

export const AppImage = (props: AppImageProps) => {
  const {
    className,
    fallback,
    errorFallback,
    src,
    alt = 'image',
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (isError && errorFallback) {
    return errorFallback;
  }

  return (
    <img src={src} alt={alt} className={className} {...otherProps} />
  );
};

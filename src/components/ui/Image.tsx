import Image from "next/image";
import { ComponentProps, useState, useEffect } from "react";

type ImageProps = ComponentProps<typeof Image>;

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const defaultSizes = sizes || 
    (width && height 
      ? `(max-width: 640px) ${Math.min(width, 640)}px, (max-width: 1024px) ${Math.min(width, 1024)}px, ${width}px`
      : "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
    );

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={defaultSizes}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
      className={`${isLoaded ? "loaded" : ""} ${className}`}
      onLoad={() => setIsLoaded(true)}
      quality={priority ? 90 : 85}
      {...props}
    />
  );
}

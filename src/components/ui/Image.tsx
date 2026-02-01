import Image from "next/image";
import { ComponentProps } from "react";

type ImageProps = ComponentProps<typeof Image>;

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  ...props
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
      {...props}
    />
  );
}

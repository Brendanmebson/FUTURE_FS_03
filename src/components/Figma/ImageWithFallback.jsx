import React, { useState } from 'react';
import { Box } from '@mui/material';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

export function ImageWithFallback({ src, alt, style, className, ...rest }) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <Box
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey.100',
        width: style?.width || '100%',
        height: style?.height || '100%',
        ...style,
      }}
    >
      <img
        src={ERROR_IMG_SRC}
        alt="Error loading image"
        {...rest}
        data-original-url={src}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </Box>
  ) : (
    <img src={src} alt={alt} style={style} className={className} {...rest} onError={handleError} />
  );
}

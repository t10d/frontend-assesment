/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type SliderProps = {
  children: React.ReactNode[];
};

export default function Slider(props: SliderProps) {
  const { children } = props;
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slidesPerView: 3,
    breakpoints: {
      '(min-width: 460px)': {
        slidesPerView: 4,
      },
      '(min-width: 680px)': {
        slidesPerView: 6,
      },
      '(min-width: 820px)': {
        slidesPerView: 8,
      },
      '(min-width: 1024px)': {
        slidesPerView: 3,
      },
    },
  });

  React.useLayoutEffect(() => {
    if (keenSlider) {
      keenSlider.resize();
    }
  }, [keenSlider]);

  return (
    <Box
      p={3}
      bg="gray.1"
      sx={{
        borderRadius: 'default',
        border: '1px solid',
        borderColor: 'gray.3',
      }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {React.Children.map(children, child => (
          <div className="keen-slider__slide">{child}</div>
        ))}
      </Box>
    </Box>
  );
}

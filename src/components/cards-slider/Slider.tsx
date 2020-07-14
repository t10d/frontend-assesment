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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slidesPerView() {
      return window.innerWidth / 120;
    },
  });

  return (
    <Box p={2} bg="gray.1" sx={{ borderRadius: 'sm' }}>
      <Box ref={sliderRef} className="keen-slider">
        {React.Children.map(children, child => (
          <div className="keen-slider__slide">{child}</div>
        ))}
      </Box>
    </Box>
  );
}

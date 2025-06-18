import { useEffect, useRef, useState } from 'react';
import { RoyalSize } from '@/shared/types/types';
import { RoyalPosition } from '@/shared/types/types';

export const useRoyalScroll = (maxScroll = 700) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const originalWidth = 1280;
  const originalHeight = 281;
  const aspectRatio = originalWidth / originalHeight;

  const getRoyalSize = (height: number): RoyalSize => ({
    width: height * aspectRatio,
    height
  });

  const getCurrentRoyalSize = (): RoyalSize => {
    if (windowWidth <= 500) return getRoyalSize(70);
    if (windowWidth <= 740) return getRoyalSize(100);
    if (windowWidth <= 940) return getRoyalSize(150);
    if (windowWidth <= 1100) return getRoyalSize(190);
    if (windowWidth <= 1350) return getRoyalSize(220);
    return getRoyalSize(281);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const progress = Math.min(scrollTop / maxScroll, 1);
  const scale = Math.max(1.5 - scrollTop / maxScroll * 0.5, 1.0);

  const currentSize = getCurrentRoyalSize();

  const royalStart: RoyalPosition = {
    top: '50%',
    left: '50%',
    width: currentSize.width,
    height: currentSize.height
  };
  const royalEnd: RoyalPosition = {
    top: '10%',
    left: '50%',
    width: 50 * aspectRatio,
    height: 11
  };

  const royalTop = `calc(${royalStart.top} - (${parseInt(royalStart.top) - parseInt(royalEnd.top)}% * ${progress}))`;
  const royalWidth = royalStart.width - (royalStart.width - royalEnd.width) * progress;
  const royalHeight = royalStart.height - (royalStart.height - royalEnd.height) * progress;

  const textOpacity = Math.min(progress * 3, 1);
  const bottomOpacity = Math.max(0, Math.min(1, (progress - 0.3) * 2));

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (scrollTop < maxScroll && e.deltaY > 0) {
        e.preventDefault();
        setScrollTop(prev => Math.min(prev + e.deltaY, maxScroll));
      }

      if (e.deltaY < 0) {
        e.preventDefault();
      }

      if (scrollTop >= maxScroll) {
        container?.removeEventListener('wheel', handleWheel);
      }
    };

    container?.addEventListener('wheel', handleWheel, { passive: false });
    return () => container?.removeEventListener('wheel', handleWheel);
  }, [scrollTop]);

  return {
    scrollTop,
    scrollContainerRef,
    progress,
    royalTop,
    royalWidth,
    royalHeight,
    textOpacity,
    bottomOpacity,
    scale
  };
};

import { colors } from './colors';
import { fonts } from './fonts';
import { metrics } from './metrics';

const sizes = {
  logoSmall: {
    width: metrics.isTablet ? metrics.px(100) : metrics.px(68),
    height: metrics.isTablet ? metrics.px(30) : metrics.px(16),
  },
  logoMedium: {
    width: metrics.isTablet ? metrics.px(150) : metrics.px(98),
    height: metrics.isTablet ? metrics.px(45) : metrics.px(22),
  },
  logoLarge: {
    width: metrics.isTablet ? metrics.px(200) : metrics.px(128),
    height: metrics.isTablet ? metrics.px(90) : metrics.px(64),
  },
};

export const theme = {
  colors,
  fonts,
  metrics,
  sizes,
};
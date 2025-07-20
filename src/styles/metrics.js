import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const figmaWidth = 375

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  )
  return screenPixel
}

// Identificação de dispositivo (tela maior ou menor)
const isTablet = width > 600; // Condição básica para dispositivo maior

const responsiveSize = (baseSize) =>
  isTablet ? baseSize * 0.4 : baseSize;

// Exportando `metrics`
export const metrics = { px, isTablet, responsiveSize };

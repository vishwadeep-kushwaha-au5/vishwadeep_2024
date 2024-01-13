import { css } from 'styled-components'

const device = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
}

const media = {
  xs: (...args: any[]) => css`
    @media (max-width: ${device.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args: any[]) => css`
    @media (max-width: ${device.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args: any[]) => css`
    @media (max-width: ${device.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args: any[]) => css`
    @media (max-width: ${device.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args: any[]) => css`
    @media (max-width: ${device.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args: any[]) => css`
    @media (max-width: ${device.xxl}) {
      ${css(...args)};
    }
  `,
}

export default media
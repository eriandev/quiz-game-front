const SvgComponent = (props) => (
  <svg
    width={37}
    height={34}
    margin='auto'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)'>
      <path
        d='M32.298 5.328a8.737 8.737 0 0 0-1.91-2.781 8.875 8.875 0 0 0-2.82-1.865A8.901 8.901 0 0 0 24.132 0C22.476 0 21.403.643 20 1.5c-1.5 1.5-1.198 3.583-1.5 3.828-.302-.245-.097-2.971-1.5-3.828C15.597.643 14.527 0 12.872 0a8.9 8.9 0 0 0-3.437.682 8.856 8.856 0 0 0-2.82 1.865A8.683 8.683 0 0 0 4 8.752c0 1.118.228 2.284.681 3.47.38.99.924 2.019 1.618 3.057 1.102 1.643 2.615 3.356 4.495 5.093 3.115 2.88 6.2 4.868 6.331 4.948l.796.511c.352.225.806.225 1.158 0l.796-.51c.13-.084 3.212-2.07 6.33-4.949 1.88-1.737 3.395-3.45 4.496-5.093.694-1.038 1.242-2.066 1.617-3.057.454-1.186.682-2.352.682-3.47a8.56 8.56 0 0 0-.702-3.424Z'
        fill='#C10000'
      />
    </g>
    <defs>
      <filter
        id='a'
        x={0}
        y={0}
        width={37}
        height={34}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_18_74' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_18_74'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_18_74' />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent

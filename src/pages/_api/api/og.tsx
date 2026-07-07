import { Handler } from 'vocs/server'

const colors = {
  background: '#0c0a08',
  pattern: '#171310',
  text: '#f4ede1',
  textMuted: '#a89a8a',
  accent: '#e0a370',
}

const dimensions = { width: 1200, height: 630 }
const patternStep = 56

const diagonalOffsets = Array.from(
  { length: Math.ceil((dimensions.width + dimensions.height * 2) / patternStep) },
  (_, index) => index * patternStep - dimensions.height,
)
const reverseDiagonalOffsets = Array.from(
  { length: Math.ceil((dimensions.width + dimensions.height * 2) / patternStep) },
  (_, index) => index * patternStep,
)

export default function handler(request: Request) {
  const origin = new URL(request.url).origin
  return Handler.og(({ title, description }) => {
    const titleLines = title.split('\n')
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: colors.background,
          color: colors.text,
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
          <svg
            aria-hidden
            width={dimensions.width}
            height={dimensions.height}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            fill="none"
          >
            <title>Background pattern</title>
            {diagonalOffsets.map((offset) => (
              <line
                key={`d-${offset}`}
                x1={offset}
                y1={0}
                x2={offset + dimensions.height}
                y2={dimensions.height}
                stroke={colors.pattern}
                strokeWidth={1.5}
              />
            ))}
            {reverseDiagonalOffsets.map((offset) => (
              <line
                key={`r-${offset}`}
                x1={offset}
                y1={0}
                x2={offset - dimensions.height}
                y2={dimensions.height}
                stroke={colors.pattern}
                strokeWidth={1.5}
              />
            ))}
          </svg>
        </div>

        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: dimensions.width,
            height: 10,
            backgroundColor: colors.accent,
          }}
        />

        {/* Brand lockup */}
        <img
          alt=""
          src={`${origin}/logo-dark.png`}
          style={{ height: 64, position: 'absolute', left: 80, top: 72 }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            position: 'relative',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: 80,
            paddingTop: 120,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: title.length < 16 ? 84 : title.length < 32 ? 68 : 56,
              fontWeight: 700,
              lineHeight: 1.08,
              color: colors.text,
              maxWidth: 1000,
            }}
          >
            {titleLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          {description && (
            <div style={{ fontSize: 30, lineHeight: 1.4, color: colors.textMuted, maxWidth: 880 }}>
              {description}
            </div>
          )}
        </div>

        {/* Footer domain */}
        <div
          style={{
            position: 'absolute',
            left: 80,
            bottom: 56,
            fontSize: 26,
            fontWeight: 600,
            color: colors.accent,
          }}
        >
          docs.biscotti.finance
        </div>
      </div>
    )
  }).fetch(request)
}

# Font Setup Instructions

This project uses custom fonts that need to be added manually:

## Required Font Files

### Windsor El BT (for titles/headings)
Place these files in `src/assets/fonts/`:
- `WindsorElBT-Regular.woff2`
- `WindsorElBT-Regular.woff`
- `WindsorElBT-Regular.ttf`
- `WindsorElBT-Bold.woff2`
- `WindsorElBT-Bold.woff`
- `WindsorElBT-Bold.ttf`

### SAASeriesW01-CD (for body text)
Place these files in `src/assets/fonts/`:
- `SAASeriesW01-CD-Regular.woff2`
- `SAASeriesW01-CD-Regular.woff`
- `SAASeriesW01-CD-Regular.ttf`
- `SAASeriesW01-CD-Bold.woff2`
- `SAASeriesW01-CD-Bold.woff`
- `SAASeriesW01-CD-Bold.ttf`

## Font Usage

- **Windsor El BT**: Used for all headings (h1, h2, h3, h4, h5, h6)
- **SAASeriesW01-CD**: Used for body text, paragraphs, and general content

## Fallback Fonts

If the custom fonts are not available, the system will fall back to:
- **For titles**: Georgia, serif
- **For body text**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## Font Sources

These are commercial fonts that need to be purchased from their respective foundries:
- Windsor El BT: Available from various font distributors
- SAASeriesW01-CD: Part of the SAA Series font family

## Installation

1. Obtain the font files from the appropriate sources
2. Place them in the `src/assets/fonts/` directory
3. The fonts will automatically be loaded when the application starts

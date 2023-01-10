export const Theme = {
  space: [0, 4, 8, 12, 16, 24, 36, 48, 60, 80, 90, 120, 128],
  font: {
    /*
     * Fallback fonts taken from GitHub Primer:
     * https://primer.style/css/support/variables#$font-mktg
     * Note: Should match font-family value in styles/global.css
     */
    sansSerif: `'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 
      'Segoe UI Emoji'`,
    monospace: `"Lucida Console", Monaco, monospace`,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    // medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

import { Config, Layout } from 'plotly.js';

export const layoutSettings: Partial<Layout> = {
  paper_bgcolor: 'transparent',
  plot_bgcolor: 'transparent',
  font: { color: 'white' },
  margin: { t: 0 },
  showlegend: false,
  xaxis: {
    type: 'date',
    dtick: 3 * 60 * 60 * 1000, // 3 hour tick interval
    tickangle: 0,
  },
};

export const configSettings: Partial<Config> = {
  displayModeBar: false,
};

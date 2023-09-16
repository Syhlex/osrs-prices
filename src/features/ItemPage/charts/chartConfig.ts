import { Config, Layout } from 'plotly.js';

export const getLayoutSettings = (
  overrides?: Partial<Layout>,
): Partial<Layout> => ({
  paper_bgcolor: 'transparent',
  plot_bgcolor: 'transparent',
  font: { color: 'white' },
  margin: { t: 0, l: 100 },
  showlegend: false,
  xaxis: {
    type: 'date',
    tickangle: 0,
    gridcolor: '#848484',
  },
  yaxis: {
    tickformat: ',',
    gridcolor: '#848484',
  },
  hovermode: 'x unified',
  hoverlabel: {
    namelength: -1,
    bgcolor: '#262a2e',
  },
  ...overrides,
});

export const configSettings: Partial<Config> = {
  displayModeBar: false,
};

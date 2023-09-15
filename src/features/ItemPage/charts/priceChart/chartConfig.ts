import { Config, Layout, PlotData } from 'plotly.js';

export const layoutSettings: Partial<Layout> = {
  paper_bgcolor: 'transparent',
  plot_bgcolor: 'transparent',
  font: { color: 'white' },
  margin: { t: 0 },
  showlegend: false,
  xaxis: {
    type: 'date',
    tickangle: 0,
  },
};

export const configSettings: Partial<Config> = {
  displayModeBar: false,
};

export const sharedDataSettings: Partial<PlotData> = {
  type: 'scatter',
  mode: 'lines+markers',
  marker: {
    size: 4,
  },
};

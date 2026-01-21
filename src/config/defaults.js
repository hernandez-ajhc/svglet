export let config = {
  iconPath: '../../examples/icons',
  classPrefix: '', // Future proofing
  size: '1em',
  gradientFrom: '#1d4ed8',
  gradientTo: '#f43f5e',
};

export function updateConfig(newConfig) {
  config = { ...config, ...newConfig };
}

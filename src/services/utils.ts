export function timeConvert(n: number): string {
  const hours = n / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}m`;
}

export function setCurrency(value: string): string {
  if (value === 'Unknown') return 'Unknown';
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
}

export function getGridPerformanceTiming(
  requestType: string,
  startedAt: number,
  endedAt: number,
): { action: string; duration: string } {
  return {
    action: requestType.charAt(0).toUpperCase() + requestType.slice(1),
    duration: (endedAt - startedAt).toFixed(0),
  };
}

type MbTrimWidth = (str: string, max: number, ellipsis?: string) => string;

export const mbTrimWidth: MbTrimWidth = (str, max, ellipsis) => {
  const strArray = [...str] as string[];
  const maxLen = ellipsis ? max - [...ellipsis].length : max;

  if (strArray.length <= max) {
    return str;
  }

  if (maxLen < 0 && ellipsis) {
    return [...strArray, ...ellipsis].slice(0, max).join('');
  }

  return [...strArray.slice(0, maxLen), ellipsis].join('');
};

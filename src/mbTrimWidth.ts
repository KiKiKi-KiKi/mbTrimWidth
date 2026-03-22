const segmenter = new Intl.Segmenter();

type MbTrimWidth = (str: string, max: number, ellipsis?: string) => string;

export const mbTrimWidth: MbTrimWidth = (str, max, ellipsis) => {
  const strArray = [...segmenter.segment(str)].map((s) => s.segment);
  const ellipsisArray = ellipsis
    ? [...segmenter.segment(ellipsis)].map((s) => s.segment)
    : [];
  const maxLen = ellipsis ? max - ellipsisArray.length : max;

  if (strArray.length <= max) {
    return str;
  }

  if (maxLen === 0 && !ellipsis) {
    return '';
  }

  if (maxLen <= 0 && ellipsis) {
    return [...strArray, ...ellipsisArray].slice(0, max).join('');
  }

  return [...strArray.slice(0, maxLen), ellipsis].join('');
};

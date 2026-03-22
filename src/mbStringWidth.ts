const segmenter = new Intl.Segmenter();

type MbStringWidth = (str: string) => number;

export const mbStringWidth: MbStringWidth = (str) => {
  return [...segmenter.segment(str)].length;
};

type MbStringWidth = (str: string) => number;

export const mbStringWidth: MbStringWidth = (str) => [...str].length;

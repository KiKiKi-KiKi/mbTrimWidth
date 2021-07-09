import { mbTrimWidth, mbStringWidth } from '../src/index';

describe('mbTrimWidth', () => {
  describe('English text', () => {
    const str = 'Lorem ipsum dolor sit amet';

    test('Trim text', () => {
      const trimText = mbTrimWidth(str, 10);
      expect(trimText).toBe('Lorem ipsu');
      expect(trimText.length).toBe(10);
    });

    test('Trim text and add ellipsis', () => {
      const trimText = mbTrimWidth(str, 10, '…');
      expect(trimText).toBe('Lorem ips…');
      expect(trimText.length).toBe(10);
    });

    test('When trim width > text length return origin text', () => {
      const trimText = mbTrimWidth(str, 100);
      expect(trimText).toBe(str);
    });

    test('When trim width 0 return ""', () => {
      const trimText = mbTrimWidth(str, 0);
      expect(trimText).toBe('');
      expect(trimText.length).toBe(0);

      const trimText2 = mbTrimWidth(str, 1, '…');
      expect(trimText2).toBe('');
      expect(trimText2.length).toBe(0);
    });

    test('When trim width < ellipsis width, ignore ellipsis', () => {
      const trimText = mbTrimWidth(str, 1, '...');
      expect(trimText).toBe('L');
      expect(trimText.length).toBe(1);
    });
  });

  describe('Unicode text', () => {
    const str = '子もかっこうの「おじぎ猫団」を窓がふみ戸棚ましです。';

    test('String not contain emoji & Surrogate pairs', () => {
      expect(str.length).toBe(26);
    });

    test('Trim text', () => {
      const trimText = mbTrimWidth(str, 12);
      expect(trimText).toBe('子もかっこうの「おじぎ猫');
      expect(trimText.length).toBe(12);
    });

    test('Trim text and add ellipsis', () => {
      const trimText = mbTrimWidth(str, 12, '…');
      expect(trimText).toBe('子もかっこうの「おじぎ…');
      expect(trimText.length).toBe(12);
    });

    test('When trim width > text length return origin text', () => {
      const trimText = mbTrimWidth(str, 100);
      expect(trimText).toBe(str);
    });
  });

  describe('Contains emoji text', () => {
    const str = 'I love 🏄🌊 and 🏕';

    test('Check text length', () => {
      console.log(str, 'length:', str.length);

      expect(str.length).toBe(18);
      expect(mbStringWidth(str)).toBe(15);
    });

    test('Trim text', () => {
      const trimText = mbTrimWidth(str, 9);
      expect(trimText).toBe('I love 🏄🌊');
      expect(mbStringWidth(trimText)).toBe(9);
    });

    test('Trim text and add ellipsis', () => {
      const trimText = mbTrimWidth(str, 9, '…');
      expect(trimText).toBe('I love 🏄…');
      expect(mbStringWidth(trimText)).toBe(9);
    });
  });

  describe('Contains emoji text (JP)', () => {
    const str = '私は🏄🌊と🏕をします';

    test('Check text length', () => {
      console.log(str, 'length:', str.length);

      expect(str.length).toBe(13);
      expect(mbStringWidth(str)).toBe(10);
    });

    test('Trim text', () => {
      const trimText = mbTrimWidth(str, 6);
      expect(trimText).toBe('私は🏄🌊と🏕');
      expect(mbStringWidth(trimText)).toBe(6);
    });

    test('Trim text and add ellipsis', () => {
      const trimText = mbTrimWidth(str, 6, '…');
      expect(trimText).toBe('私は🏄🌊と…');
      expect(mbStringWidth(trimText)).toBe(6);
    });
  });

  describe('Contains emoji & surrogate pairs text (JP)', () => {
    const str = '🌕の夜は𠮷野屋で𩸽を食べたい😇';

    test('Check text length', () => {
      console.log(str, 'length:', str.length);

      expect(str.length).toBe(19);
      expect(mbStringWidth(str)).toBe(15);
    });

    test('Trim text', () => {
      const trimText = mbTrimWidth(str, 9);
      expect(trimText).toBe('🌕の夜は𠮷野屋で𩸽');
      expect(mbStringWidth(trimText)).toBe(9);
    });

    test('Trim text and add ellipsis', () => {
      const trimText = mbTrimWidth(str, 9, '…');
      expect(trimText).toBe('🌕の夜は𠮷野屋で…');
      expect(mbStringWidth(trimText)).toBe(9);
    });
  });

  describe('Contains surrogate pairs emoji', () => {
    const str = '私は👨‍👩‍👧‍👦と🏄🌊と🏕をします';

    test('Check text length', () => {
      console.log(str, 'length:', str.length);

      expect(mbStringWidth(str)).toBe(12);
    });
  });

  describe('Contains surrogate pairs text', () => {
    const str = 'pͪoͣnͬpͣoͥnͭpͣa͡inͥ';

    test('Check text length', () => {
      console.log(str, 'length:', str.length);

      expect(mbStringWidth(str)).toBe(10);
    });
  });
});

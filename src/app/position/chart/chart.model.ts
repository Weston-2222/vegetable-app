import { vegetableList } from '../../vegetable/vegetable.model';

/**
 * 使用正則表達式搜尋代號
 * @param regexWord 正則表達式
 * @returns 代號陣列
 */
const seleteCodeByRegex = (regexWord: RegExp) =>
  vegetableList
    .map((item) => item.details)
    .flat()
    .filter((item) => item.code.match(regexWord))
    .map((item) => item.code);

export interface PositionList {
  id: number;
  title: string | null;
  vegetable: {
    name: string;
    displayKeyword: string | null;
    regex: RegExp;
  }[];
}
export const positionList: PositionList[] = [
  {
    id: 0,
    title: '青果社 水菜',
    vegetable: [
      {
        name: '竹筍',
        displayKeyword: 'SH',
        regex: /^(s|sh|sh\d)$/i,
      },
      {
        name: '甘藍',
        displayKeyword: 'SR',
        regex: /^(s|sr|sr\d)$/i,
      },
      {
        name: '白花',
        displayKeyword: 'FB',
        regex: /^(f|fb|fb\d)$/i,
      },
    ],
  },
  {
    id: 1,
    title: '新港,二崙 農會水菜',
    vegetable: [
      {
        name: '水耕',
        displayKeyword: 'L*8',
        regex: /^(l|l.|l.8)$/i,
      },
    ],
  },
  {
    id: 2,
    title: null,
    vegetable: [
      {
        name: '甘藍',
        displayKeyword: 'LA',
        regex: /^(l|la|la\d)$/i,
      },
      {
        name: '大白菜',
        displayKeyword: 'LC',
        regex: /^(l|lc|lc\d)$/i,
      },
      {
        name: '水筍',
        displayKeyword: 'SQ',
        regex: /^(s|sq|sq\d)$/i,
      },
      {
        name: '胡瓜',
        displayKeyword: 'FC',
        regex: /^(f|fc|fc\d)$/i,
      },
      {
        name: '蘿蔔',
        displayKeyword: 'SA',
        regex: /^(s|sa|sa\d)$/i,
      },
    ],
  },
  {
    id: 3,
    title: '農會雜菜',
    vegetable: [
      {
        name: '辣椒',
        displayKeyword: 'FV',
        regex: /^(f|fv|fv\d)$/i,
      },
      {
        name: '茄子',
        displayKeyword: 'FI',
        regex: /^(f|fi|fi\d)$/i,
      },
    ],
  },
  {
    id: 4,
    title: null,
    vegetable: [
      {
        name: '菇',
        displayKeyword: 'M',
        regex: /^m.*/i,
      },
      {
        name: '黃秋葵',
        displayKeyword: 'FA',
        regex: /^(f|fa|fa\d)$/i,
      },
      {
        name: '青花',
        displayKeyword: 'FR',
        regex: /^(f|fr|fr\d)$/i,
      },
      {
        name: '香菜',
        displayKeyword: ' LP1',
        regex: /^(l|lp|lp1)$/i,
      },
      {
        name: '玉米筍',
        displayKeyword: 'FY4,9',
        regex: /^(f|fy|fy4|fy9)$/i,
      },
    ],
  },
  {
    id: 5,
    title: null,
    vegetable: [
      {
        name: '苦瓜',
        displayKeyword: 'FG',
        regex: /^(f|fg|fg\d)$/i,
      },
      {
        name: '瓜苗',
        displayKeyword: 'FU2,LT1',
        regex: /^(f|fu|fu2|l|lt|lt1)$/i,
      },
      {
        name: '韭黃,花蓮韭',
        displayKeyword: 'SF2',
        regex: /^(s|sf|sf2)$/i,
      },
      {
        name: '彩椒,青椒',
        displayKeyword: 'FK4,5',
        regex: /^(f|fk|fk4|fk5)$/i,
      },
      {
        name: '過貓',
        displayKeyword: 'LX1',
        regex: /^(l|lx|lx1)$/i,
      },
    ],
  },
  {
    id: 6,
    title: '聯合社水菜',
    vegetable: [
      {
        name: '芹菜',
        displayKeyword: 'LG',
        regex: /^(l|lg|lg\d)$/i,
      },
    ],
  },
  {
    id: 7,
    title: null,
    vegetable: [],
  },
  {
    id: 8,
    title: null,
    vegetable: [
      {
        name: '花瓜',
        displayKeyword: 'FD',
        regex: /^(f|fd|fd\d)$/i,
      },
      {
        name: '番茄',
        displayKeyword: 'FJ',
        regex: /^(f|fj|fj\d)$/i,
      },
    ],
  },
  {
    id: 9,
    title: null,
    vegetable: [
      {
        name: '蔥',
        displayKeyword: 'SE',
        regex: /^(s|se|se\d)$/i,
      },
      {
        name: '絲瓜',
        displayKeyword: 'FF',
        regex: /^(f|ff|ff\d)$/i,
      },
      {
        name: '蒜苗',
        displayKeyword: 'SG,2,3,4',
        regex: /^(s|sg|sg2|sg3|sg4)$/i,
      },
    ],
  },
  {
    id: 10,
    title: null,
    vegetable: [
      {
        name: '菜豆',
        displayKeyword: 'FM',
        regex: /^(f|fm|fm\d)$/i,
      },
      {
        name: '芥藍芽',
        displayKeyword: 'LK',
        regex: /^(l|lk|lk3)$/i,
      },
      {
        name: '娃娃菜',
        displayKeyword: 'LC0,6',
        regex: /^(l|lc|lc0|lc6)$/i,
      },
      {
        name: '水蓮',
        displayKeyword: 'LT3',
        regex: /^(l|lt|lt3)$/i,
      },
      {
        name: '蘆筍',
        displayKeyword: 'SV',
        regex: /^(s|sv|sv\d)$/i,
      },
      {
        name: '皇宮菜',
        displayKeyword: 'LE',
        regex: /^(l|le|le\d)$/i,
      },
      {
        name: '紅鳳菜',
        displayKeyword: 'LQ',
        regex: /^(l|lq|lq\d)$/i,
      },
    ],
  },
  {
    id: 11,
    title: null,
    vegetable: [],
  },
  {
    id: 12,
    title: '雜菜',
    vegetable: [
      {
        name: 'SB',
        displayKeyword: null,
        regex: /^(s|sb|sb\d)$/i,
      },
      {
        name: 'SC',
        displayKeyword: null,
        regex: /^(s|sc|sc\d)$/i,
      },
      {
        name: 'SD',
        displayKeyword: null,
        regex: /^(s|sd|sd\d)$/i,
      },
      {
        name: 'SF3',
        displayKeyword: null,
        regex: /^(s|sf|sf3)$/i,
      },
      {
        name: 'SJ',
        displayKeyword: null,
        regex: /^(s|sj|sj\d)$/i,
      },
      {
        name: 'SM',
        displayKeyword: null,
        regex: /^(s|sm|sm\d)$/i,
      },
      {
        name: 'SA',
        displayKeyword: null,
        regex: /^(s|sa|sa\d)$/i,
      },
      {
        name: 'SP',
        displayKeyword: null,
        regex: /^(s|sp|sp\d)$/i,
      },
      {
        name: 'SO',
        displayKeyword: null,
        regex: /^(s|so|so\d)$/i,
      },
      {
        name: 'SN',
        displayKeyword: null,
        regex: /^(s|sn|sn\d)$/i,
      },
    ],
  },
  {
    id: 13,
    title: null,
    vegetable: [
      {
        name: '玉米',
        displayKeyword: 'FY',
        regex: /^(f|fy|fy\d)$/i,
      },
      {
        name: '扁蒲',
        displayKeyword: 'FH',
        regex: /^(f|fh|fh\d)$/i,
      },
      {
        name: '豆類',
        displayKeyword: 'FL,N,O,P,Q',
        regex: /^(f|fl|fl\d|f|fn|fn\d|f|fo|fo\d|f|fp|fp\d|f|fq|fq\d)$/i,
      },
    ],
  },
];

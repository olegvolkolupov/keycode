const keyCodes = [
  {
    keyCode: 0,
    description: 'That key has no keycode',
  },
  {
    keyCode: 3,
    description: 'break',
  },
  {
    keyCode: 8,
    description: 'backspace / delete',
  },
  {
    keyCode: 9,
    description: 'tab',
  },
  {
    keyCode: 12,
    description: 'clear',
  },
  {
    keyCode: 13,
    description: 'enter',
  },
  {
    keyCode: 16,
    description: 'shift',
  },
  {
    keyCode: 17,
    description: 'ctrl',
  },
  {
    keyCode: 18,
    description: 'alt',
  },
  {
    keyCode: 19,
    description: 'pause/break',
  },
  {
    keyCode: 20,
    description: 'caps lock',
  },
  {
    keyCode: 21,
    description: 'hangul',
  },
  {
    keyCode: 25,
    description: 'hanja',
  },
  {
    keyCode: 27,
    description: 'escape',
  },
  {
    keyCode: 28,
    description: 'conversion',
  },
  {
    keyCode: 29,
    description: 'non-conversion',
  },
  {
    keyCode: 32,
    description: 'spacebar',
  },
  {
    keyCode: 33,
    description: 'page up',
  },
  {
    keyCode: 34,
    description: 'page down',
  },
  {
    keyCode: 35,
    description: 'end',
  },
  {
    keyCode: 36,
    description: 'home',
  },
  {
    keyCode: 37,
    description: 'left arrow',
  },
  {
    keyCode: 38,
    description: 'up arrow',
  },
  {
    keyCode: 40,
    description: 'down arrow',
  },
  {
    keyCode: 41,
    description: 'select',
  },
  {
    keyCode: 42,
    description: 'print',
  },
  {
    keyCode: 43,
    description: 'execute',
  },
  {
    keyCode: 44,
    description: 'Print Screen',
  },
  {
    keyCode: 45,
    description: 'insert',
  },
  {
    keyCode: 46,
    description: 'delete',
  },
  {
    keyCode: 47,
    description: 'help',
  },
  {
    keyCode: 48,
    description: 0,
  },
  {
    keyCode: 49,
    description: 1,
  },
  {
    keyCode: 50,
    description: 2,
  },
  {
    keyCode: 51,
    description: 3,
  },
  {
    keyCode: 52,
    description: 4,
  },
  {
    keyCode: 53,
    description: 5,
  },
  {
    keyCode: 54,
    description: 6,
  },
  {
    keyCode: 55,
    description: 7,
  },
  {
    keyCode: 56,
    description: 8,
  },
  {
    keyCode: 57,
    description: 9,
  },
  {
    keyCode: 58,
    description: ':',
  },
  {
    keyCode: 59,
    description: 'semicolon (firefox), equals',
  },
  {
    keyCode: 60,
    description: '&lt;',
  },
  {
    keyCode: 61,
    description: 'equals (firefox)',
  },
  {
    keyCode: 63,
    description: 'ß',
  },
  {
    keyCode: 64,
    description: '@ (firefox)',
  },
  {
    keyCode: 65,
    description: 'a',
  },
  {
    keyCode: 66,
    description: 'b',
  },
  {
    keyCode: 67,
    description: 'c',
  },
  {
    keyCode: 68,
    description: 'd',
  },
  {
    keyCode: 69,
    description: 'e',
  },
  {
    keyCode: 70,
    description: 'f',
  },
  {
    keyCode: 71,
    description: 'g',
  },
  {
    keyCode: 72,
    description: 'h',
  },
  {
    keyCode: 73,
    description: 'i',
  },
  {
    keyCode: 74,
    description: 'j',
  },
  {
    keyCode: 75,
    description: 'k',
  },
  {
    keyCode: 76,
    description: 'l',
  },
  {
    keyCode: 77,
    description: 'm',
  },
  {
    keyCode: 78,
    description: 'n',
  },
  {
    keyCode: 79,
    description: 'o',
  },
  {
    keyCode: 80,
    description: 'p',
  },
  {
    keyCode: 81,
    description: 'q',
  },
  {
    keyCode: 82,
    description: 'r',
  },
  {
    keyCode: 83,
    description: 's',
  },
  {
    keyCode: 84,
    description: 't',
  },
  {
    keyCode: 85,
    description: 'u',
  },
  {
    keyCode: 86,
    description: 'v',
  },
  {
    keyCode: 87,
    description: 'w',
  },
  {
    keyCode: 88,
    description: 'x',
  },
  {
    keyCode: 89,
    description: 'y',
  },
  {
    keyCode: 90,
    description: 'z',
  },
  {
    keyCode: 91,
    description: 'Windows Key / Left ⌘ / Chromebook Search key',
  },
  {
    keyCode: 92,
    description: 'right window key',
  },
  {
    keyCode: 93,
    description: 'Windows Menu / Right ⌘',
  },
  {
    keyCode: 95,
    description: 'sleep',
  },
  {
    keyCode: 96,
    description: 'numpad 0',
  },
  {
    keyCode: 97,
    description: 'numpad 1',
  },
  {
    keyCode: 98,
    description: 'numpad 2',
  },
  {
    keyCode: 99,
    description: 'numpad 3',
  },
  {
    keyCode: 100,
    description: 'numpad 4',
  },
  {
    keyCode: 101,
    description: 'numpad 5',
  },
  {
    keyCode: 102,
    description: 'numpad 6',
  },
  {
    keyCode: 103,
    description: 'numpad 7',
  },
  {
    keyCode: 104,
    description: 'numpad 8',
  },
  {
    keyCode: 105,
    description: 'numpad 9',
  },
  {
    keyCode: 106,
    description: 'multiply',
  },
  {
    keyCode: 107,
    description: 'add',
  },
  {
    keyCode: 108,
    description: 'numpad period (firefox)',
  },
  {
    keyCode: 109,
    description: 'subtract',
  },
  {
    keyCode: 110,
    description: 'decimal point',
  },
  {
    keyCode: 111,
    description: 'divide',
  },
  {
    keyCode: 112,
    description: 'f1',
  },
  {
    keyCode: 113,
    description: 'f2',
  },
  {
    keyCode: 114,
    description: 'f3',
  },
  {
    keyCode: 115,
    description: 'f4',
  },
  {
    keyCode: 116,
    description: 'f5',
  },
  {
    keyCode: 117,
    description: 'f6',
  },
  {
    keyCode: 118,
    description: 'f7',
  },
  {
    keyCode: 119,
    description: 'f8',
  },
  {
    keyCode: 120,
    description: 'f9',
  },
  {
    keyCode: 121,
    description: 'f10',
  },
  {
    keyCode: 122,
    description: 'f11',
  },
  {
    keyCode: 123,
    description: 'f12',
  },
  {
    keyCode: 124,
    description: 'f13',
  },
  {
    keyCode: 125,
    description: 'f14',
  },
  {
    keyCode: 126,
    description: 'f15',
  },
  {
    keyCode: 127,
    description: 'f16',
  },
  {
    keyCode: 128,
    description: 'f17',
  },
  {
    keyCode: 129,
    description: 'f18',
  },
  {
    keyCode: 130,
    description: 'f19',
  },
  {
    keyCode: 131,
    description: 'f20',
  },
  {
    keyCode: 132,
    description: 'f21',
  },
  {
    keyCode: 133,
    description: 'f22',
  },
  {
    keyCode: 134,
    description: 'f23',
  },
  {
    keyCode: 135,
    description: 'f24',
  },
  {
    keyCode: 136,
    description: 'f25',
  },
  {
    keyCode: 137,
    description: 'f26',
  },
  {
    keyCode: 138,
    description: 'f27',
  },
  {
    keyCode: 139,
    description: 'f28',
  },
  {
    keyCode: 140,
    description: 'f29',
  },
  {
    keyCode: 141,
    description: 'f30',
  },
  {
    keyCode: 142,
    description: 'f31',
  },
  {
    keyCode: 143,
    description: 'f32',
  },
  {
    keyCode: 144,
    description: 'num lock',
  },
  {
    keyCode: 145,
    description: 'scroll lock',
  },
  {
    keyCode: 151,
    description: 'airplane mode',
  },
  {
    keyCode: 160,
    description: '^',
  },
  {
    keyCode: 161,
    description: '!',
  },
  {
    keyCode: 162,
    description: '؛ (arabic semicolon)',
  },
  {
    keyCode: 163,
    description: '#',
  },
  {
    keyCode: 164,
    description: '$',
  },
  {
    keyCode: 165,
    description: 'ù',
  },
  {
    keyCode: 166,
    description: 'page backward',
  },
  {
    keyCode: 167,
    description: 'page forward',
  },
  {
    keyCode: 168,
    description: 'refresh',
  },
  {
    keyCode: 169,
    description: 'closing paren (AZERTY)',
  },
  {
    keyCode: 170,
    description: '*',
  },
  {
    keyCode: 171,
    description: '~ + * key',
  },
  {
    keyCode: 172,
    description: 'home key',
  },
  {
    keyCode: 173,
    description: 'minus (firefox), mute/unmute',
  },
  {
    keyCode: 174,
    description: 'decrease volume level',
  },
  {
    keyCode: 175,
    description: 'increase volume level',
  },
  {
    keyCode: 176,
    description: 'next',
  },
  {
    keyCode: 177,
    description: 'previous',
  },
  {
    keyCode: 178,
    description: 'stop',
  },
  {
    keyCode: 179,
    description: 'play/pause',
  },
  {
    keyCode: 180,
    description: 'e-mail',
  },
  {
    keyCode: 181,
    description: 'mute/unmute (firefox)',
  },
  {
    keyCode: 182,
    description: 'decrease volume level (firefox)',
  },
  {
    keyCode: 183,
    description: 'increase volume level (firefox)',
  },
  {
    keyCode: 186,
    description: 'semi-colon / ñ',
  },
  {
    keyCode: 187,
    description: 'equal sign',
  },
  {
    keyCode: 188,
    description: 'comma',
  },
  {
    keyCode: 189,
    description: 'dash',
  },
  {
    keyCode: 190,
    description: 'period',
  },
  {
    keyCode: 191,
    description: 'forward slash / ç',
  },
  {
    keyCode: 192,
    description: 'grave accent / ñ / æ / ö',
  },
  {
    keyCode: 193,
    description: '?, / or °',
  },
  {
    keyCode: 194,
    description: 'numpad period (chrome)',
  },
  {
    keyCode: 219,
    description: 'open bracket',
  },
  {
    keyCode: 220,
    description: 'back slash',
  },
  {
    keyCode: 221,
    description: 'close bracket / å',
  },
  {
    keyCode: 222,
    description: 'single quote / ø / ä',
  },
  {
    keyCode: 223,
    description: '`',
  },
  {
    keyCode: 224,
    description: 'left or right ⌘ key (firefox)',
  },
  {
    keyCode: 225,
    description: 'altgr',
  },
  {
    keyCode: 226,
    description: '&lt; /git &gt;, left back slash',
  },
  {
    keyCode: 230,
    description: 'GNOME Compose Key',
  },
  {
    keyCode: 231,
    description: 'ç',
  },
  {
    keyCode: 233,
    description: 'XF86Forward',
  },
  {
    keyCode: 234,
    description: 'XF86Back',
  },
  {
    keyCode: 235,
    description: 'non-conversion',
  },
  {
    keyCode: 240,
    description: 'alphanumeric',
  },
  {
    keyCode: 242,
    description: 'hiragana/katakana',
  },
  {
    keyCode: 243,
    description: 'half-width/full-width',
  },
  {
    keyCode: 244,
    description: 'kanji',
  },
  {
    keyCode: 251,
    description: 'unlock trackpad (Chrome/Edge)',
  },
  {
    keyCode: 255,
    description: 'toggle touchpad',
  },
];

export default keyCodes;
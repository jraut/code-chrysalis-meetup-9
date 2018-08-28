/**
 * 0 = O, o, or D
 1 = I or l
 2 = Z
 3 = E
 4 = h or A
 5 = S
 6 = b or G
 7 = T, L, or j
 8 = B
 9 = P
 * @param ch
 */

var swap = {
    'I': '1',
    'l': '1',
    'Z': '2',
    'E': '3',
    'h': '4',
    'A': '4',
    'S': '5',
    'b': '6',
    'G': '6',
    'T': '7',
    'L': '7',
    'j': '7',
    'B': '8',
    'P': '9',
};

function leetspeak(str) {
    var result = "";
    for (var i = 0; i < str.length(); ++i) {
        result[i] = swap[str[i]] ? swap[str[i]] : str[i];
    }
    return result;
}

// main()
//ELITE --> 37173
//Code Chrysalis --> C0de C4rysa1is
//ZEHITOMO --> 23H170m0
print(leetspeak("ELITE"))
print(leetspeak("Code Chrysalis"))
print(leetspeak("ZEHITOMO"))

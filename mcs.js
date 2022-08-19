const TokenType = {
    /* single character tokens */
    LEFT_PAREN: 0, RIGHT_PAREN: 1,

    EQUAL: 2, PLUS: 3, MINUS: 4,
    STAR: 5, SLASH: 6, PERCENT: 7,
    
    GREATER: 8, LESS: 9,
    
    AMPERSAND: 10, PIPE: 11,
    LINE_BREAK: 12,

    /* two character tokens */
    PLUS_EQUAL: 13, MINUS_EUQAL: 14,
    STAR_EQUAL: 15, SLASH_EQUAL: 16,
    PERCENT_EQUAL: 17,

    GREATER_EQUAL: 18, LESS_EQUAL: 19,
    BANG_EQUAL: 20,
    
    /* keywords */
    DO: 21, ELSE: 22, FOR: 23,
    FUNCTION: 24, IF: 25,
    RETURN: 26, WHILE: 27,

    /* literals */
    NUMBER: 28,

    /* other tokens */
    ERROR: 29, EOF: 30,
};

const scanner = {
    source: null,
    start: 0,
    current: 0,
    line: 1
};

function init_scanner(source)
{
    scanner.source = source;
    scanner.start = 0;
    scanner.current = 0;
    scanner.line = 1;
}

const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    // normalize whitespace, everthing becomes one space
    const replaced = html.replace(pattern, replacement);
    // trim leading and trailing whitespace
    const trimmed = replaced.trim();
    // return the result
    return trimmed;
}

QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normailizedExpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normailizedExpected);
};
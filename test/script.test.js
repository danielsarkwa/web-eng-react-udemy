const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogPictures.com'
];

describe('google search', () => {
    it('it is searching google', () => {
        expect(googleSearch('sdsds', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogPictures.com']);
    });
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});

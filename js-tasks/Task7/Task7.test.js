const {getWordsArray} = require('./Task7');
test('Splits text into array of words', () => {
    const text = 'aaa bbb, ccc. Xxx - eee bbb, kkk!';
    const result = ['aaa','bbb','ccc','Xxx','eee','bbb','kkk'];
    expect(getWordsArray(text)).toEqual(result);
});
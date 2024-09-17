const {translit} = require('./Task6');
test('transliterates string from cyrillic to latin', () => {
    const cyrillic = "Фраза на кириллице, содержащая сложные звуки.";
    const latin = "Fraza na kirillitse, soderzhaschaya slozhnye zvuki.";
    expect(translit(cyrillic)).toEqual(latin);
});

const {sort2DArray} = require('./Task6');
test('transliterates string from cyrillic to latin', () => {
    const array = [
        [1, 2, 3],
        [1, 2],
        [1, 2, 3, 4, 5],
        [1],
        [1, 2, 3, 4],
    ];
    const result = [
        [1],
        [1, 2],
        [1, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
    ];
    expect(sort2DArray(array)).toEqual(result);
});

const {transformObjectsArray} = require('./Task6');
test('transliterates string from cyrillic to latin', () => {
    const array = [
        {
            country: 'country1',
            city:    'city11',
        },
        {
            country: 'country2',
            city:    'city21',
        },
        {
            country: 'country3',
            city:    'city31',
        },
        {
            country: 'country1',
            city:    'city12',
        },
        {
            country: 'country1',
            city:    'city13',
        },
        {
            country: 'country2',
            city:    'city22',
        },
        {
            country: 'country3',
            city:    'city32',
        },
    ];
    const result = {
        'country1': [
            'city11', 'city12', 'city13',
        ],
        'country2': [
            'city21', 'city22'
        ],
        'country3': [
            'city31', 'city32'
        ],
    };
    expect(transformObjectsArray(array)).toEqual(result);
});
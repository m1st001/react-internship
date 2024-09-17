function translit(cyrillic) {
    const cyrillicToLatinMap = {
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch', 'Ы': 'Y', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    return cyrillic.split('').map(char => {
        if (cyrillicToLatinMap[char]) {
            return  cyrillicToLatinMap[char];
        }

        return char;
    }).join('');
}
exports.translit = translit

function sort2DArray(array) {
    array.sort((a, b) => {
        if (a.length == b.length) {
            return 0;
        }

        return a.length < b.length ? -1 : 1;
    });

    return array;
}
exports.sort2DArray = sort2DArray;

function transformObjectsArray(array) {
    let result = {};
    array.forEach(element => {
        result[element.country] = [];
    });

    array.forEach(element => {
        result[element.country].push(element.city);
    });

    return result;
}
exports.transformObjectsArray = transformObjectsArray;
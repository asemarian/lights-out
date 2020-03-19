const m1 = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0];
const m2 = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];

const dotProduct = (u, v) => u.map((x, i) => x * v[i]).reduce((a, b) => a + b, 0);

const isSolvable = (m) => {
    let v = m.flat();
    let s1 = dotProduct(v, m1);
    let s2 = dotProduct(v, m2);
    return s1 % 2 === 0 && s2 % 2 === 0 ? true : false;
}

const generatePattern = (size) => Array.from({ length: size }, x => Array.from({ length: size }, y => Math.floor(Math.random() * 2)));

const getSolvablePattern = (size) => {
    let pattern;
    do {
        pattern = generatePattern(size);
    } while (!isSolvable(pattern))

    return pattern.map(x => x.map(y => Boolean(y)));
}

export default getSolvablePattern;
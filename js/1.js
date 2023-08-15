//#1  _.last(array)

console.log(_.last([13, 89, 33]))
//33

//#2 _.fromPairs(Array)

const marks = {
    math: 11,
    literature: 10,
    IT: 12,
}

const test = Object.entries(marks);
console.log( _.fromPairs(test))

//#3 _.join(array, [separator=','])

console.log(_.join([ 'Матвій' ,  'Зощеноко' ,  'Антонович' ] ,  '_' ));
//Матвій_Зощеноко_Антонович

//#4 _.intersection([arrays])

console.log(_.intersection([32, 1203], [32, 134]))
// => [32]

//#5 _.initial(array)

console.log(_.initial([3212, 1239, 1943]))
// => [3212, 1239]

//#6 _.compact(array)

console.log(_.compact([ 3, true, 1, "", 2]))

// => [3, 1, 2]
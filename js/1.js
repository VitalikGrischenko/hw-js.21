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

//#5 _.initial(array)

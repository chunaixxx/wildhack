const natural = require('natural');

const getAnswer = message => {
    return new Promise((res, rej) => {
        natural.BayesClassifier.load('classifier.json', null, (err, classifier) => {
            if (err) rej()
            res(classifier.getClassifications(message))
        })
    })
}

module.exports = getAnswer
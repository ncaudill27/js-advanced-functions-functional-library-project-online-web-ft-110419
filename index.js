const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
        callback(newCollection[idx])

      return collection
    },

    map: function(coll, func) {
      const newColl = (coll instanceof Array) ? coll.slice() : Object.values(coll)
      const mutatedColl = []

      for ( let i = 0; i < newColl.length; i++ ) {
        mutatedColl.push(func(newColl[i]))
      }
      return mutatedColl
    },

    reduce: function(collection, callback = () => {}, acc) {
      let newColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      if (!acc) {
				acc = collection[0]
				newColl = collection.slice(1)
      }
      
      for ( let i = 0; i < newColl.length; i++ ) {
        acc = callback(acc, newColl[i], newColl)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },

    filter: function(collection, cb) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      let confirmed = []

      for (let idx = 0; idx < collection.length; idx++)
        if (cb(collection[idx])) confirmed.push(collection[idx])

      if (!confirmed.length) return undefined
      return confirmed
    },

    size: function(collection) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      
      return collection.length
    },

    first: function(collection, end) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      
      return end ? collection.slice(0, end) : collection[0]
    },

    last: function(collection, amt) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      return amt ? collection.slice(-(amt)) : parseInt(collection.slice(-1), 10)
    },

    compact: function(arr) {
      let keepers = []
      arr = arr.slice()

      for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] != false) keepers.push(arr[i])
      }
      return keepers
    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()

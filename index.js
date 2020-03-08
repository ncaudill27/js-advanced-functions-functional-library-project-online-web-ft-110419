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

    find: function(arr, cb = () => {}) {
      if (!(Array.isArray(arr))) {
        arr = Object.values(arr)
      }      

      for ( val in arr )
        if cb(arr[val] return arr[val]

      return undefined
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

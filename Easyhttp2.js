/**
 * EasyHTTP library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Jaymes Clement
 * @lisense MIT 
 * 
 * 
 **/

 class EasyHTTP {
  //   make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
    })   
  }


//   Make an HTTP Post request
post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
    })
  }

  //  Make an HTTP PUT request
put(url, data) {
  return new Promise ((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

//  Make a DELETE Request
delete(url) {
  return new Promise ((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => resolve('Resource deleted...'))
    .catch(err => reject(err))
  })
}
}


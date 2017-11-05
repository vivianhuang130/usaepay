import axios from 'axios'

class Access {
  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:3001/'
    })
  }
    getRequest(){
      return this.request({ method: 'GET', url:'/' })
        .then(response => console.log(response))
    }

  }

export default new Access()

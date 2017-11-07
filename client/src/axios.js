import axios from 'axios';

class Access {
  constructor() {
    this.request = axios.create({
      baseURL:'http://localhost:3001/'
    })
  }
  getRequest(){
    return this.request({ method: 'GET', url:'/' })
      .then(response => console.log(response))
    }
  purchase(user) {
    return this.request({method: 'POST', url: '/form', data: user})
      .then(response => console.log(response))
  }

  userInfo(user) {
    return this.request({method: 'POST', url: '/form', data: user})
      .then((response) => response.data.success)
  }
}

export default new Access()

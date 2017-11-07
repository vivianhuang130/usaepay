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


  signUp(userInfo) {
    return this.request({method: 'POST', url: '/users', data: userInfo})
      .then((response) => response.data.success)
  }
}

export default new Access()

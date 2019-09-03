import axios from 'axios'
export default class Xlr8rms {
    constructor() {
        axios.defaults.baseURL = "https://test.xlr8rms.com/";
    }

    login() {
        return new Promise(resolve => {
            axios.get('access-token').then(resp => {
                resolve(resp.data);
            });
        })
    }

    testToken() {
        return new Promise(resolve => {

            let token = undefined
            if (!token) {
                this.login().then((resp) => {
                    token = resp.accessToken;
                    sessionStorage.setItem('avatar', resp.user.avatar)
                    localStorage.setItem('token', token);
                    resolve(token);
                }).catch(e => {
                    console.log(e);
                })
            }
            else {
                resolve(token);
            }
        })

    }

    getData() {
        return new Promise(resolve => {
            this.testToken().then((token) => {
                axios.get('get-data?', {
                    params: {
                        accessToken: token
                    }
                }).then(resp => {
                    resolve(resp.data);
                });
            })

        })
    }

}


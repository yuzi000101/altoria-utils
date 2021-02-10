/* 
    封装axios函数发送ajax请求
*/
export const axios = function ({ method, url, params, data }) {
    return new Promise((resolve, reject) => {
        method = method.toUpperCase()

        const xhr = new XMLHttpRequest()
        let str = ''
        if (params) {
            Object.keys(params).forEach(key => {
                str += `${key}=${params[key]}&`
            })
            url += str.slice(0, -1)
        }
        xhr.open(method, url)

        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(data))
        } else if (method === 'GET') {
            xhr.send()
        }

        xhr.responseType = 'json'
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        status: xhr.status,
                        statusMsg: xhr.statusText,
                        data: xhr.response
                    })
                } else {
                    reject(new Error(`请求失败${xhr.status}`))
                }
            }
        }
    })
}

axios.get = function (url, options) {
    const config = {
        url,
        method: 'GET',
        params: options,
    }
    return axios(config)
}

axios.post = function (url, options) {
    const config = {
        url,
        method: 'post',
        params: options,
    }
    return axios(config)
}

axios.put = function (url, options) {
    const config = {
        url,
        method: 'put',
        params: options,
    }
    return axios(config)
}

axios.delete = function (url, options) {
    const config = {
        url,
        method: 'delete',
        params: options,
    }
    return axios(config)
}
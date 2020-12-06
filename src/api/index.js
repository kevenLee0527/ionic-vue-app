import instance from './request';
const api={
    get(url,data={}){
        return instance.get(url,{params:data})
    },
    post(url,data={}){
        return instance.post(url,data)
    },
    delete(url,data={}){
        return instance.delete(url,{params:data})
    },
    put(url,data={}){
        return instance.put(url,data)
    }

}
export default api
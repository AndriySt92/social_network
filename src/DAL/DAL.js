import axios from 'axios';

let instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':"a9338ad3-c1d0-477c-a406-6d203729c351"
    }
});


export const usersApi = {
    getUsers(numberPage=1, pageSize=10){
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
            .then(data=> {return data.data})
    },
    followAPI(userId){
        return instance.post(`follow/${userId}`)
            .then(data=> data)
    },
    unfollowAPI(userId){
        return instance.delete(`follow/${userId}`)
            .then(data=> data)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    }
} 

export const authMe = {
    getMe(){
        return instance.get(`/auth/me`);
    },
    login(email,password,rememberMe, captcha=null){
        debugger
        return instance.post(`auth/login`, {email,password,rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    captcha(){
        return instance.get(`/security/get-captcha-url`);
    }
}

export const profileApi = {
    
    getStatus(userId=2){
        return instance.get(`profile/status/${userId}`)
    },
    upgradeStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
    upgradePhoto(photo){
        
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
                }
        })
    },
    upgradeProfile(profileData){
        return instance.put(`profile`, profileData)
    }
}

import axios from "axios";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "73f895ce-ce90-4652-88c9-6610d55f3d3d",
      "Authorization": "Bearer 7d6b9db7-63ab-4119-857d-164901795073"
   }
})

export const usersAPI = {
   getUsers(currentPage: number, count: number = 20) {
      return instance.get(`users?page=${currentPage}&count=${count}`)
         .then(response => {
            return response.data
         })
   },
   getProfile(userId: number) {
      return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get(`profile/` + userId)
   },
   getStatus(userId: number) {
      return instance.get('profile/status/' + userId)
   },
   updateStatus(status: string) {
      return instance.put('profile/status', { status: status })
   },
   savePhoto(photoFile: string) {
      let formData = new FormData()
      formData.append("image", photoFile)
      return instance.put('profile/photo', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   login(email: string, password: string, rememberMe: boolean = false) {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },
   logout() {
      return instance.delete(`auth/login`)
   }
}
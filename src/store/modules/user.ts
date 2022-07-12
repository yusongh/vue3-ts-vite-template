import { defineStore } from 'pinia'
import { UserInfo } from '#/store'

interface State {
  userInfo: UserInfo
  token: string
}

const useUserStore = defineStore('userStore', {
  state(): State {
    return {
      userInfo: {
        userName: '',
        userId: ''
      },
      token: ''
    }
  },
  actions: {
    changeUserName(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})

export default useUserStore

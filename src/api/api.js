import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '092d50af-91b7-411c-8f68-37bb2d620169'
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data);
	},
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	},
	getUserProfile(userId) {
		console.warn('Вы используете устаревшую версию. Используйте profileAPI')
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put('profile/status', {status})
	}

}


export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe});
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}
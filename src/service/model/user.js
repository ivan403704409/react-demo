// import Api from 'api'
export const getUserData = (data) => {
	return new Promise(){
		axios.get(Api.get('getUserData'),{
			params: {
				name: '',

			}
		})
		.then(({data}) => {
			resolve(data)
		})
	}
}


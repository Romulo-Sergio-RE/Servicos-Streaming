import api from "../service/api"

export const useApi = () =>({
    getStreaming: async ()=>{
        const response = await api.get('/streaming')
        if(response){
            return response.data
        }else{
            console.log("error Api")
        }
    }
})



import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/diaryProgrammer/v1/comment',
    timeout: 5000
})

export const sendComment = async (Data) => {

    try {
        return  await apiClient.post('/', Data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}; 
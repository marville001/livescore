import axios from 'axios'


export const getLivescoresService = async () => {
    const GET_SCORES_ENDPOINT = 'https://ifk7liy2u3.execute-api.us-east-2.amazonaws.com/Prod'
    const { data } = await axios.get(GET_SCORES_ENDPOINT)
    const { Items } = data
    return Items
}
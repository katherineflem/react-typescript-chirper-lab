//file for chirps table

//import query helper function
import { Query } from './index'

//function to get all chirps
const getAll= async ()=>Query("SELECT * FROM chirpsdb")


export default {
    getAll
}
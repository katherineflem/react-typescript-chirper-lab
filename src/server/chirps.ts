//logic for get, put, delete chirps from backend 
import { Router } from 'express'
import chirpstore from './chirpstore'
import db from './db'

const router = Router()

//GET REQUEST FOR CHIRPS

// router.get('/:id?', (req, res) => {
//     let id = req.params.id;
//     if (id) {
//         res.json(chirpstore.GetChirp(id))
//     } else {
//         let data = (chirpstore.GetChirps());
//         let chirpsArray = Object['keys'](data).map(key => {
//             return {
//                 id: key,
//                 name: data[key].name,
//                 message: data[key].message
//             }
//         });
//         chirpsArray.pop();
//         res.json(chirpsArray)
//     }
// })

router.get('/api/chirps', async (req,res)=>{
    try{
        res.json(await db.Chirpsdb.getAll());
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

//POST REQUEST FOR CHIRPS
router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body);
    res.json('chirp added');
})

//PUT REQUEST FOR CHIRPS
router.put("/:id", (req, res) => {
    let id = req.params.id;
    let chirp = req.body;
    res.send(chirpstore.UpdateChirp(id, chirp))
})

//DELETE CHIRP REQUEST
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.send(chirpstore.DeleteChirp(id))
})

export default router
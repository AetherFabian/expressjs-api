
const getPets = (req, res) => {
  
}

const getPet = (req, res) => {
  console.log({"getPet": "todo anda bien"});
}

const postPet = (req, res) => {
  const newPet = req.bodyParser;
  console.log({"postPets": newPet});

  return res.json({"message":"Sí ando jalando pa"})
  
}

const putPet = (req, res) => {

}

const deletePet = (req, res) => {

}

const getPetByStatus = (req, res) => {

}

const postImagePet = (req, res) => {

}

export const methods = {
    getPets,
    getPet,
    postPet,
    putPet,
    deletePet,
    getPetByStatus,
    postImagePet
};
import React,{useState} from 'react'
import { Navbar,Container,Button,Modal } from 'react-bootstrap';
import ReactStars from "react-stars";
import { v4 as uuidv4 } from "uuid";
import "./MyNav.css";



const MyNav = ({setMovies,movies , setTitre , setStars,stars}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const [newMovie,setNewMovie]=useState({
    id:uuidv4(),
     title:"" ,
      description:"",
      poster:"",
      raiting:1,
    });

    const handlechange = (e) =>{
        if (e.target.name === "raiting"){
             setNewMovie({
               ...newMovie,
               [e.target.name]: parseInt(e.target.value),
             });
        }else{
            
            setNewMovie({...newMovie,[e.target.name]:e.target.value});
        }
};
const handleSave = ()=>{
   
setMovies( [...movies,newMovie]  )
handleClose()
}

const handleStars = (new_rating) => {setStars(new_rating)};
const handleTitre= (e) => {setTitre(e.target.value)};



  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> Movies Favorite</Navbar.Brand>
            <input
              type="text"
              placeholder="search by Title"
              onChange={handleTitre}
            />
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              half={false}
              value={stars}
              onChange={handleStars}
            />
            ,
            <Button variant="warning" onClick={handleShow}>
              Add Movie
            </Button>
          </Container>
        </Navbar>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="navbar">
              <div className="modal-form">
                <div className="modal-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title"
                    onChange={handlechange}
                    name="title"
                  />
                </div>

                <div className="modal-group">
                  <label htmlFor="poster">Poster URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="poster"
                    placeholder="Enter Poster"
                    onChange={handlechange}
                    name="poster"
                  />
                </div>

                <div className="modal-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control"
                    id="description"
                    placeholder="Enter Description"
                    onChange={handlechange}
                    name="description"
                  ></textarea>
                </div>

                <div className="modal-group">
                  <label htmlFor="raiting">Raiting:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="raiting"
                    placeholder="Enter Raiting"
                    onChange={handlechange}
                    name="raiting"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MyNav
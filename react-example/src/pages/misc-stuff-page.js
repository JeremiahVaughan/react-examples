import {useState} from "react";
import searchImages from "../api";
import AnimalShow from "../components/animal-show/AnimalShow";
import SearchBar from "../components/search-bar/SearchBar";
import ImageList from "../components/image-list/ImageList";
import BookCreate from "../components/book-create/BookCreate";
import BookList from "../components/book-list/BookList";
import './misc-stuff-page.scss'

function MiscStuffPage() {
  // DON'T DO THIS as this will cause a never ending rerender loop:
  // fetchBooks()

  const [images, setImages] = useState([])
  const handleSubmit = async term => {
    const result = await searchImages(term)
    setImages(result)
  }


  const [animals, setAnimals] = useState([])
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  })
  return (
    <div>
      <div className='animal-list'>{renderedAnimals}</div>
      <div className="title">
        <h1>Personal Assistant</h1>
      </div>
      <button onClick={handleClick}>Add Animal</button>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
      <BookCreate/>
      <BookList/>
    </div>
  );
}

export default MiscStuffPage;

function getRandomAnimal() {
  const animals = ['turtle', 'whale']
  return animals[Math.floor(Math.random() * animals.length)]
}

import { useEffect, useState } from 'react'
import Image_card from './compoente/Image_card'


import './App.css'
import Image_search from './compoente/Image_search';

function App() {
  const [Image, setImage] = useState([]);
  const [logging, setlogging] = useState(true);
  const [term, setterm] = useState('');

  useEffect(
    () => {
          fetch(`https://pixabay.com/api/?key=45868295-d8e3557a6931fa666529da5db&q=${term}&image_type=photo&pretty=true`)
              .then(res => res.json())
              .then((data) => setImage(data.hits))
          .catch((error) => console.error("API did not fetch the data properly", error));

    },[term]
  )


  return (
    <>
      
      <Image_search sreachtext={(text) => setterm(text)} />
      {Image.length === 0 && <div className='font-semibold text-center text-4xl'>{ `The Image is Not found for that ${term}  Event`}</div>}

   <div className="grid grid-cols-3 gap-4">
    
 {Image.map(image => (
          <Image_card key={image.id} image={image} />
        ))}
       
      </div>
    </>
  )
}

export default App

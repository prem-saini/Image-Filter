import React, { useState } from 'react';
import Data from './components/Data'
function App() {

  const [images, setImage] = useState(Data)

  const allItem = () => {
    const finalData = Data.filter((value) => {
      return value;
    })
    setImage(finalData)
  }

  const onlyPrem = (categoryItem) => {
    const finalData = Data.filter((value) => {
      return value.category === categoryItem
    })

    setImage(finalData)
  }
  const onlyManoj = (categoryItem) => {
    const finalData = Data.filter((value) => {
      return value.category === categoryItem
    })

    setImage(finalData)
  }
  const onlyMix = (categoryItem) => {
    const finalData = Data.filter((value) => {
      return value.category === categoryItem
    })
    setImage(finalData)
  }

  return (
    <>
      <div className="container my-3" >
        <div className="row">
          <div className="col-3">
            <button className='btn btn-primary' onClick={allItem}>All</button>
          </div>
          <div className="col-3">
            <button className='btn btn-primary' onClick={() => onlyPrem('Prem')}>Prem</button>
          </div>
          <div className="col-3">
            <button className='btn btn-primary' onClick={() => onlyManoj('Manoj')}>Manoj</button>
          </div>
          <div className="col-3">
            <button className='btn btn-primary' onClick={() => onlyMix('Mix')}>Mix</button>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 cols-md-2">
          {
            images.map((value) => {
              return (
                <div className="col mt-3">

                  <img src={value.image} className="img-fluid" alt="logo" />
                </div>

              );
            })
          }
        </div>
      </div>
    </>


  );
}

export default App;


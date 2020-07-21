import React from 'react'
import { data } from '../../assets/mockdata'
import ItemCard from '../../components/ItemCard'

function SearchPage(props) {
  const tag = props.match.params.tag

  return (
    <div id="SearchPage" className="container text-center" style={{paddingTop: '128px'}}>
      <h1 className="aparey">{tag}</h1>
      <div>
        Sort by
      </div>

      <div className="grid pt-4">
        <div className="row aparey">
          {data.filter(item => item.tags.includes(tag)).map((item, index) => (
            <div className="col-md-4 col-6" key={index}>
              <ItemCard details={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
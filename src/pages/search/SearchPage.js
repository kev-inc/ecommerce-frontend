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

      <div className="grid">
        <div className="row aparey">
          {data.filter(item => item.tags.includes(tag)).map((item, index) => (
            <div className="col-4" key={index} style={{paddingTop: '64px'}}>
              <ItemCard details={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
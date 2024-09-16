import React from 'react'


function Image_card({image}) {

    const tags=image.tags.split(',');

    return (
              <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
            <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-semibold text-purple-500 ">
            {image.user}
          </div>
          <ul>
            <li className=''><strong>viwer:</strong>
              {image.views}
            </li>
             <li className=''><strong>Download:</strong>
              {image.downloads}
            </li>
             <li className=''><strong>Like:</strong>
              {image.likes}
            </li>
          </ul>

                                <div className="px-6 py-4 ">
                                    {tags.map((tags, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tags}
                        </span>
                        ))}
        
          </div>
        </div>

     </div>
    )
}

export default Image_card

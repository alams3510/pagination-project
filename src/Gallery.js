import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import'bootstrap/dist/css/bootstrap.min.css';


function Gallery() {

    const [data, setdata] = useState([]);
//pagintion section ------------------>
    const[perpage, setperpage]=useState(3);
    const [pagination,setpagination]= useState({
        start:0,
        end:perpage
    });
function update(start,end){
setpagination({start:start,
    end:end
})
}
//data fetching section here
    const getresponse = async () => {
        const fetchdata = await fetch("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e");
        const data = await fetchdata.json();
        setdata(data.posts)
    }
    useEffect(() => {
        getresponse();

    }, [])

//---------------------------------------------

    return (

         <div className='container-fluid row bg-success d-flex justify-content-center'>

            {
                data.slice(pagination.start, pagination.end).map((item) => {
                    return (
                        <div key={item.event_date} className="card m-3" style={{width: '18rem'}}>
                            <img src={item.thumbnail_image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.event_name}</h5>
                                <p className="card-text">{item.event_date}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Likes : {item.likes}</li>
                                <li className="list-group-item">Shares :{item.shares}</li>
                                <li className="list-group-item">Views :{item.views}</li>
                            </ul>
                           
                        </div>
                    )
                })



            }
        <Pagination perpage={perpage} update={update} length={data.length}/>
        </div>
            
    )


}

export default Gallery;
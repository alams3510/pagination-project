import React ,{useEffect, useState} from 'react'


const Pagination = ({perpage,update,length}) => {
const[count,setcount]=useState(1);
console.log(length)
useEffect(() => {
   const value=count*perpage;
   update(value-perpage, value);
}, [count])

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <button className=' btn btn-dark' onClick={()=>setcount(count>1 ? count-1:count)}>Prev</button>
                <button className=' btn btn-dark' onClick={()=>setcount(count<=length/perpage ? count+1 :count)}>Next</button>

            </div>
        </div>
    )
}


export default Pagination;
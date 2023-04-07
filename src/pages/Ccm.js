import React,{useState,useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../Navbar';
import CcmDetail from './CcmDetail';
import Pagination from './Pagination'
import '../CSS/Ccm.css'
import { Container,Row ,Col} from 'react-bootstrap';

const Ccm = () => {
  const [source,setSource]=useState([]);



//  Pagination
const [currentPage,setCurrentPage]=useState(1)
const [postsPerPage,setPostsPerPage]=useState(4)
const [totalResult,setTotalResult]=useState(20);





  const getSource=async(keyword)=>{
    const url=`http://localhost:3004/ccm?q=${keyword}`;
    let res=await fetch(url)

    let data=await res.json()
  
    setTotalResult(data.length)
    setSource(data)
    
  }
  const search=async(e)=>{
    if(e.key === "Enter"){
      let keyword = e.target.value
      await getSource(keyword)
    
    }
  }

  const getAll=async()=>{
    const url1=`http://localhost:3004/ccm?_page=${currentPage}&_limit=${postsPerPage}`
    let res=await fetch(url1)
    let data=await res.json()
    setSource(data)
   
    console.log(data)
  }



  useEffect(()=>{
    getSource()
    getAll()
  },[currentPage,postsPerPage])


  const idxOfLastPost=currentPage *postsPerPage;
  const idxOfFirstPost=idxOfLastPost - postsPerPage;
  // const currentPosts=source.slice(idxOfFirstPost,idxOfLastPost)
  const paginate=(pageNumber)=>{setCurrentPage(pageNumber)}
console.log(source)
  return (


    <div className='Ccm'>
      
    <Navbar/>
   
      <h2 className='CcmDetail-title'>찬양듣기</h2>


      <div className='search-form'>
      <input onKeyDown={(e)=>search(e)} className='input' type='text' placeholder='search'></input>
        </div>
     <Container>
      <Row >
       
      {source.map(item=>(
      <Col lg={6}>
      <CcmDetail id={item.id} name={item.name} url={item.url} sheet={item.sheet}/>
      </Col>
      ))}
      
      </Row>
     </Container>
       
    
<Pagination postsPerPage={postsPerPage} totalPosts={20} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
    
  )
}

export default Ccm
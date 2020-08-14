import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/pagination.js';
import CustomCard from '../Custom-Card'; 
import Search from '../Search-Bar/SearchContent.js';
import Region from '../Select-Country/selectCountry.js';


const App = () => {
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage] = useState(15);
    const [searchCountry, setSearchCountry] = useState([]);
    const [mode, setMode] = useState(false);



    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const res = await axios.get("https://restcountries.eu/rest/v2/all");
        setCountry(res.data);
        setLoading(false);
      }

      fetchData();
    }, []);

  const indexOfLastPost = currentPage*countryPerPage;
  const indexOfFirstPost = indexOfLastPost - countryPerPage;
  const currentPosts = country.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div style={{ backgroundColor: mode?"white" : "#121212"}}>
      <div className="navbar navbar-expand-sm bg-primary navbar-dark">
        <h1>Countries</h1>
        
      </div>
      <button style={{ float: "right", marginTop: "10px" }} onClick= {()=>setMode(!mode)}>Change Mode</button>
  
    <div style={{  display: "flex", justifyContent: "center", paddingTop: "10px"}}>
      <Search country = {country} setSearchCountry = {setSearchCountry}/>
      <div style={{ display: "flex", marginLeft: "100px"}}>
      <Region country = {country} setSearchCountry={setSearchCountry} />
      </div>
    </div>
    
      
    
    <div style={{  display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
     <CustomCard country ={searchCountry.length>0 ?searchCountry : currentPosts} loading={loading} mode={mode}   />
     
    </div>
    <div style={{ display:"flex", justifyContent: "center" }}>
      <Pagination countryPerPage = {countryPerPage} totalPosts={country.length} paginate = {paginate}/>
    </div>
    </div>
  );
}

export default App;





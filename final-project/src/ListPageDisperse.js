import React, {useState, useEffect} from 'react';
import Page from './Page';
import ItemsOnPage from './ItemsOnPage';

function ListPageDisperse() {
  // page changes depending on user input, start on page 1
  const [page, setPage] = useState(1);
  // established based on constant 'maxPerPage' and length
  // of json being displayed
  const [totalPages, calcPages] = useState();
  const [maxPerPage, setMaxPerPage] = useState(15);
  
  function establishNumPages(jsonLength) {
    // calcPages(Math.ceil(jsonLength/maxPerPage));
    calcPages(jsonLength);
  }
  
  function refSetPage(pageInput) {
    setPage(pageInput);
  }

  useEffect(()=>{
    // mod if you want to adjust itemsPerPage
    setMaxPerPage(15);
  }, [])
  
  return (
    <>
      <Page setPage = {refSetPage} 
        totalPages = {totalPages}
        page = {page}></Page>
      <ItemsOnPage calcPages = {establishNumPages}
        page = {page}
        maxPerPage = {maxPerPage}>
      </ItemsOnPage>
    </>
  );
}

export default ListPageDisperse;

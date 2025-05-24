import React, { useEffect } from 'react';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';

const AddListing = () => {
    const { pathname } = useLocation();
    useEffect(() => {
            document.title = `AddListing-Adding Roommate Data| RooMatch `;
          }, []); 
           useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div>
           <div>
          <Header/>
           </div>
           <div className="pt-18 lg:pt-20">
            <ListingCard/>
           </div>
           <div>
            <Footer/>
           </div>
        </div>
    );
};

export default AddListing;
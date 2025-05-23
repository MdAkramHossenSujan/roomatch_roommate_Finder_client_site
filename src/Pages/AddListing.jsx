import React from 'react';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

const AddListing = () => {
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
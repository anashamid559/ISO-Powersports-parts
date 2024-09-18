import { useState } from 'react';


const useOffer = () => {
    const [inputValue, setInputValue] = useState<string>("$1100");
    const [offerSent, setOfferSent] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>("$1100");

    const handleButtonClick = (value: string) => {
        setInputValue(value);
        setSelectedValue(value); 
        setOfferSent(false); 
    };

    const handleSendOffer = () => {
        setOfferSent(true);
       
    };

    return {
        inputValue,
        offerSent,
        handleButtonClick,
        handleSendOffer,
        selectedValue,
    };
};

export default useOffer;

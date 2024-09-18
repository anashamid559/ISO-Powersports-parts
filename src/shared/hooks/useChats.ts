import { useState } from 'react';
import { SelectedKey } from '../types';

const useChats = () => {
    const [selected, setSelected] = useState<SelectedKey>('all');
    const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);
    const [showChatDetail, setShowChatDetail] = useState<boolean>(false);
    const [showChats, setShowChats] = useState<boolean>(true);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleBackClick = () => {
        setShowChats(true);
        setShowWelcomeMessage(true);
        setShowChatDetail(false);
        setClickedIndex(null);
    };

    const handleChatClick = (id: number) => {
        setClickedIndex(id);
        setShowWelcomeMessage(false);
        setShowChatDetail(true);
        setShowChats(false);
    };

    const handleCategoryClick = (category: SelectedKey) => {
        setSelected(category);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return {
        selected,
        showWelcomeMessage,
        showChatDetail,
        showChats,
        clickedIndex,
        handleBackClick,
        handleChatClick,
        handleCategoryClick,
        handleSearchChange,
        searchTerm,
    };
};

export default useChats;

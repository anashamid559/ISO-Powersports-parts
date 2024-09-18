import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import { chatData } from '../../utils/constants';

interface AllChatsProps {
    onChatClick: (id: number) => void;
    searchTerm: string;
}

const AllChats: React.FC<AllChatsProps> = ({ onChatClick, searchTerm }) => {
    const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

    const handleClick = (chatId: number) => {
        setSelectedChatId(selectedChatId === chatId ? null : chatId);
        onChatClick(chatId);
    };
    const filteredChats = chatData.filter(chat =>
        chat.descriptionTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className={classNames(styles.main, "flex flex-col")}>
           

                {filteredChats.map((chat) => (
                    <div className='flex flex-col' key={chat.id}>
                        <div
                            className={classNames(styles.box, "flex justify-between items-center", {
                                [styles.selected]: selectedChatId === chat.id
                            })}
                            onClick={() => handleClick(chat.id)}
                        >
                            <div className={classNames(styles.description, "flex items-center gap-2")}>
                                <img src={chat.imageSrc} alt="Chat" />
                                <div className={classNames("flex flex-col gap-1")}>
                                    <p>{chat.descriptionTitle}</p>
                                    <span>{chat.descriptionText}</span>
                                </div>
                            </div>
                            <div className={classNames(styles.tag, "flex flex-col gap-1 ml-auto")}>
                                <p>{chat.date}</p>
                                {chat.count !== null && <span>{chat.count}</span>}
                            </div>
                        </div>
                        {selectedChatId !== chat.id && <div className={classNames(styles.line)}></div>}

                    </div>
                ))}
            
        </div>
    );
};

export default AllChats;

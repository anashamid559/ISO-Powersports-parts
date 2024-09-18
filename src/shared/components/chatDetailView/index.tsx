import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ChatDetail from '../chatDetail';
import Top from '../chat_top';
import Bottom from '../chat_bottom';
import Chats from '../home/chats';

interface ChatDetailViewProps {
    showWelcomeMessage: boolean;
    showChatDetail: boolean;
    clickedIndex: number | null;
    handleBackClick: () => void;
    showChats: boolean;
}

const ChatDetailView: React.FC<ChatDetailViewProps> = ({
    showWelcomeMessage,
    showChatDetail,
    clickedIndex,
    handleBackClick,
    showChats,

}) => {
    return (
        <>
            {showChatDetail ? (
               <div className={classNames(
                styles.chatbox,
                "flex flex-col w-full lg:w-2/3 rounded-[24px] lg:rounded-[0_24px_24px_0] border border-custom-gray border-l-0 sm:border-l border-l-custom-gray"
              )}>
                  
                    <Top onBackClick={handleBackClick} />
                    {clickedIndex === 1 ? (
                <>
                    <ChatDetail />
                </>
            ) : (
                <div className={classNames(styles.emptybox)}></div>
            )}
            <Bottom />
        </div >
            ) : (
    <div
        className={classNames(

            styles.big, "flex flex-col w-full lg:w-2/3",
            {

                "w-full": showChatDetail,
                //"lg:w-2/3": !showChatDetail, 
                "hidden md:flex": !showChatDetail,
            },
        )}
    >
        {showWelcomeMessage && (
            <p>
                Welcome to ISO Powerspots! 🚀 You've entered a hub of energy and connection. <br />
                Explore vibrant discussions, power up your network with meaningful interactions, <br />
                and discover hotspots of activity. Ready to make an impact? Start chatting now!
            </p>
        )}
    </div>
)}
        </>

    );
};

export default ChatDetailView;

import classNames from 'classnames';
import React from 'react';
import { Icons } from '../../../../assets';
import useChats from '../../../hooks/useChats';
import { getRedLinePosition } from '../../../utils/constants';
import Categories from '../../Categories';
import ChatDetailView from '../../chatDetailView';
import styles from './style.module.scss';

const Chats: React.FC = () => {

    const {
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
    } = useChats();

    return (
        <section>
            <div className={classNames(styles.customContainer)}>
                <div className={classNames(styles.main, "flex")}>
                    <div className={classNames(
                        styles.chats,
                        "flex flex-col border border-gray-300 border-solid rounded-[24px] md:rounded-[24px_0_0_24px]",
                        {
                            "lg:w-1/3 w-full ": showChats,
                            "w-1/3": !showChats,
                            "hidden md:hidden lg:flex": !showChats,
                        }
                    )}>
                        <h4>CHATS</h4>
                        <div className={classNames(styles.border, "flex items-center")}>
                            <Icons.Search_engine />
                            <input
                                type="text"
                                placeholder="Search chat"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="ml-2"
                            />
                        </div>
                        <div className={classNames(styles.list, "flex flex-col")}>
                            <div className={classNames(styles.btn, "flex")}>
                                <button onClick={() => handleCategoryClick('all')}>All</button>
                                <button onClick={() => handleCategoryClick('buying')}>Buying</button>
                                <button onClick={() => handleCategoryClick('selling')}>Selling</button>
                            </div>
                            <div className={styles.lineContainer}>
                                <div className={styles.grayLine}></div>
                                <div
                                    className={styles.redLine}
                                    style={getRedLinePosition(selected)}
                                ></div>
                            </div>
                            {selected === 'all' && (
                                <Categories onChatClick={handleChatClick} searchTerm={searchTerm} />
                            )}

                        </div>
                    </div>

                    <ChatDetailView
                        showWelcomeMessage={showWelcomeMessage}
                        showChatDetail={showChatDetail}
                        clickedIndex={clickedIndex}
                        handleBackClick={handleBackClick}
                        showChats={showChats}
                    />
                </div>
            </div>
        </section>
    );
};

export default Chats;

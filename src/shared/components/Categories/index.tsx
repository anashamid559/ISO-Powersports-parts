import classNames from 'classnames';
import React, { useState } from 'react';
import AllChats from '../AllChats';
import styles from './style.module.scss';

type SelectedKey = 'all' | 'unread' | 'archived';

interface CategoriesProps {
    onChatClick: (id: number) => void; 
    searchTerm: string;
}

const Categories: React.FC<CategoriesProps> = ({ onChatClick,searchTerm }) => {
    const [selected, setSelected] = useState<SelectedKey>('all');

    return (
        <div className={classNames("flex flex-col gap-4 pt-4")}>
            <div className={classNames(styles.content, "flex gap-4")}>
                <button
                    className={classNames(styles.button, { [styles.selected]: selected === 'all' })}
                    onClick={() => setSelected('all')}
                >
                    All
                </button>
                <button
                    className={classNames(styles.button, { [styles.selected]: selected === 'unread' })}
                    onClick={() => setSelected('unread')}
                >
                    Unread
                </button>
                <button
                    className={classNames(styles.button, { [styles.selected]: selected === 'archived' })}
                    onClick={() => setSelected('archived')}
                >
                    Archived
                </button>
            </div>

            {selected === 'all' && <AllChats onChatClick={onChatClick} searchTerm={searchTerm} />}
        </div>
    );
};

export default Categories;

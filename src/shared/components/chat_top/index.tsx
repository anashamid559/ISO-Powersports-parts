import classNames from 'classnames';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Icons, Images } from '../../../assets';
import styles from './style.module.scss';


interface ChatDetailProps {
    onBackClick: () => void;
}

const Top: React.FC<ChatDetailProps> = ({ onBackClick }) => {


    return (

        <div className={classNames(styles.border, "flex justify-between items-center")}>
            <div className="flex gap-6 items-stretch h-12">
                <button onClick={onBackClick} className="lg:hidden flex items-center">
                   <FaChevronLeft />
                </button>
                <div className={classNames("flex items-center gap-4")}>
                    <img src={Images.User} alt="User" className="h-10 w-10 rounded-full" />
                    <h5 className="text-lg">ARLENE MCCOY</h5>
                </div>
            </div>


            <Icons.More />
        </div>

    );
};

export default Top;

import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons, Images } from '../../../assets';
import { FaSearch } from 'react-icons/fa';
import styles from "./style.module.scss";

interface SideNavProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
    const sideNavRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className={classNames(styles.sideNav, { [styles.open]: isOpen })} ref={sideNavRef}>
            <button className={styles.closeBtn} onClick={onClose}>×</button>

            <img src={Images.Logo} alt="Powersports" />

            <ul className={classNames("flex flex-col items-start pt-8")}>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/">Why ISO</Link></li>
                <li className={classNames("flex items-center gap-2 cursor-pointer")}>
                    In Search Of Listings <Icons.List />
                </li>
                <li className={classNames("flex items-center gap-2 cursor-pointer")}>
                    For Sale Listings <Icons.List />
                </li>
            </ul>

            <div className={classNames(styles.navExtras, "flex flex-col items-start mt-10 ")}>
                <div className={classNames("flex flex-col items-center gap-2 block md:hidden")}>
                    <div className='flex mr-14 gap-2 items-center'><span>Search</span> <FaSearch size={20} color="white" /></div>
                    <div className='flex mt-2'><span>Notifications</span><Icons.Notify /></div>
                    <div className='flex mr-4'> <span>Messages</span><Icons.Notification /></div>
                </div>
                <div className={classNames(styles.list, "flex items-center gap-2 block xs:hidden")}>
                    <span><Icons.Plus /> Create a Listing </span>
                </div>
            </div>
        </div>
    );
};

export default SideNav;

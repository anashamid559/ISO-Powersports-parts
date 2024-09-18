import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icons, Images } from '../../../../assets';
import useSideNav from '../../../hooks/useSideNav';
import SideNav from '../../sidebarNav';
import styles from './style.module.scss';

const Header = () => {

    const { isSideNavOpen, toggleSideNav, closeSideNav, isLargeScreen } = useSideNav();

    return (
        <section>
            <div className={classNames(styles.header, "")}>
                <div className={classNames(styles.customContainer)}>
                    <nav className={classNames("flex justify-between")}>
                        <div className={classNames("flex items-center gap-8")}>
                            <div className={classNames(styles.hamburgerMenu, "flex lg:hidden")} onClick={toggleSideNav}>
                                ☰
                            </div>
                            <img src={Images.Logo} alt="Powersports" />

                            <ul className={classNames("lg:flex hidden ms-2 items-center")}>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li><Link to="/">Why ISO</Link></li>

                                <li className={classNames("flex items-center gap-2 cursor-pointer")}>In Search Of Listings <Icons.List /></li>
                                <li className={classNames("flex items-center gap-2 cursor-pointer")}>For Sale Listings <Icons.List /></li>

                            </ul>
                        </div>


                        <div className={classNames(styles.navExtras, "items-center flex")}>
                            <div className={classNames("items-center gap-2 hidden md:flex")}>
                                <Icons.Search />
                                <Icons.Notify />
                                <Icons.Notification />
                            </div>
                            <Icons.User />
                            <div className={classNames("items-center gap-2 hidden xs:flex")}>
                                <span><Icons.Plus />Create a Listing</span>
                            </div>

                        </div>
                    </nav>
                    <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />
                </div>
            </div>
            <div>
            </div>

            <div className={classNames(styles.main)}>

                <h3> MY <span> MESSAGES </span></h3>

            </div>
        </section>

    );
};

export default Header;

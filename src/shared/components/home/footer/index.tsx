import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icons, Images } from '../../../../assets';
import useSideNav from '../../../hooks/useSideNav';
import SideNav from '../../sidebarNav';
import styles from './style.module.scss';
import { linksData } from '../../../utils/constants';
import { footerLinks } from '../../../utils/constants';

const Footer = () => {


    return (
        <section>
            <div className={classNames(styles.footer, "mt-12")}>
                <div className={classNames(styles.customContainer)}>
                    <div className={classNames(styles.content, "flex flex-col")}>
                        <img src={Images.Logo} />
                        <div className={classNames(styles.main, "grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4")}>
                            {linksData.map(section => (
                                <div key={section.heading} className={classNames(styles.description, "flex flex-col ")}>
                                    <h4>{section.heading}</h4>
                                    {section.links.map(link => (
                                        <Link key={link.text} to={link.to} className={classNames(styles.link)}>{link.text}</Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className={classNames(styles.line)}></div>

                        <div className={classNames(styles.bottom, "flex flex-col md:flex-row justify-between items-center p-4")}>
                            <span>© Copyright 2024 ISO Powersports Parts. All rights reserved.</span>

                            <ul className="flex flex-col md:flex-row ">
                                {footerLinks.map(link => (
                                    <li key={link.text}>
                                        <Link to={link.to}>{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                            <Icons.Facebook className="mt-2 md:mt-0 " />
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Footer;

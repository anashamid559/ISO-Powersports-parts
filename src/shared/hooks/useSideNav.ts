import { useEffect, useState } from 'react';

const useSideNav = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    const toggleSideNav = () => {
        setIsSideNavOpen(prevState => !prevState);
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            const isNowLargeScreen = window.innerWidth >= 1024;
            setIsLargeScreen(isNowLargeScreen);
            if (isNowLargeScreen) {
                closeSideNav();
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isSideNavOpen, toggleSideNav, closeSideNav, isLargeScreen };
};

export default useSideNav;

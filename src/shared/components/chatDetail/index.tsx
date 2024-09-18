import classNames from 'classnames';
import { Icons, Images } from '../../../assets';
import styles from './style.module.scss';
import useOffer from '../../hooks/useOffer';


const ChatDetail = () => {
    const {
        inputValue,
        offerSent,
        handleButtonClick,
        handleSendOffer,
        selectedValue,

    } = useOffer();
    return (
       
            <div className={classNames(styles.content)}>
            

                <div className={classNames(styles.border, "flex flex-col xs:flex-row lg:flex-row justify-between")}>
                    <div className={classNames("flex gap-4 items-center")}>
                        <img src={Images.Coster} alt="Coster" />
                        <div className={classNames("flex flex-col gap-1")}>
                            <span>July 25, 2023</span>
                            <h3>In Search Of <span>F2 Roost Deflector</span></h3>
                        </div>
                    </div>
                    <div className={classNames(styles.group, "flex")}>
                        <span>View Listing</span>
                        <span className={classNames(styles.text)}>Send an Offer</span>
                    </div>
                </div>
                <div className={classNames(styles.description, "flex flex-col pt-4 gap-3")}>
                    <img src={Images.Jacket} alt="Jacket" />
                    <span>4:32 AM</span>
                </div>

                <div className={classNames(styles.messages, "flex flex-col pt-6")}>
                    <span>Amateurs think about how much money they can make. Professionals think <br /> about how much money they could lose</span>
                    <span>It's not always easy to do what's not popular, but that's where you make your <br />money. Buy stocks that look bad to less careful investors and hang on until their <br /> real value is recognized.</span>
                    <text>4:26 AM</text>
                </div>

                <div className={classNames(styles.text, "flex")}>
                    <span>99%+ of traders don't care about Ferraris and yachts. They just want to pay <br />their bills, save a little extra money, and sleep well at night. The only way to do <br />that is to bat 70% or more. Anything less, and these goals are nothing more <br />than fantasy.</span>
                </div>

                <div className={classNames(styles.bottom, "flex flex-col xs:flex-row lg:flex-row gap-4 justify-between")}>
                    {offerSent ? (
                        <div className={classNames(styles.offerSent,"flex flex-col items-end")}>
                            <span>{`${selectedValue}`}</span>
                            <p>Your offer to Arlene McCoy</p>
                        </div>
                    ) : (
                        <>
                            <div className={classNames(styles.deal, "flex gap-2 items-center")}>
                                <Icons.Cross className={classNames(styles.cross)} />
                                {["$1100", "$1000", "$900", "$800"].map((value) => (
                                    <button
                                        key={value}
                                        onClick={() => handleButtonClick(value)}
                                        className={classNames(styles.button, {
                                            [styles.selected]: selectedValue === value,
                                        })}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                            <div className={classNames(styles.offer, "flex items-center gap-4")}>
                                <div className={classNames("flex flex-col gap-2")}>
                                    <input type="text" value={inputValue} readOnly />
                                    <div className={classNames(styles.line)}></div>
                                </div>
                                <button onClick={handleSendOffer}>
                                    {"Send Offer"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        
    );
};

export default ChatDetail;

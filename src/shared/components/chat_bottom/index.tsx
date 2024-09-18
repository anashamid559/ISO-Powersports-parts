import classNames from 'classnames';
import React from 'react';
import { Icons } from '../../../assets';
import styles from './style.module.scss';


const Bottom: React.FC = () => {


    return (
       
            <div className={classNames(styles.bottom)}>
                <div className={classNames(styles.box)}>
                <div className={classNames(styles.description,"flex justify-between items-center")}>
                    <div className={classNames("flex items-center gap-2")}>
                        <Icons.Attach className={classNames(styles.attach)} />
                        <Icons.Image className={classNames(styles.image)}/>
                        <input
                                type="text"
                                placeholder="Write message"
                                className="ml-2"
                            />
                    </div>
                    <Icons.Send className={classNames(styles.send,"cursor-pointer")}/>
                    </div>
                </div>
            </div>
    );
};

export default Bottom;

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1653897600&x-signature=9RKlUW0tp7ih58BNMF98v6jU2BI%3D"
                    className={cx('avatar')}
                    alt="name"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van a</span>
                        <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                    </h4>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
            </div>
        </>
    )
}

export default AccountItem

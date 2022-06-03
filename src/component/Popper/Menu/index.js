import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/component/Popper'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'
const cx = classNames.bind(styles)

function Menu({ children, menuItems, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: menuItems }])
    const current = history[history.length - 1]

    const renderMenuItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    return (
        <>
            <Tippy
                interactive
                placement="bottom-end"
                delay={[0, 500]}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {history.length > 1 && (
                                <Header
                                    title="Language"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1))
                                    }}
                                />
                            )}
                            {renderMenuItems()}
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </Tippy>
        </>
    )
}

export default Menu

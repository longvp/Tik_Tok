import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary,
    outline,
    rounded,
    text,
    disabled,
    small,
    large,
    leftIcon,
    children,
    onClick,
    ...passProps
}) {
    let Component = 'button'

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    })

    const props = {
        onClick,
        ...passProps,
    }

    if (disabled) {
        delete props.onClick
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    )
}

export default Button

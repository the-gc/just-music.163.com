import React , {forwardRef, useState, useEffect, useRef, useImperativeHandle} from 'react'
import PropTypes from 'prop-types'
import styles from 'styled-components'
import B_Scroll from 'better-scroll'


const ScrollContainer = styles.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Scroll = forwardRef((props, ref) => {
    const [b_Scroll, setB_Scroll] = useState();

    const scrollContainerRef = useRef();

    const {direction, click, refresh, bounceTop, bounceBottom} = props;

    const {pullUp, pullDown, onScroll} = props;

    useEffect(() => {
        const scroll = new B_Scroll(scrollContainerRef.current, {
            scrollX: direction === 'horizental',
            scrollY: direction === 'vertical',
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        });
        setB_Scroll(scroll);
        return () => {
            setB_Scroll(null);
        }
    }, []);

    useEffect(() => {
        if (!b_Scroll || !onscroll) {return}

        b_Scroll.on('scroll', (scroll) => {
            onScroll(scroll);
        });
        return () => {
            b_Scroll.off('scroll');
        }
    }, [onScroll, b_Scroll]);

    // 进行上拉到底的判断，调用上拉刷新的函数
    useEffect(() => {
        if (!b_Scroll || !pullUp) {return}
        b_Scroll.on('scrollEnd', () => {
            // 判断是否滑动到了底部
            if (b_Scroll.y <= b_Scroll.maxScrollY + 100) {
                pullUp();
            }
        });
        return () => {
            b_Scroll.off('scrollEnd');
        }
    }, [pullUp, b_Scroll]);

    // 进行下拉的判断， 调用下拉刷新的函数
    useEffect(() => {
        if (!b_Scroll || !pullDown) {return}
        b_Scroll.on('touchEnd', (pos) => {
            // 判断用户的下拉动作
            if (pos.y > 50) {
                pullDown();
            }
        });

        return () => {
            b_Scroll.off('touchEnd');
        }
    }, [pullDown, b_Scroll]);

    useEffect(() => {
        if (refresh && b_Scroll) {
            b_Scroll.refresh();
        }
    });

    useImperativeHandle(ref, () => ({
        refresh() {
            if(b_Scroll) {
                b_Scroll.refresh();
                b_Scroll.scrollTo(0, 0);
            }
        },
        getBScroll() {
            if(b_Scroll) {
                return b_Scroll
            }
        }
    }));

    return (
        <ScrollContainer ref={scrollContainerRef}>
            {props.children}
        </ScrollContainer>
    )
})

Scroll.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullUp: null,
    pullDown: null,
    pullUpLoading: false,
    pullDownLoading: false,
    bounceTop: true, // 是否支持向上吸顶
    bounceBottom: true
};

Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizental']),
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullDown: PropTypes.func,
    pullUpLoading: PropTypes.bool,
    pullDownLoading: PropTypes.bool,
    bounceTop: PropTypes.bool, // 是否支持向上吸顶
    bounceBottom: PropTypes.bool
};

export default Scroll
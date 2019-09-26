import React, { useState, useEffect, useRef, memo } from "react"
import styled from 'styled-components'
import style from '../../assets/global-style'
import Scroll from '../../components/Scroll/index'
import { PropTypes } from "prop-types";

const List = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    overflow: hidden;
    >span:first-of-type{
        display: block;
        flex: 0 0 auto;
        padding: 5px 0;
        margin-right: 5px;
        color: grey;
        font-size: ${style["font-size-m"]};
        vertical-align: middle;
    }
`
const ListItem = styled.span`
    flex: 0 0 auto;
    font-size: ${style["font-size-m"]};
    padding: 5px 8px;
    border-radius: 10px;
    &.selected{
        color: ${style['theme-color']};
        border: 1px solid ${style["theme-color"]};
        opacity: 0.8;
    }
`

function Horizen(props) {
    const { list, oldVal, title } = props;
    const { handleClick } = props;
    const Category = useRef(null);

    useEffect(() => {
        let categoryDOM = Category.current;
        let tagElems = categoryDOM.querySelectorAll('span');
        let totalWidth = 0;
        Array.from(tagElems).forEach(ele => {
            totalWidth += ele.offsetWidth;
        });
        categoryDOM.style.width = `${totalWidth}px`;
    }, [])

    return (
        <Scroll direction={"horizental"}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map((item) => {
                            return (
                                <ListItem 
                                  key={item.key}
                                  className={`${oldVal === item.key ? 'select' : ''}`}
                                  onClick={() => {handleClick(item)}}>
                                    {item.name}  
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll>
    )
}
Horizen.defaultProps = {
    list: [],
    oldVal: '',
    title: '',
    handleClick: null
};

Horizen.protoTypes = {
    list: PropTypes.array,
    oldVal: PropTypes.String,
    title: PropTypes.String,
    handleClick: PropTypes.func
};

export default memo(Horizen);
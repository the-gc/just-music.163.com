import React, { useState } from 'react'
import { connect } from "react-redux";
import Scroll from '../../components/Scroll'
import Horizen from "../../baseUI/horizen-item";
import { categoryTypes, alphaTypes} from "../../api/config";
import { NavContainer, List, ListItem, ListContainer} from './style'
import { 
    getSingerList,
    getHotSingerList,
    changeEnterLoading,
    changePageCount,
    refreshMoreSingerList,
    changePullDownLoading,
    changePullUpLoading,
    refreshMoreHotSingerList,
 } from "./store/actionCreators";


// mock数据
// const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map(item => {
//     return {
//       picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
//       name: "隔壁老樊",
//       accountId: 277313426,
//     }
// });


 
function Singer(props) {
    const { singerList, pageCount, pullUpLoading, pullDownLoading, enterLoading} = props;
    const {updateDispatch} = props;
    let [category, setCategory] = useState('');
    let [alpha, setAlpha] = useState('');
    let handleUpdateAlpha = (val) => {
        setAlpha(val);
        updateDispatch(category, val);
    }
    let handleUpdateCategory = (val) => {
        setCategory(val);
        updateDispatch(val, alpha);
    }

    const handlePullUp = () => {
        //pullUpRefreshDispatch(category, alpha, category === '', pageCount);
      };
      
    const handlePullDown = () => {
        //pullDownRefreshDispatch(category, alpha);
    };

    const renderSingerList = () => {
        const {singerList} = props;
        return (
            <List>
                {
                    singerList.map((item, index) => {
                        return (
                            <ListItem key={item.accountId + ' ' + index}>
                                <div className="img_wrapper">
                                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                                </div>
                                <span className="name">{item.name}</span>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

    return (
        <div>
            <NavContainer>
                <Horizen 
                  list={categoryTypes} 
                  handleClick={(val) => handleUpdateCategory(val)}
                  oldVal={category}
                  title={"分类(默认热门：)"}></Horizen>
                <Horizen 
                  list={alphaTypes} 
                  handleClick={(val) => handleUpdateAlpha(val)}
                  oldVal={alpha}
                  title={"首字母："}></Horizen>
            </NavContainer>
            <ListContainer>
                <Scroll
                  pullUp={ handlePullUp }
                  pullDown = { handlePullDown }
                  pullUpLoading = { pullUpLoading }
                  pullDownLoading = { pullDownLoading }
                >
                    {renderSingerList()}
                </Scroll>
            </ListContainer>
        </div>
        
    )
}

const mapStateTopProps = (state) => ({
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getHotSingerDispatch() {
            dispatch(getHotSingerList())
        },
        updateDispatch(category, alpha) {
            dispatch(changePageCount(0)); // 改变了分类 pageCount 清零
            dispatch(changeEnterLoading(true));
            dispatch(getSingerList(category, alpha));
        },
        //  滑到最底端刷新部分的处理
        pullUpRefreshDispatch(category, alpha, hot, count) {
            dispatch(changePullUpLoading(true));
            dispatch(changePageCount(count+1));
            if(hot) {
                dispatch(refreshMoreHotSingerList());
            }else {
                dispatch(refreshMoreSingerList(category, alpha))
            }
        },
        // 顶部下拉刷新
        pullDownRefreshDispatch(category, alpha) {
            dispatch(changePullDownLoading(true));
            dispatch(changePageCount(0)); // 重新获取数据 pageCount 清零
            if (category === '' && alpha === '') {
                dispatch(getHotSingerList());
            }else {
                dispatch(getSingerList(category, alpha))
            }
        }
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Singer)
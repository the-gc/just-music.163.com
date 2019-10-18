import React, { useEffect } from 'react'
import { renderRoutes } from "react-router-config";
import Slider from '../../components/slider/index'
import { connect } from "react-redux"
import { forceCheck } from 'react-lazyload'
import * as actionTypes from "./store/actionCreators"
import RecommendList from '../../components/list'
import Scroll from '../../components/Scroll'
import Loading from '../../baseUI/loading/index'
import { Content } from './style'

function Recommend(props) {
    const { bannerList, recommendList, enterLoading } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect(() => {
        if (!bannerList.size) {
            getBannerDataDispatch();
        }
        if (!recommendList.size) {
            getRecommendListDataDispatch();
        }
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];
    return (
        <Content>
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <div><Slider bannerList={bannerListJS}></Slider></div>
                    <RecommendList recommendList={recommendListJS}></RecommendList>    
                </div>  
            </Scroll>
            { enterLoading ? <Loading></Loading> : null }
            { renderRoutes(props.route.children)}
        </Content>
    )
}

const mapStateToProps = (state) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
    enterLoading: state.getIn(['recommend', 'enterLoading'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))
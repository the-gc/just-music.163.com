// 存放不同的action

import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
});

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMAND_LIST,
    data: fromJS(data)
});

export const getBannerList = () => {
    return (dispatch) => {
        
    }
}
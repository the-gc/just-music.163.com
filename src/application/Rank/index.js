import React , { useEffect} from 'react'
import { connect } from "react-redux";
import { getRankList } from './store';
import { filterIndex } from "../../api/utils";


function Rank(props) {
    const {rankList, loading} = props;
    const {getRankListDataDispatch} = props;

    useEffect(() => {
        getRankListDataDispatch();
    }, []);

    let globalStartIndex = filterIndex(rankList);
    let officialList = rankList.slice(0, globalStartIndex);
    let globalList = rankList.slice(globalStartIndex);
    return (
        <div>Rank</div>
    )
}


const mapStateToProps = (state) => ({
    rankList: state.getIn(['rank', 'rankList']),
    loading: state.getIn(['rank', 'loading'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getRankListDataDispatch() {
            dispatch(getRankList());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));
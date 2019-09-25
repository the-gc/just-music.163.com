import React, { useState } from 'react'
import Scroll from '../../components/Scroll'
import Horizen from "../../baseUI/horizen-item";
import { categoryTypes, alphaTypes} from "../../api/config";
import { NavContainer, List, ListItem, ListContainer} from './style'

// mock数据
const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map(item => {
    return {
      picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
      name: "隔壁老樊",
      accountId: 277313426,
    }
});

const renderSingerList = () => {
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
 
function Singer(props) {
    let [category, setCategory] = useState('');
    let [alpha, setAlpha] = useState('');

    let handleUpdateAlpha = (val) => {
        setAlpha(val)
    }
    let handleUpdateCategory = (val) => {
        setCategory(val)
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
                <Scroll>
                    {renderSingerList()}
                </Scroll>
            </ListContainer>
        </div>
        
    )
}
export default React.memo(Singer)
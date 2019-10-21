import React, {useState} from "react"
import { Container, TopDesc, Menu} from "./style"
import { CSSTransition } from 'react-transition-group'
import Header from '../../baseUI/header/index'
import Scroll from '../../components/Scroll/index'
import { SongList } from "../Rank/style"

/*
切入动画
设定transfrom的固定点，接下来的动画都是绕这个点旋转或平移
设置rotateZ的值，让整个页面能够拥有Z坐标方向的矢量
*/

function Album(props) {
    const [showState, setShowState] = useState(true);

    const handleback = () => {
        setShowState(false);
    }
    // mock 数据
    const currentAlbum = {
        creator: {
          avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
          nickname: "浪里推舟"
        },
        coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
        subscribedCount: 2010711,
        name: "听完就睡，耳机是天黑以后柔软的梦境",
        tracks:[
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
          {
            name: "我真的受伤了",
            ar: [{name: "张学友"}, {name: "周华健"}],
            al: {
              name: "学友 热"
            }
          },
        ]
    }
    return (
        <CSSTransition
          in={showState}
          timeout={300}
          classNames={"fly"}
          appear={true}
          unmountOnExit
          onExit={props.history.goBack}>
            <Container>
                <Header title={"返回"} handleClick={handleback}></Header>
                <Scroll bounceTop={currentAlbum.coverImgUrl}>
                    <div>
                        <TopDesc background={currentAlbum.coverImgUrl}>
                            <div className="background">
                                <div className="filter"></div>
                            </div>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <img src={currentAlbum.coverImgUrl} alt="" />
                                <div className="play_count">
                                    <i className="fa"></i>
                                    <span className="count">{Math.floor(currentAlbum.subscribedCount/1000)/10}万</span>
                                </div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="title">{currentAlbum.name}</div>
                                <div className="person">
                                    <div className="avatar">
                                        <img src={currentAlbum.creator.avatarUrl} alt=""/>
                                    </div>
                                    <div name="name">{currentAlbum.creator.nickname}</div>
                                </div>
                            </div>
                        </TopDesc>
                        <Menu>
                            <div>
                                <i className="fa"></i>
                                评论
                            </div>
                            <div>
                                <i className="fa"></i>
                                点赞
                            </div>
                            <div>
                                <i className="fa"></i>
                                收藏
                            </div>
                            <div>
                                <i className="fa"></i>
                                更多
                            </div>
                        </Menu>
                        <SongList>
                            <div className="first_line">
                                
                            </div>
                        </SongList>
                    </div>
                </Scroll>
            </Container>
        </CSSTransition>
    )
}

export default React.memo(Album)
import React, {useState} from "react"
import { Container, TopDesc, Menu, SongList, SongItem} from "./style"
import { CSSTransition } from 'react-transition-group'
import Header from '../../baseUI/header/index'
import Scroll from '../../components/Scroll/index'
import style from "../../assets/global-style";
import { getName, getCount} from "../../api/utils";

/*
切入动画
设定transfrom的固定点，接下来的动画都是绕这个点旋转或平移
设置rotateZ的值，让整个页面能够拥有Z坐标方向的矢量
*/
// export const HEADER_HEIGHT = 45;
// const handleScroll = (pos) => {
//   let minScrollY = -HEADER_HEIGHT;
//   let percent = Math.abs(pos.y/minScrollY);
//   let headerDom = headerEl.current;
//   //滑过顶部的高度开始变化
//   if(pos.y < minScrollY) {
//     headerDom.style.backgroundColor = style["theme-color"];
//     headerDom.style.opacity = Math.min(1, (percent-1)/2);
//     setTitle(currentAlbum.name);
//     setIsMarquee(true);
//   } else{
//     headerDom.style.backgroundColor = "";
//     headerDom.style.opacity = 1;
//     setTitle("歌单");
//     setIsMarquee(false);
//   }
// };

function Album(props) {
    const [showState, setShowState] = useState(true);

    // const [title, setTitle] = useState("歌单");
    // const [isMarquee, setIsMarquee] = useState(false);//是否跑马灯

    // const headerEl = useRef();
    const handleback = () => {
        setShowState(false);
    };
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
                            <div className="play_all">
                                <i className="iconfont">&#xe6e3;</i>
                                <span>播放全部 <span className="sum">(共{currentAlbum.tracks.length}首)</span></span>
                                </div>
                                <div className="add_list">
                                <i className="iconfont">&#xe62d;</i>
                                <span>收藏({getCount(currentAlbum.subscribedCount)})</span>
                                </div>
                            </div>
                            <SongItem>
                                {
                                currentAlbum.tracks.map((item, index) => {
                                    return (
                                    <li key={index}>
                                        <span className="index">{index + 1}</span>
                                        <div className="info">
                                        <span>{item.name}</span>
                                        <span>
                                            { getName(item.ar) } - { item.al.name }
                                        </span>
                                        </div>
                                    </li>
                                    )
                                })
                                }
                            </SongItem>
                        </SongList>
                    </div>
                </Scroll>
            </Container>
        </CSSTransition>
    )
}

export default React.memo(Album)
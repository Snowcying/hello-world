import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


//class LikeButton extends Component
//{
//    static defaultProps={
//        likeText:'取消',
//        unlikeText:'点赞'
//    }
//
//    constructor()
//    {
//        super()
//        this.state={isLike:false}
//    }
//
//    handleClick()
//    {
//        this.setState(
//            {
//
//                isLike:!this.state.isLike
//            }
//        )
//        console.log(this.props.likeText)
//    }
//    render()
//    {
//        //const likeText=this.props.likeText||'点赞'
//        //const unlikeText=this.props.unlikeText||'取消'
//        return(
//            <button onClick={this.handleClick.bind(this)}>
//                {this.state.isLike?this.props.likeText:this.props.unlikeText}
//            </button>
//        )
//    }
//}
//
//class Index extends Component
//{
//    constructor()
//    {
//        super()
//        this.state={
//            likeText:'已赞' ,
//            unlikeText:'赞'
//        }
//    }
//
//    handleClick()
//    {
//        this.setState(
//            {
//                likeText:'取消',
//                unlikeText:'点赞'
//            }
//        )
//    }
//    render()
//    {
//        return(
//            <div>
//                <LikeButton likeText={this.state.likeText} unlikeText={this.state.unlikeText} />
//
//                <div>
//                    <button onClick={this.handleClick.bind(this)}>
//                        修改
//                    </button>
//                </div>
//            </div>
//        )
//    }
//}



class Screen extends Component
{
    static defaultProps={showContent:'无内容'}
    render()
    {
       return(
           <div>
               {this.props.showContent}
           </div>
       )
    }
}
class Computer extends Component
{
    constructor()
    {
        super()
        this.state={status:'off'}
    }
    //OnclickEvent()
    //{
    //    this.setState(
    //        {
    //            OnOff:!this.state.OnOff
    //        }
    //    )
    //}

    render()
    {
        return(
            <div>
                <button onClick={()=>this.setState({status:this.state.status=='off'?'on':'off'})}>
                    开关
                </button>
                <Screen showContent={this.state.status == 'off'?'显示屏关了':'显示屏亮了'}/>
            </div>
        )
    }
}
ReactDOM.render(
    <Computer />,
    document.getElementById('root')
)


/**
 * Created by 陈鑫一 on 2017/11/12.
 */

import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    render()
    {
        return(
            <div>
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}

export default CommentApp
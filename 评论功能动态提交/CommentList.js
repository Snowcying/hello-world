/**
 * Created by 陈鑫一 on 2017/11/12.
 */

import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    static defaultProps={
        comments:[
            {username:'cxy',content:'fa'}
        ]
    }

    render() {
        //const comments=[
        //    {username:'cxy',content:'Hello'},
        //    {username:'dyx',content:'Wolrd'},
        //    {username:'cyx',content:'Jscript'}
        //]


        return (
            <div>
                {
                    this.props.comments.map((comment,i)=><Comment comment={comment} key={i}/>)
                }
            </div>
        )
    }
}

export default CommentList
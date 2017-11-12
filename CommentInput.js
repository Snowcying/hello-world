/**
 * Created by 陈鑫一 on 2017/11/12.
 */
import React,{Component} from 'react'

class CommentInput extends Component{
    constructor(){
        super()
        this.state={
            username:'cxy',
            content:'dyx'
        }
    }

    handleUsernameChange(event)
    {
        this.setState(
            {
                username:event.target.value
            }
        )
    }

    handleContentChange(event)
    {
        this.setState(
            {
                content:event.target.value
            }
        )
    }

    handleSubmitChange()
    {
        if(this.props.onSubmit)   //应该有props
        {
            const {username,content}=this.state
            this.props.onSubmit({username,content})
        }
        else
        {
            console.log('fault')
        }
        this.setState({content:''})

    }
    render()
    {
        return(
            <div className='comment-input'>
                <div className='comment-filed'>
                    <span className='comment-filed-name'>用户名</span>
                    <div className='comment-filed-input'>
                        <input value={this.state.username}  onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-filed'>
                    <span className='comment-filed-name'>评论内容</span>
                    <div className='comment-filed-input'>
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-filed-button'>
                    <button onClick={this.handleSubmitChange.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
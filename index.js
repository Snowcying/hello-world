import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const lessons=[
    {title:'a',des:'aaa'},
    {title:'b',des:'bbb'},
    {title:'c',des:'ccc'}
]

class Lesson extends Component
{
    render()
    {
        const {lesson}=this.props
        return(
            <div>
                <h1>{lesson.title}</h1>
                <p>{lesson.des}</p>
            </div>
        )
    }
}

class LessonList extends Component
{
    render()
    {
        return(
                <div>
                    {lessons.map((lesson)=><Lesson  lesson={lesson} />)}
                </div>
            )



    }
}

ReactDOM.render(
    <LessonList />,
    document.getElementById('root')
)
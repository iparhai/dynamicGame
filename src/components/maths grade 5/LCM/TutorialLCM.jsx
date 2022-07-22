import React from 'react'

export default function TutorialLCM({ nums, isOver }) {

    console.log(nums)
    console.log(isOver)
    setTimeout(() => {
        isOver()
    }, 10000)
    return (
        <div>
            This is Tutorial
        </div>
    )
}

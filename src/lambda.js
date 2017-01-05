import React from 'react'

const LambdaInfo = (props) => {
    const context = props.context
    return (
        <header>
            <h1>Lambda Info</h1>
            <table>
                <tr><th>invokedFunctionArn</th><td>{context.invokedFunctionArn}</td></tr>
                <tr><th>logGroupName</th><td>{context.logGroupName}</td></tr>
            </table>
        </header>
    )
}

module.exports = LambdaInfo

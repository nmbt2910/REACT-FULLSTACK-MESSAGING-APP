import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='ef311813-8b3f-4f5c-aa89-0cbb6eec598c'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage;
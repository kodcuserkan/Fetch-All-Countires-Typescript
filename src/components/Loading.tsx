import { FunctionComponent } from 'react'

interface ILoadingProps {
    loading: boolean
}

const Loading:FunctionComponent<ILoadingProps> = (props) => {

    const { loading } = props

    if(loading) {
        return <>Loading...</>
    }

    return (
        <div>
            {props.children}
        </div>
    )
}

export default Loading

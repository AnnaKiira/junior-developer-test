
type GreetingProps = {
    name?: string
}

const Greeting = ({name}: GreetingProps) => {

    const displayName = name ? name : "Guest"

    return <div> Hello, {displayName}!</div>
}


export default Greeting
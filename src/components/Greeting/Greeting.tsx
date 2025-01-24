/* Tasks: Part 2 */
type GreetingProps = {
    name?: string
}

const Greeting = ({name}: GreetingProps) => {

    const displayName = name ? name : "Guest"
    console.log(`Hello, ${displayName}!`)

    return <div> Hello, {displayName}!</div>
}


export default Greeting
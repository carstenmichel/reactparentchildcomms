import { useEffect, useState } from 'react'
import "./childs.css"
import { Button } from 'carbon-components-react';


interface IfirstChildProps {
    name: string
    updateName: (arg: string) => void
}
export const FirstChild: React.FC<IfirstChildProps> = ({ name, updateName }) => {
    const [firstChildName, setFirstChildName] = useState<string>('')

    useEffect(() => {
        setFirstChildName(name)
    }, [name])

    const updateFirstName = () => {
        updateName("test")
    }
    return (
        <section>
            <h1 className="simple" > {firstChildName} </h1>
            <Button onClick={updateFirstName}> first child </Button>
        </section>
    )
}

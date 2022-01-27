import { useEffect, useState } from 'react'
import "./childs.css"
import { Dropdown, OnChangeData } from 'carbon-components-react';


interface IsecondChildProps {
    name: string
    updateName: (arg: string) => void
}


const items = [
    {
      id: 'option-1',
      label: 'Name 1',
    },
    {
      id: 'option-2',
      label: 'Name 2',
    }
];

export const SecondChild: React.FC<IsecondChildProps> = ({ name, updateName }) => {
    const [secondChildName, setSecondChildName] = useState<string>('')

    useEffect(() => {
        setSecondChildName(name)
    }, [name])

    const updateSecondName = (change: OnChangeData<{ id: string; label: string; }>) => {
        updateName(change.selectedItem?.label ? change.selectedItem?.label : "")
    }
    return (
        <section>
            <h1 className="simple"> {secondChildName} </h1>
            <Dropdown 
                id="myDropdown"
                items={items} 
                label="Options"
                onChange={updateSecondName} />
        </section>
    )
}

import { Column, Grid, Row } from "carbon-components-react"
import { useState } from "react"
import { FirstChild } from "./firstChild"
import { SecondChild } from "./second"


export const Parent: React.FC = () => {
    // parentName is a Variable that is passed to the childs
    const [parentName, setParentName] = useState<string>('Watson')

    // updateName is a pointer to a funtion that is passed to the childes
    // that allows the childs to update values in parents vars
    const updateName = (name: string) => {
        setParentName(name)
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

    return (
        <div>
        <aside className="side-nav">

        </aside>
        <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col">
                        <FirstChild name={parentName} updateName={updateName} />
                    </div>
                    <div className="bx--col">
                        <SecondChild name={parentName} updateName={updateName} />
                    </div>
                </div>
        </div>
        </div>
    )
}
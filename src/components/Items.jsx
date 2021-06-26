import React from 'react'
import {Tabs, Tab} from './CreateTabs'

const Items = () => {
    return (
        <div>
            <h1>Tabs</h1>
            <Tabs>
                <Tab label="one"/>
                <Tab label="two"/>
                <Tab label="three"/>
            </Tabs>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in voluptatibus commodi iusto, a, dolores obcaecati aliquam quos repudiandae vel dolorem mollitia laudantium numquam fugiat sapiente cum voluptatum doloremque repellendus.</p>
            </div>
        </div>
    )
}

export default Items

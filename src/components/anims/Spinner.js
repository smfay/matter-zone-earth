import React from 'react'
import Spinner1 from '../../assets/svg/icons/Spinner1'
import Spinner2 from '../../assets/svg/icons/Spinner2'

export default function Spinner() {
    return (
        <div class="flex items-center justify-center w-full h-full aspect-square">
            <div class="flex items-center w-32 h-32 aspect-square">
                <Spinner2 class="h-16 animate-twirl" />
            </div>
        </div>
    )
}

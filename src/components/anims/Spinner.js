import React from 'react'
import Spinner1 from '../../assets/svg/icons/Spinner1'
import Spinner2 from '../../assets/svg/icons/Spinner2'

export default function Spinner() {
    return (
        <div class="animate-pulse flex items-center w-32 h-32 aspect-square">
            <Spinner1 class="absolute h-6 animate-twirl-slower" />
            <Spinner1 class="absolute h-8 animate-twirl-slow" />
            <Spinner1 class="absolute h-12 animate-twirl" />
        </div>
    )
}

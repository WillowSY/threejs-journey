import { OrbitControls } from '@react-three/drei'
import {Physics} from '@react-three/rapier'
import Lights from './Lights.jsx'
import {Level} from './Level.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience()
{
    const blocksSeed = useGame(state=> state.blcksSeed)
    const blocksCount = useGame((state)=> state.blocksCount)
    return <>
        <color args={['#bdedfc']} attach = "background"/>
        <OrbitControls makeDefault />
        <Physics>
            {/* <Debug/> */}
            <Lights />
            <Level count={blocksCount} seed ={blocksSeed}/>
            <Player/>
        </Physics> 
        
    </>
}
import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
function PakemonDetails() {
    const detail=useSelector(state=>state.pakemonReducer.pakemonDetail)
    // console.log(detail)
    return (
        <div className='pakemon-detail'>
             {
            detail!=null && (
                <>
                <h1>{detail.forms[0].name}</h1>
                <img src={detail?.sprites?.back_default} alt="" />
                <div className='btns'>
                    {
                        detail.abilities && detail.abilities.map((ability)=>(
                            <button className=' btn-pokemon'>{ability.ability.name}</button>
                        ))
                    }
                </div>
                <div className='pokemon-info'>
                    {
                        detail.stats.map(stats=>(
                            <span>{stats.stat.name} : {stats.base_stat} </span>
                        ))
                    }
                </div>
                </>
            ) 
           }
        </div>
    )
}

export default PakemonDetails

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadPakemons, showDetailsPage } from '../store/pakemonSlice';
import axios from "axios";
function PakemonCard() {
    const pokemons = useSelector(state => state.pakemonReducer)
    const [page, setPage] = useState(0)
    // console.log(page)
    const pakemonsData = pokemons.pakemons.results
    // console.log(pakemonsData)
    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    // console.log(data)
    useEffect(() => {
        dispatch(loadPakemons(page))
    }, [page, dispatch])

    const getPrevPage = () => {
        setPage(page - 10)
    }

    const getNextPage = () => {
        setPage(page + 10)
    }


    const getPakemonDetails = async (url) => {
        const res = await axios.get(url)
        const data = res.data
        setData(data)
    }
    return (

        <>
            <div className='pakemons'>
                {
                    pakemonsData && (
                        pakemonsData.map((pakemon, i) => (
                            <div className='pakemon' key={i} onClick={() => dispatch(showDetailsPage(pakemon.url))}>
                                <span>{i + 1 + page}</span>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pakemon.url.split('/')[pakemon.url.split("/").length - 2]}.png`} alt="" />
                                <p>{pakemon.name}</p>
                            </div>
                        ))
                    )
                }
            </div>
            <div className='pakemons-controller'>
                <button className='  btn-pokemon' style={{ display: page == 0 ? "none" : "flex" }} onClick={() => getPrevPage()}>Prev</button>
                <button className=' btn-pokemon' onClick={() => getNextPage()}>Next</button>
            </div>
        </>



    )
}

export default PakemonCard

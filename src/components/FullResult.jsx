import React, { useEffect } from 'react'
import { pb } from '../pocketbase'
import Header from './Header.jsx'

function FullResult() {
    const [data, setData] = React.useState([])

    useEffect(() => {
        getFullResult()
    }, [])

    async function getFullResult() {
        try {

            const result = await pb.collection('ScoreFinal').getFullList({
                expand: "candidate, judge",
                sort: '-score'
            })
            console.log(result)
            setData(result)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className=''>
            <Header/>
            <h1 className='text-center font-black text-6xl m-6'>Full Results</h1>
            <div onClick={() => getAdmin()} className='[&::-webkit-scrollbar]:hidden absolute w-40 h-16 border-t-0 top-0 right-48 text-2xl cursor-pointer shadow-md rounded-b-3xl bg-white text-center font-bold text-purple-900 flex place-content-evenly items-center ps-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span>Reload</span>
            </div>

            {/* For one judge  */}
            <table className="my-20 rounded-2xl m-auto shadow-xl w-11/12">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='text-center font-black'>MALE CATEGORY</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="px-4 py-2">Candidate</th>
                        <th className="px-4 py-2">Swimwear Competition (25)</th>
                        <th className="px-4 py-2">Formal Attire (25)</th>
                        <th className="px-4 py-2">Question and Answer (50)</th>
                        <th className="px-4 py-2">Total</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <td>Beauty of Figure (15%)</td>
                            <td>Stage Presence (5%)</td>
                            <td>Poise and Bearing (5%)</td>
                            <td>Subtotal (25%)</td>
                        </td>
                        <td>
                            <td>Attire and Carriage, Personality (15%)</td>
                            <td>Stage Presence (5%)</td>
                            <td>Poise and Bearing (5%)</td>
                            <td>Subtotal (25%)</td>
                        </td>
                        <td>
                            <td>Intelligence (25%)</td>
                            <td>Poise and Personality (25%)</td>
                            <td>Subtotal (50%)</td>
                        </td>
                        <td>Total (100%)</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='w-44 text-center'>1</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>2</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>3</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>4</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>5</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>6</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>7</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>8</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>9</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>10</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>11</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>12</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>13</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>14</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>15</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>16</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='pb-10 w-44 text-center'>17</td>
                        <td className='pb-10'>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td className='pb-10'>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td className='pb-10'>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td className='pb-10'>100</td>
                    </tr>
                </tbody>
            </table>
            
            <table className="my-20 rounded-2xl m-auto shadow-xl w-11/12">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='text-center font-black'>FEMALE CATEGORY</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="px-4 py-2">Candidate</th>
                        <th className="px-4 py-2">Swimwear Competition (25)</th>
                        <th className="px-4 py-2">Formal Attire (25)</th>
                        <th className="px-4 py-2">Question and Answer (50)</th>
                        <th className="px-4 py-2">Total</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <td>Beauty of Figure (15%)</td>
                            <td>Stage Presence (5%)</td>
                            <td>Poise and Bearing (5%)</td>
                            <td>Subtotal (25%)</td>
                        </td>
                        <td>
                            <td>Attire and Carriage, Personality (15%)</td>
                            <td>Stage Presence (5%)</td>
                            <td>Poise and Bearing (5%)</td>
                            <td>Subtotal (25%)</td>
                        </td>
                        <td>
                            <td>Intelligence (25%)</td>
                            <td>Poise and Personality (25%)</td>
                            <td>Subtotal (50%)</td>
                        </td>
                        <td>Total (100%)</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='w-44 text-center'>1</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>2</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>3</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>4</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>5</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>6</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>7</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>8</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>9</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>10</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>11</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>12</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>13</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>14</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>15</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='w-44 text-center'>16</td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className='pb-10 w-44 text-center'>17</td>
                        <td className='pb-10'>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td className='pb-10'>
                            <td className='w-44 text-center'>15</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>5</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td className='pb-10'>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                            <td className='w-44 text-center'>25</td>
                        </td>
                        <td className='pb-10'>100</td>
                    </tr>
                </tbody>
            </table>

            {/* <div>
                {data.map((item, index) => (
                    <div key={index} className='flex justify-between items-center w-1/2'>
                        <p>{item.expand.candidate.Name}</p>
                        <p>{item.expand.judge.Name}</p>
                        <p>{item.score}</p>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default FullResult
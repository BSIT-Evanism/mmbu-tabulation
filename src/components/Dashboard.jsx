import React, { useEffect } from 'react'
import { pb } from '../pocketbase.js'
import AdminTable from './AdminTable.jsx'
import Header from './Header.jsx'

function Dashboard() {
    const [toggle, setToggle] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [topic, setTopic] = React.useState('swimwear')
    const [judge, setJudge] = React.useState([])
    const [pickedJudge, setPickedJudge] = React.useState('')


    useEffect(() => {
        if (localStorage.getItem('admin') === null) {
            window.location.href = '/adminview'
        }
        const events = localStorage.getItem('events')
        async function getJudge() {
            try {
                const res = await pb.collection('Judges').getFullList({
                    filter: `isCoronation = ${events}`
                })
                console.log(res)
                setJudge(res)
            } catch (error) {
                console.log(error)
            }
        }
        getJudge()
    }, [])



    async function getToggle() {
        try {
            setLoading(true)
            const res = await pb.collection('ControlUnlock').update('65p9fcb4a3471qk', { viewunlock: toggle })
            setToggle(!toggle)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    async function getTopic(ev) {
        try {
            const res = await pb.collection('Topic').update('fa6kjx16h3sxncf', { topic: ev })
            setTopic(ev)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-full bg-white'>
            <Header />
            <div className="flex overflow-hidden flex-col gap-10 items-center">
                <div className='flex gap-10 w-2/3 m-10 justify-between'>
                    <div className='flex flex-col gap-3'>
                        <div className='shadow-xl flex gap-20 px-5 h-14 place-items-center rounded-2xl'>
                            <span className='w-7 text-center text-xl'>Segment</span>
                            <select onChange={(e) => getTopic(e.target.value)} className='p-4 w-96 text-2xl uppercase font-bold rounded-xl text-center' name="topic" id="topic">
                                <option value="swimwear">Swimwear Competition</option>
                                <option value="formal">Formal Attire</option>
                                <option value="question">Question and Answer</option>
                            </select>
                        </div>
                        <div className='shadow-xl flex gap-20 px-5 h-14 place-items-center rounded-2xl'>
                            <span className='w-7 text-center text-xl'>Judge</span>
                            <select onChange={(e) => setPickedJudge(e.target.value)} className='p-4 w-96 text-2xl uppercase font-bold rounded-xl text-center' name="topic" id="topic">
                                {judge.map((item, index) => (
                                    <option key={index} value={item.id}>{item.Name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div onClick={getToggle} className={`shadow-xl w-36 h-14 cursor-pointer rounded-full border-2 border-fuchsia-900 flex items-center transition-all`}>
                            <div className={`w-12 h-12 mx-1 flex justify-center items-center bg-blue-300 rounded-full ${toggle && "translate-x-20 bg-red-300"} transition-all`}>
                                {loading ? (<h1 className='font-bold text-3xl animate-spin text-fuchsia-900'>C</h1>) : toggle ? (<h1 className='font-bold text-3xl text-red-900'>X</h1>) : (<h1 className='font-bold text-3xl text-blue-900'>O</h1>)}
                            </div>
                        </div>
                        <a href="/adminview/dashboard/fullresults">
                            <p className='shadow-xl w-36 h-14 text-center pt-4 align-middle bg-fuchsia-600 hover:bg-fuchsia-400 rounded-full text-white'>Overall results</p>
                        </a>
                    </div>
                </div>

                <div className='flex w-full h-3/4 overflow-scroll'>
                    <AdminTable topic={topic} judgeId={pickedJudge} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
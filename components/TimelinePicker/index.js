import { useState, useEffect } from "react"
import Pickbox from "./Pickbox"
import moment from "moment"

export default function TimelinePicker() {
    const repeat = 25 // amount of box
    const time_range = 6 // Range of time 
    const na_range = [[10, 12], [15, 17]] // Range of Book & Not Available time
    const start_time = moment().set({ 'hour': 10, 'minute': 0, 'second': 0 }) // Time of shop open
    const [select, setSelect] = useState([-1, -1]) //Selected Time
    const [hover, setHover] = useState(-1) // Index of hovered box

    useEffect(() => {
        // console.log('moment', start_time)
    }, [])

    const handleMouseEnter = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(-1)
    }

    const showTime = () => {
        const hour = start_time.get('hour')
        const min = start_time.get('minute').toString().length > 1
            ? start_time.get('minute')
            : `${start_time.get('minute')}0`
        return `${hour}:${min}`
    }

    const timeIncrement = () => {
        start_time.add(30, 'minutes')
    }

    const handleSelect = (start, end) => {
        setSelect([start, end])
        // console.log('select', start, end)
    }

    const handleCancel = () => {
        setSelect([-1, -1])
    }

    return (
        <div className="p-2">
            <div>
                <div className=" text-center flex flex-col max-w-fit p-1">
                    Timeline Picker
                    <div className="flex flex-row overflow-x-auto justify-center">
                        {
                            [...Array(repeat)].map((element, index, array) => {

                                return (
                                    <div onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} key={index}>
                                        <Pickbox index={index} hover={hover} range={time_range}
                                            length={array.length} na_range={na_range} onSelect={handleSelect} selected={select}></Pickbox>
                                        {showTime()}
                                        {timeIncrement()}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="bg-red-400 rounded-full w-16 hover:bg-red-600 text-white"
                        onClick={handleCancel}>Cancel</button>
                </div>
            </div>


        </div>
    )
}
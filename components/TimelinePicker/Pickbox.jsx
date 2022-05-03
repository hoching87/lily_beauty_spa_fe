import { useEffect, useState } from "react"

export default function Pickbox(props) {
    const [color, setColor] = useState()

    /*
        'hsl(0, 100%, 50%)' Red
        'hsl(65, 100%, 80%)' Yellow
        'hsl(95, 100%, 85%)' Light Green
        'hsl(125, 90%, 25%)' Green
        'hsl(30, 100%, 50%)' Orange
    */
    const isHighlight = () => {
        // Default Color
        const color = 'hsl(65, 100%, 80%)' // Defualt Yellow

        // Booked/Not Available Time
        props.na_range.forEach(element => {
            if (props.index >= element[0] && props.index <= element[1])
                color = 'hsl(30, 100%, 50%)' // NA Orange
        })

        if (props.index >= props.selected[0] && props.index <= props.selected[1])
            color = 'hsl(125, 90%, 25%)' // Green on selected

        // Tails
        if (props.hover >= 0 && (props.index >= props.hover)
            && (props.index <= props.hover + props.range - 1) && (props.index <= props.hover + props.range - 1)) {

            // Check Overflow
            if (props.hover + props.range > props.length)
                color = 'hsl(0, 100%, 50%)' // Red on Overflow
            else {
                color = 'hsl(95, 100%, 85%)' // Light Green on Normal Hover
            }

            // Check Overlap Not Available Time
            props.na_range.forEach(element => {
                if (props.hover <= element[1] && element[0] <= props.hover + props.range - 1)
                    color = 'hsl(0, 100%, 50%)' // Red on Overlap
            })
        }

        return color
    }

    useEffect(() => {
        const color = isHighlight()
        setColor(color)
    }, [props])

    const handleSelect = () => {
        if (color == 'hsl(95, 100%, 85%)')
            return props.onSelect(props.index, props.index + props.range - 1)
        else
            return
    }

    let style = { backgroundColor: color }
    let border = props.index == 0 && 'rounded-l-3xl' || props.index == props.length - 1 && 'rounded-r-3xl'

    return (
        <div className={`border-[1px] h-5 w-[55px] ${border}`}
            style={style} onClick={() => handleSelect()}
        ></div>
    )
}
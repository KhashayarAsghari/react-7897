import { useEffect } from "react"

export default function LifeCycle() {

    useEffect(() => {
        console.log("mount")
        return () => {
            console.log("unmount")
        }
    }, [])

    console.log("updating")


    return <h1>hi</h1>
}
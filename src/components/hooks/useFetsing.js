import { useState } from "react"

export const useFetshing = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [eror, setEror] = useState("")

    const fetshing = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setEror(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetshing, isLoading, eror]
}
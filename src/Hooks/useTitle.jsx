import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title=`${title} - Police Toy Car`
    }, [title])
}

export default useTitle;
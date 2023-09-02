import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => { 
        document.title = `${title} - PlaySmart`;
    }, [title])
}

export default useTitle;
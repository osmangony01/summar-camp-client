import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => { 
        document.title = `${title} - WorldSpeak`;
    }, [title])
}

export default useTitle;
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`

export const request = async (url, method, headers = {}, body = {}, isNotStringified = false) => {
    let res
    let data
    switch (method) {
        case 'GET':
            const geturl = `${process.env.REACT_APP_BACKEND_URL}url`;
            console.log("url:", geturl);
            res = await fetch(geturl, { headers })
            console.log("res:",res);
            if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            data = await res.json()
            return data

        case 'POST':
            // if we send form data, it is not content-type:application/json,
            // hence the bonus param 
            const requrl = `${process.env.REACT_APP_BACKEND_URL}url`;
            console.log("url:", requrl);
            if (isNotStringified) {
                res = await fetch(requrl, { headers, method, body })
                if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
                data = await res.json()
            } else {
                    res = await fetch(requrl, { headers, method, body: JSON.stringify({ ...body }) })
                    if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
                    data = await res.json()
            }
            return data

        case 'PUT':
            const puturl = `${process.env.REACT_APP_BACKEND_URL}url`;
            console.log("url:", puturl);
            res = await fetch(puturl, { headers, method, body: JSON.stringify(body) })
            if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            data = await res.json()
            return data

        case 'DELETE':
            const deleteurl = `${process.env.REACT_APP_BACKEND_URL}url`;
            console.log("url:", deleteurl);
            res = await fetch(deleteurl, { headers, method })
            if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            data = await res.json()
            return data
        default:
            return
    }
}
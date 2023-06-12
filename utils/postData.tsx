export async function postData(url: string, data: any) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            // Authorization: `Bearer ${token}`
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
}
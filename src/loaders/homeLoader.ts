const homeLoader = async () => {
    const data = await fetch('/data.json').then(res => res.json());

    return data;
}

export default homeLoader;
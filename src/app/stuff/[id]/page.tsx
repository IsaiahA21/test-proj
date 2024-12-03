interface Params {
    id: string;
}

export default function StuffDetails({params}: {params: Params}){
    return (<h1>Showing in stuff {params.id}</h1>);
}
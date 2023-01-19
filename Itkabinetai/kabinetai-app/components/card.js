import Link from "next/link"
const Route = ({diena, pamoka, link}) => {
    return (
        <div>
            {link?(<Link href={`/pamoka/[diena]/[pamoka]`} as={`/pamoka/${diena}/${pamoka}`} className="seeMore">Pamatyti daugiau</Link>):
            <Link href={`/`} as={``} className="seeMore">Atgal</Link>  }
        </div>
    )
}

export default function Card(props) {
    let a= props.kab.map(i=> <div className="kabinetas">{i}</div> )
    a = a.slice(0, props.num)
    return (  
        <div className="card" >
            {<h2>{`${props.pamoka} pamoka`}</h2>}
            {a}
            <Route diena={props.diena} pamoka={props.pamoka} link={props.link} />
        </div>
    )
}
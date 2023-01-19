import { useRouter } from "next/router"
import Card from './../../../../components/card';


export const getServerSideProps = async (context) => {
    const day = ["sekmadienis", "pirmadienis", "antradienis", "treciadienis", "ketvirtadienis", "penktadienis", "sestadienis"]
    const res = await fetch(`http://localhost:5000/api/v1?diena=${day[context.params.diena]}&pamoka=${context.params.pamoka}`) 
    const data = await res.json()
    return {
      props: {
        data: data.data,
        diena: context.params.diena,
        pamoka: context.params.pamoka
      }
    }
  }
  
  export default function Pamoka({data,diena, pamoka}) {
    return (
      <div className='pamokos'>
        <Card num={100} link={false}  kab={data} diena={diena} pamoka={pamoka}/>
  
      </div>
    )
  }
  
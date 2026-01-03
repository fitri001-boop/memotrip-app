import Chat from './chat2'
import { datachat } from '@/app/data/datachat';


export function generateStaticParams() {
   return datachat.map((data) => ({
      chat2: data.nama.toLowerCase(),
   }))
}

export default async function Page({params,}: {params: Promise<{ chat2: string }>}) {
   const { chat2 } = await params

   const user = datachat.find(
    (data) => data.nama === chat2
  )

   if (!user) return <div>User tidak ditemukan</div>

   return <Chat user ={user}/>
}
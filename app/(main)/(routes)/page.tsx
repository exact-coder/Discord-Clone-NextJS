import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="">
      <h1 className='text-center text-indigo-500 font-extrabold text-4xl mt-80'>Wellcome to Discord Clone Mr.😎</h1>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  )
}

// length 00.55min


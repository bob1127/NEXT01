import Navbar from '../components/Navbar'



export default function Layout({ children }) {
  return (
    <>
      <div className="topDiv text-center text-slate-50 py-4 bg-slate-950">
        快速幽門螺旋桿菌尿素呼吸檢測組

      </div>
      <Navbar/>
      <main>{children}</main>
  
    </>
  )
}
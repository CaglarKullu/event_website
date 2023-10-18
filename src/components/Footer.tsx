import { CustomListGenerator } from "./footer-items/CustomList"



const Footer = () => {
  const textList = ["a", "hello", "world", "example", "text"];
  return (
    <footer className='my-footer'>

     <div className='flex flex-center items-center flex-col sm:flex-row gap-x-20'>
     <CustomListGenerator color="primary" texts={textList} />
     </div>

    </footer>
  )
}

export default Footer
 import { TiThSmallOutline } from "react-icons/ti";
 import { RiCupLine } from "react-icons/ri";
 import { TbSoup } from "react-icons/tb";
 import { CiBowlNoodles } from "react-icons/ci";
 import { MdOutlineFoodBank } from "react-icons/md";
 import { GiFullPizza } from "react-icons/gi";
 import { GiHamburger } from "react-icons/gi";
 
 const Categories =[
    {
        id: 1,
        name:"All" ,
        image: <TiThSmallOutline />

    },
    {
        id: 2,
        name:"Breakfast" ,
        image: <RiCupLine />

    },
    {
        id: 3,
        name:"Soups" ,
        image: <TbSoup />

    },
    {
        id: 4,
        name:"Pasta" ,
        image: <CiBowlNoodles />

    },
    {
        id: 5,
        name:"Main-course" ,
        image: <MdOutlineFoodBank />

    },
    {
        id: 6,
        name:"Pizza" ,
        image:<GiFullPizza />

    },
    {
        id: 7,
        name:"Burger" ,
        image: <GiHamburger />

    },
 ]

 export default Categories
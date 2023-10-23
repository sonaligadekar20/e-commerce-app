import React from "react";

function Home() {
     
    const product = [
        {
            name:"Refrigerator",
            description: "Whirlpool 183 Litres 3 Star Direct Cool Single Door Refrigerator with Anti-Bacterial Gasket",
            price: "14550 ",
            productImage: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1670592908/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/223278_0_i8dsnv.png?tr=w-480",
            brand: " Whirlpool"
        },
        {
            name:"Telivision",
            description: "LG LM56 81.28 cm (32 inch) HD Ready LED Smart WebOS TV with Down Firing Speaker",
            price: "10000 ",
            productImage: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690354493/Croma%20Assets/Entertainment/Television/Images/241271_u74sd4.png?tr=w-640 ",
            brand: "LG "
        }
    ]

    return (
        <>
        <h1>Home</h1>
        <div>
            {
                product.map((ProductInfo,i)=>{
                    const {name, description, price, productImage, brand}=ProductInfo
                return(
                    <>
                    <><h1>{name}</h1></>
                    {description}
                    <img src={productImage}/>
                    <h2>{price}</h2>
                    <h3>{brand}</h3>
                    </>
                )
                })
            }
        </div>
        </>
    )
}
export default Home
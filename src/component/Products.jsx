import React from "react"
import productData from "../asset/data"

const Product = () => {

    console.log(productData[0].image1)
 
     
    

    return(
        <div className=" grid-cols-3  justify-center items-center" >

            {
                productData.length === 0 ?
                (<div> No data found </div>):
                (productData.map((product) => (
                    <div className="flex gap-60 gap-y-60 p-20   justify-center  " key={product.id}>

                        
                      <div className="flex-col items-center justify-center space-y-4 border p-6">
                      <img width={100} height={100} src={product.image1} />
                        
                        <p>{product.productName}</p>
                        <p>{product.productBrand1}</p>
                        </div>

                        <div className="flex-col items-center justify-center border p-6">
                        <img height={100} width={100} src={product.image2}/>
                        
                        <p>{product.productName}</p>
                        <p>{product.productBrand2}</p>

                        </div>
                        <div className="flex-col items-center justify-center border p-6">
                        <img height={100} width={100} src={product.image3}/>
                        
                        <p>{product.productName}</p>
                        <p>{product.productBrand3}</p>

                        </div>

                        

                    </div>
                )))
            }
     

        </div>
    )
}

export default Product;
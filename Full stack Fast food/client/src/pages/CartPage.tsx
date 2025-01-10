import Icons from "../components/Icons"
import Section from "../components/Section"
import PopularCategoriesList from "../assets/Json/PopularCategories.json"
import { useState } from "react"
import Button from "../components/Button"

interface ProductCardProps {
  id: string,
  food_type: string,
  image_url: string,
  name: string,
  description: string,
  variant_category: {
    name: string; variants: { addons: never[]; entity_id: string; is_takeway_support: boolean; name: string; price: number; service: string; takeaway_price: null; }[];
  }[]
}

const CartPage = () => {
  const [productList, setProductList] = useState<ProductCardProps[]>(PopularCategoriesList)

  const handleTotalPrice = (data: any) => {
    return data.map((val: any) => val.variant_category[0].variants[0].price)
      .reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0,);
  }

  return (
    <Section title="Your order" classname=" text-gray-700 dark:text-gray-400 text-sm">
      <div className="grid grid-cols-3 gap-4">
        <div className=" col-span-2 w-full relative h-[calc(100vh-100px)]">
          <div className="mb-2 pb-2 ">
            <div className="flex items-center justify-between">
              <p className="flex items-center">
                <Icons iconName="arrowLeft" classname="h-4 w-4 mr-5 cursor-pointer" />
                Continue Shopping
              </p>
              <p>
                You have currently 3 products in your cart
              </p>
            </div>
          </div>
          <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
          {/* LIST OF PRODUCTS */}
          <ul className="h-[calc(100vh-300px)] overflow-y-auto">
            {
              productList.map((product: ProductCardProps) => {
                return (
                  <li key={product.id} className="h-fit min-h-24 hover:scale-95 transition shadow-lg ease-in-out duration-200 hover:shadow-orange-100 border hover:border-orange-200 baseBox mb-5 relative group/item hover:cursor-pointer ">
                    <div className="cart_product_list grid grid-cols-4 gap-4 ">
                      <div className="img_box w-32 showAtCenter">
                        <img src={require("../assets/images/categories" + product.image_url)} alt="" />
                      </div>
                      <div className="product_name showAtCenter">
                        <p className="text-left w-full">{product.name}</p>
                      </div>
                      <div className="product_quantity showAtCenter">
                        <form className=" mx-auto">
                          <div className="relative flex items-center max-w-[8rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-md p-2  focus:ring-gray-100 dark:focus:ring-gray-700">
                              <Icons iconName="minus" classname="w-3 h-3 text-gray-900 dark:text-white" />
                            </button>
                            <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300  text-center text-gray-900 text-sm  block w-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="0" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-md p-2  focus:ring-gray-100 dark:focus:ring-gray-700">
                              <Icons iconName="plus" classname="w-3 h-3 text-gray-900 dark:text-white" />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="product_price showAtCenter">
                        <p className="text-left font-bold text-md text-orange-500">&#8377;{product.variant_category[0].variants[0].price}/-</p>
                      </div>
                    </div>
                    <div className="product_actions absolute top-0 bg-orange-50 dark:bg-slate-600 rounded-md transition-transform ease-in-out duration-300 w-0 px-[2px] hover:text-orange-400 group-hover/item:w-fit group-hover/item:px-2 right-0 h-full showAtCenter">
                      <Icons iconName="delete" classname="" />
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
          <div className="total_section min-h-10 baseBox h-fit p-3 absolute bottom-0">
            <p className="text-sm font-bold">Billing Details :-</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="delivery_address">
                <div className="">
                  <p className="text-sm">This order will be delivered to</p>
                  <p className="flex justify-between font-semibold text-xs mt-3">
                    <Icons iconName="mapPin" classname="h-10 w-10 mr-3 text-orange-500" />
                    33/10 B, Rainbow Indl Estate, Opp Seepz ;midc Rd No 23, Andheri (west)
                  </p>
                </div>
              </div>
              <div className="apply_promo border-l border-r px-5">
                <p>Apply coupons / promo :-</p>
                <input type="text" placeholder="Apply Promo Code" className="w-full text-xs border border-gray-200 rounded-md p-2 mt-3 outline-none" />
              </div>
              <div className="bill_total">
                <table className="">
                  <tbody>
                    <tr className="text-xs font-semibold">
                      <td className="">Item total</td>
                      <td className="text-right">&#8377; {handleTotalPrice(productList)} /-</td>
                    </tr>
                    <tr className="text-xs font-semibold">
                      <td className="">GST and Restaurant charge</td>
                      <td className="text-right">&#8377; 15/-</td>
                    </tr>
                    <tr className="text-xs font-semibold">
                      <td className="">Delivery charge</td>
                      <td className="text-right">&#8377; 30/-</td>
                    </tr>
                    <tr className="bg-orange-200 font-semibold rounded-lg overflow-hidden">
                      <td className="">Total</td>
                      <td className="text-lg">&#8377; {handleTotalPrice(productList) + 15 + 30} /-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full baseBox">
          <div className="w-full mx-auto p-5">
            <h1 className="text-center font-bold text-lg">Payment option</h1>
            <form className="mb-3">
              <label className="font-semibold text-sm mb-2 ml-1">Name on card</label>
              <input className="w-full px-2 py-1 mb-1 border border-gray-200 rounded-md outline-none transition-colors" placeholder="John Smith" type="text" />
            </form>
            <div className="mb-3">
              <label className="font-semibold text-sm mb-2 ml-1">Card number</label>
              <input className="w-full px-2 py-1 mb-1 border border-gray-200 rounded-md outline-none transition-colors" placeholder="0000 0000 0000 0000" type="text" />
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label className="font-semibold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                  <select className="form-select w-full px-2 py-1 mb-1 border border-gray-200 rounded-md outline-none transition-colors cursor-pointer">
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2 ">
                <label className="font-semibold block mb-2 ml-1">Security code</label>
                <input className=" w-full px-2 py-1 mb-1 border border-gray-200 rounded-md outline-none transition-colors" placeholder="000" type="text" />
              </div>
            </div>
            <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 flex justify-center items-center"> 
            <span className="bg-white rounded-full shadow-sm block text-xs font-semibold p-1">OR</span>
            </div>
            <div className="UPI_pay py-3">
              Pay with UPI
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg sm:flex  dark:text-white">
                <li className="w-full">
                  <div className="flex items-center ps-3 cursor-pointer">
                    <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 " />
                    <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" className="h-10 w-10" alt="" />
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center ps-3 cursor-pointer">
                    <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4  " />
                    <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png" className="h-10 w-10" alt="" />
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center ps-3 cursor-pointer">
                    <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4  " />
                    <label htmlFor="horizontal-list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp" className="h-10 w-10" alt="" />
                    </label>
                  </div>
                </li>
              </ul>

            </div>
            <div>
              <Button className="text-gray-600 block w-full max-w-xs mx-auto bg-orange-300 rounded-md px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CartPage
import React, { LegacyRef, ReactHTMLElement, useRef, useState } from 'react'
import Section from '../components/Section'
import Icons from '../components/Icons'
import OrderedList from "../assets/Json/Orderlist.json"
import Button from '../components/Button'
import { isEmpty, sumBy } from "lodash"

interface ProductCardProps {
  id: number,
  ordered_date: string,
  ordered_time: string,
  total: number,
  description: string,
  ordered_products: {
    name: string,
    price: number,
    food_type: string,
    quantity: number
  }[],
  delivery_charge: number,
  gst: number,
  promo_code?: string,
  address: string,
  order_status: string,
  rated: boolean,
  paid_via: string,
  orderID: string
}

const OrderPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<ProductCardProps | null>(null)
  // const OrderCard = useRef<HTMLDivElement>(null);

  const handleShowOrderDetail = (item:any) => {
    setSelectedOrder(item)
  }

  return (
    <Section title="Your orders" classname="mt-4 text-gray-700 dark:text-gray-400 text-sm">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="order_status baseBox p-3 max-h-28">
            <p className='font-semibold'>Order in progress</p>
            <div className="showAtCenter">
              <ol className="flex items-center pb-5 px-3 w-full ">
                <li className="flex w-full items-center text-orange-600 dark:text-orange-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-orange-100 after:border-4 after:inline-block dark:after:border-orange-800">
                  <p className="flex items-center relative justify-center w-8 h-8 bg-orange-100 rounded-full  dark:bg-orange-800 shrink-0">
                    <Icons iconName='check' classname='w-3.5 h-3.5 text-orange-600  dark:text-orange-300' />
                    <span className='absolute -bottom-5 w-24 text-center text-xs font-semibold '>
                      Preparing
                    </span>
                  </p>
                </li>
                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                  <p className="flex items-center relative justify-center w-10 h-10 bg-gray-100 rounded-full  dark:bg-gray-700 shrink-0">
                    <Icons iconName='vehicle' classname='w-5 h-5 text-gray-600  dark:text-orange-300' />
                    <span className='absolute -bottom-5 w-24 text-center text-xs font-semibold '>
                      In-transit
                    </span>
                  </p>
                </li>
                <li className="flex items-center w-full">
                  <p className="flex items-center relative justify-center w-10 h-10 bg-gray-100 rounded-full  dark:bg-gray-700 shrink-0">
                    <Icons iconName='delivered' classname='w-5 h-5 text-gray-600  dark:text-orange-300' />
                    <span className='absolute -bottom-5 w-24 text-center text-xs font-semibold '>
                      Delivered
                    </span>
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="order_list mt-5">
            <div className="grid grid-cols-3 gap-4">
              {
                OrderedList && OrderedList.map((item, index) => {
                  return (
                    <div onClick={() => handleShowOrderDetail(item)}
                      className={'baseBox p-3 text-gray-600 hover:scale-105 transition duration-200 ease-in-out cursor-pointer hover:shadow-orange-200 ' + `${!isEmpty(selectedOrder) && selectedOrder["id"] === item.id ? 'border border-orange-300 scale-105' : ' '}`} key={index}>
                      <div className='flex justify-between items-center'>
                        <p className=''>Order <span className='text-orange-400 font-semibold'>{item.orderID}</span></p>
                        <p className={(item.order_status == 'In-progress' ? 'bg-yellow-500' : item.order_status == 'Delivered' ? 'bg-green-600' : 'bg-red-500') + ` text-[10px] rounded-full w-16 shadow-md shadow-gray-300 text-center text-white `}>{item.order_status}</p>
                      </div>
                      <p className='text-[10px] font-semibold flex justify-between w-full'><span>{item.ordered_date}</span><span> {item.ordered_time}</span></p>
                      <div className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
                      <p className='text-[10px] line-clamp-1'>
                        {item.ordered_products.map((val, index) => {
                          return <span key={index}>{val.name} x {val.quantity} ,</span>
                        })}
                      </p>
                      <p className="">Total:- <b className='text-orange-400'>&#8377; {item.total} /-</b></p>
                      <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
                      <div className=" flex justify-between">
                        <Button text={"Reorder"} className='w-16' />
                        <Button text={"Rate"} className='w-16' />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className=' baseBox p-3'>
          {
            !isEmpty(selectedOrder) ?
              <div>
                <div>
                  <p className='flex justify-between items-center'>
                    <span >OrderID:- <b>{selectedOrder["orderID"]}</b></span>
                    <span className={(selectedOrder["order_status"] == 'In-progress' ? 'bg-yellow-500' : selectedOrder["order_status"] == 'Delivered' ? 'bg-green-600' : 'bg-red-500') + ` text-[8px] rounded-full w-16 shadow-md shadow-gray-300 text-center text-white `}>{selectedOrder["order_status"]}</span>
                  </p>
                  <p className='text-gray-500 text-xs'>Order {selectedOrder.order_status} on {selectedOrder["ordered_date"]} at {selectedOrder["ordered_time"]}</p>
                </div>
                <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
                <div className="map_box">
                  MAP will come here
                </div>
                <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
                <div>
                  <p className='text-gray-500 text-xs flex items-center'>
                    <Icons iconName='mapPin' classname='h-10 w-10 mr-2 text-orange-400' />
                    {selectedOrder["address"]}
                  </p>
                </div>
                <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
                <div className="bill_details text-gray-600">
                  <ul>
                    {
                      !isEmpty(selectedOrder) && selectedOrder["ordered_products"].map((val) => {
                        return (
                          <li className='w-full flex justify-between items-center text-xs' key={selectedOrder['id']}>
                            <span className='flex items-center'>
                              <strong className={(val.food_type === 'Non-veg' ? 'text-red-500' : 'text-green-500')}><Icons iconName='foodType' classname='h-4 w-4 mr-2' /></strong>
                              {val.name}
                            </span>
                            <span>&#8377; {val.price} /-</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className='mt-4 border-t-2 pt-4 border-dashed table-auto'>
                    <table className="text-gray-500 w-full">
                      <tbody>
                        <tr className="text-xs font-semibold">
                          <td className="">Item total</td>
                          <td className="text-right">&#8377; {sumBy(selectedOrder["ordered_products"], function (val) { return val.price; })} /-</td>
                        </tr>
                        <tr className="text-xs font-semibold">
                          <td className="">GST and Restaurant charge</td>
                          <td className="text-right">&#8377; 15/-</td>
                        </tr>
                        <tr className="text-xs font-semibold">
                          <td className="">Delivery charge</td>
                          <td className="text-right">&#8377; 30/-</td>
                        </tr>
                        <tr className="bg-orange-200 font-semibold rounded-lg">
                          <td className="">Total</td>
                          <td className="text-lg text-right font-bold">&#8377;  {sumBy(selectedOrder["ordered_products"], function (val) { return val.price; }) + 15 + 30} /-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              :
              <p className='showAtCenter'>
                Please select the order form more details...
              </p>
          }
        </div>
      </div>

    </Section>
  )
}

export default OrderPage
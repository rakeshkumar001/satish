import React, { LegacyRef, ReactHTMLElement, useRef, useState } from 'react'
import Section from '../components/Section'
import Icons from '../components/Icons'
import OrderedList from "../assets/Json/Orderlist.json"
import Button from '../components/Button'
import { isEmpty, sumBy } from "lodash"
import Map from "../assets/images/map.png"
import { motion } from "framer-motion"
import { SA_childItems, SA_mainContainer } from '../Utlity/SwaggerAnimation';

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

const History = () => {
  const [selectedOrder, setSelectedOrder] = useState<ProductCardProps | null>()

  const handleShowOrderDetail = (item: any) => {
    setSelectedOrder(item)
  }

  return (
    <div className="grid grid-cols-3 gap-4 ">
      <div className="col-span-2">
        <Section title="Your Orders" classname="mt-4 text-gray-700 dark:text-gray-400 text-sm ">
          <div className="order_status baseBox p-3 max-h-28 glassEffect overflow-hidden">
            <p className='font-semibold bg-orange-50 rounded-md mb-2 py-1'>Order status</p>
            <div className="showAtCenter flex justify-center relative  ">
              <ul className='flex w-full items-center justify-between text-xs z-10'>
                <li className='w-24'>
                  <div className='h-10 w-10 bg-green-500 text-white rounded-full showAtCenter mx-auto shadow-md'>
                    <Icons iconName='check' />
                  </div>
                  <p>Order in progress</p>
                </li>
                <li className='w-52'>
                  <p className='h-1 bg-green-500 rounded-md'></p>
                </li>
                <li className='w-24'>
                  <div className='h-10 w-10 bg-yellow-400 animate-pulse rounded-full showAtCenter mx-auto shadow-lg drop-shadow-md'>
                    <Icons iconName='vehicle' />
                  </div>
                  <p>Order in transit</p>
                </li>
                <li className='w-52'>
                  <p className='h-1 bg-gray-300  rounded-md'></p>
                </li>
                <li className='w-24'>
                  <div className='h-10 w-10 bg-orange-50 rounded-full showAtCenter mx-auto shadow-md'>
                    <Icons iconName='delivered' />
                  </div>
                  <p>Order delivered</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="order_list mt-5 mx-5">
            <motion.div variants={SA_mainContainer(2)} initial="hidden" animate="show" className="grid grid-cols-3 gap-4">
              {
                OrderedList && OrderedList.map((item, index) => {
                  return (
                    <motion.div variants={SA_childItems} onClick={() => handleShowOrderDetail(item)}>
                      <div className={'p-3 text-gray-600 hover:scale-110 transition duration-200 ease-in-out cursor-pointer hover:shadow-orange-200 hover:bg-white glassEffect ' + `${!isEmpty(selectedOrder) && selectedOrder["id"] === item.id ? 'border bg-white border-orange-300 scale-105' : ' '}`} key={index}>
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
                          <Button text={"Reorder"} className='w-16 border border-orange-300' />
                          <Button text={"Rate"} className='w-16 border border-orange-300' />
                        </div>
                      </div>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          </div>
        </Section>
      </div>
      <div className=' glassEffect bg-white h-full p-3'>
        {
          !isEmpty(selectedOrder) ?
            <>
              <div className=''>
                <p className='text-gray-400 text-sm mb-2' >OrderID:- <b>{selectedOrder["orderID"]}</b></p>
                <div className="flex justify-between items-center">
                  <p className='text-gray-400 text-xs flex justify-between'>
                    <span className={(selectedOrder["order_status"] == 'In-progress' ? 'bg-yellow-500' : selectedOrder["order_status"] == 'Delivered' ? 'bg-green-600' : 'bg-red-500') + `  px-2 text-[8px] rounded-full w-16 shadow-md shadow-gray-300 text-center text-white `}>{selectedOrder["order_status"]}</span>
                  </p>
                  <p className='text-gray-500 text-xs text-left'>Order {selectedOrder.order_status} on {selectedOrder["ordered_date"]} at {selectedOrder["ordered_time"]}</p>
                </div>
              </div>
              <div className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
              <div className="map_box w-2/3 mx-auto rounded-lg overflow-hidden shadow-md">
                <img className='w-full' src={Map} alt="map" />
              </div>
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
                      <tr className="text-xs font-semibold text-left">
                        <td className="">Item total</td>
                        <td className="text-right">&#8377; {sumBy(selectedOrder["ordered_products"], function (val) { return val.price; })} /-</td>
                      </tr>
                      <tr className="text-xs font-semibold text-left">
                        <td className="">GST and Restaurant charge</td>
                        <td className="text-right">&#8377; 15/-</td>
                      </tr>
                      <tr className="text-xs font-semibold text-left">
                        <td className="">Delivery charge</td>
                        <td className="text-right">&#8377; 30/-</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-orange-50 font-semibold rounded-lg justify-between flex items-center my-2 p-2">
                    <p className="">Total</p>
                    <p className="text-lg text-right font-bold">&#8377;  {sumBy(selectedOrder["ordered_products"], function (val) { return val.price; }) + 15 + 30} /-</p>
                  </div>
                </div>
              </div>
            </>
            :
            <div className='showAtCenter h-full w-full text-gray-400 animate-pulse'>
              <p>
                <Icons iconName='note' classname='scale-110 h-5 w-5 ' />
              </p>
              <p>
                Please select the order form more details...
              </p>
            </div>
        }
      </div>
    </div>

  )
}

export default History
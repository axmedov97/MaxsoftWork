import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleList from '../peopleList.json';
import Product from '../product.json';
import Payment from '../payment.json';


export default function Page2() {
  return (
    <div className='row'>
      <div className='col-2'>
          <ul>
            <li><img src='chart-pie.svg' />Overview</li>
            <li><img src='document-report.svg' />Pages <KeyboardArrowDownIcon /></li>
            <li><img src='shopping-bag.svg' />Sales <KeyboardArrowUpIcon /></li>
            <li>Product List</li>
            <li>Billing</li>
            <li>Invoice</li>
            <li><img src='inbox-in.svg' />Messages <img src='Badge.svg' /></li>
            <li><img src='lock-closed.svg' />Authentication <KeyboardArrowDownIcon /></li>
            <li><img src='clipboard-list.svg' />Docs</li>
            <li><img src='collection.svg' />Components</li>
            <li><img src='support.svg' />Help</li>
          </ul>
        
      </div>
      <div className='col-10'>
        
          <img src='Earnings Chart.svg' />
        
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
            <h3>Latest Customers</h3>
            {
              PeopleList.map(peopleLis => {
                return (
                  <>
                    <div >
                      <div className='lists'> <div className='pp'> <img src={`${peopleLis.img_src}`} />  <strong>{peopleLis.people}</strong><br />{peopleLis.email}</div> <div className='pr'> <strong>{peopleLis.price}</strong></div></div>
                    </div>
                  </>
                )
              })
            }
            </div>   
          </div>
          <div className='col-8'>
            <div className='card'>
            <h3>Top Products</h3>
            {
              Product.map(produc => {
                return (
                  <>
                    <ul >
                      <div className='products'>
                         <div className='prp'>  
                            <strong>{produc.name}</strong>
                            <br />
                            {produc.technology}
                         </div> 
                         <div className='pcr'> 
                            <strong>{produc.count}
                            </strong> sales
                         </div>
                      </div>
                    </ul>
                  </>
                )
              })
            }
            </div>
          </div>
        </div>
        <div className='Payment_card'>
          <div className='card'>
          <h3>Transactions</h3>
          <p>This is a list of latest transactions.</p>
          <table>
            <tr>
              <th>TRANSACTION</th>
              <th>DATE & TIME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
            
            {
            Payment.map(paymen=>{
              return(
                <tr>
                  <td><strong>{paymen.name}</strong></td>
                  <td>{paymen.time}</td>
                  <td><strong>{paymen.amount}</strong></td>
                  <td><button className='btn btn-success'>{paymen.status}</button></td>
                </tr>
              )
            })
          }
            
          </table>
          
          </div>
        </div>
      </div>
    </div>
  )
}


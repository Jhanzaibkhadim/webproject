import React, { Component } from 'react'
import './buyerform.css'
import swal from 'sweetalert2'
export default class Buyerform extends Component {



    constructor() {
        super()
        // this.demo();
        this.state = {

            shouldHide:true,
            value:''
        }
    }

    // demo(){
    //     console.log(this.state.value)
        
    //     if(this.state.value !== ''){
    //         this.state.shouldHide = false;
    //     }else{
    //         this.state.shouldHide = true;
    //     }
    // }
    demo = (event) => {

        this.setState({
            value: event.target.value
        });
        console.log(this.state.value)

        if(this.state.value !== 'select'){
            this.state.shouldHide = false;
        }else{
            this.state.shouldHide = true;
        }
    }

    // demo() {
    //     const {value: fruit} =  swal({
    //         title: 'Are you the Buyer or Seller?',
    //         input: 'select',
    //         inputOptions: {
    //           'buyer': 'Buyer',
    //           'seller': 'Seller'
    //         },
    //         inputPlaceholder: 'Please Select Here',
    //         showCancelButton: true,
    //         backdrop:false,
    //         // onClose(){
    //         //     this.state.shouldHide = false;
    //         //     alert(this.state.shouldHide);

    //         // },
    //         inputValidator: (value) => {
    //           return new Promise((resolve) => {
    //             if (value !== '') {
    //                 this.state.shouldHide = false
    //                 // alert(this.state.shouldHide)
    //               resolve()
                   
    //             } else {
    //               resolve('You need to select')
    //             }
    //           })
    //         }
    //       })
    // }


    render() {
        return (
            <div>
                <div>
                    <div  className={this.state.shouldHide?'maindiv':'hidden'}>
                    <div className="mainheading">
                    Are you the Buyer or Seller?
                    </div>
                    <select className="selectclass" value={this.state.value} name="coins" onChange={this.demo}>
                        <option   value="select">Select</option>
                        <option   value="bitcoin">Buyer</option>
                        <option  value="seller">Seller</option>
                    </select>
                    </div>
                </div>
                <div className={this.state.shouldHide?'hidden':'container'} >
                    <div className="brand"><span>Coin</span> Grace</div>
                    <div className="wrapper animated bounceInLeft">
                        <div className="company-info">
                            <h3 >How it works ?</h3>
                            <ul>
                                <li><i ></i> </li>
                                <li><i ></i> </li>
                                <li><i ></i> </li>
                            </ul>
                        </div>
                        <div className="contact">
                            <div className="welcom">Welcome to Escrow</div>

                            <form action="send">
                                <p>
                                    <label>Buyer's Email</label>
                                    <input placeholder="Enter buyer email" type="email" name="buyermail" />
                                </p>
                                <p>
                                    <label>Seller's Email</label>
                                    <input type="email" placeholder="Enter seller email" name="sellermail" />
                                </p>
                                
                                <p>
                                    <label>Amount</label>
                                    <input type="number"  placeholder="Enter amount" name="amount" />
                                </p>

                                <p>
                                    <label>Amount type</label>
                                    <select className="selectclass" name="coins">
                                        <option value="bitcoin">BTC</option>
                                        {/* <option value="saab">Saab</option> */}
                                       
                                    </select>
                                </p>
                                <p>
                                    <label>The fee will be paid by ?</label>
                                    <select className="selectclass" name="coins">
                                        <option value="bitcoin">Buyer</option>
                                        <option value="saab">Seller</option>
                                        <option value="saab">50/50 Split</option>
                                        <option value="saab">Custom Split</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Goods or Service?</label>
                                    <select className="selectclass" name="coins">
                                        <option value="bitcoin">Goods</option>
                                       
                                    </select>
                                </p>
                                <p className="full">
                                    <label>Seller's BTC Address</label>
                                    <textarea name="address" placeholder="Enter address" rows="2"></textarea>
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" placeholder="Enter message" rows="4"></textarea>
                                </p>
                                <p className="full">
                                    <button type="submit">Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// var Results = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 {/* <div>
//                     <select>
//                         <option >Buyer</option>
//                         <option >seller</option>

//                     </select>
//                 </div> */}
//                 <div className="container" >
//                     <h1 className="brand"><span>Coin</span> Grace</h1>
//                     <div className="wrapper animated bounceInLeft">
//                         <div className="company-info">
//                             <h3 onC>How it works ?</h3>
//                             <ul>
//                                 <li><i ></i> </li>
//                                 <li><i ></i> </li>
//                                 <li><i ></i> </li>
//                             </ul>
//                         </div>
//                         <div className="contact">
//                             <h3>Welcome to Escrow</h3>

//                             <form action="send">
//                                 <p>
//                                     <label>Name</label>
//                                     <input type="text" name="name" />
//                                 </p>
//                                 <p>
//                                     <label>Company</label>
//                                     <input type="text" name="company" />
//                                 </p>
//                                 <p>
//                                     <label>Email Address</label>
//                                     <input type="email" name="email" />
//                                 </p>
//                                 <p>
//                                     <label>Phone Number</label>
//                                     <input type="text" name="phone" />
//                                 </p>
//                                 <p className="full">
//                                     <label>Message</label>
//                                     <textarea name="message" rows="5"></textarea>
//                                 </p>
//                                 <p className="full">
//                                     <button type="submit">Submit</button>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// });

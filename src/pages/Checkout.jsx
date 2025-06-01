import React from 'react';

const Checkout = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold text-[#111111] mb-2">Check Out</h4>
          <div className="text-sm text-[#b7b7b7] space-x-2">
            <a href="./index.html" className="hover:text-black">Home</a>
            <span>/</span>
            <a href="./shop.html" className="hover:text-black">Shop</a>
            <span>/</span>
            <span>Check Out</span>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <form>
            <div className="flex flex-wrap -mx-4">
              {/* Billing Details */}
              <div className="w-full lg:w-2/3 px-4">
                <div className="mb-6 text-[#111111]">
                  <p className="text-sm mb-4 bg-[#f3f2ee] p-4 rounded">
                    <span className="mr-2"><i className="fa fa-tag"></i></span>
                    Have a coupon? <a href="#" className="text-[#e53637] font-semibold underline">Click here</a> to enter your code
                  </p>
                  <h6 className="text-xl font-bold mb-6">Billing Details</h6>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold mb-2">First Name <span className="text-red-500">*</span></p>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Last Name <span className="text-red-500">*</span></p>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Country <span className="text-red-500">*</span></p>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Address <span className="text-red-500">*</span></p>
                    <input type="text" placeholder="Street Address" className="w-full border border-gray-300 px-4 py-2 rounded mb-4" />
                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Town/City <span className="text-red-500">*</span></p>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Country/State <span className="text-red-500">*</span></p>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Postcode / ZIP <span className="text-red-500">*</span></p>
                    <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <p className="text-sm font-semibold mb-2">Phone <span className="text-red-500">*</span></p>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Email <span className="text-red-500">*</span></p>
                      <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Create an account?</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Create an account by entering the information below. If you are a returning customer please login at the top of the page.
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Account Password <span className="text-red-500">*</span></p>
                    <input type="password" className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>

                  <div className="mt-6">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Note about your order, e.g, special note for delivery</span>
                    </label>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">Order Notes</p>
                    <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." className="w-full border border-gray-300 px-4 py-2 rounded" />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-1/3 px-4">
                <div className="bg-[#f3f2ee] p-6 rounded">
                  <h4 className="text-xl font-bold mb-6 text-[#111111]">Your Order</h4>
                  <div className="flex justify-between font-semibold mb-4 text-[#111111]">
                    <span>Product</span>
                    <span>Total</span>
                  </div>
                  <ul className="mb-4 text-sm text-[#111111] space-y-2">
                    <li className="flex justify-between">01. Vanilla salted caramel <span>$300.00</span></li>
                    <li className="flex justify-between">02. German chocolate <span>$170.00</span></li>
                    <li className="flex justify-between">03. Sweet autumn <span>$170.00</span></li>
                    <li className="flex justify-between">04. Gluten free mini dozen <span>$110.00</span></li>
                  </ul>
                  <ul className="mb-6 text-[#111111] text-sm font-semibold">
                    <li className="flex justify-between">Subtotal <span>$750.99</span></li>
                    <li className="flex justify-between">Total <span>$750.99</span></li>
                  </ul>

                  <label className="flex items-start gap-2 mb-4">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm">Create an account?</span>
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <label className="flex items-start gap-2 mb-4">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm">Check Payment</span>
                  </label>
                  <label className="flex items-start gap-2 mb-6">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm">Paypal</span>
                  </label>
                  <button type="submit" className="w-full bg-[#111111] text-white py-3 font-semibold uppercase rounded hover:bg-[#e53637] transition">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
